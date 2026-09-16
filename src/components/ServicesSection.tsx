import React, { useState } from 'react';
import { CRANE_SERVICES } from '../data/craneData';
import { CraneService } from '../types';
import { Check, ArrowRight, X, Phone, ShieldCheck, Wrench, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<CraneService | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WordPress Contractor Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider rounded border border-amber-300">
            Comprehensive Crane & Rigging Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">
            Our Crane & Rigging Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From multi-unit rooftop chiller swaps in downtown corridors to complex heavy structural steel and emergency response, our NCCCO operators deliver safe, turnkey crane operations.
          </p>
        </div>

        {/* 8-Card Contractor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRANE_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container with Capacity Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-[11px] px-2.5 py-1 rounded shadow uppercase">
                  {service.capacities}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 group-hover:text-amber-600 transition-colors uppercase leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`btn-details-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="text-[11px] font-bold text-slate-800 hover:text-amber-600 uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    id={`btn-quote-${service.id}`}
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase px-3 py-1.5 rounded transition-colors shadow-sm"
                  >
                    Book Lift
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 bg-slate-950">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 bg-slate-950/80 hover:bg-slate-900 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded uppercase">
                {selectedService.capacities}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <div>
                <h3 className="text-2xl font-black font-heading text-slate-900 uppercase">
                  {selectedService.title}
                </h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Service Features */}
              <div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
                  What’s Included with This Service:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Applications */}
              <div>
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
                  Typical Applications & Projects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.idealFor.map((app, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-black text-slate-900 px-4 py-2.5 rounded border border-slate-300 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call Dispatcher: {COMPANY_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    onSelectServiceForQuote(selectedService.title);
                    setSelectedService(null);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded shadow transition-colors"
                >
                  Book Quote for this Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
