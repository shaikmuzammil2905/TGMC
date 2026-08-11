import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Heart, ChevronRight, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tgmc-navy via-[#003666] to-[#005a9c] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Water Pattern & Glow Effects */}
      <div className="absolute inset-0 opacity-20 water-pattern pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tgmc-blue/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Content - Styled for Maximum Legibility & Text Contrast */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-tgmc-cyan/40 text-xs font-bold text-tgmc-yellow shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-tgmc-yellow animate-ping" />
              <span className="tracking-wide">Authorised Distributor & Water Solutions Partner</span>
            </div>

            {/* Main Headline with Drop Shadow & High Contrast */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight drop-shadow-md">
              We Supply - <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-tgmc-light drop-shadow">
                ZERO B, V-GUARD, RACOLD & DELTA GREEN
              </span>
            </h1>

            {/* Supporting Text with Dark Backdrop Pill for 100% legibility */}
            <div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10 max-w-2xl mx-auto lg:mx-0 shadow-lg">
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                <strong className="text-tgmc-yellow">Pure Water. Better Living. Reliable Solutions.</strong> <br />
                Complete water purification, softeners, heat pumps, solar water heaters, and commercial RO systems for homes and businesses in <span className="text-cyan-300 font-bold">Hesaragatta Road, Bangalore – 560073</span>.
              </p>
            </div>

            {/* Three Key Pillars matching TMC (1).png */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-tgmc-blue/20 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Pure Water</h4>
                  <p className="text-[10px] text-slate-300">100% Purity</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Reliable Solutions</h4>
                  <p className="text-[10px] text-slate-300">Sales & Service</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/60 backdrop-blur-md p-3 rounded-xl border border-white/15 shadow-md">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Better Life</h4>
                  <p className="text-[10px] text-slate-300">Health First</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/products"
                className="px-6 py-3.5 text-sm font-bold text-tgmc-navy bg-white hover:bg-slate-100 rounded-full shadow-xl transition-all flex items-center gap-2 group cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4 text-tgmc-navy group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-tgmc-yellow hover:bg-amber-400 rounded-full shadow-xl transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am interested in water purification / RO products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column - Featuring Animated User Water Splashing RO Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Container with Glow and Gentle Float Animation */}
            <div className="relative w-full max-w-lg bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-lg p-3 sm:p-5 rounded-3xl border border-white/25 shadow-2xl group">
              
              {/* Floating Badge 1: 100% Purity */}
              <div className="absolute -top-3 -left-3 z-20 bg-emerald-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg border border-white/40 flex items-center gap-1.5 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>100% Purity Guarantee</span>
              </div>

              {/* Floating Badge 2: Quality Water */}
              <div className="absolute -bottom-3 -right-3 z-20 bg-tgmc-navy text-cyan-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg border border-cyan-400/40 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-tgmc-yellow" />
                <span>Quality Water for Quality Life</span>
              </div>

              {/* Main Image Wrapper with Floating & Water Splash Pulse Effect */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-cyan-900/40 via-slate-900/60 to-tgmc-navy/80 p-2 flex items-center justify-center shadow-inner border border-cyan-400/30">
                
                {/* Background Water Ripple Animation Ring */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl animate-ping opacity-30 pointer-events-none" />

                {/* Animated Attached RO Splash Image */}
                <img
                  src="/hero-ro-splash.png"
                  alt="TGMC Premium Water RO Purifier Splash"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,168,232,0.4)] animate-float transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Image Overlay Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                  <span className="font-bold font-heading tracking-wide drop-shadow text-cyan-200">
                    Advanced Multi-Stage RO Systems
                  </span>
                  <span className="text-[10px] bg-slate-900/80 px-2 py-0.5 rounded border border-white/20 text-slate-200">
                    Sales & Service
                  </span>
                </div>

              </div>

              {/* Bottom Caption Container */}
              <div className="mt-3 text-center">
                <h3 className="text-base font-bold font-heading text-white drop-shadow-sm">
                  Complete RO & Water Purification Solutions
                </h3>
                <p className="text-xs text-cyan-200 mt-0.5">
                  Residential RO, Commercial Plants, Softeners & Heat Pumps
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
