import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MessageSquare, ChevronRight, Droplets } from 'lucide-react';
import { useData } from '../context/DataContext';

interface NavbarProps {
  onOpenEnquiry: (productName?: string) => void;
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEnquiry,
  mobileMenuOpen: propMobileMenuOpen,
  setMobileMenuOpen: propSetMobileMenuOpen
}) => {
  const { contactSettings: COMPANY_DETAILS, loading } = useData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [localMobileMenuOpen, setLocalMobileMenuOpen] = useState(false);

  const mobileMenuOpen = propMobileMenuOpen !== undefined ? propMobileMenuOpen : localMobileMenuOpen;
  const setMobileMenuOpen = propSetMobileMenuOpen !== undefined ? propSetMobileMenuOpen : setLocalMobileMenuOpen;

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Brands', path: '/brands' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-md py-2.5 border-b border-slate-200/60' : 'bg-white py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-12 h-10 sm:w-14 sm:h-11 flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="TGMC Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-tgmc-navy font-heading" title="The General Material Corporation">
                  TGMC
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold text-tgmc-blue bg-tgmc-light px-2 py-0.5 rounded-full border border-tgmc-blue/20">
                  Sales & Service
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider hidden lg:block -mt-0.5">
                The General Material Corporation
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-tight">
                Pure Water. Better Life.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive 
                      ? 'text-tgmc-navy bg-tgmc-light/70 font-bold' 
                      : 'text-slate-700 hover:text-tgmc-blue hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-tgmc-navy bg-slate-100 hover:bg-slate-200/80 rounded-full border border-slate-200 transition-all shadow-sm hover:shadow"
            >
              <Phone className="w-4 h-4 text-tgmc-blue fill-tgmc-blue/20" />
              <span>Call Us</span>
            </a>
            
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue hover:from-tgmc-blue hover:to-tgmc-navy rounded-full shadow-md shadow-tgmc-navy/20 hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Quick Action & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-tgmc-navy bg-tgmc-light/80 border border-tgmc-blue/30 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-tgmc-blue" />
              <span>Call Us</span>
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-tgmc-navy rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg flex items-center justify-between ${
                    isActive
                      ? 'text-tgmc-navy bg-tgmc-light/80 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Quote / Enquire</span>
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-tgmc-blue" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
