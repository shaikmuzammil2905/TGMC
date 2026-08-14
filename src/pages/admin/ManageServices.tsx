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
  PlusCircle,
  MinusCircle,
  HelpCircle
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBService {
  id: string;
  slug: string;
  name: string;
  description: string;
  full_desc?: string;
  image_url?: string;
  category?: string;
  features?: string[];
  display_order?: number;
  is_active?: boolean;
}

export const ManageServices: React.FC = () => {
  const [services, setServices] = useState<DBService[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form States
  const [editService, setEditService] = useState<DBService | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    full_desc: '',
    image_url: 'Wrench', // Default icon name
    category: 'General',
    display_order: 1,
    is_active: true,
  });
  const [formFeatures, setFormFeatures] = useState<string[]>([]);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Pre-approved list of available Lucide Icons for selection
  const iconOptions = ['ShoppingBag', 'Wrench', 'Droplet', 'Flame', 'Gauge', 'Factory', 'Headphones', 'Cog', 'HelpCircle'];

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true });
      if (data) setServices(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleOpenAdd = () => {
    setEditService(null);
    setFormData({
      id: '',
      name: '',
      description: '',
      full_desc: '',
      image_url: 'Wrench',
      category: 'General',
      display_order: services.length + 1,
      is_active: true,
    });
    setFormFeatures([]);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (s: DBService) => {
    setEditService(s);
    setFormData({
      id: s.id,
      name: s.name,
      description: s.description || '',
      full_desc: s.full_desc || '',
      image_url: s.image_url || 'Wrench',
      category: s.category || 'General',
      display_order: s.display_order || 1,
      is_active: s.is_active !== false,
    });
    setFormFeatures(s.features || []);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this service?")) return;
    
    try {
      const { error } = await supabase.from('services').delete().eq('id', id);
      if (error) throw error;
      setServices(prev => prev.filter(s => s.id !== id));
    } catch (err: any) {
      alert("Error deleting service: " + err.message);
    }
  };

  const handleToggleActive = async (s: DBService) => {
    const nextStatus = !s.is_active;
    try {
      const { error } = await supabase.from('services').update({ is_active: nextStatus }).eq('id', s.id);
      if (error) throw error;
      setServices(prev => prev.map(item => item.id === s.id ? { ...item, is_active: nextStatus } : item));
    } catch (err: any) {
      alert("Error updating service status: " + err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) {
      alert("Service Name and Description are required.");
      return;
    }

    const finalId = editService?.id || crypto.randomUUID();
    const finalSlug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const finalService: DBService = {
      id: finalId,
      slug: finalSlug,
      name: formData.name.trim(),
      description: formData.description.trim(),
      full_desc: formData.full_desc.trim(),
      image_url: formData.image_url, // Serves as the Icon component name
      category: formData.category.trim(),
      features: formFeatures.filter(f => f.trim().length > 0),
      display_order: Number(formData.display_order),
      is_active: formData.is_active,
    };

    try {
      setSubmitLoading(true);
      const { error } = await supabase.from('services').upsert(finalService);
      if (error) throw error;

      await fetchServices();
      setIsModalOpen(false);
    } catch (err: any) {
      alert("Error saving service: " + err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic Lucide Icon mapping helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />;
  };

  return (
    <div className="space-y-6">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            Manage Services
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure TGMC sales guidance, installation support, and RO services
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow-lg shadow-tgmc-blue/15 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
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
            placeholder="Search services by name..."
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
      ) : filteredServices.length === 0 ? (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 text-center text-slate-500">
          <p className="text-sm">No services found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s) => (
            <div
              key={s.id}
              className={`bg-slate-950 border rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all ${
                s.is_active === false ? 'opacity-65 border-slate-900' : 'border-slate-800/80'
              }`}
            >
              <div className="space-y-3">
                {/* Icon header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tgmc-navy border border-slate-800 flex items-center justify-center text-tgmc-cyan shrink-0">
                    {renderIcon(s.image_url || 'Wrench')}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base font-heading leading-tight">
                      {s.name}
                    </h4>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{s.category || 'General'}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.description}
                </p>

                {/* Features points preview */}
                {s.features && s.features.length > 0 && (
                  <ul className="space-y-1 pt-2 border-t border-slate-900">
                    {s.features.map((feat, idx) => (
                      <li key={idx} className="text-[10px] text-slate-500 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">Order: <strong>{s.display_order}</strong></span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(s)}
                    className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleToggleActive(s)}
                    className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                    title={s.is_active === false ? "Show" : "Hide"}
                  >
                    {s.is_active === false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
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
                {editService ? 'Edit Service' : 'Add New Service'}
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
              
              {/* Service Name */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Service Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Installation Support"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                />
              </div>

              {/* Service Category & Icon Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sales, Service, Water Treatment"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Display Icon
                  </label>
                  <select
                    value={formData.image_url} // Maps to icon name
                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Short Description <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Professional installation assistance and plumbing setup..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Detailed Service Explanation
                </label>
                <textarea
                  rows={2}
                  placeholder="Optional detail text..."
                  value={formData.full_desc}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_desc: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none resize-none"
                />
              </div>

              {/* Service features bullet list */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Service Highlight Bullet Points
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormFeatures(prev => [...prev, ''])}
                    className="text-tgmc-blue hover:text-tgmc-blue/80 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Bullet
                  </button>
                </div>
                {formFeatures.map((feat, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder={`Highlight #${index + 1}`}
                      value={feat}
                      onChange={(e) => {
                        const nextFeats = [...formFeatures];
                        nextFeats[index] = e.target.value;
                        setFormFeatures(nextFeats);
                      }}
                      className="flex-grow px-4 py-1.5 text-xs bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setFormFeatures(prev => prev.filter((_, idx) => idx !== index))}
                      className="text-rose-400 hover:text-rose-300"
                    >
                      <MinusCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Display settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
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
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 focus:ring-0 focus:outline-none"
                  />
                  <label htmlFor="is_active" className="text-xs font-semibold text-slate-300 cursor-pointer">
                    Active Service Offering
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
                <span>{submitLoading ? 'Saving...' : 'Save Service'}</span>
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
};

export default ManageServices;
