import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  Package, 
  Bookmark, 
  Wrench, 
  Info, 
  PhoneCall, 
  Mail, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { supabase } from '../../supabaseClient';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to sign out of the Admin Panel?")) {
      await supabase.auth.signOut();
      navigate('/admin/login');
    }
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Home Content', path: '/admin/home', icon: Home },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Brands', path: '/admin/brands', icon: Bookmark },
    { name: 'Services', path: '/admin/services', icon: Wrench },
    { name: 'About Us', path: '/admin/about', icon: Info },
    { name: 'Contact & Settings', path: '/admin/contact', icon: PhoneCall },
    { name: 'Inquiries', path: '/admin/inquiries', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
      
      {/* Mobile Header Bar */}
      <header className="md:hidden sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3.5 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <img src="/logo.png" alt="TGMC Logo" className="w-8 h-7 object-contain bg-white rounded-lg p-0.5" />
          <span className="font-extrabold text-white text-lg tracking-tight font-heading">TGMC Admin</span>
        </Link>
        <button 
          onClick={() => setMobileSidebarOpen(true)}
          className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-950 border-r border-slate-800/80 shrink-0">
        <div className="p-6 border-b border-slate-800/80 flex items-center gap-3 bg-slate-950/50">
          <img src="/logo.png" alt="TGMC Logo" className="w-10 h-8 object-contain bg-white rounded-lg p-0.5" />
          <div>
            <h1 className="font-extrabold text-white text-lg tracking-tight font-heading leading-tight">TGMC</h1>
            <span className="text-[10px] text-tgmc-blue font-bold uppercase tracking-wider">Control Panel</span>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-250 ${
                  isActive 
                    ? 'bg-tgmc-blue text-white shadow-md shadow-tgmc-blue/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800/80 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/40 text-slate-400 text-xs">
            <UserCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">admin@tgmc.com</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0 text-rose-400" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Slide-out Drawer Menu */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="relative w-64 max-w-xs bg-slate-950 border-r border-slate-800 flex flex-col z-10 animate-slideRight">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="TGMC Logo" className="w-8 h-7 object-contain bg-white rounded-lg p-0.5" />
                <span className="font-extrabold text-white text-md tracking-tight font-heading">Control Panel</span>
              </div>
              <button 
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                      isActive 
                        ? 'bg-tgmc-blue text-white shadow-md' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/40 text-slate-400 text-xs">
                <UserCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">admin@tgmc.com</span>
              </div>
              <button
                onClick={() => {
                  setMobileSidebarOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4 shrink-0 text-rose-400" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Panel Viewport Area */}
      <main className="flex-grow flex flex-col min-w-0 max-h-screen overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 flex-grow">
          {children}
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;
