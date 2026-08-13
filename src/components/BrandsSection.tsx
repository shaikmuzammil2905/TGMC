import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award } from 'lucide-react';
import { BRANDS } from '../data/products';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            Official Brand Partner
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
            ZERO B Pure Water Solutions
          </h2>
          <p className="text-sm text-slate-600">
            We are dedicated sales, installation, and service specialists for genuine ZERO B water management products by Ion Exchange.
          </p>
        </div>

        {/* Brand Card Showcase */}
        <div className="max-w-xl mx-auto">
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200 shadow-card hover:border-tgmc-blue/40 transition-all duration-300 flex flex-col items-center justify-between text-center relative overflow-hidden space-y-4"
            >
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                Flagship Partner
              </div>

              <div className="py-4">
                <span className="text-4xl font-black tracking-tight text-tgmc-navy group-hover:text-tgmc-blue font-heading transition-colors block">
                  {brand.logoText}
                </span>
                <span className="text-xs font-semibold text-tgmc-blue mt-1 block">
                  {brand.tagline}
                </span>
              </div>

              <p className="text-xs text-slate-600 max-w-md">
                {brand.description}
              </p>

              <div className="pt-4 border-t border-slate-200/80 w-full flex items-center justify-center gap-2 text-xs font-bold text-tgmc-navy group-hover:text-tgmc-blue">
                <span>Browse All ZERO B Catalog Products</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
