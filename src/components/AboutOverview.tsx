import React from 'react';
import { ShieldCheck, Check, Phone, ArrowRight, Award, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface AboutOverviewProps {
  onOpenQuote: () => void;
}

export const AboutOverview: React.FC<AboutOverviewProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Jobsite Visual with Experience Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950">
              <img
                src="/assets/crane/ras-crane-main.jpg"
                alt="RAS Crane Service Commercial Truck and Rigging Fleet"
                className="w-full h-[400px] sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-amber-400 text-xs font-black uppercase tracking-wider block">
                  RAS Crane Service
                </span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">
                  Professional crane trucks, licensed master riggers, and rapid dispatch across NYC & Tri-State.
                </p>
              </div>
            </div>

            {/* Overlaid Gold Experience Stamp Badge */}
            <div className="absolute -bottom-6 -right-3 sm:right-6 bg-amber-500 text-slate-950 p-5 rounded-lg shadow-2xl border-2 border-slate-950 max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-6 h-6 text-slate-950" />
                <span className="text-2xl font-black font-heading leading-none">55+ YRS</span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-wider leading-tight">
                Combined Rigging & Crane Mastery
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Contractor Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider rounded border border-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Full-Service Crane & Rigging Contractor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 uppercase tracking-tight leading-tight">
              New York’s Trusted Mobile Crane & Rigging Specialists
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Operating cranes in New York City and metropolitan areas requires unmatched technical precision, strict regulatory compliance, and surgical execution. From tight street alleys and historic brownstones to active midtown avenues, <strong>RAS Crane</strong> provides the equipment, certified operators, and complete permit management to get your picks done safely and on schedule.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">
                    Turnkey NYC DOB & DOT Permit Management
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We handle Department of Buildings (DOB) crane notices, street & sidewalk closures, and pedestrian safety barricading.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">
                    Licensed Master Riggers & NCCCO Certified Operators
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Every lift is supervised by certified rigging specialists and experienced crane operators with flawless safety records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">
                    24/7 Rapid Emergency & Scheduled Crane Dispatch
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Whether you need a Sunday morning HVAC swap or urgent 2-hour storm emergency response, our dispatchers are always on call.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Dispatch Hotline Card */}
            <div className="bg-slate-950 text-white p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-md">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Direct Dispatch Line
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-xl sm:text-2xl font-black font-heading text-white hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 flex-shrink-0 shadow"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
