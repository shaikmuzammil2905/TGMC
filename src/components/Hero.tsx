import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Heart, ChevronRight, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#e0f7fc] via-[#b9ecf8] to-[#e0f2fe] text-slate-900 py-16 sm:py-24">
      
      {/* 1. Full Bright HD Water Background Image without Heavy Dark Shadows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg-ro.png"
          alt="TGMC Water RO Purifier HD Splash Background"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-105 contrast-105 saturate-125 transition-transform duration-1000"
        />
        
        {/* Subtle Crystal Clean Water Overlay for HD Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-slate-900/20 to-tgmc-navy/40" />
      </div>

      {/* Decorative Cyan Radial Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/30 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Hero Centered Content Container with High-Legibility Dark Glass Cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Authorised Distributor Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tgmc-navy/95 text-white backdrop-blur-md border border-cyan-300/40 text-xs font-extrabold shadow-2xl animate-fadeIn">
          <Award className="w-4 h-4 text-tgmc-yellow shrink-0" />
          <span className="uppercase tracking-wider">Authorised Distributor & Water Solutions Partner</span>
        </div>

        {/* Top Tagline & Main Title Box */}
        <div className="space-y-3 bg-tgmc-navy/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-cyan-300/40 shadow-card max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-300 drop-shadow">
            PURE WATER. BETTER LIFE. RELIABLE SOLUTIONS.
          </p>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.15] text-white drop-shadow-lg">
            We Supply - <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-200">
              ZERO B, V-GUARD, RACOLD & DELTA GREEN
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed pt-2">
            Complete water purification, softeners, heat pumps, solar water heaters, and commercial RO systems for <span className="text-cyan-300 font-bold">Business in Bangalore & All over the Karnataka</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-cyan-200 font-semibold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% Purity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sales & Installation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Service Support
            </span>
          </div>
        </div>

        {/* Action Buttons Container */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer border border-cyan-200"
          >
            <span>Explore Products</span>
            <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => onOpenEnquiry()}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 bg-tgmc-yellow hover:bg-amber-400 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get a Quote</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am interested in your water purification and heating products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* 3 Key Feature Pillars */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 bg-tgmc-navy/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-300/30 text-white shadow-xl">
            <Droplets className="w-5 h-5 text-cyan-300 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Pure Water</h4>
              <p className="text-[10px] text-slate-200">Clean & Safe RO Water</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-tgmc-navy/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-300/30 text-white shadow-xl">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Reliable Solutions</h4>
              <p className="text-[10px] text-slate-200">Sales & Service Bangalore</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-tgmc-navy/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-300/30 text-white shadow-xl">
            <Heart className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Better Life</h4>
              <p className="text-[10px] text-slate-200">Health & Wellness</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
