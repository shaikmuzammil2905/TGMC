import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Upload, 
  X, 
  Save, 
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBBrand {
  id: string;
  name: string;
  tagline: string;
  is_authorised: boolean;
  description: string;
  categories: string[];
  logo_text: string;
  logo_url?: string;
  display_order?: number;
  is_active?: boolean;
}

export const ManageBrands: React.FC = () => {
  const [brands, setBrands] = useState<DBBrand[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form States
  const [editBrand, setEditBrand] = useState<DBBrand | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    tagline: '',
    is_authorised: false,
    description: '',
    logo_text: '',
    logo_url: '',
    display_order: 1,
    is_active: true,
  });
  const [categoriesInput, setCategoriesInput] = useState('');
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('brands')
        .select('*')
        .order('display_order', { ascending: true });
      if (data) setBrands(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    try {
      setUploadingLogo(true);
      const cldData = new FormData();
      cldData.append('file', file);
      cldData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ml_default');

      const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: cldData
      });

      if (!res.ok) throw new Error("Logo upload failed");
      const resJson = await res.json();
      setFormData(prev => ({ ...prev, logo_url: resJson.secure_url }));
    } catch (err: any) {
      alert("Logo upload failed: " + err.message);
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleOpenAdd = () => {
    setEditBrand(null);
    setFormData({
      id: '',
      name: '',
      tagline: '',
      is_authorised: false,
      description: '',
      logo_text: '',
      logo_url: '',
      display_order: brands.length + 1,
      is_active: true,
    });
    setCategoriesInput('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (b: DBBrand) => {
    setEditBrand(b);
    setFormData({
      id: b.id,
      name: b.name,
      tagline: b.tagline || '',
      is_authorised: b.is_authorised || false,
      description: b.description || '',
      logo_text: b.logo_text || '',
      logo_url: b.logo_url || '',
      display_order: b.display_order || 1,
      is_active: b.is_active !== false,
    });
    setCategoriesInput((b.categories || []).join(', '));
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this brand? This will orphan any products linked to it.")) return;
    
    try {
      const { error } = await supabase.from('brands').delete().eq('id', id);
      if (error) throw error;
      setBrands(prev => prev.filter(b => b.id !== id));
    } catch (err: any) {
      alert("Error deleting brand: " + err.message);
    }
  };

  const handleToggleActive = async (b: DBBrand) => {
    const nextStatus = !b.is_active;
    try {
      const { error } = await supabase.from('brands').update({ is_active: nextStatus }).eq('id', b.id);
      if (error) throw error;
      setBrands(prev => prev.map(item => item.id === b.id ? { ...item, is_active: nextStatus } : item));
    } catch (err: any) {
      alert("Error updating brand status: " + err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Brand Name is required.");
      return;
    }

    const finalId = formData.id.trim() || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const finalCategories = categoriesInput
      .split(',')
      .map(cat => cat.trim())
      .filter(cat => cat.length > 0);

    const finalBrand: DBBrand = {
      id: finalId,
      name: formData.name.trim(),
      tagline: formData.tagline.trim(),
      is_authorised: formData.is_authorised,
      description: formData.description.trim(),
      logo_text: formData.logo_text.trim() || formData.name.trim(),
      logo_url: formData.logo_url.trim(),
      categories: finalCategories,
      display_order: Number(formData.display_order),
      is_active: formData.is_active,
    };

    try {
      setSubmitLoading(true);
      const { error } = await supabase.from('brands').upsert(finalBrand);
      if (error) throw error;

      await fetchBrands();
      setIsModalOpen(false);
    } catch (err: any) {
      alert("Error saving brand: " + err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const filteredBrands = brands.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            Manage Brands
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure partner brands (Zero B, V-Guard, Racold, Grundfos, etc.)
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow-lg shadow-tgmc-blue/15 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Brand</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search brands by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid List */}
      {loading ? (
        <div className="min-h-[30vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
        </div>
      ) : filteredBrands.length === 0 ? (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 text-center text-slate-500">
          <p className="text-sm">No brands found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((b) => (
            <div
              key={b.id}
              className={`bg-slate-950 border rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all ${
                b.is_active === false ? 'opacity-65 border-slate-900' : 'border-slate-800/80'
              }`}
            >
              <div className="space-y-3">
                {/* Logo and Name header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-800 p-2 flex items-center justify-center text-slate-900 font-extrabold font-heading text-xs truncate">
                    {b.logo_url ? (
                      <img src={b.logo_url} alt={b.name} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <span>{b.logo_text || b.name}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base font-heading leading-tight flex items-center gap-1.5">
                      <span>{b.name}</span>
                      {b.is_authorised && (
                        <span title="Authorised Distributor">
                          <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/10 shrink-0" />
                        </span>
                      )}
                    </h4>
                    <span className="text-[10px] text-slate-500 truncate block max-w-[150px]">{b.tagline || 'No tagline'}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-normal line-clamp-3">
                  {b.description || 'No description provided.'}
                </p>

                {/* Categories badges */}
                <div className="flex flex-wrap gap-1 pt-1.5">
                  {b.categories.map(c => (
                    <span key={c} className="text-[9px] font-bold text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">Order: <strong>{b.display_order}</strong></span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(b)}
                    className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleToggleActive(b)}
                    className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                    title={b.is_active === false ? "Show" : "Hide"}
                  >
                    {b.is_active === false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="p-2 bg-rose-950/20 border border-rose-900/30 rounded-lg text-rose-400 hover:text-rose-300 transition-colors cursor-pointer text-xs"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-heading">
                {editBrand ? 'Edit Brand' : 'Add New Brand'}
              </h3>
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-850"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="p-6 space-y-4 overflow-y-auto flex-grow text-sm text-slate-300">
              
              {/* Brand ID & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Brand ID (Slug) <span className="text-slate-500 font-normal">(e.g. kent)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. zero-b"
                    value={formData.id}
                    onChange={(e) => setFormData(prev => ({ ...prev, id: e.target.value }))}
                    disabled={!!editBrand}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Brand Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ZERO B"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              {/* Tagline */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pure Water Solutions | Ion Exchange"
                  value={formData.tagline}
                  onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brand description details..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none resize-none"
                />
              </div>

              {/* Logo text & image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Fallback Logo Text
                  </label>
                  <input
                    type="text"
                    placeholder="Fallback logo acronym"
                    value={formData.logo_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, logo_text: e.target.value }))}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                  <div className="sm:col-span-8">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Logo Image URL
                    </label>
                    <input
                      type="text"
                      placeholder="Cloudinary Logo URL"
                      value={formData.logo_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, logo_url: e.target.value }))}
                      className="w-full px-4.5 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <label className="flex items-center justify-center gap-2 px-3 py-2 border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 rounded-xl cursor-pointer text-xs font-bold h-[38px] text-slate-300 hover:text-white">
                      {uploadingLogo ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                      <span>Upload</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogoUpload} 
                        className="hidden" 
                        disabled={uploadingLogo}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Product Categories <span className="text-slate-500 font-normal">(Comma-separated list, e.g. Water Softener, RO Purifier, Heat Pump)</span>
                </label>
                <input
                  type="text"
                  placeholder="Water Softener, Sand Filter, RO Purifier"
                  value={categoriesInput}
                  onChange={(e) => setCategoriesInput(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                />
              </div>

              {/* Display Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData(prev => ({ ...prev, display_order: Number(e.target.value) }))}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2.5 h-[38px] mt-4 select-none">
                  <input
                    type="checkbox"
                    id="is_authorised"
                    checked={formData.is_authorised}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_authorised: e.target.checked }))}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 focus:ring-0 focus:outline-none"
                  />
                  <label htmlFor="is_authorised" className="text-xs font-semibold text-slate-300 cursor-pointer">
                    Authorised Distributor
                  </label>
                </div>

                <div className="flex items-center gap-2.5 h-[38px] mt-4 select-none">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 focus:ring-0 focus:outline-none"
                  />
                  <label htmlFor="is_active" className="text-xs font-semibold text-slate-300 cursor-pointer">
                    Active Listing
                  </label>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-850 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow transition-all cursor-pointer disabled:opacity-50"
              >
                {submitLoading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Save className="w-3.5 h-3.5" />
                )}
                <span>{submitLoading ? 'Saving...' : 'Save Brand'}</span>
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
};

export default ManageBrands;
