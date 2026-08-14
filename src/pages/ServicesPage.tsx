import React from 'react';
import { Loader2, HelpCircle, CheckCircle2, Phone } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useData } from '../context/DataContext';

interface ServicesPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  const { services: dbServices, contactSettings: COMPANY_DETAILS, loading } = useData();

  // Dynamic Lucide Icon mapper helper
  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || HelpCircle;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-tgmc-blue" />
      </div>
    );
  }

  const servicesList = dbServices.map(s => ({
    title: s.name,
    icon: getIconComponent(s.imageUrl || 'Wrench'),
    desc: s.description,
    points: s.features || []
  }));


  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            Sales & Technical Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Our Services & Solutions
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            TGMC provides complete sales, installation guidance, and technical support for domestic and commercial water management systems in Hesaragatta Road, Bangalore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-tgmc-navy text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-tgmc-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-1.5 pt-2">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-tgmc-navy bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center cursor-pointer"
                >
                  Enquire About {service.title}
                </button>
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div className="bg-gradient-to-r from-tgmc-navy via-[#003d75] to-tgmc-blue text-white rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading">Need Service or Sales Assistance?</h3>
            <p className="text-xs text-slate-200 mt-1">
              Contact TGMC Bangalore Sales & Support Team directly at <strong>{COMPANY_DETAILS.phone}</strong>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Sales & Service Support')}
              className="px-5 py-3 text-xs font-bold text-tgmc-navy bg-white hover:bg-slate-100 rounded-xl transition-all shadow cursor-pointer"
            >
              Request Support
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-5 py-3 text-xs font-bold text-white bg-white/20 hover:bg-white/30 rounded-xl transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
