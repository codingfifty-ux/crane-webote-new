import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle, PhoneCall, ChevronRight, Truck, FileCheck, MapPin, Send, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreFleet }) => {
  // Quick Lead Capture Form in Hero (standard Rigging NYC / contractor feature)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Mobile Crane Rental',
    borough: 'Manhattan',
    urgency: 'Standard Project',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Crane Image with High-Contrast Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/crane/hero-crane.webp"
          alt="Heavy Mobile Crane Truck in Action"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80"></div>
        {/* Contractor Hazard Safety Line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Headline & Credential Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* NYC Master Rigger & Safety Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>NYC DOB Approved • NCCCO Certified • Master Riggers</span>
            </div>

            {/* Industrial Headline matching RiggingNYC */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-none uppercase">
              NYC & Metro <br />
              <span className="text-amber-500">Crane Rental & Rigging</span> <br />
              Services
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Full-service mobile hydraulic cranes and boom trucks from <strong>5 to 150+ tons</strong>. Providing turnkey lifting, licensed Master Riggers, NYC DOB filings, and DOT street closures across all five boroughs & the tri-state area.
            </p>

            {/* Key Trust Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-bold text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>NYC DOB & DOT Street Permits Handled</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>24/7 Emergency & Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>NCCCO Certified Operators & Rigging Crews</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>$10,000,000 Rigging Insurance Coverage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-request-quote-btn"
                onClick={onOpenQuote}
                className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>REQUEST LIFT QUOTE</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-fleet-btn"
                onClick={onExploreFleet}
                className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded border border-slate-700 hover:border-amber-500/50 flex items-center gap-2 transition-all"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>View Crane Fleet</span>
              </button>

              <a
                id="hero-call-dispatch-btn"
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-black text-sm py-2 transition-colors ml-1"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instant Crane Quote Box (Classic RiggingNYC Contractor Element) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 backdrop-blur-md border-2 border-slate-800 rounded-lg p-6 sm:p-7 shadow-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-amber-400 font-black text-xs tracking-widest uppercase block mb-1">
                  Immediate Dispatch & Estimates
                </span>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-white uppercase">
                  Get Free Crane Estimate
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fast response from our NYC master riggers & dispatch coordinators.
                </p>
              </div>

              {submitted ? (
                <div className="bg-amber-500/10 border border-amber-500/40 rounded p-5 text-center space-y-3 py-8 animate-fadeIn">
                  <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase">Lift Request Received!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our lead dispatcher is reviewing your lift parameters. We will call <strong>{formData.phone}</strong> within 15 minutes with equipment availability and rate details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 underline font-bold"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Mechanical Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Phone Number (Required for Dispatch)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(212) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-2.5 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Mobile Crane Rental</option>
                        <option>Boom Truck Service</option>
                        <option>Rooftop HVAC Chiller</option>
                        <option>Structural Steel Pick</option>
                        <option>Machinery Rigging</option>
                        <option>Emergency Recovery</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        NYC Borough / Area
                      </label>
                      <select
                        value={formData.borough}
                        onChange={(e) => setFormData({ ...formData, borough: e.target.value })}
                        className="w-full px-2.5 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
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

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Urgency / Timeline
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-2.5 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>Immediate / 24hr Emergency</option>
                      <option>Next 24 - 48 Hours</option>
                      <option>This Weekend (Street Closure)</option>
                      <option>Upcoming Scheduled Project</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="hero-form-submit-btn"
                    className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black rounded text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
                  >
                    <span>REQUEST CRANE ESTIMATE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>No obligation quote</span>
                    <span className="text-amber-400 font-semibold">24/7 Rapid Response</span>
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
