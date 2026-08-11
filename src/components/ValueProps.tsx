import React from 'react';
import { ShieldCheck, Wrench, Headphones } from 'lucide-react';

export const ValueProps: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Badge 1: Quality Products */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-tgmc-navy text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-tgmc-cyan" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Quality Products</h4>
              <p className="text-xs text-slate-500 mt-0.5">High quality & durable water solutions</p>
            </div>
          </div>

          {/* Badge 2: Expert Support */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-tgmc-navy text-white flex items-center justify-center shrink-0 shadow-md">
              <Wrench className="w-6 h-6 text-tgmc-yellow" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Expert Support</h4>
              <p className="text-xs text-slate-500 mt-0.5">Professional sales & service team</p>
            </div>
          </div>

          {/* Badge 3: Prompt Service */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-tgmc-navy text-white flex items-center justify-center shrink-0 shadow-md">
              <Headphones className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-heading">Prompt Service</h4>
              <p className="text-xs text-slate-500 mt-0.5">Quick response & timely support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
