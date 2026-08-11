import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Heart, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tgmc-navy via-[#003d75] to-tgmc-blue text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Water Wave Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 water-pattern pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tgmc-blue/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tgmc-cyan/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-tgmc-yellow shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tgmc-yellow animate-ping" />
              <span>Authorised Distributor & Water Solutions Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              We Supply - <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-tgmc-light">
                ZERO B, V-GUARD, RACOLD & DELTA GREEN
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0">
              Pure Water. Better Living. Reliable Solutions. Complete water purification, softeners, heat pumps, solar water heaters, and commercial RO systems for homes and businesses in <strong>Hesaragatta Road, Bangalore – 560073</strong>.
            </p>

            {/* Three Key Pillars matching TMC (1).png */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <Droplets className="w-5 h-5 text-tgmc-cyan shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Pure Water</h4>
                  <p className="text-[10px] text-slate-300">Clean & Safe</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Reliable Solutions</h4>
                  <p className="text-[10px] text-slate-300">Sales & Service</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <Heart className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Better Life</h4>
                  <p className="text-[10px] text-slate-300">Health First</p>
                </div>
              </div>
            </div>

            {/* CTAs matching User Specification */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/products"
                className="px-6 py-3.5 text-sm font-bold text-tgmc-navy bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4 text-tgmc-navy group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3.5 text-sm font-bold text-white bg-tgmc-yellow hover:bg-tgmc-gold rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am looking for water purification / heating solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Hero Image Card matching TMC (1).png */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-white/20 shadow-2xl animate-float">
              
              {/* Product Showcase Badge */}
              <div className="absolute top-4 right-4 z-10 bg-tgmc-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                Bangalore Sales & Service
              </div>

              {/* Main Product Showcase Photo */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/90 p-4 flex items-center justify-center shadow-inner">
                <img
                  src="/products/zero-b-automatic-water-softener.png"
                  alt="ZERO B Automatic Water Softener"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold font-heading text-white">ZERO B Water Softeners & RO Systems</h3>
                <p className="text-xs text-slate-200 mt-1">Automatic Softeners, Filters, RO & Heat Pumps</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
