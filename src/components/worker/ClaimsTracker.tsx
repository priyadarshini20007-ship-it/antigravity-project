import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Claim } from '../../types';
import { 
  FileText, 
  Zap, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  FileCheck, 
  Building, 
  Hospital, 
  Calendar, 
  IndianRupee,
  ShieldCheck,
  ChevronRight,
  UploadCloud,
  Eye
} from 'lucide-react';

export const ClaimsTracker: React.FC = () => {
  const { 
    claims, 
    autoFileNewClaim, 
    worker, 
    t, 
    updateClaimStage, 
    addToast 
  } = useApp();

  const [selectedClaimId, setSelectedClaimId] = useState<string>(claims[0]?.id || 'NC-10245');
  const [isAutoFiling, setIsAutoFiling] = useState(false);
  const [previewDocModal, setPreviewDocModal] = useState<{ name: string; category: string } | null>(null);

  const selectedClaim = claims.find(c => c.id === selectedClaimId) || claims[0];

  const handleAutoFileClick = () => {
    setIsAutoFiling(true);
    setTimeout(() => {
      const created = autoFileNewClaim('Workplace Scaffolding Slip & Tibia Fracture', 85000);
      setSelectedClaimId(created.id);
      setIsAutoFiling(false);
    }, 600);
  };

  const handleAdvanceStage = () => {
    if (!selectedClaim) return;
    const nextIdx = Math.min(selectedClaim.currentStageIndex + 1, selectedClaim.stages.length - 1);
    updateClaimStage(selectedClaim.id, nextIdx);
    addToast('info', 'Claim Timeline Advanced', `Stage moved to: ${selectedClaim.stages[nextIdx].title}`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Auto-File Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-teal-400" />
              {t('claimTrackingTitle')}
            </h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              100% Cashless
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Zero out-of-pocket hospital bills. Direct pre-authorization between NirmaanCare and hospitals.
          </p>
        </div>

        {/* 1-Click Auto-File Claim Button */}
        <button
          onClick={handleAutoFileClick}
          disabled={isAutoFiling}
          className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer disabled:opacity-50 shrink-0"
        >
          <Zap className="w-4 h-4 fill-slate-950" />
          <span>{isAutoFiling ? 'Auto-Generating Claim Form...' : t('autoFileClaimBtn')}</span>
        </button>
      </div>

      {/* Claims List Tabs (if multiple) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {claims.map((claim) => {
          const isSelected = claim.id === selectedClaimId;
          return (
            <button
              key={claim.id}
              onClick={() => setSelectedClaimId(claim.id)}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 border ${
                isSelected
                  ? 'bg-teal-500/20 border-teal-500 text-teal-300 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>Claim #{claim.id}</span>
              <span className="text-[10px] opacity-75">₹{claim.claimAmount.toLocaleString('en-IN')}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Claim Main Detail Card */}
      {selectedClaim && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          
          {/* Claim Metadata Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Claim ID: {selectedClaim.id}
                </span>
                <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                  selectedClaim.currentStageIndex >= 4
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                  ● {selectedClaim.stages[selectedClaim.currentStageIndex]?.title || selectedClaim.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1.5">{selectedClaim.incidentType}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                <span className="flex items-center gap-1.5">
                  <Hospital className="w-3.5 h-3.5 text-teal-400" />
                  {selectedClaim.hospitalName}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Incident: {selectedClaim.incidentDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-indigo-400" />
                  {selectedClaim.employerName}
                </span>
              </div>
            </div>

            {/* Claim Amount Pill */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:items-end justify-center shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Cashless Claim Sum
              </span>
              <div className="text-2xl font-black text-emerald-400 flex items-center mt-0.5">
                ₹{selectedClaim.claimAmount.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-teal-300 mt-0.5">
                Worker Co-Pay: <strong>₹0 (Zero)</strong>
              </span>
            </div>
          </div>

          {/* 6-Stage Visual Timeline */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Cashless Pre-Auth & Settlement Pipeline
              </h4>
              <button
                onClick={handleAdvanceStage}
                className="text-[11px] font-bold text-teal-400 hover:text-teal-300 bg-teal-500/10 px-2 py-1 rounded-lg border border-teal-500/20 cursor-pointer"
                title="Simulate advancing to next stage for pitch presentation"
              >
                ⏩ Simulate Next Stage
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {selectedClaim.stages.map((stage, idx) => {
                const isCompleted = idx < selectedClaim.currentStageIndex;
                const isCurrent = idx === selectedClaim.currentStageIndex;
                const isPending = idx > selectedClaim.currentStageIndex;

                return (
                  <div
                    key={stage.title}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      isCurrent
                        ? 'bg-amber-950/30 border-amber-500 shadow-md shadow-amber-500/10'
                        : isCompleted
                        ? 'bg-emerald-950/20 border-emerald-500/50 text-slate-200'
                        : 'bg-slate-950/60 border-slate-800/80 opacity-60 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                        {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                        {isCurrent && <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />}
                        {isPending && <Clock className="w-3.5 h-3.5 text-slate-600" />}
                      </div>
                      <h5 className={`text-xs font-bold ${
                        isCurrent ? 'text-amber-300 font-extrabold' : isCompleted ? 'text-emerald-300' : 'text-slate-400'
                      }`}>
                        {stage.title}
                      </h5>
                      <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-2">
                        {stage.description}
                      </p>
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono mt-2 pt-1 border-t border-slate-800/50">
                      {stage.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Uploaded Documents & Medical Proofs */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-teal-400" />
                Verified Claim Documents & Hospital Records
              </h4>
              <button
                onClick={() => addToast('info', 'Document Upload', 'Select supplementary hospital bills or discharge slip.')}
                className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700"
              >
                <UploadCloud className="w-3.5 h-3.5 text-teal-400" />
                <span>Upload Extra Doc</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedClaim.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-slate-950 border border-slate-800 hover:border-teal-500/40 rounded-xl p-3 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h6 className="text-xs font-bold text-white truncate">{doc.name}</h6>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{doc.status}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setPreviewDocModal({ name: doc.name, category: doc.category })}
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                    title="View Document"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Notes & Summary */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">NirmaanCare Protection Guarantee: </strong>
              {selectedClaim.notes}
            </div>
          </div>
        </div>
      )}

      {/* Document Preview Modal Simulation */}
      {previewDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-white">{previewDocModal.name}</h4>
                <span className="text-xs text-teal-400">{previewDocModal.category}</span>
              </div>
              <button
                onClick={() => setPreviewDocModal(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-3">
              <FileCheck className="w-12 h-12 text-teal-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white">NirmaanCare Digital Vault Verified Document</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Verified with Fortis Hospital Cashless Pre-Auth Desk & Aadhaar UIDAI Hash.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  addToast('success', 'Document Downloaded', `${previewDocModal.name} saved.`);
                  setPreviewDocModal(null);
                }}
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Certified PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
