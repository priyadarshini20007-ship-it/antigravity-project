import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, Download, Printer, CheckCircle2, Building, Calendar, FileText } from 'lucide-react';

export const ExecutiveReportModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const { employerWorkerCount, employerPlan, addToast } = useApp();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    addToast('success', 'Executive Report Downloaded', 'ABC_Constructions_ESG_Safety_Audit_Aug2026.pdf generated.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Top Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Executive Pitch & ESG Safety Audit Certificate</h3>
              <span className="text-[10px] text-slate-400 font-mono">Doc ID: REP-NC-2026-AUG</span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            ✕
          </button>
        </div>

        {/* Printable Document Paper */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-200 space-y-6 text-xs">
          
          {/* Header of Report */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-white">Nirmaan<span className="text-teal-400">Care</span></span>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.2 rounded font-bold">CERTIFIED</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Occupational Health & Labor Welfare Compliance</p>
            </div>
            <div className="text-right font-mono text-[10px] text-slate-400">
              <span>Date: 19 Aug 2026</span>
              <span className="block text-teal-400 font-bold">Period: Q3 FY 2026</span>
            </div>
          </div>

          {/* Company Profile */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Contractor / Employer</span>
              <span className="font-bold text-white text-sm block mt-0.5">ABC Constructions Infrastructure</span>
              <span className="text-slate-400 text-[10px]">CIN: U45200MH2012PLC19821</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Active Protection Plan</span>
              <span className="font-bold text-teal-300 text-sm block mt-0.5 capitalize">{employerPlan} Tier (₹150/worker/mo)</span>
              <span className="text-emerald-400 text-[10px] font-bold">100% Cashless Medical Net</span>
            </div>
          </div>

          {/* Audit Highlights */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
              Key Safety & Occupational Health Outcomes:
            </h5>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-lg font-black text-white block">{employerWorkerCount}</span>
                <span className="text-[9px] text-slate-400">Enrolled Workers</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-lg font-black text-emerald-400 block">-72%</span>
                <span className="text-[9px] text-slate-400">Accident Rate YoY</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-lg font-black text-amber-400 block">₹7.65 L</span>
                <span className="text-[9px] text-slate-400">Cashless Claims Settled</span>
              </div>
            </div>
          </div>

          {/* Statutory Compliance Checklist */}
          <div className="space-y-2">
            <h5 className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
              Statutory Labor Welfare Compliance Check:
            </h5>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>BOCW Welfare Board 1996 Medical Access Mandate: <strong className="text-emerald-300">100% Compliant</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>e-Shram National Database Integration: <strong className="text-emerald-300">Verified (488/500)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24x7 Emergency Level 1 Trauma Facility Tie-up: <strong className="text-emerald-300">Fortis & Apollo (Active)</strong></span>
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <div>
              <span className="block font-serif italic text-slate-200">Dr. Ananya Sharma, MD</span>
              <span>Chief Medical Officer, NirmaanCare</span>
            </div>
            <div className="text-right">
              <span className="block font-serif italic text-slate-200">Suresh Patel</span>
              <span>Head of Safety, ABC Constructions</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Certified Audit Report (PDF)</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
        </div>
      </div>
    </div>
  );
};
