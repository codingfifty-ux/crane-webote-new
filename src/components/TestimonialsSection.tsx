import React from 'react';
import { TESTIMONIALS } from '../data/craneData';
import { Star, ShieldCheck, Quote, Building2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider rounded border border-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Commercial Contractor Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 uppercase tracking-tight">
            What NYC General Contractors Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Trusted by premier commercial builders, mechanical engineering firms, and industrial plant managers across New York and the tri-state area.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {review.role} • {review.company}
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded uppercase">
                  {review.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
