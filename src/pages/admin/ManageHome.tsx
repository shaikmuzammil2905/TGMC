import React, { useState, useEffect } from 'react';
import { Save, Loader2, RefreshCw, CheckCircle, Home, Image, Upload } from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBHomeContent {
  id: string;
  section: string;
  title: string;
  subtitle?: string;
  description?: string;
  image_url?: string;
  button_text?: string;
  button_url?: string;
  whatsapp_number?: string;
  phone_number?: string;
}

export const ManageHome: React.FC = () => {
  const [heroData, setHeroData] = useState<DBHomeContent>({
    id: '',
    section: 'hero',
    title: 'Pure Water. Better Life.',
    subtitle: '',
    description: '',
    image_url: '',
    button_text: 'Get a Quote',
    button_url: '/contact',
    whatsapp_number: '',
    phone_number: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchHeroContent = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('home_content')
        .select('*')
        .eq('section', 'hero')
        .limit(1);

      if (data && data.length > 0) {
        setHeroData(data[0]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroContent();
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

      if (!res.ok) throw new Error("Image upload failed");
      const resJson = await res.json();
      setHeroData(prev => ({ ...prev, image_url: resJson.secure_url }));
    } catch (err: any) {
      alert("Image upload failed: " + err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setSuccessMsg('');

      const { id, section, ...updateFields } = heroData;
      
      let query;
      if (id) {
        query = supabase.from('home_content').update(updateFields).eq('id', id);
      } else {
        query = supabase.from('home_content').insert({ section: 'hero', ...updateFields });
      }

      const { error } = await query;
      if (error) throw error;

      setSuccessMsg("Hero Banner content successfully updated!");
      setTimeout(() => setSuccessMsg(''), 3000);
      await fetchHeroContent();
    } catch (err: any) {
      alert("Error saving home content: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
          Manage Home Content
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Edit the text, action buttons, and imagery displayed on the public landing screen
        </p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSave} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-sm text-slate-300">
        
        {/* Banner Section Info */}
        <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
          <Home className="w-5 h-5 text-tgmc-blue" />
          <h3 className="text-base font-bold text-white font-heading">Hero Section / Main Banner</h3>
        </div>

        {/* Heading & Subheading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Hero Main Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Pure Water. Better Life."
              value={heroData.title}
              onChange={(e) => setHeroData(prev => ({ ...prev, title: e.target.value }))}
              required
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Hero Tagline Subtitle
            </label>
            <input
              type="text"
              placeholder="e.g. Authorised sales & service solutions..."
              value={heroData.subtitle}
              onChange={(e) => setHeroData(prev => ({ ...prev, subtitle: e.target.value }))}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Hero Description */}
        <div className="space-y-1">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Banner Description Text
          </label>
          <textarea
            rows={3}
            placeholder="Detailed sub-text to highlight products..."
            value={heroData.description}
            onChange={(e) => setHeroData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none resize-none"
          />
        </div>

        {/* Buttons settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Primary CTA Button Text
            </label>
            <input
              type="text"
              placeholder="e.g. Get a Quote"
              value={heroData.button_text}
              onChange={(e) => setHeroData(prev => ({ ...prev, button_text: e.target.value }))}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Primary CTA Button URL
            </label>
            <input
              type="text"
              placeholder="e.g. /contact"
              value={heroData.button_url}
              onChange={(e) => setHeroData(prev => ({ ...prev, button_url: e.target.value }))}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>
        </div>

        {/* Background/Banner Image settings */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
          <div className="sm:col-span-8 space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Banner Image URL
            </label>
            <input
              type="text"
              placeholder="Leave empty to use the default clean animated banner background"
              value={heroData.image_url}
              onChange={(e) => setHeroData(prev => ({ ...prev, image_url: e.target.value }))}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>
          <div className="sm:col-span-4">
            <label className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-850 rounded-xl cursor-pointer text-xs font-bold h-[42px] text-slate-300 hover:text-white transition-colors">
              {uploadingImage ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Upload className="w-4 h-4" />
              )}
              <span>Upload Custom Banner</span>
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

        {/* Save button */}
        <div className="pt-4 border-t border-slate-900 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow transition-all cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? 'Saving Changes...' : 'Save Settings'}</span>
          </button>
        </div>

      </form>

    </div>
  );
};

export default ManageHome;
