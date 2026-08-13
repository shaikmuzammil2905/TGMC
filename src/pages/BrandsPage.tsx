import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDS, PRODUCTS } from '../data/products';
import { Award, ChevronRight } from 'lucide-react';

interface BrandsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            Brand Partners
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Trusted Brands We Supply
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            TGMC supplies, installs, and provides professional service support for leading brands in water purification, water heating, solar, and pumping systems across Bangalore and Karnataka.
          </p>
        </div>

        {/* Brands Overview List */}
        <div className="space-y-8">
          {BRANDS.map((brand) => {
            const brandProducts = PRODUCTS.filter((p) => p.brand === brand.name);

            return (
              <div
                key={brand.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl sm:text-3xl font-black text-tgmc-navy font-heading">
                        {brand.name}
                      </h2>
                      {brand.isAuthorised && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          Authorised Distributor
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-tgmc-blue mt-1">
                      {brand.tagline}
                    </p>
                  </div>

                  <Link
                    to={`/products?brand=${encodeURIComponent(brand.name)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-tgmc-navy hover:bg-tgmc-blue rounded-xl transition-colors self-start sm:self-auto shadow"
                  >
                    <span>View All {brand.name} Products ({brandProducts.length})</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {brand.description}
                </p>

                {/* Brand Products Chips */}
                {brandProducts.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Available Models & Products:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {brandProducts.map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/product/${prod.slug}`}
                          className="p-3.5 rounded-xl bg-slate-50 hover:bg-tgmc-light/50 border border-slate-200/80 transition-all flex items-center justify-between group"
                        >
                          <div>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-tgmc-navy font-heading block line-clamp-1">
                              {prod.name}
                            </span>
                            <span className="text-[10px] text-slate-500">{prod.category}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-tgmc-blue group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
