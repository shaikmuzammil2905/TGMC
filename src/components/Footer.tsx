import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { useData } from '../context/DataContext';

interface FooterProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const { contactSettings: COMPANY_DETAILS } = useData();
  const formattedWhatsApp = COMPANY_DETAILS.whatsapp.startsWith('91') 
    ? `+91 ${COMPANY_DETAILS.whatsapp.slice(2, 7)} ${COMPANY_DETAILS.whatsapp.slice(7)}` 
    : COMPANY_DETAILS.whatsapp;

  return (
    <footer className="bg-tgmc-dark text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-white p-1 rounded-lg">
                <img src="/logo.png" alt="TGMC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white font-heading tracking-tight" title="The General Material Corporation">TGMC</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-0.5 mb-1">
                  The General Material Corporation
                </p>
                <p className="text-xs text-tgmc-cyan font-medium">Pure Water. Better Life.</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sales, installation, and technical support for water softeners, RO purifiers, heat pumps, solar water heaters, and commercial water systems in Bangalore.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-tgmc-cyan shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <a 
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-xs text-white hover:text-tgmc-cyan font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-tgmc-cyan shrink-0" />
                <span>Phone: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Services
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Brands
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Catalog Abstractions Col 3 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-b border-slate-800 pb-2">
              Our Abstractions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/products?category=Water Softener" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Hard Water Softeners
                </Link>
              </li>
              <li>
                <Link to="/products?category=Solar Water Heater" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Solar Water Heaters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Heat Pump" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Heat Pump Water Heaters
                </Link>
              </li>
              <li>
                <Link to="/products?category=Pressure Pump" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Pressure Booster Pumps
                </Link>
              </li>
              <li>
                <Link to="/products?category=Commercial RO" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-tgmc-cyan" /> Commercial RO Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Business Hours Col 4 */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-b border-slate-800 pb-2">
              Quick Actions
            </h4>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-tgmc-blue to-tgmc-cyan rounded-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Best Price Quote</span>
              </button>
              
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent('Hello TGMC, I need information about water purification products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us ({formattedWhatsApp})</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-tgmc-cyan" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-tgmc-cyan" />
                <span>Sales & Technical Enquiry Support</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bangalore Location Service Partner</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.company_name || 'TGMC'} - Pure Water. Better Life. All rights reserved.</p>
          <p className="text-slate-400">Hesaragatta Road, Bangalore – 560073</p>
        </div>
      </div>
    </footer>
  );
};
