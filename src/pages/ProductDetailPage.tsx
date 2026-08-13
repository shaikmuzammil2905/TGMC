import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, COMPANY_DETAILS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  ChevronRight, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  MapPin,
  ArrowLeft,
  Info,
  Layers
} from 'lucide-react';

interface ProductDetailPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [zoomImage, setZoomImage] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 font-heading">Product Not Found</h2>
          <p className="text-xs text-slate-500">The product you are looking for does not exist or has been moved.</p>
          <Link to="/products" className="inline-block px-5 py-2.5 text-xs font-bold text-white bg-tgmc-navy rounded-xl">
            Back to Products Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Related Products from same brand or category
  const relatedProducts = PRODUCTS.filter(
    (p) => (p.brand === product.brand || p.category === product.category) && p.id !== product.id
  ).slice(0, 4);

  const whatsappMessage = `Hello TGMC, I am interested in ${product.name} (${product.brand}). Please share the product details and quotation.`;
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-tgmc-navy transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-tgmc-navy transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to={`/products?brand=${encodeURIComponent(product.brand)}`} className="hover:text-tgmc-navy transition-colors">
            {product.brand}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-tgmc-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to previous page</span>
        </button>

        {/* Main Product Details Card Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: HD Image & Zoom View */}
            <div className="lg:col-span-5 space-y-4">
              <div 
                className="relative aspect-square rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center cursor-zoom-in group overflow-hidden"
                onClick={() => setZoomImage(!zoomImage)}
              >
                {product.numberTag && (
                  <div className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-tgmc-navy text-white font-bold font-heading text-sm flex items-center justify-center shadow-md">
                    {product.numberTag}
                  </div>
                )}
                
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-contain transition-transform duration-300 ${zoomImage ? 'scale-125' : 'group-hover:scale-105'}`}
                />

                <span className="absolute bottom-3 right-3 text-[10px] font-semibold text-slate-500 bg-white/90 px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                  Click to Zoom Image
                </span>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                Official product photograph matching {product.brand} - {product.category}
              </p>
            </div>

            {/* Right Column: Title, Details & CTAs */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Brand & Distributor Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-tgmc-navy bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
                    {product.brand}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {product.isAuthorisedDistributor && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      Authorised Distributor
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  {product.name}
                </h1>

                {/* Overview */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.fullDesc}
                </p>

                {/* Price Label (No fake prices rule) */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pricing</span>
                    <h4 className="text-lg font-bold text-tgmc-navy font-heading">
                      {product.price ? `Price: ${product.price}` : 'Get Best Price & Quotation'}
                    </h4>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(product.name)}
                    className="px-4 py-2 text-xs font-bold text-white bg-tgmc-blue hover:bg-tgmc-navy rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    {product.price ? 'Enquire / Order' : 'Request Quote'}
                  </button>
                </div>

                {/* Key Features List */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                      Key Highlights & Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications List */}
                {product.applications && product.applications.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                      Applications & Suitability
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app) => (
                        <span key={app} className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specifications Notice Rule */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong>Technical Specifications:</strong> Specifications available on request. Please enquire or call our technical support team in Bangalore for detailed site requirements.
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => onOpenEnquiry(product.name)}
                    className="w-full py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue hover:from-tgmc-blue hover:to-tgmc-navy rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="w-full py-3.5 px-4 text-sm font-bold text-tgmc-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-tgmc-blue" />
                    <span>Call: {COMPANY_DETAILS.phone}</span>
                  </a>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  Location: {COMPANY_DETAILS.address} | Phone: {COMPANY_DETAILS.phone}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              Related {product.brand} & {product.category} Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProd) => (
                <ProductCard
                  key={relProd.id}
                  product={relProd}
                  onOpenEnquiry={onOpenEnquiry}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
