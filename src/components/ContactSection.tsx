import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Instagram, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface ContactSectionProps {
  initialService?: string;
  initialTruck?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialTruck }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Mobile Hydraulic Crane Rental',
    borough: 'Manhattan',
    urgency: 'Scheduled Project',
    notes: initialTruck ? `Interested in: ${initialTruck}` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Dispatch & Contractor Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-400 font-black text-xs uppercase tracking-wider rounded">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Immediate Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white uppercase tracking-tight">
              Get in Touch with <br />
              <span className="text-amber-400">RAS Crane Service</span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Need a mobile crane, knuckleboom, or heavy rigging crew for your upcoming job? Call our 24/7 dispatch desk directly or submit your project details for an immediate quote.
            </p>

            {/* Direct Phone Buttons */}
            <div className="space-y-3 pt-2">
              <a
                id="contact-main-phone"
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded bg-amber-500 text-slate-950 flex items-center justify-center font-black group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                    24/7 Emergency Dispatch
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors font-mono">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                id="contact-nyc-phone"
                href={`tel:${COMPANY_INFO.localPhone}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded bg-slate-800 text-amber-400 flex items-center justify-center font-black group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                    NYC Local Dispatch Desk
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors font-mono">
                    {COMPANY_INFO.localPhone}
                  </span>
                </div>
              </a>
            </div>

            {/* Coverage & Instagram */}
            <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span><strong>Coverage:</strong> {COMPANY_INFO.coverageArea}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.license} • {COMPANY_INFO.insurance}</span>
              </div>
            </div>

            {/* Instagram Link Banner */}
            <div className="pt-2">
              <a
                id="contact-instagram-cta"
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/50 text-amber-400 font-bold text-xs hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-wider"
              >
                <Instagram className="w-4 h-4" />
                <span>See Our Cranes in Action: {COMPANY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Lift Quote & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border-2 border-slate-800 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-amber-400 font-black text-xs uppercase tracking-widest block mb-1">
                  Online Lift Request
                </span>
                <h3 className="text-2xl font-black font-heading text-white uppercase">
                  Request a Free Crane Quote
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below and an experienced rigging coordinator will contact you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-amber-500/10 border border-amber-500/50 rounded-lg p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase">Quote Request Submitted</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Our NYC dispatch supervisor has received your lift inquiry and will review crane availability and DOB permitting requirements. We will call you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 underline font-bold uppercase tracking-wider mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Contact / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Apex Construction"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Phone Number (Required) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(212) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Borough / Location *
                      </label>
                      <select
                        value={formData.borough}
                        onChange={(e) => setFormData({ ...formData, borough: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Manhattan</option>
                        <option>Brooklyn</option>
                        <option>Queens</option>
                        <option>Bronx</option>
                        <option>Staten Island</option>
                        <option>Long Island / Tri-State</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Mobile Hydraulic Crane Rental</option>
                        <option>Boom Truck & Knuckleboom</option>
                        <option>Rooftop HVAC & Chiller Placement</option>
                        <option>Structural Steel Erection</option>
                        <option>Machinery & Plant Rigging</option>
                        <option>DOB Crane Permitting & Lift Plan</option>
                        <option>24/7 Emergency Dispatch</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Timeline / Schedule
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Immediate (24-Hour Emergency)</option>
                        <option>Within 48 Hours</option>
                        <option>This Weekend (Street Closure)</option>
                        <option>Next Week</option>
                        <option>Scheduled Project (1-4 Weeks)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Project Notes / Estimated Weight & Height
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need to hoist a 6-ton chiller to 14th floor roof; street closure required on Saturday."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider rounded transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT LIFT QUOTE REQUEST</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>* Fast turnaround & confidential quotes</span>
                    <span className="text-amber-400 font-bold">24/7 Emergency Response</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
