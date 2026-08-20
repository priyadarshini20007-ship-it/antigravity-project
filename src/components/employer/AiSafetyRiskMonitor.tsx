import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ConstructionSite, RiskLevel } from '../../types';
import { 
  Activity, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  TrendingUp, 
  TrendingDown, 
  HardHat, 
  Clock, 
  Truck, 
  Eye, 
  Sparkles,
  RefreshCw,
  Info,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const AiSafetyRiskMonitor: React.FC = () => {
  const { sites, updateSiteRisk, t, addToast } = useApp();
  const [selectedSiteId, setSelectedSiteId] = useState<string>(sites[0].id);
  const [isAuditing, setIsAuditing] = useState<boolean>(false);

  const currentSite = sites.find(s => s.id === selectedSiteId) || sites[0];

  const handleSimulateInspection = () => {
    setIsAuditing(true);
    setTimeout(() => {
      // simulate risk adjustment
      const newScore = Math.max(20, Math.min(95, currentSite.riskScore + (Math.random() > 0.5 ? -6 : 8)));
      updateSiteRisk(currentSite.id, Math.round(newScore));
      setIsAuditing(false);
      addToast(
        'info',
        'AI Site Audit Complete 🤖',
        `${currentSite.name} updated with real-time video feed telemetry. Risk: ${Math.round(newScore)}/100`
      );
    }, 800);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-rose-400" />
              {t('aiSafetyTitle')}
            </h2>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
              Live AI Predictive Radar
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t('aiSafetySubtitle')}
          </p>
        </div>

        <button
          onClick={handleSimulateInspection}
          disabled={isAuditing}
          className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer disabled:opacity-50 shrink-0"
        >
          <RefreshCw className={`w-4 h-4 text-teal-400 ${isAuditing ? 'animate-spin' : ''}`} />
          <span>{isAuditing ? 'Scanning Site Cameras...' : 'Trigger AI Vision Inspection'}</span>
        </button>
      </div>

      {/* Site Selector Cards (Site A, Site B, Site C) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sites.map((site) => {
          const isSelected = site.id === selectedSiteId;
          const isHigh = site.riskLevel === 'HIGH';
          const isMed = site.riskLevel === 'MEDIUM';

          return (
            <div
              key={site.id}
              onClick={() => setSelectedSiteId(site.id)}
              className={`bg-slate-900 border rounded-2xl p-5 shadow-lg cursor-pointer transition-all ${
                isSelected
                  ? isHigh
                    ? 'border-rose-500 ring-2 ring-rose-500/30 bg-slate-850'
                    : isMed
                    ? 'border-amber-500 ring-2 ring-amber-500/30 bg-slate-850'
                    : 'border-emerald-500 ring-2 ring-emerald-500/30 bg-slate-850'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">{site.id}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5 line-clamp-1">{site.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{site.totalWorkers} Workers On-Site</p>
                </div>

                <div className={`px-2.5 py-1 rounded-xl font-black text-xs shrink-0 flex items-center gap-1 ${
                  isHigh ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
                  isMed ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                  'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}>
                  <span>{site.riskScore}/100</span>
                </div>
              </div>

              {/* Progress bar visual */}
              <div className="mt-4">
                <div className="flex justify-between text-[10px] font-bold mb-1">
                  <span className={isHigh ? 'text-rose-400' : isMed ? 'text-amber-400' : 'text-emerald-400'}>
                    {site.riskLevel} RISK
                  </span>
                  <span className="text-slate-400 font-mono">Last Audit: {site.lastSafetyAudit}</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isHigh ? 'bg-gradient-to-r from-amber-500 to-rose-500' :
                      isMed ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${site.riskScore}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel for Selected Site */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: 6 Risk Factor Telemetry Indicators */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-black text-white">{currentSite.name}</h3>
              <p className="text-xs text-slate-400">{currentSite.location}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
              <Eye className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-slate-300 font-semibold">12 CCTV Cameras Active</span>
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            AI Hazard Factor Decomposition:
          </span>

          <div className="space-y-4">
            
            {/* Factor 1: Working at Height */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  Working at Height Hazard
                </span>
                <span className={`font-mono font-bold ${
                  currentSite.factors.workingAtHeight > 70 ? 'text-rose-400' : 'text-slate-300'
                }`}>
                  {currentSite.factors.workingAtHeight}% Elevated
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    currentSite.factors.workingAtHeight > 70 ? 'bg-rose-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${currentSite.factors.workingAtHeight}%` }}
                />
              </div>
            </div>

            {/* Factor 2: Heavy Machinery Proximity */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-indigo-400" />
                  Heavy Machinery & Crane Blindspot Proximity
                </span>
                <span className="font-mono font-bold text-slate-300">
                  {currentSite.factors.heavyMachinery}% Exposure
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-500 h-full rounded-full"
                  style={{ width: `${currentSite.factors.heavyMachinery}%` }}
                />
              </div>
            </div>

            {/* Factor 3: Long Working Hours & Fatigue */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Long Working Hours / Worker Fatigue Risk
                </span>
                <span className={`font-mono font-bold ${
                  currentSite.factors.longWorkingHours > 60 ? 'text-rose-400' : 'text-slate-300'
                }`}>
                  {currentSite.factors.longWorkingHours}% Overtime
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    currentSite.factors.longWorkingHours > 60 ? 'bg-rose-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${currentSite.factors.longWorkingHours}%` }}
                />
              </div>
            </div>

            {/* Factor 4: Lack of PPE Compliance */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-teal-400" />
                  PPE / Helmet Deficit (Camera Detection)
                </span>
                <span className="font-mono font-bold text-slate-300">
                  {currentSite.factors.lackOfPpe}% Non-Compliant
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-teal-500 h-full rounded-full"
                  style={{ width: `${currentSite.factors.lackOfPpe}%` }}
                />
              </div>
            </div>

            {/* Factor 5: Unsafe Work Patterns */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  Unsafe Movement & Loose Shuttering Patterns
                </span>
                <span className="font-mono font-bold text-slate-300">
                  {currentSite.factors.unsafeWorkPatterns}% Risk
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-rose-500 h-full rounded-full"
                  style={{ width: `${currentSite.factors.unsafeWorkPatterns}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: AI Safety Recommendations & Action Items */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                {t('recommendations')}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Auto-Generated
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {currentSite.recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-start gap-3 text-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-200 leading-relaxed font-medium">{rec}</p>
                    <span className="text-[10px] text-teal-400 mt-1 block">
                      Priority: High • Est. Risk Reduction: -14%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => addToast('success', 'Site Safety Directive Dispatched', `Broadcasted safety alerts to Site Supervisor at ${currentSite.name}`)}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Broadcast Immediate Safety Action Order to Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
