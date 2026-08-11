import React from 'react';
import { COMPANY_DETAILS } from '../data/products';
import { MapPin, Phone, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            About TGMC
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Pure Water. Better Life.
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            TGMC is a dedicated sales and service enterprise dealing in water purification systems, softeners, RO systems, heat pumps, solar water heaters, and pressure pumps based in <strong>Hesaragatta Road, Bangalore – 560073</strong>.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              Our Core Product & Service Focus
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We specialize in providing complete domestic and commercial water management solutions. Our portfolio spans automatic water softeners for hard water treatment, multi-grade sand and carbon filters, specialized iron removal systems, under-sink drinking RO purifiers, energy-efficient heat pump water heaters, rooftop solar water heaters, pressure booster pumps, sump motors, and industrial commercial RO plants.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tgmc-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-heading">Water Purification</h4>
                  <p className="text-[11px] text-slate-500">Softeners, RO systems & iron removal</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tgmc-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-heading">Water Heating</h4>
                  <p className="text-[11px] text-slate-500">Heat pumps & solar water heaters</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tgmc-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-heading">Pump Solutions</h4>
                  <p className="text-[11px] text-slate-500">Pressure boosters & sump motors</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tgmc-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-heading">Sales & Service Support</h4>
                  <p className="text-[11px] text-slate-500">Bangalore local customer support</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3 text-xs font-bold text-white bg-tgmc-navy hover:bg-slate-800 rounded-xl transition-all shadow"
              >
                Contact Our Technical Team
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-6 py-3 text-xs font-bold text-tgmc-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-tgmc-blue" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-tgmc-navy via-[#003d75] to-tgmc-blue rounded-3xl p-8 text-white shadow-2xl space-y-6">
            <div className="w-16 h-14 bg-white p-1.5 rounded-xl">
              <img src="/logo.png" alt="TGMC Logo" className="w-full h-full object-contain" />
            </div>

            <h3 className="text-2xl font-bold font-heading">Business Location</h3>
            
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tgmc-cyan shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm">Address:</strong>
                  <span>{COMPANY_DETAILS.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-tgmc-cyan shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm">Primary Phone:</strong>
                  <span>{COMPANY_DETAILS.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm">WhatsApp Business:</strong>
                  <span>{COMPANY_DETAILS.formattedWhatsApp}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-300">
              Authorized Distributor for Delta Green Heat Pumps & supplier of Zero B, V-Guard, Racold, Grundfos, Kirloskar & Commercial RO Systems.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
