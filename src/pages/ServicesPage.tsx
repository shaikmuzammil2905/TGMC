import React from 'react';
import { 
  ShoppingBag, 
  Wrench, 
  Droplet, 
  Flame, 
  Gauge, 
  Factory, 
  Headphones, 
  Phone, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface ServicesPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  const servicesList = [
    {
      title: 'Product Sales',
      icon: ShoppingBag,
      desc: 'Supply of authentic water softeners, drinking RO purifiers, heat pumps, solar water heaters, pressure pumps, and commercial water plants.',
      points: ['Original manufacturer products', 'Transparent product guidance', 'Residential & commercial supply']
    },
    {
      title: 'Installation Support',
      icon: Wrench,
      desc: 'Professional installation assistance and plumbing setup for water softeners, filtration vessels, RO purifiers, and heat pump water heaters.',
      points: ['Experienced technical team', 'Plumbing & electrical guidance', 'Proper fitting & site testing']
    },
    {
      title: 'Water Purification Solutions',
      icon: Droplet,
      desc: 'Custom pre-filtration, iron removal, sand filtration, and drinking RO purification for hard water, borewell, or municipal water supplies.',
      points: ['Hard water softeners', 'Borewell iron filter tanks', 'Under-sink & countertop RO purifiers']
    },
    {
      title: 'Heat Pump Solutions',
      icon: Flame,
      desc: 'Residential and commercial heat pump water heating systems for all-weather 24x7 hot water with energy efficient air-source technology.',
      points: ['Delta Green & Zero B heat pumps', '200 LTR to 10000 LTR capacities', 'Residential & enterprise systems']
    },
    {
      title: 'Pump Solutions',
      icon: Gauge,
      desc: 'High performance water pressure booster pumps and submersible sump motors for uniform pressure in showers and drainage management.',
      points: ['Grundfos & Kirloskar pressure pumps', 'Automatic pressure controllers', 'Submersible sump motors']
    },
    {
      title: 'Commercial RO Solutions',
      icon: Factory,
      desc: 'Heavy-duty industrial reverse osmosis plants ranging from 25 LPH up to 1000 LPH for offices, restaurants, hospitals, and factories.',
      points: ['25 LPH to 1000 LPH plants', 'Stainless steel skid mounting', 'Membrane pre-treatment']
    },
    {
      title: 'Service & Support',
      icon: Headphones,
      desc: 'Ongoing product-related technical guidance, filter cartridge replacement support, membrane servicing, and customer support.',
      points: ['Bangalore local support', 'Hesaragatta Road location desk', 'Prompt technical assistance']
    }
  ];

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
