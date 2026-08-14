import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Bookmark, 
  Wrench, 
  Mail, 
  Info, 
  PhoneCall, 
  Home, 
  ArrowUpRight, 
  Loader2,
  TrendingUp
} from 'lucide-react';
import { supabase } from '../../supabaseClient';

export const AdminDashboard: React.FC = () => {
  const [counts, setCounts] = useState({
    products: 0,
    brands: 0,
    services: 0,
    inquiries: 0,
    newInquiries: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [prods, brs, servs, inqs, newInqs] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('brands').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('inquiries').select('*', { count: 'exact', head: true }),
        supabase.from('inquiries').select('*', { count: 'exact', head: true }).eq('status', 'New')
      ]);

      setCounts({
        products: prods.count || 0,
        brands: brs.count || 0,
        services: servs.count || 0,
        inquiries: inqs.count || 0,
        newInquiries: newInqs.count || 0
      });

    } catch (e) {
      console.error("Error fetching dashboard counts:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = [
    { name: 'Total Products', value: counts.products, icon: Package, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', path: '/admin/products' },
    { name: 'Total Brands', value: counts.brands, icon: Bookmark, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20', path: '/admin/brands' },
    { name: 'Total Services', value: counts.services, icon: Wrench, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', path: '/admin/services' },
    { name: 'New Inquiries', value: counts.newInquiries, icon: Mail, color: 'text-rose-400 bg-rose-500/10 border-rose-500/20', path: '/admin/inquiries?status=New', highlight: counts.newInquiries > 0 }
  ];

  const quickLinks = [
    { name: 'Home Content', desc: 'Edit hero and callout banners', path: '/admin/home', icon: Home },
    { name: 'Manage Products', desc: 'Add or modify product list', path: '/admin/products', icon: Package },
    { name: 'Manage Brands', desc: 'Authorised brands list', path: '/admin/brands', icon: Bookmark },
    { name: 'Manage Services', desc: 'Define technical services', path: '/admin/services', icon: Wrench },
    { name: 'About Us Content', desc: 'Company history & focus', path: '/admin/about', icon: Info },
    { name: 'Contact Settings', desc: 'Phones, address, socials & map', path: '/admin/contact', icon: PhoneCall },
  ];

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center space-y-2">
          <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue mx-auto" />
          <p className="text-sm text-slate-400">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-white font-heading tracking-tight">
          Admin Dashboard
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Real-time metrics and shortcut controls for TGMC Bangalore
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link 
              key={stat.name}
              to={stat.path}
              className={`bg-slate-950 rounded-2xl p-5 border shadow-lg flex items-center justify-between group hover:border-slate-700 transition-all ${
                stat.highlight ? 'border-rose-500/40 bg-rose-500/5' : 'border-slate-800'
              }`}
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  {stat.name}
                </span>
                <h3 className={`text-3xl font-extrabold font-heading ${stat.highlight ? 'text-rose-400' : 'text-white'}`}>
                  {stat.value}
                </h3>
              </div>
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${stat.color} group-hover:scale-105 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Links Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white font-heading">
          Quick Management Controls
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-tgmc-blue/50 flex gap-4 group transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-tgmc-blue transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-grow">
                  <h4 className="font-semibold text-white text-sm group-hover:text-tgmc-blue transition-colors flex items-center gap-1.5">
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                  </h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    {link.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
