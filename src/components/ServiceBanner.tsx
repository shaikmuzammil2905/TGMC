import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, UserCheck, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface ServiceBannerProps {
  onOpenEnquiry: () => void;
}

export const ServiceBanner: React.FC<ServiceBannerProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-tgmc-light border border-tgmc-blue/30 flex items-center justify-center shrink-0 shadow-inner">
              <UserCheck className="w-9 h-9 text-tgmc-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Sales & Service Support
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                We are here to help you with the best water purification, heat pump, and water softeners solutions in Bangalore.
              </p>
              <p className="text-xs text-tgmc-blue font-semibold mt-1">
                Location: {COMPANY_DETAILS.address} | Phone: {COMPANY_DETAILS.phone}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/contact"
              className="flex-1 md:flex-none px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-tgmc-navy to-tgmc-blue hover:from-tgmc-blue hover:to-tgmc-navy rounded-2xl shadow-lg shadow-tgmc-navy/20 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex-1 md:flex-none px-5 py-3.5 text-sm font-bold text-tgmc-navy bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-tgmc-blue" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
