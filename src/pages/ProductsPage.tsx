import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/products';
import { Search, Filter, RotateCcw, X, SlidersHorizontal } from 'lucide-react';

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'All';
  const initialBrand = searchParams.get('brand') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedSort, setSelectedSort] = useState<'default' | 'name-asc' | 'brand-asc'>('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state with URL parameter changes (crucial for clicking brand/category links when already on page)
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
    setSelectedBrand(searchParams.get('brand') || 'All');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  // Update URL parameters when state changes
  useEffect(() => {
    const params: { [key: string]: string } = {};
    if (selectedCategory !== 'All') params.category = selectedCategory;
    if (selectedBrand !== 'All') params.brand = selectedBrand;
    if (searchQuery.trim()) params.q = searchQuery;
    setSearchParams(params, { replace: true });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      // Category Filter
      if (selectedCategory !== 'All' && prod.category !== selectedCategory) {
        return false;
      }
      // Brand Filter
      if (selectedBrand !== 'All' && prod.brand !== selectedBrand) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = prod.name.toLowerCase().includes(q);
        const matchBrand = prod.brand.toLowerCase().includes(q);
        const matchCategory = prod.category.toLowerCase().includes(q);
        const matchDesc = prod.shortDesc.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCategory && !matchDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (selectedSort === 'brand-asc') {
        return a.brand.localeCompare(b.brand);
      }
      return 0;
    });
  }, [selectedCategory, selectedBrand, searchQuery, selectedSort]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedSort('default');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Water Solutions Catalog
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Complete range of water purifiers, softeners, heat pumps, solar water heaters, and booster systems.
            </p>
          </div>
          
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="sm:hidden w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-tgmc-navy text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>{showMobileFilters ? 'Hide Filters' : 'Show Filter Controls'}</span>
          </button>
        </div>

        {/* Filter Controls Bar (Responsive Collapsible on Mobile) */}
        <div className={`${showMobileFilters ? 'block' : 'hidden'} sm:block bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-card mb-6 sm:mb-8 space-y-4`}>
          
          {/* Search Bar & Reset */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={selectedSort}
                onChange={(e: any) => setSelectedSort(e.target.value)}
                className="flex-1 md:flex-none px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none"
              >
                <option value="default">Sort by Default</option>
                <option value="name-asc">Sort by Name (A-Z)</option>
                <option value="brand-asc">Sort by Brand (A-Z)</option>
              </select>

              {(selectedCategory !== 'All' || selectedBrand !== 'All' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="px-3.5 py-2.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills: Categories */}
          <div className="space-y-1.5">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Filter by Category:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-[150px] overflow-y-auto pr-2 scrollbar-thin">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-tgmc-navy text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Pills: Brands */}
          <div className="space-y-1.5 border-t border-slate-100 pt-3">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Filter by Brand:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-[150px] overflow-y-auto pr-2 scrollbar-thin">
              <button
                onClick={() => setSelectedBrand('All')}
                className={`px-3 py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedBrand === 'All'
                    ? 'bg-tgmc-blue text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Brands
              </button>
              {BRANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.name)}
                  className={`px-3 py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedBrand === b.name
                      ? 'bg-tgmc-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <p className="text-xs font-semibold text-slate-500">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> products
          </p>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto space-y-4">
            <Filter className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">No Products Found</h3>
            <p className="text-xs text-slate-500">
              No products match your current filters. Try resetting the filters or searching for another term.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 text-xs font-bold text-white bg-tgmc-navy rounded-xl cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
