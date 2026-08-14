import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
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

// Admin imports
import { supabase } from './supabaseClient';
import { DataProvider } from './context/DataContext';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageHome } from './pages/admin/ManageHome';
import { ManageProducts } from './pages/admin/ManageProducts';
import { ManageBrands } from './pages/admin/ManageBrands';
import { ManageServices } from './pages/admin/ManageServices';
import { ManageAboutContact } from './pages/admin/ManageAboutContact';
import { ManageInquiries } from './pages/admin/ManageInquiries';
import { Loader2 } from 'lucide-react';

// Scroll to top component on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Protected admin routing checker
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
};

// Public layout wrapper to isolate public headers/footers from Admin CMS viewports
const PublicLayout: React.FC<{
  onOpenEnquiry: (productName?: string) => void;
  isEnquiryOpen: boolean;
  onCloseEnquiry: () => void;
  enquiryProduct: string;
}> = ({ onOpenEnquiry, isEnquiryOpen, onCloseEnquiry, enquiryProduct }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-tgmc-blue selection:text-white">
      {/* Sticky Top Header */}
      <Navbar onOpenEnquiry={onOpenEnquiry} />

      {/* Page Content View */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer onOpenEnquiry={onOpenEnquiry} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav onOpenEnquiry={() => onOpenEnquiry()} />

      {/* Floating Sticky WhatsApp Quick Access Button */}
      <WhatsAppFloatingBtn />

      {/* Global Enquiry Popup Modal */}
      <ContactPopupModal
        isOpen={isEnquiryOpen}
        onClose={onCloseEnquiry}
        initialProduct={enquiryProduct}
      />
    </div>
  );
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
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/admin" element={<ProtectedRoute><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/home" element={<ProtectedRoute><AdminLayout><ManageHome /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/products" element={<ProtectedRoute><AdminLayout><ManageProducts /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/brands" element={<ProtectedRoute><AdminLayout><ManageBrands /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute><AdminLayout><ManageServices /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/about" element={<ProtectedRoute><AdminLayout><ManageAboutContact /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/contact" element={<ProtectedRoute><AdminLayout><ManageAboutContact /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/inquiries" element={<ProtectedRoute><AdminLayout><ManageInquiries /></AdminLayout></ProtectedRoute>} />

          {/* Public website layout wrapper */}
          <Route element={<PublicLayout 
            onOpenEnquiry={handleOpenEnquiry} 
            isEnquiryOpen={isEnquiryOpen} 
            onCloseEnquiry={handleCloseEnquiry} 
            enquiryProduct={enquiryProduct} 
          />}>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products" element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/product/:slug" element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/brands" element={<BrandsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;

