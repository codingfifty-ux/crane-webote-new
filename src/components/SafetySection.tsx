import React from 'react';
import { ShieldCheck, FileCheck, HardHat, AlertTriangle, CheckCircle2, Award, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

export const SafetySection: React.FC = () => {
  const compliancePoints = [
    {
      title: 'NYC DOB Crane Notifications & Permits',
      desc: 'Complete CD-4 and CD-5 notice filings with the NYC Department of Buildings Crane & Derricks division for all mobile equipment.'
    },
    {
      title: 'NYC DOT Street & Sidewalk Closures',
      desc: 'Coordination with NYC Department of Transportation for street closure permits, parking lane holds, and pedestrian safety barricades.'
    },
    {
      title: 'Licensed NYC Master Riggers On-Site',
      desc: 'Critical and high-tonnage lifts are planned and directly supervised by licensed Master Riggers with decades of metropolitan experience.'
    },
    {
      title: 'Engineered Lift Plans (PE Stamped)',
      desc: 'Full AutoCAD rigging drawings, ground bearing pressure calculations, and outrigger pad matting stamped by licensed Professional Engineers.'
    },
    {
      title: 'NCCCO Certified Operators',
      desc: 'All crane operators hold current National Commission for the Certification of Crane Operators (NCCCO) and OSHA 30 credentials.'
    },
    {
      title: '$10,000,000 Comprehensive Insurance',
      desc: 'Full general liability, rigger’s liability, and cargo insurance protecting property owners, general contractors, and pedestrians.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Site Survey & Lift Radius Assessment',
      desc: 'Our rigging engineer inspects jobsite access, overhead utilities, vault restrictions, and underground subway lines.'
    },
    {
      step: '02',
      title: 'CAD Engineering & PE-Stamped Plans',
      desc: 'Drafting lift drawings indicating crane capacity, boom extension, outrigger loads, and precise drop radii.'
    },
    {
      step: '03',
      title: 'Expedited DOB & DOT Permitting',
      desc: 'Securing municipal authorizations, parking holds, traffic diversion routes, and NYPD transit coordination.'
    },
    {
      step: '04',
      title: 'Execution with Certified Riggers',
      desc: 'Outriggers set on engineered mats, flaggers established, radio communication tested, and seamless pick completed.'
    }
  ];

  return (
    <section id="permits" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 text-amber-400 font-black text-xs uppercase tracking-wider rounded border border-amber-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Turnkey Regulatory & Safety Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tight">
            NYC DOB Permits & Rigging Safety
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            NYC crane regulations are among the strictest in the world. RAS Crane eliminates administrative bottlenecks by providing turnkey permit expediting, engineered lift plans, and certified rigging teams.
          </p>
        </div>

        {/* 6-Grid Compliance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compliancePoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 p-6 rounded-lg hover:border-amber-500/50 transition-colors space-y-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase font-heading">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-11">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Compliant Lift Process Banner */}
        <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">
                How We Manage Your Pick
              </span>
              <h3 className="text-2xl font-black font-heading text-white uppercase mt-0.5">
                Turnkey 4-Step NYC Crane Process
              </h3>
            </div>
            <div className="text-xs font-bold text-slate-300 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
              Zero Headache for General Contractors
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="space-y-2 relative">
                <div className="text-3xl font-black font-heading text-amber-500">
                  {step.step}
                </div>
                <h4 className="text-sm font-bold text-white uppercase">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
