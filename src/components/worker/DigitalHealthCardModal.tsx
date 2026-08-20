import React from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, QrCode, Download, Share2, Phone, CheckCircle2, Building, Heart } from 'lucide-react';

export const DigitalHealthCardModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose
}) => {
  const { worker, addToast } = useApp();

  if (!isOpen) return null;

  const handleDownload = () => {
    addToast('success', 'Health Card Downloaded', 'Digital NirmaanCare Swasthya Card saved in offline wallet.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            <h3 className="text-sm font-black text-white">NirmaanCare Swasthya Card</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            ✕
          </button>
        </div>

        {/* The Card */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 border-2 border-teal-500/50 rounded-2xl p-5 shadow-2xl relative overflow-hidden text-slate-100 space-y-4">
          {/* Hologram aesthetic accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Card Top Brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black text-xs">
                NC
              </div>
              <div>
                <span className="text-xs font-black tracking-tight block">NirmaanCare</span>
                <span className="text-[9px] text-teal-300 -mt-1 block">National Worker Health ID</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" />
              Active
            </span>
          </div>

          {/* Worker Info & Photo */}
          <div className="flex items-center gap-3.5 pt-1">
            <img
              src={worker.avatar}
              alt={worker.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-teal-400 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-base font-black text-white truncate">{worker.name}</h4>
              <p className="text-xs text-teal-300 font-semibold truncate">{worker.role}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">ID: {worker.id}</p>
            </div>
          </div>

          {/* Key Identifiers Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase font-bold block">Sum Insured</span>
              <span className="text-xs font-extrabold text-emerald-400">₹{worker.sumInsured.toLocaleString('en-IN')} Cashless</span>
            </div>
            <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase font-bold block">Blood Group</span>
              <span className="text-xs font-extrabold text-rose-400 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-rose-400" />
                {worker.bloodGroup}
              </span>
            </div>
            <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase font-bold block">e-Shram UAN</span>
              <span className="text-[11px] font-mono text-slate-200 truncate block">{worker.eShramId}</span>
            </div>
            <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800">
              <span className="text-[9px] text-slate-400 uppercase font-bold block">Aadhaar (Last 4)</span>
              <span className="text-[11px] font-mono text-slate-200">XXXX-XXXX-{worker.aadhaarLast4}</span>
            </div>
          </div>

          {/* Employer & Emergency Contact Footer */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <div className="truncate max-w-[200px]">
              <span className="block text-slate-500">Employer:</span>
              <span className="text-slate-300 font-semibold truncate block">{worker.employer}</span>
            </div>

            {/* QR Code */}
            <div className="w-9 h-9 bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
              <QrCode className="w-7 h-7 text-slate-950" />
            </div>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Digital Card</span>
          </button>
          <button
            onClick={() => addToast('info', 'QR Code Copied', 'Health Card link copied to clipboard.')}
            className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
