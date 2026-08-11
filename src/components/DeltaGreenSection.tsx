import React from 'react';
import { Award, Zap, CheckCircle2, ChevronRight, Flame, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface DeltaGreenSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const DeltaGreenSection: React.FC<DeltaGreenSectionProps> = ({ onOpenEnquiry }) => {
  const residentialModels = [
    { capacity: '200 LTR', target: 'Single family homes & row houses', model: 'DELTA GREEN Residential Heat Pump 200 LTR' },
    { capacity: '300 LTR', target: 'Duplex villas & multi-bath homes', model: 'DELTA GREEN Residential Heat Pump 300 LTR' },
    { capacity: '500 LTR', target: 'Luxury villas & high-demand homes', model: 'DELTA GREEN Residential Heat Pump 500 LTR' },
  ];

  const commercialModels = [
    { capacity: '1000 LTR', target: 'Boutique hotels & hostels', model: 'DELTA GREEN Commercial Heat Pump 1000 LTR' },
    { capacity: '2000 LTR', target: 'Hotels & apartment complexes', model: 'DELTA GREEN Commercial Heat Pump 2000 LTR' },
    { capacity: '3000 LTR', target: 'Hospitals & colleges', model: 'DELTA GREEN Commercial Heat Pump 3000 LTR' },
    { capacity: '5000 LTR', target: 'Commercial laundries & resorts', model: 'DELTA GREEN Commercial Heat Pump 5000 LTR' },
    { capacity: '10000 LTR', target: 'Large townships & industrial plants', model: 'DELTA GREEN Commercial Heat Pump 10000 LTR' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-tgmc-navy to-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tgmc-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Authorised Distributor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            DELTA GREEN Heat Pump Systems
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            TGMC is an <strong>Authorised Distributor for DELTA GREEN Heat Pumps</strong> in Bangalore. High-efficiency air-to-water heat pump heating solutions delivering up to 70% energy savings.
          </p>
        </div>

        {/* Residential & Commercial Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Residential Heat Pumps Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Residential Heat Pumps</h3>
                    <p className="text-xs text-slate-300">24x7 Eco Hot Water for Homes & Villas</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Residential
                </span>
              </div>

              <div className="space-y-3">
                {residentialModels.map((item) => (
                  <div 
                    key={item.capacity}
                    onClick={() => onOpenEnquiry(item.model)}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-base font-extrabold text-white font-heading">{item.capacity}</span>
                        <p className="text-xs text-slate-300">{item.target}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-tgmc-cyan group-hover:translate-x-1 transition-transform flex items-center">
                      Enquire <ChevronRight className="w-4 h-4 ml-0.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry('DELTA GREEN Residential Heat Pump')}
              className="w-full py-3.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-400/20 text-center cursor-pointer"
            >
              Enquire About Residential Heat Pumps
            </button>
          </div>

          {/* Commercial Heat Pumps Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-tgmc-cyan/20 flex items-center justify-center text-tgmc-cyan">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">Commercial Heat Pumps</h3>
                    <p className="text-xs text-slate-300">Heavy Duty Thermal Water Heating</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-tgmc-cyan bg-tgmc-cyan/10 px-3 py-1 rounded-full border border-tgmc-cyan/20">
                  Commercial
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commercialModels.map((item) => (
                  <div 
                    key={item.capacity}
                    onClick={() => onOpenEnquiry(item.model)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base font-extrabold text-white font-heading">{item.capacity}</span>
                      <ChevronRight className="w-4 h-4 text-tgmc-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-[11px] text-slate-300">{item.target}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry('DELTA GREEN Commercial Heat Pump')}
              className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-tgmc-blue to-tgmc-cyan hover:from-tgmc-cyan hover:to-tgmc-blue rounded-xl transition-all shadow-lg text-center cursor-pointer"
            >
              Enquire About Commercial Heat Pumps
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
