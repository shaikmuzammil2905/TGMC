import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ValueProps } from '../components/ValueProps';
import { ProductCard } from '../components/ProductCard';
import { DeltaGreenSection } from '../components/DeltaGreenSection';
import { CommercialSection } from '../components/CommercialSection';
import { BrandsSection } from '../components/BrandsSection';
import { ServiceBanner } from '../components/ServiceBanner';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ChevronRight, Filter, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface HomePageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter products for homepage grid
  const displayedProducts = PRODUCTS.filter((prod) => {
    if (selectedCategory === 'All') return true;
    return prod.category === selectedCategory;
  });

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section matching TMC (1).png */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Value Propositions Badges (Quality Products, Expert Support, Prompt Service) */}
      <AnimatedSection>
        <ValueProps />
      </AnimatedSection>

      {/* 3. Our Products Section matching TMC (1).png */}
      <AnimatedSection>
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-tgmc-blue uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Featured Solutions</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                  Our Products
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Browse our complete range of water softeners, RO purifiers, heat pumps & motors.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-tgmc-navy hover:text-tgmc-blue transition-colors self-start sm:self-auto"
              >
                <span>View All Products</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-tgmc-navy text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Numbered Product Cards Grid (Matching TMC 1.png 1..7 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenEnquiry={onOpenEnquiry}
                />
              ))}
            </div>

            {/* View All Callout */}
            <div className="mt-12 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue hover:from-tgmc-blue hover:to-tgmc-navy rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore All {PRODUCTS.length} Products</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 4. Authorised Distributor DELTA GREEN Section */}
      <AnimatedSection>
        <DeltaGreenSection onOpenEnquiry={onOpenEnquiry} />
      </AnimatedSection>

      {/* 5. Commercial Water Solutions Section */}
      <AnimatedSection>
        <CommercialSection onOpenEnquiry={onOpenEnquiry} />
      </AnimatedSection>

      {/* 6. Trusted Brands Showcase */}
      <AnimatedSection>
        <BrandsSection />
      </AnimatedSection>

      {/* 7. Sales & Service Support Callout Banner */}
      <AnimatedSection>
        <ServiceBanner onOpenEnquiry={() => onOpenEnquiry('Sales & Service Support')} />
      </AnimatedSection>

      {/* 8. Bottom Contact CTA Banner */}
      <AnimatedSection>
        <section className="py-14 bg-gradient-to-r from-tgmc-navy via-[#003d75] to-tgmc-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Looking for the Right Water Solution?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need and our expert sales & technical team in Bangalore will help you choose the right product.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3.5 text-sm font-bold text-tgmc-navy bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>
              
              <a
                href="https://wa.me/919964750573"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:9964750573"
                className="px-6 py-3.5 text-sm font-bold text-white bg-white/20 hover:bg-white/30 rounded-full transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 9964750573</span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
};

