import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GovernmentScheme } from '../../types';
import { 
  Building2, 
  CheckCircle, 
  HelpCircle, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Search, 
  Info,
  Send
} from 'lucide-react';

export const GovtBenefitsAssistant: React.FC = () => {
  const { schemes, language, t, addToast } = useApp();

  const [age, setAge] = useState<number>(34);
  const [occupation, setOccupation] = useState<string>('Construction Mason / Scaffolder');
  const [incomeRange, setIncomeRange] = useState<string>('₹10,000 - ₹20,000 / month');
  const [state, setState] = useState<string>('Maharashtra / Delhi NCR');
  const [isRegistered, setIsRegistered] = useState<string>('Yes (e-Shram + BOCW Registered)');
  const [selectedSchemeForHelp, setSelectedSchemeForHelp] = useState<GovernmentScheme | null>(null);
  const [helpSubmitted, setHelpSubmitted] = useState<boolean>(false);

  const handleApplyHelp = (scheme: GovernmentScheme) => {
    setSelectedSchemeForHelp(scheme);
    setHelpSubmitted(false);
  };

  const submitHelpRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setHelpSubmitted(true);
    setTimeout(() => {
      addToast(
        'success',
        'Assistance Ticket Created! 🏛️',
        `NirmaanCare Welfare Officer will verify your ${selectedSchemeForHelp?.name} documents within 24 hours.`
      );
      setSelectedSchemeForHelp(null);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-white">{t('govtEligibleTitle')}</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Welfare Portal Integration
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{t('govtEligibleSubtitle')}</p>
          </div>
        </div>

        {/* Eligibility Questionnaire Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-5 pt-4 border-t border-slate-800">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Worker Age
            </label>
            <select
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
            >
              <option value={25}>18 - 25 Years</option>
              <option value={34}>26 - 45 Years (Ravi: 34)</option>
              <option value={52}>46 - 60 Years</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Occupation
            </label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
            >
              <option value="Construction Mason / Scaffolder">Construction Mason / Scaffolder</option>
              <option value="Rebar & Steel Worker">Rebar & Steel Worker</option>
              <option value="Crane & Heavy Operator">Crane & Heavy Operator</option>
              <option value="Daily Wage Laborer">Daily Wage Laborer</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Monthly Income
            </label>
            <select
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
            >
              <option value="Below ₹10,000 / month">Below ₹10,000 / month</option>
              <option value="₹10,000 - ₹20,000 / month">₹10,000 - ₹20,000 / month</option>
              <option value="₹20,000 - ₹35,000 / month">₹20,000 - ₹35,000 / month</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              State / Union Territory
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
            >
              <option value="Maharashtra / Delhi NCR">Maharashtra / Delhi NCR</option>
              <option value="Uttar Pradesh / Bihar">Uttar Pradesh / Bihar</option>
              <option value="Tamil Nadu / Karnataka">Tamil Nadu / Karnataka</option>
              <option value="West Bengal / Odisha">West Bengal / Odisha</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Worker Registration
            </label>
            <select
              value={isRegistered}
              onChange={(e) => setIsRegistered(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-teal-300 font-semibold outline-none focus:border-teal-500"
            >
              <option value="Yes (e-Shram + BOCW Registered)">Yes (e-Shram + BOCW)</option>
              <option value="e-Shram Only">e-Shram Only</option>
              <option value="Unregistered">Not Registered Yet</option>
            </select>
          </div>
        </div>
      </div>

      {/* Eligible Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {schemes.map((scheme) => {
          return (
            <div
              key={scheme.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all"
            >
              <div>
                {/* Scheme Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {scheme.id}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
                        {scheme.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1.5">
                      {language === 'hi' ? scheme.nameHi : language === 'ta' ? scheme.nameTa : scheme.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{scheme.sponsoringBody}</span>
                  </div>

                  {/* Match Score */}
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      {scheme.matchScore}% Match
                    </span>
                    <span className="text-[9px] text-slate-500 mt-0.5">High Eligibility</span>
                  </div>
                </div>

                {/* Benefits & Eligibility details */}
                <div className="py-3 space-y-2.5 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Financial Benefit Sum:
                    </span>
                    <span className="text-sm font-extrabold text-white block mt-0.5">
                      {scheme.benefitAmount}
                    </span>
                    <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                      {language === 'hi' ? scheme.benefitDescriptionHi : scheme.benefitDescription}
                    </p>
                  </div>

                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Eligibility Rule:
                    </span>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      {language === 'hi' ? scheme.eligibilityHi : language === 'ta' ? scheme.eligibilityTa : scheme.eligibility}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Required Documents:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {scheme.requiredDocuments.map((doc, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] flex items-center gap-1"
                        >
                          <FileText className="w-2.5 h-2.5 text-teal-400" />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar & Status */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-400">Status:</span>
                  <span className={`font-bold ${
                    scheme.applicationStatus === 'Active Beneficiary' ? 'text-emerald-400' :
                    scheme.applicationStatus === 'Application in Progress' ? 'text-amber-400' : 'text-teal-300'
                  }`}>
                    {scheme.applicationStatus}
                  </span>
                </div>

                <button
                  onClick={() => handleApplyHelp(scheme)}
                  className="py-2 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('getHelpApplying')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white">Official Government Verification Notice: </strong>
          Government benefit guidelines are sourced from public state welfare boards (BOCW) and Ministry of Labour portals. NirmaanCare acts as a facilitation concierge to help workers claim statutory benefits with zero paperwork friction.
        </div>
      </div>

      {/* Help Modal */}
      {selectedSchemeForHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Government Scheme Concierge</h4>
              </div>
              <button
                onClick={() => setSelectedSchemeForHelp(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300">
              You are requesting application assistance for: <strong className="text-amber-300">{selectedSchemeForHelp.name}</strong>.
            </p>

            <form onSubmit={submitHelpRequest} className="space-y-3">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Applicant Name:</span>
                  <span className="font-bold text-white">Ravi Kumar</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Aadhaar Last 4:</span>
                  <span className="font-bold text-white">8821</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>e-Shram UAN:</span>
                  <span className="font-bold text-teal-400">UAN-9842-1082-9912</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  Additional Notes / Case Details (Optional)
                </label>
                <textarea
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none focus:border-teal-500"
                  placeholder="Need assistance filing BOCW medical grant for recent foot injury..."
                />
              </div>

              <button
                type="submit"
                disabled={helpSubmitted}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
              >
                {helpSubmitted ? (
                  <span>Processing Application Assistance...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Application Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
