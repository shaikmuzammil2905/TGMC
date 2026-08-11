import React from 'react';
import { Building2, Factory, ShieldCheck, ChevronRight, MessageSquare, Droplet } from 'lucide-react';

interface CommercialSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onOpenEnquiry }) => {
  const roCapacities = [
    { cap: '25 LPH', desc: 'Small offices, cafes & clinics' },
    { cap: '50 LPH', desc: 'Restaurants & medium offices' },
    { cap: '100 LPH', desc: 'Corporate floors & caterers' },
    { cap: '500 LPH', desc: 'Hospitals & manufacturing units' },
    { cap: '1000 LPH', desc: 'Industrial plants & townships' },
  ];

  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold mb-3">
              <Factory className="w-3.5 h-3.5 text-tgmc-cyan" />
              <span>Industrial & Enterprise Solutions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Commercial Water Solutions
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Heavy-duty reverse osmosis plants and high-capacity central thermal heat pumps designed for commercial establishments in Bangalore.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry('Commercial Water Solutions')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-tgmc-navy hover:bg-slate-800 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Request Commercial Quote</span>
          </button>
        </div>

        {/* Commercial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Industrial RO Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-tgmc-navy text-white flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-tgmc-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Commercial RO Systems</h3>
                  <p className="text-xs text-slate-500">25 LPH to 1000 LPH Purified Water Plants</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roCapacities.map((item) => (
                  <div
                    key={item.cap}
                    onClick={() => onOpenEnquiry(`${item.cap} Commercial RO System`)}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-tgmc-light/50 border border-slate-200/80 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-extrabold text-tgmc-navy font-heading">{item.cap}</span>
                      <ChevronRight className="w-4 h-4 text-tgmc-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Custom LPH plants available on request</span>
              <button
                onClick={() => onOpenEnquiry('Commercial RO Systems')}
                className="text-xs font-bold text-tgmc-blue hover:text-tgmc-navy transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Inquire Commercial RO <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Image / Showcase */}
          <div className="lg:col-span-5 bg-gradient-to-br from-tgmc-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-semibold text-tgmc-cyan uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Enterprise Engineering
              </span>
              <h3 className="text-2xl font-bold font-heading">
                Turnkey Installation & Service Support
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full technical guidance, site assessment, installation assistance, and maintenance service support for commercial establishments in Hesaragatta Road and across Bangalore.
              </p>
            </div>

            <div className="relative z-10 my-6 rounded-2xl overflow-hidden bg-white/10 p-4 border border-white/10">
              <img
                src="/products/commercial-ro-plant.png"
                alt="Commercial RO Plant"
                className="w-full h-44 object-contain"
              />
            </div>

            <button
              onClick={() => onOpenEnquiry('Commercial Water Solutions')}
              className="relative z-10 w-full py-3.5 text-sm font-bold text-tgmc-navy bg-white hover:bg-slate-100 rounded-xl transition-all shadow text-center cursor-pointer"
            >
              Get Commercial Consultation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
