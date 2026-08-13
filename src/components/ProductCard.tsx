import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Tag, Award } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenEnquiry }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 animate-fade-in-up">
      
      {/* Number Badge from UI Reference (1..7) */}
      {product.numberTag && (
        <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-tgmc-navy text-white font-bold font-heading text-sm flex items-center justify-center shadow-md border-2 border-white">
          {product.numberTag}
        </div>
      )}

      {/* Brand & Authorised Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-tgmc-navy bg-tgmc-light/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-tgmc-blue/20">
          {product.brand}
        </span>
        {product.isAuthorisedDistributor && (
          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shadow-sm">
            <Award className="w-2.5 h-2.5 text-amber-600" />
            Authorised Distributor
          </span>
        )}
      </div>

      {/* Product Image Container */}
      <Link to={`/product/${product.slug}`} className="block relative pt-[85%] bg-white border-b border-slate-100 overflow-hidden transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1 text-[11px] font-medium text-tgmc-blue mb-1">
            <span>{product.category}</span>
          </div>

          <Link to={`/product/${product.slug}`}>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-tgmc-navy transition-colors font-heading leading-tight line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Capacities if present */}
          {product.capacities && product.capacities.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {product.capacities.slice(0, 3).map((cap) => (
                <span key={cap} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {cap}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & CTAs */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            {product.price ? (
              <span className="text-xs font-black text-slate-950 bg-tgmc-yellow px-2.5 py-1 rounded-md shadow-sm border border-amber-500/20">
                Price: {product.price}
              </span>
            ) : (
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                Get Best Price
              </span>
            )}
            <Link
              to={`/product/${product.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-tgmc-navy hover:text-tgmc-blue transition-colors"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.slug}`}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center transition-colors"
            >
              View Product
            </Link>
            <button
              onClick={() => onOpenEnquiry(product.name)}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue hover:from-tgmc-blue hover:to-tgmc-navy rounded-lg text-center transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Enquire</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
