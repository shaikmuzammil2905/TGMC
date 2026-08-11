import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const WhatsAppFloatingBtn: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I am interested in your water purification and water heating products. Please share the details.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 group focus:outline-none"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
      </div>
      <span className="text-xs font-bold font-heading hidden sm:inline-block tracking-wide">
        WhatsApp Us
      </span>
    </a>
  );
};
