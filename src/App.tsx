import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { ContactPopupModal } from './components/ContactPopupModal';
import { WhatsAppFloatingBtn } from './components/WhatsAppFloatingBtn';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BrandsPage } from './pages/BrandsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top component on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState('');

  const handleOpenEnquiry = (productName: string = '') => {
    setEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryProduct('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-tgmc-blue selection:text-white">
        
        {/* Sticky Top Header */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Page Content View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products" element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/product/:slug" element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/brands" element={<BrandsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Mobile Bottom Navigation matching TMC (1).png */}
        <MobileBottomNav onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Floating Sticky WhatsApp Quick Access Button */}
        <WhatsAppFloatingBtn />

        {/* Global Enquiry Popup Modal */}
        <ContactPopupModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseEnquiry}
          initialProduct={enquiryProduct}
        />

      </div>
    </Router>
  );
};

export default App;
