import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Copy, 
  Eye, 
  EyeOff, 
  Upload, 
  X, 
  Save, 
  Loader2, 
  PlusCircle, 
  MinusCircle 
} from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBProduct {
  id: string;
  slug: string;
  name: string;
  brand_id: string;
  category: string;
  image_url: string;
  number_tag?: number;
  is_hero_featured?: boolean;
  short_desc?: string;
  full_desc?: string;
  features?: string[];
  applications?: string[];
  display_order?: number;
  is_active?: boolean;
}

interface DBBrand {
  id: string;
  name: string;
}

export const ManageProducts: React.FC = () => {
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [brands, setBrands] = useState<DBBrand[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBrand, setFilterBrand] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  
  // UI states
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [editProduct, setEditProduct] = useState<DBProduct | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    brand_id: '',
    image_url: '',
    is_hero_featured: false,
    short_desc: '',
    full_desc: '',
    display_order: 1,
    is_active: true,
  });
  const [formFeatures, setFormFeatures] = useState<string[]>([]);
  const [formApplications, setFormApplications] = useState<string[]>([]);
  const [uploadingImage, setUploadingImage] = useState(false);

  const fetchCatalogData = async () => {
    try {
      setLoading(true);
      
      // Fetch Brands for select dropdown
      const { data: brandsData } = await supabase.from('brands').select('id, name');
      if (brandsData) setBrands(brandsData);

      // Fetch Products
      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .order('display_order', { ascending: true });
        
      if (productsData) {
        setProducts(productsData);
        
        // Extract unique categories
        const uniqCats = Array.from(new Set(productsData.map(p => p.category)));
        setCategories(uniqCats);
      }
    } catch (e) {
      console.error("Error loading products:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalogData();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    try {
      setUploadingImage(true);
      const cldData = new FormData();
      cldData.append('file', file);
      cldData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ml_default');

      const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: cldData
      });

      if (!res.ok) throw new Error("Cloudinary upload failed");
      const resJson = await res.json();
      setFormData(prev => ({ ...prev, image_url: resJson.secure_url }));
    } catch (err: any) {
      alert("Image upload failed: " + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleOpenAdd = () => {
    setEditProduct(null);
    setFormData({
      id: '',
      name: '',
      category: categories[0] || 'Water Softener',
      brand_id: brands[0]?.id || 'zero-b',
      image_url: '',
      is_hero_featured: false,
      short_desc: '',
      full_desc: '',
      display_order: products.length + 1,
      is_active: true,
    });
    setFormFeatures([]);
    setFormApplications([]);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (p: DBProduct) => {
    setEditProduct(p);
    setFormData({
      id: p.id,
      name: p.name,
      category: p.category,
      brand_id: p.brand_id,
      image_url: p.image_url,
      is_hero_featured: p.is_hero_featured || false,
      short_desc: p.short_desc || '',
      full_desc: p.full_desc || '',
      display_order: p.display_order || 1,
      is_active: p.is_active !== false,
    });
    setFormFeatures(p.features || []);
    setFormApplications(p.applications || []);
    setIsModalOpen(true);
  };

  const handleDuplicate = (p: DBProduct) => {
    setEditProduct(null); // It is a new product
    setFormData({
      id: `${p.id}-copy`,
      name: `${p.name} (Copy)`,
      category: p.category,
      brand_id: p.brand_id,
      image_url: p.image_url,
      is_hero_featured: false,
      short_desc: p.short_desc || '',
      full_desc: p.full_desc || '',
      display_order: products.length + 1,
      is_active: p.is_active !== false,
    });
    setFormFeatures(p.features || []);
    setFormApplications(p.applications || []);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this product?")) return;
    
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err: any) {
      alert("Error deleting product: " + err.message);
    }
  };

  const handleToggleActive = async (p: DBProduct) => {
    const nextStatus = !p.is_active;
    try {
      const { error } = await supabase.from('products').update({ is_active: nextStatus }).eq('id', p.id);
      if (error) throw error;
      setProducts(prev => prev.map(item => item.id === p.id ? { ...item, is_active: nextStatus } : item));
    } catch (err: any) {
      alert("Error updating product status: " + err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.image_url.trim()) {
      alert("Name and Image URL are required.");
      return;
    }

    const finalId = formData.id.trim() || formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const finalSlug = finalId;

    const finalProduct: DBProduct = {
      id: finalId,
      slug: finalSlug,
      name: formData.name.trim(),
      category: formData.category.trim(),
      brand_id: formData.brand_id,
      image_url: formData.image_url.trim(),
      is_hero_featured: formData.is_hero_featured,
      short_desc: formData.short_desc.trim(),
      full_desc: formData.full_desc.trim(),
      features: formFeatures,
      applications: formApplications,
      display_order: Number(formData.display_order),
      is_active: formData.is_active,
    };

    try {
      setSubmitLoading(true);
      const { error } = await supabase.from('products').upsert(finalProduct);
      if (error) throw error;

      await fetchCatalogData();
      setIsModalOpen(false);
    } catch (err: any) {
      alert("Error saving product: " + err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  // List search & filters
  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchBrand = filterBrand === 'All' || p.brand_id === filterBrand;
    const matchCategory = filterCategory === 'All' || p.category === filterCategory;
    return matchSearch && matchBrand && matchCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            Manage Products
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure TGMC catalog water softeners, RO systems, heat pumps, and solar heaters
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow-lg shadow-tgmc-blue/15 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4">
        
        {/* Search */}
        <div className="relative w-full md:flex-grow">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
          />
        </div>

        {/* Brand Filter */}
        <div className="w-full md:w-48 shrink-0 flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
          <select
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
            className="w-full px-3 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-200 focus:outline-none"
          >
            <option value="All">All Brands</option>
            {brands.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="w-full md:w-52 shrink-0">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full px-3 py-2.5 text-sm bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-200 focus:outline-none"
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Products Grid / Table */}
      {loading ? (
        <div className="min-h-[30vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 text-center text-slate-500">
          <p className="text-sm">No products found matching your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div 
              key={p.id}
              className={`bg-slate-950 border rounded-3xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:border-slate-700 ${
                p.is_active === false ? 'opacity-60 border-slate-900' : 'border-slate-800/80'
              }`}
            >
              {/* Product Visual */}
              <div className="relative aspect-video w-full bg-slate-900 p-4 border-b border-slate-800/80 flex items-center justify-center">
                <img 
                  src={p.image_url} 
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
                
                {/* Hero Badge */}
                {p.is_hero_featured && (
                  <span className="absolute top-2.5 left-2.5 text-[9px] uppercase font-extrabold text-white bg-amber-500 px-2 py-0.5 rounded-full border border-amber-400/20 shadow">
                    Hero Featured
                  </span>
                )}
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-grow space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-tgmc-blue">
                    <span>{brands.find(b => b.id === p.brand_id)?.name || p.brand_id}</span>
                    <span>•</span>
                    <span className="text-slate-400">{p.category}</span>
                  </div>
                  <h4 className="font-extrabold text-white font-heading text-base leading-tight mt-1">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                    {p.short_desc || 'No description provided.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Order: <strong>{p.display_order}</strong></span>
                  <div className="flex items-center gap-1">
                    {p.is_active === false ? (
                      <span className="inline-flex items-center gap-1 text-slate-500 font-bold">
                        <EyeOff className="w-3.5 h-3.5" />
                        Hidden
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Eye className="w-3.5 h-3.5" />
                        Visible
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="bg-slate-900 border-t border-slate-800 p-3 grid grid-cols-4 gap-1.5 shrink-0">
                <button
                  onClick={() => handleOpenEdit(p)}
                  className="py-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Edit"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDuplicate(p)}
                  className="py-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Duplicate"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleToggleActive(p)}
                  className="py-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={p.is_active === false ? "Show" : "Hide"}
                >
                  {p.is_active === false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="py-2 bg-rose-950/20 hover:bg-rose-900/20 border border-rose-900/30 rounded-lg flex items-center justify-center text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
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
            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-heading">
                {editProduct ? 'Edit Product' : 'Add New Product'}
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
              
              {/* Product ID & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Product ID (Slug) <span className="text-slate-500 font-normal">(Leave blank to auto-generate)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. automatic-softener-as3"
                    value={formData.id}
                    onChange={(e) => setFormData(prev => ({ ...prev, id: e.target.value }))}
                    disabled={!!editProduct}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Product Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ZERO B AUTOMATIC WATER SOFTENER - AS3"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>
              </div>

              {/* Brand and Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Brand <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.brand_id}
                    onChange={(e) => setFormData(prev => ({ ...prev, brand_id: e.target.value }))}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  >
                    {brands.map(b => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Water Softener"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    required
                    list="category-defaults"
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                  <datalist id="category-defaults">
                    {categories.map(c => <option key={c} value={c} />)}
                  </datalist>
                </div>
              </div>

              {/* Short & Full Descriptions */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Summarize product features in one sentence..."
                  value={formData.short_desc}
                  onChange={(e) => setFormData(prev => ({ ...prev, short_desc: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Full Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Detailed product descriptions..."
                  value={formData.full_desc}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_desc: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none resize-none"
                />
              </div>

              {/* Image Upload and URL */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                <div className="sm:col-span-8">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Product Image URL / Cloudinary Upload <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://cloudinary.com/... or upload below"
                    value={formData.image_url}
                    onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    required
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-4">
                  <label className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors text-xs font-bold h-[38px] text-slate-300 hover:text-white">
                    {uploadingImage ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    <span>{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                      disabled={uploadingImage}
                    />
                  </label>
                </div>
              </div>

              {/* Features Lists */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Product Features
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormFeatures(prev => [...prev, ''])}
                    className="text-tgmc-blue hover:text-tgmc-blue/80 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Feature
                  </button>
                </div>
                {formFeatures.map((feat, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder={`Feature #${index + 1}`}
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

              {/* Applications Lists */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Product Applications
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormApplications(prev => [...prev, ''])}
                    className="text-tgmc-blue hover:text-tgmc-blue/80 text-xs font-bold inline-flex items-center gap-1"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Application
                  </button>
                </div>
                {formApplications.map((app, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder={`Application #${index + 1}`}
                      value={app}
                      onChange={(e) => {
                        const nextApps = [...formApplications];
                        nextApps[index] = e.target.value;
                        setFormApplications(nextApps);
                      }}
                      className="flex-grow px-4 py-1.5 text-xs bg-slate-950 border border-slate-800 focus:border-tgmc-blue/50 rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setFormApplications(prev => prev.filter((_, idx) => idx !== index))}
                      className="text-rose-400 hover:text-rose-300"
                    >
                      <MinusCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Display Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-800/80">
                
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
                    id="is_hero_featured"
                    checked={formData.is_hero_featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_hero_featured: e.target.checked }))}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 focus:ring-0 focus:outline-none"
                  />
                  <label htmlFor="is_hero_featured" className="text-xs font-semibold text-slate-300 cursor-pointer">
                    Hero Featured Card
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
                    Active Catalog Listing
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
                <span>{submitLoading ? 'Saving...' : 'Save Product'}</span>
              </button>
            </div>

          </form>
        </div>
      )}

    </div>
  );
};

export default ManageProducts;
