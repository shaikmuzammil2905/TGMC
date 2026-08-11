import React, { useState } from 'react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/products';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [productInterested, setProductInterested] = useState(PRODUCTS[0].name);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobileNumber.replace(/[^0-9]/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
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
      }, 1500);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-tgmc-blue bg-tgmc-light px-3 py-1 rounded-full border border-tgmc-blue/20">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
            Contact TGMC Bangalore
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Have a question about water softeners, RO purifiers, heat pumps, or commercial water systems? Reach out to our team.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Location & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 space-y-5">
              <h2 className="text-xl font-bold text-slate-900 font-heading border-b border-slate-100 pb-3">
                Business Details
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tgmc-light flex items-center justify-center text-tgmc-navy shrink-0">
                    <MapPin className="w-5 h-5 text-tgmc-blue" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm font-heading">Address</strong>
                    <span className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tgmc-light flex items-center justify-center text-tgmc-navy shrink-0">
                    <Phone className="w-5 h-5 text-tgmc-blue" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm font-heading">Phone Number</strong>
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-tgmc-navy font-bold hover:underline text-sm">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm font-heading">WhatsApp Direct</strong>
                    <span className="text-emerald-700 font-bold">{COMPANY_DETAILS.formattedWhatsApp}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm font-heading">Business Hours</strong>
                    <span className="text-slate-500">Sales & Service Support Available</span>
                  </div>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="py-3 px-4 text-xs font-bold text-white bg-tgmc-navy hover:bg-slate-800 rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4 text-tgmc-cyan" />
                  <span>Call Now</span>
                </a>
                
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TGMC, I want to enquire about water solutions.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Location Map Placeholder / Embed */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-4 overflow-hidden">
              <h3 className="text-sm font-bold text-slate-900 font-heading mb-3 px-2">
                Hesaragatta Road Location Map
              </h3>
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="TGMC Location Hesaragatta Road Bangalore"
                  src={COMPANY_DETAILS.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Send Product Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below to receive a custom quote and technical information for your location in Bangalore.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-10 text-center flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 font-heading">Form Submitted!</h3>
                <p className="text-xs text-slate-600">
                  Redirecting to WhatsApp to send message to <strong>{COMPANY_DETAILS.formattedWhatsApp}</strong>...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:ring-2 focus:ring-tgmc-blue focus:outline-none ${
                        errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:ring-2 focus:ring-tgmc-blue focus:outline-none ${
                        errors.mobileNumber ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50 focus:bg-white'
                      }`}
                    />
                    {errors.mobileNumber && <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Product Interested In
                  </label>
                  <select
                    value={productInterested}
                    onChange={(e) => setProductInterested(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.brand} - {prod.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Requirement Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirement, location or any specific product queries..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-tgmc-blue focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp ({COMPANY_DETAILS.formattedWhatsApp})</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
