import React, { useState, useEffect } from 'react';
import { Calculator, Check, PhoneCall, ArrowRight, ShieldCheck, Clock, MapPin, Send, AlertCircle, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/craneData';

interface QuoteCalculatorProps {
  initialService?: string;
  initialTruck?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialService, initialTruck }) => {
  const [liftType, setLiftType] = useState<string>('hvac');
  const [weightTons, setWeightTons] = useState<number>(5);
  const [reachHeightFt, setReachHeightFt] = useState<number>(60);
  const [siteCondition, setSiteCondition] = useState<string>('street');
  const [timeframe, setTimeframe] = useState<string>('scheduled');

  // Contact form
  const [contractorName, setContractorName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [borough, setBorough] = useState<string>('Manhattan');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('hvac') || initialService.toLowerCase().includes('chiller')) setLiftType('hvac');
      else if (initialService.toLowerCase().includes('steel')) setLiftType('steel');
      else if (initialService.toLowerCase().includes('machinery')) setLiftType('machinery');
      else if (initialService.toLowerCase().includes('boom') || initialService.toLowerCase().includes('knuckle')) setLiftType('boom_truck');
      else if (initialService.toLowerCase().includes('emergency')) {
        setLiftType('emergency');
        setTimeframe('emergency');
      }
    }
  }, [initialService]);

  useEffect(() => {
    if (initialTruck) {
      if (initialTruck.toLowerCase().includes('boom')) setLiftType('boom_truck');
      else if (initialTruck.toLowerCase().includes('110') || initialTruck.toLowerCase().includes('100')) {
        setWeightTons(25);
        setReachHeightFt(140);
      }
    }
  }, [initialTruck]);

  // Determine Recommended Crane Type
  const getRecommendation = () => {
    if (siteCondition === 'tight_alley') {
      return {
        truck: 'Palfinger PK 53002-SH Knuckleboom (40-Ton)',
        desc: 'Articulating boom provides maneuverability around building balconies and narrow urban alleyways.',
        permitsNeeded: 'NYC DOT Street Closure & Pedestrian Barricade',
        crew: '1 NCCCO Operator + 1 Master Rigger'
      };
    }
    if (weightTons > 30 || reachHeightFt > 150) {
      return {
        truck: 'Grove TMS9000E 110-Ton Hydraulic Truck Crane',
        desc: 'High-tonnage hydraulic crane with 237 ft tip height, engineered for multi-story rooftop picks and heavy steel.',
        permitsNeeded: 'NYC DOB CD-4 Crane Notice & DOT Street Closure',
        crew: '1 NCCCO Operator + 2 Riggers + Traffic Flaggers'
      };
    }
    if (weightTons > 15 || reachHeightFt > 90) {
      return {
        truck: 'Liebherr LTM 1090 100-Ton All-Terrain Crane',
        desc: 'All-wheel steer compact 4-axle chassis with high capacity and extended telescoping reach.',
        permitsNeeded: 'NYC DOB Notice & Engineered Lift Plan',
        crew: '1 NCCCO Operator + 1 Master Rigger'
      };
    }
    return {
      truck: 'Manitex 30102C 30-Ton Commercial Boom Truck',
      desc: 'Rapid street setup with Peterbilt chassis, ideal for standard HVAC chillers and structural picks.',
      permitsNeeded: 'Standard NYC DOT Street Closure Hold',
      crew: '1 NCCCO Operator + 1 Rigger'
    };
  };

  const rec = getRecommendation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs uppercase tracking-wider rounded border border-amber-300">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Crane Lift Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 uppercase tracking-tight">
            Calculate Your Crane Requirements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your load weight, working reach, and site access conditions to receive an immediate equipment recommendation and request an official dispatch proposal.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Parameter Controls */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div>
              <label className="block text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
                1. What are you lifting?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'hvac', label: 'Rooftop HVAC / Chiller' },
                  { id: 'steel', label: 'Structural Steel / Beams' },
                  { id: 'machinery', label: 'Plant Machinery / Press' },
                  { id: 'boom_truck', label: 'Boom Truck Pick' },
                  { id: 'glass', label: 'Glass / Balcony Panels' },
                  { id: 'emergency', label: 'Emergency / Recovery' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLiftType(item.id)}
                    className={`py-2.5 px-3 rounded text-xs font-bold text-center border transition-all ${
                      liftType === item.id
                        ? 'bg-slate-950 text-amber-400 border-slate-950 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders: Weight & Height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase text-slate-700">Estimated Weight</span>
                  <span className="text-sm font-black text-amber-600 font-mono">{weightTons} Tons ({weightTons * 2000} lbs)</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={weightTons}
                  onChange={(e) => setWeightTons(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 Ton</span>
                  <span>50 Tons</span>
                  <span>100 Tons</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black uppercase text-slate-700">Working Height / Reach</span>
                  <span className="text-sm font-black text-amber-600 font-mono">{reachHeightFt} Feet</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={240}
                  step={5}
                  value={reachHeightFt}
                  onChange={(e) => setReachHeightFt(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>20 ft</span>
                  <span>120 ft</span>
                  <span>240 ft</span>
                </div>
              </div>
            </div>

            {/* Site Condition & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
                  2. Site Setup Access
                </label>
                <select
                  value={siteCondition}
                  onChange={(e) => setSiteCondition(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded text-xs font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="street">Standard City Street (Street Closure)</option>
                  <option value="tight_alley">Narrow Alley / Tight Urban Clearance</option>
                  <option value="open_yard">Open Commercial Construction Lot</option>
                  <option value="indoor">Indoor Plant / Factory Bay</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
                  3. Project Timeframe
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded text-xs font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="scheduled">Standard Scheduled Project (1-2 Weeks)</option>
                  <option value="urgent">Urgent Dispatch (Next 48 Hours)</option>
                  <option value="weekend">Weekend / Sunday Street Closure</option>
                  <option value="emergency">24/7 Immediate Emergency Dispatch</option>
                </select>
              </div>
            </div>

            {/* Equipment Recommendation Box */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-5 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 block">
                Calculated Equipment Solution:
              </span>
              <h3 className="text-lg font-black font-heading text-slate-950 uppercase">
                {rec.truck}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {rec.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] font-bold text-slate-800">
                <div>• Required Permits: <span className="text-amber-900">{rec.permitsNeeded}</span></div>
                <div>• Crew Included: <span className="text-amber-900">{rec.crew}</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Formal Proposal Request */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            {submitted ? (
              <div className="my-auto text-center space-y-4 py-8 animate-fadeIn">
                <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black uppercase text-white font-heading">
                  Proposal Request Dispatched!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{contractorName || 'Contractor'}</strong>. Our NYC lift coordinators have received your parameters ({weightTons}T load at {reachHeightFt}ft). We will call you at <strong>{phone}</strong> with confirmation and written rates.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Or Call Immediately: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-amber-400 text-xs font-black uppercase tracking-widest block">
                    Fast Turnaround
                  </span>
                  <h3 className="text-xl font-black font-heading text-white uppercase mt-0.5">
                    Request Written Proposal
                  </h3>
                  <p className="text-xs text-slate-400">
                    Receive equipment availability, engineered lift details & pricing.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Your Name or Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / Skyline Mechanical"
                    value={contractorName}
                    onChange={(e) => setContractorName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Direct Phone (Required)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(212) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="info@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      NYC Borough
                    </label>
                    <select
                      value={borough}
                      onChange={(e) => setBorough(e.target.value)}
                      className="w-full px-2.5 py-2.5 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>Manhattan</option>
                      <option>Brooklyn</option>
                      <option>Queens</option>
                      <option>Bronx</option>
                      <option>Staten Island</option>
                      <option>Tri-State / NJ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Special Jobsite Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Needs street closure permit, weekend pick, subway vault on street..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="quote-calc-submit-btn"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-black rounded text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit for Written Quote</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Instant preliminary response • No obligation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
