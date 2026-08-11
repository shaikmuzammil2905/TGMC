import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';

interface ContactPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const ContactPopupModal: React.FC<ContactPopupModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [productInterested, setProductInterested] = useState(initialProduct || PRODUCTS[0].name);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialProduct) {
      setProductInterested(initialProduct);
    }
  }, [initialProduct]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobileNumber.replace(/[^0-9]/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    const waText = `Hello TGMC, I am interested in ${productInterested}.\n\n*Name:* ${fullName}\n*Phone:* ${mobileNumber}${email ? `\n*Email:* ${email}` : ''}${message ? `\n*Message:* ${message}` : ''}\n\nPlease share the product details and quotation.`;
    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-tgmc-navy via-[#004d80] to-tgmc-blue p-6 text-white flex items-center justify-between">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-tgmc-yellow bg-tgmc-yellow/10 px-2.5 py-1 rounded-full border border-tgmc-yellow/20 mb-1">
              Product Enquiry
            </span>
            <h3 className="text-xl font-bold font-heading">Get Best Price & Quote</h3>
            <p className="text-xs text-slate-200 mt-1">
              {COMPANY_DETAILS.name} Sales & Service Support Bangalore
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close Enquiry Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form or Success View */}
        {isSubmitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
            <h4 className="text-2xl font-bold text-slate-900 font-heading">Enquiry Submitted!</h4>
            <p className="text-sm text-slate-600 max-w-xs">
              Opening WhatsApp to send your request directly to <strong>{COMPANY_DETAILS.formattedWhatsApp}</strong>...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-4 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all ${
                  errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="10-digit Mobile Number (e.g. 9876543210)"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className={`w-full px-4 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all ${
                  errors.mobileNumber ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                }`}
              />
              {errors.mobileNumber && <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Product Interested In */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Product Interested In
              </label>
              <select
                value={productInterested}
                onChange={(e) => setProductInterested(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.name}>
                    {prod.brand} - {prod.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Message / Requirement Details <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Share your requirement, site location or questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Form CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Send Enquiry via WhatsApp
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-tgmc-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-tgmc-blue" />
                Call Now
              </a>
            </div>
            
            <p className="text-[11px] text-center text-slate-500 pt-1">
              Direct Business Contact: <strong>{COMPANY_DETAILS.phone}</strong> | {COMPANY_DETAILS.address}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
