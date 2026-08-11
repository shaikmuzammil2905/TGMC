import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Heart, ChevronRight, Phone, MessageSquare, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-16 sm:py-24">
      
      {/* 1. Full-Bleed Animated Water Background (Vibrant Water Splash + Continuous Wave Motion) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg-ro.png"
          alt="TGMC Water RO Purifier Splash Background"
          className="w-full h-full object-cover object-center animate-water-wave filter brightness-105 contrast-110 saturate-125 transition-all duration-1000"
        />
        
        {/* Light Vignette Tint - Allows Full Water Image Visibility while guaranteeing Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-tgmc-navy/45 to-slate-950/85" />
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 opacity-25 water-pattern pointer-events-none" />
      </div>

      {/* Decorative Radial Cyan & Blue Water Glow Accents */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-tgmc-blue/30 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Centered Content Container with Deep Shadowing & Visible Text */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Authorised Distributor Badge with Deep Contrast Shadow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-400/50 text-xs font-black text-tgmc-yellow shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <Award className="w-4 h-4 text-tgmc-yellow shrink-0" />
          <span className="uppercase tracking-wider text-shadow-gold">Authorised Distributor & Water Solutions Partner</span>
        </div>

        {/* Top Tagline */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-cyan-300 text-shadow-cyan drop-shadow-lg">
            PURE WATER. BETTER LIFE. RELIABLE SOLUTIONS.
          </p>

          {/* Main Hero Headline with Deep Text Shadows */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.15] text-white text-shadow-deep drop-shadow-2xl max-w-4xl mx-auto">
            We Supply - <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-tgmc-light text-shadow-cyan">
              ZERO B, V-GUARD, RACOLD & DELTA GREEN
            </span>
          </h1>
        </div>

        {/* Subtitle / Business Description Box (Deep Dark Glass Card for Maximum Legibility) */}
        <div className="max-w-3xl mx-auto bg-slate-950/85 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-cyan-400/40 shadow-[0_15px_40px_rgba(0,20,50,0.8)] space-y-3">
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-semibold leading-relaxed text-shadow-deep">
            Complete water purification, softeners, heat pumps, solar water heaters, and commercial RO systems for homes and businesses in <span className="text-cyan-300 font-bold text-shadow-cyan">Hesaragatta Road, Bangalore – 560073</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-cyan-200 font-bold">
            <span className="flex items-center gap-1 text-shadow-deep">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Purity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-shadow-deep">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sales & Installation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-shadow-deep">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Service Support
            </span>
          </div>
        </div>

        {/* Action Buttons Container */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-[0_10px_35px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Products</span>
            <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => onOpenEnquiry()}
            className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-slate-950 bg-tgmc-yellow hover:bg-amber-400 rounded-full shadow-[0_10px_35px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get a Quote</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am interested in your water purification and heating products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-[0_10px_35px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* 3 Key Feature Pillars */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
            <Droplets className="w-5 h-5 text-cyan-300 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight text-shadow-deep">Pure Water</h4>
              <p className="text-[10px] text-slate-300">Clean & Safe RO Water</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight text-shadow-deep">Reliable Solutions</h4>
              <p className="text-[10px] text-slate-300">Sales & Service Bangalore</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-cyan-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
            <Heart className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-white leading-tight text-shadow-deep">Better Life</h4>
              <p className="text-[10px] text-slate-300">Health & Wellness</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
