import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award } from 'lucide-react';
import { BRANDS } from '../data/products';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            Trusted Partners & Brands
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            Brands We Supply & Service
          </h2>
          <p className="text-sm text-slate-600">
            Click any brand below to view its complete range of products, specifications, and request pricing.
          </p>
        </div>

        {/* Brands Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="group p-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-tgmc-blue/40 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col items-center justify-between text-center relative overflow-hidden"
            >
              {brand.isAuthorised && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg shadow-sm flex items-center gap-0.5">
                  <Award className="w-2.5 h-2.5" />
                  Authorised
                </div>
              )}

              <div className="w-full py-4 flex flex-col items-center justify-center min-h-[90px]">
                <span className="text-sm font-black tracking-tight text-tgmc-navy group-hover:text-tgmc-blue font-heading transition-colors block leading-tight">
                  {brand.logoText}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {brand.tagline}
                </span>
              </div>

              <div className="w-full pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-tgmc-navy">
                <span>View Products</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
