import React from 'react';
import { Award, Zap, CheckCircle2, ChevronRight, Flame } from 'lucide-react';

interface DeltaGreenSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const DeltaGreenSection: React.FC<DeltaGreenSectionProps> = ({ onOpenEnquiry }) => {
  const heatPumpFeatures = [
    { title: '70% Energy Savings', desc: 'Air-to-water heat pump technology extracts heat from ambient atmosphere.' },
    { title: '24x7 Hot Water Supply', desc: 'All-weather hot water heating for independent houses, villas, hotels & commercial plants.' },
    { title: 'Eco-Friendly Refrigerant', desc: 'High COP performance with zero ozone depletion.' },
    { title: 'Ion Exchange Warranty', desc: 'Complete sales, installation, and maintenance support across Bangalore.' }
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
            <span>ZERO B Heat Pump Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            ZERO B Energy-Efficient Heat Pump Water Heaters
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            TGMC provides supply, installation, and service for <strong>ZERO B Air-to-Water Heat Pumps</strong> in Bangalore & Karnataka. High-efficiency thermal water heating solutions delivering up to 70% energy savings.
          </p>
        </div>

        {/* Features & Callout Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Feature Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">ZERO B Domestic & Commercial Heat Pumps</h3>
                <p className="text-xs text-slate-300">24x7 Eco Hot Water for Homes, Villas & Enterprises</p>
              </div>
            </div>

            <div className="space-y-4">
              {heatPumpFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenEnquiry('ZERO B Heat Pump')}
              className="w-full py-3.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-400/20 text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Enquire About ZERO B Heat Pumps</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Product Spotlight Image */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl text-center space-y-6">
            <div className="w-48 h-48 mx-auto rounded-2xl bg-white/10 p-4 border border-white/20 flex items-center justify-center shadow-inner">
              <img 
                src="/products/zero-b-heat-pump.png" 
                alt="ZERO B Heat Pump"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-extrabold text-white font-heading">ZERO B Heat Pump Unit</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Extracts free heat energy from outdoor air to deliver continuous hot water at maximum COP efficiency.
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry('ZERO B Heat Pump')}
              className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-tgmc-blue to-tgmc-cyan hover:from-tgmc-cyan hover:to-tgmc-blue rounded-full transition-all shadow cursor-pointer"
            >
              Request Specs & Pricing
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
