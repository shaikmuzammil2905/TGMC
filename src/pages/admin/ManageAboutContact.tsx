import React, { useState, useEffect } from 'react';
import { Save, Loader2, CheckCircle, Info, PhoneCall, Globe, Clock, MapPin } from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface DBAboutSection {
  id?: string;
  section: string;
  title: string;
  description: string;
}

interface DBContactSettings {
  id?: string;
  company_name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  maps_url?: string;
  maps_embed?: string;
  business_hours?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export const ManageAboutContact: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // About Content
  const [aboutIntro, setAboutIntro] = useState<DBAboutSection>({ section: 'intro', title: '', description: '' });
  const [aboutFocus, setAboutFocus] = useState<DBAboutSection>({ section: 'focus', title: '', description: '' });

  // Contact Settings
  const [contactSettings, setContactSettings] = useState<DBContactSettings>({
    company_name: 'TGMC',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    maps_url: '',
    maps_embed: '',
    business_hours: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  });

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch contact settings
      const { data: contactData } = await supabase.from('contact_settings').select('*').limit(1);
      if (contactData && contactData.length > 0) {
        setContactSettings(contactData[0]);
      }

      // Fetch about Us content
      const { data: aboutData } = await supabase.from('about_content').select('*');
      if (aboutData) {
        const intro = aboutData.find(a => a.section === 'intro');
        if (intro) setAboutIntro(intro);

        const focus = aboutData.find(a => a.section === 'focus');
        if (focus) setAboutFocus(focus);
      }

    } catch (e) {
      console.error("Error loading data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setSuccessMsg('');

      // 1. Save Contact Settings
      const contactPayload = { ...contactSettings };
      let contactQuery;
      if (contactPayload.id) {
        contactQuery = supabase.from('contact_settings').update(contactPayload).eq('id', contactPayload.id);
      } else {
        contactQuery = supabase.from('contact_settings').insert(contactPayload);
      }
      const { error: contactErr } = await contactQuery;
      if (contactErr) throw contactErr;

      // 2. Save About Intro
      const introPayload = { ...aboutIntro };
      let introQuery;
      if (introPayload.id) {
        introQuery = supabase.from('about_content').update({ title: introPayload.title, description: introPayload.description }).eq('id', introPayload.id);
      } else {
        introQuery = supabase.from('about_content').insert({ section: 'intro', title: introPayload.title, description: introPayload.description });
      }
      const { error: introErr } = await introQuery;
      if (introErr) throw introErr;

      // 3. Save About Focus
      const focusPayload = { ...aboutFocus };
      let focusQuery;
      if (focusPayload.id) {
        focusQuery = supabase.from('about_content').update({ title: focusPayload.title, description: focusPayload.description }).eq('id', focusPayload.id);
      } else {
        focusQuery = supabase.from('about_content').insert({ section: 'focus', title: focusPayload.title, description: focusPayload.description });
      }
      const { error: focusErr } = await focusQuery;
      if (focusErr) throw focusErr;

      setSuccessMsg("About Us & Contact Settings successfully saved!");
      setTimeout(() => setSuccessMsg(''), 3000);
      await fetchData();
    } catch (err: any) {
      alert("Error saving settings: " + err.message);
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
          Manage About & Contact
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Configure centralized contact numbers, address, maps, socials, and company descriptions
        </p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Settings Form */}
      <form onSubmit={handleSave} className="space-y-8 text-sm text-slate-300">
        
        {/* Contact settings Block */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
            <PhoneCall className="w-5 h-5 text-tgmc-blue" />
            <h3 className="text-base font-bold text-white font-heading">Contact Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Company Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={contactSettings.company_name}
                onChange={(e) => setContactSettings(prev => ({ ...prev, company_name: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Primary Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 9964750573"
                value={contactSettings.phone}
                onChange={(e) => setContactSettings(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                WhatsApp Business Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 919964750573 (Include country code)"
                value={contactSettings.whatsapp}
                onChange={(e) => setContactSettings(prev => ({ ...prev, whatsapp: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Support Email
              </label>
              <input
                type="email"
                placeholder="info@tgmc.com"
                value={contactSettings.email}
                onChange={(e) => setContactSettings(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Physical Shop Address
            </label>
            <input
              type="text"
              placeholder="e.g. Hesaragatta Road, Bangalore - 560073"
              value={contactSettings.address}
              onChange={(e) => setContactSettings(prev => ({ ...prev, address: e.target.value }))}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Google Maps Share Link (URL)
              </label>
              <input
                type="text"
                placeholder="https://maps.google.com/..."
                value={contactSettings.maps_url}
                onChange={(e) => setContactSettings(prev => ({ ...prev, maps_url: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Google Maps Embed Source (iframe src)
              </label>
              <input
                type="text"
                placeholder="https://www.google.com/maps/embed?pb=..."
                value={contactSettings.maps_embed}
                onChange={(e) => setContactSettings(prev => ({ ...prev, maps_embed: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Business Hours / Availability
              </label>
              <input
                type="text"
                placeholder="e.g. Open 24/7, Sales desk open 9am-8pm"
                value={contactSettings.business_hours}
                onChange={(e) => setContactSettings(prev => ({ ...prev, business_hours: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Socials Block */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
            <Globe className="w-5 h-5 text-tgmc-blue" />
            <h3 className="text-base font-bold text-white font-heading">Social Media Links</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Facebook Profile
              </label>
              <input
                type="text"
                placeholder="https://facebook.com/..."
                value={contactSettings.facebook}
                onChange={(e) => setContactSettings(prev => ({ ...prev, facebook: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Instagram Profile
              </label>
              <input
                type="text"
                placeholder="https://instagram.com/..."
                value={contactSettings.instagram}
                onChange={(e) => setContactSettings(prev => ({ ...prev, instagram: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                LinkedIn Profile
              </label>
              <input
                type="text"
                placeholder="https://linkedin.com/..."
                value={contactSettings.linkedin}
                onChange={(e) => setContactSettings(prev => ({ ...prev, linkedin: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                YouTube Channel
              </label>
              <input
                type="text"
                placeholder="https://youtube.com/..."
                value={contactSettings.youtube}
                onChange={(e) => setContactSettings(prev => ({ ...prev, youtube: e.target.value }))}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* About Content Block */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-3">
            <Info className="w-5 h-5 text-tgmc-blue" />
            <h3 className="text-base font-bold text-white font-heading">About Us Page content</h3>
          </div>

          {/* About Section 1: Intro */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm font-heading">Section 1: Header Intro</h4>
            
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Header Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={aboutIntro.title}
                onChange={(e) => setAboutIntro(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Intro Paragraph Content <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={aboutIntro.description}
                onChange={(e) => setAboutIntro(prev => ({ ...prev, description: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* About Section 2: Core Focus */}
          <div className="space-y-4 pt-4 border-t border-slate-900">
            <h4 className="font-extrabold text-white text-sm font-heading">Section 2: Focus & Overview</h4>
            
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Focus Section Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={aboutFocus.title}
                onChange={(e) => setAboutFocus(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Overview description <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={aboutFocus.description}
                onChange={(e) => setAboutFocus(prev => ({ ...prev, description: e.target.value }))}
                required
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 focus:border-tgmc-blue/50 rounded-xl text-slate-100 focus:outline-none resize-none"
              />
            </div>
          </div>

        </div>

        {/* Global Save Controls */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-tgmc-blue hover:bg-tgmc-blue/90 rounded-xl shadow-lg transition-all cursor-pointer disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? 'Saving Settings...' : 'Save Settings'}</span>
          </button>
        </div>

      </form>

    </div>
  );
};

export default ManageAboutContact;
