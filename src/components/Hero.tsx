import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Heart, ChevronRight, Phone, MessageSquare, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-sky-950 text-white py-16 sm:py-24">
      
      {/* 1. Full-Bleed 100% VISIBLE Water Splash Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg-ro.png"
          alt="TGMC Water RO Purifier Splash Background"
          className="w-full h-full object-cover object-center animate-water-wave filter brightness-110 contrast-110 saturate-150"
        />
        
        {/* Minimal Vignette Overlay - Keeps Background Water Image 100% Bright, Vivid, and Fully Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/70 pointer-events-none" />
      </div>

      {/* Decorative Vibrant Water Glow Effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* 2. Centered Hero Glass Card Container (Ensures Text & CTAs are 100% Legible over Bright Water BG) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        <div className="bg-slate-950/85 backdrop-blur-md p-6 sm:p-10 rounded-3xl border-2 border-cyan-400/50 shadow-[0_20px_50px_rgba(0,10,30,0.85)] space-y-6">
          
          {/* Authorised Distributor Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-tgmc-yellow/60 text-xs font-black text-tgmc-yellow shadow-lg">
            <Award className="w-4 h-4 text-tgmc-yellow shrink-0" />
            <span className="uppercase tracking-wider">Authorised Distributor & Water Solutions Partner</span>
          </div>

          {/* Top Tagline */}
          <div>
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-300 drop-shadow-md">
              PURE WATER. BETTER LIFE. RELIABLE SOLUTIONS.
            </p>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-[1.15] text-white mt-2 drop-shadow-xl">
              We Supply - <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-tgmc-light">
                ZERO B, V-GUARD, RACOLD & DELTA GREEN
              </span>
            </h1>
          </div>

          {/* Subtitle / Business Description */}
          <p className="text-sm sm:text-base text-slate-100 font-semibold leading-relaxed max-w-2xl mx-auto">
            Complete water purification, softeners, heat pumps, solar water heaters, and commercial RO systems for homes and businesses in <span className="text-cyan-300 font-bold">Hesaragatta Road, Bangalore – 560073</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-cyan-200 font-bold">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Purity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sales & Installation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Service Support
            </span>
          </div>

          {/* Action Buttons Container */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/products"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-extrabold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-extrabold text-slate-950 bg-tgmc-yellow hover:bg-amber-400 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am interested in your water purification and heating products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        {/* 3 Key Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center justify-center gap-2.5 bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/40 shadow-lg">
            <Droplets className="w-5 h-5 text-cyan-300 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Pure Water</h4>
              <p className="text-[10px] text-slate-300">Clean & Safe RO Water</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/40 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Reliable Solutions</h4>
              <p className="text-[10px] text-slate-300">Sales & Service Bangalore</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/40 shadow-lg">
            <Heart className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight">Better Life</h4>
              <p className="text-[10px] text-slate-300">Health & Wellness</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
