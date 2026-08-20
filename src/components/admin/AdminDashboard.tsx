import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Users, 
  Building2, 
  FileText, 
  Hospital, 
  IndianRupee, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowUpRight,
  TrendingUp,
  Stethoscope,
  Clock
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    claims, 
    adminApproveClaim, 
    adminRejectClaim, 
    doctors, 
    hospitals, 
    sites, 
    addToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'claims' | 'sites' | 'network' | 'telemetry'>('claims');

  const pendingClaims = claims.filter(c => c.currentStageIndex < 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fadeIn">
      
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center text-white font-black text-2xl shadow-xl shrink-0">
              🛡️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  NirmaanCare Central Operations
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold">
                  Super Admin
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                National Occupational Health & TPA Claim Settlement Command Center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800 text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold">Network Healthy (99.98% Uptime)</span>
          </div>
        </div>
      </div>

      {/* Macro Admin KPIs (As required by prompt) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        
        {/* Metric 1: Total Workers */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Workers</span>
          <div className="text-2xl font-black text-white mt-1">52,480+</div>
          <span className="text-[10px] text-teal-400 font-semibold mt-0.5 block">+1,200 this week</span>
        </div>

        {/* Metric 2: Total Employers */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Employers</span>
          <div className="text-2xl font-black text-white mt-1">128 Builders</div>
          <span className="text-[10px] text-emerald-400 font-semibold mt-0.5 block">L&T, Tata Projects, ABC</span>
        </div>

        {/* Metric 3: Total Claims Handled */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Claims</span>
          <div className="text-2xl font-black text-white mt-1">1,420</div>
          <span className="text-[10px] text-teal-400 font-semibold mt-0.5 block">₹1.82 Cr Disbursed</span>
        </div>

        {/* Metric 4: Claims Approval Ratio */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Claims Approved</span>
          <div className="text-2xl font-black text-emerald-400 mt-1">98.4%</div>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">1.2% Fraud Blocked</span>
        </div>

        {/* Metric 5: Hospital / Doctor Partners */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Hospital Network</span>
          <div className="text-2xl font-black text-cyan-300 mt-1">45 Hosp / 60 Docs</div>
          <span className="text-[10px] text-cyan-400 font-semibold mt-0.5 block">100% Cashless Tie-up</span>
        </div>

        {/* Metric 6: Platform Revenue */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Platform Revenue</span>
          <div className="text-2xl font-black text-amber-400 mt-1">₹78.7 Lakhs</div>
          <span className="text-[10px] text-emerald-400 font-semibold mt-0.5 block">Monthly Recurring (MRR)</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
        {[
          { id: 'claims', label: '📄 Cashless Claims Verification Queue' },
          { id: 'sites', label: '🏗️ High-Risk Construction Sites Radar' },
          { id: 'network', label: '🏥 Hospital & Doctor Network (105)' },
          { id: 'telemetry', label: '🤖 AI Risk Engine Telemetry' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md shadow-indigo-500/20 font-black'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Claims Verification Queue */}
      {activeTab === 'claims' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  Live Incoming Claims Pipeline
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Approve or request secondary verification on incoming cashless emergency claims.
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full">
                {claims.length} Active in Queue
              </span>
            </div>

            <div className="space-y-4">
              {claims.map((c) => {
                const isApproved = c.currentStageIndex >= 4;
                return (
                  <div
                    key={c.id}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                          {c.id}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isApproved ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {c.stages[c.currentStageIndex]?.title || c.status}
                        </span>
                        <span className="text-xs text-slate-400">{c.incidentDate}</span>
                      </div>

                      <h4 className="text-base font-bold text-white mt-1.5">{c.incidentType}</h4>
                      <p className="text-xs text-teal-400 mt-0.5">
                        Worker: <strong>{c.workerName}</strong> ({c.workerId}) • Employer: <strong>{c.employerName}</strong>
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Hospital: <strong>{c.hospitalName}</strong>
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Pre-Auth Sum</span>
                        <span className="text-xl font-black text-emerald-400">
                          ₹{c.claimAmount.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {!isApproved ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => adminApproveClaim(c.id)}
                            className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>1-Click Approve Pre-Auth</span>
                          </button>
                          <button
                            onClick={() => adminRejectClaim(c.id, 'Require additional site incident verification')}
                            className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 text-xs font-bold transition-colors"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Pre-Auth Guaranteed</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: High-Risk Construction Sites */}
      {activeTab === 'sites' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sites.map((site) => (
              <div key={site.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">{site.id}</span>
                    <h4 className="text-sm font-bold text-white">{site.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{site.totalWorkers} Workers On-Site</p>
                  </div>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-xl ${
                    site.riskScore > 70 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
                    site.riskScore > 40 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  }`}>
                    {site.riskScore}/100
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Key Hazard Driver:</span>
                  <p className="text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    {site.recommendations[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Network Hospitals & Doctors */}
      {activeTab === 'network' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Hospital className="w-4 h-4 text-teal-400" />
              Partner Hospitals (45 Empanelled)
            </h4>
            <div className="space-y-2">
              {hospitals.map((h) => (
                <div key={h.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white block">{h.name}</span>
                    <span className="text-slate-400 text-[11px]">{h.address}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    100% Cashless
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              Empanelled Trauma Doctors (60 Specialists)
            </h4>
            <div className="space-y-2">
              {doctors.map((d) => (
                <div key={d.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white block">{d.name}</span>
                    <span className="text-teal-400 text-[11px]">{d.specialty}</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">{d.experience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: AI Telemetry */}
      {activeTab === 'telemetry' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 animate-fadeIn">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            NirmaanCare AI Model Telemetry & Accuracy Benchmarks
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Triage Accuracy</span>
              <span className="text-2xl font-black text-teal-300 mt-1 block">96.4%</span>
              <span className="text-[10px] text-slate-400">Validated against AIIMS trauma triage</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Computer Vision PPE</span>
              <span className="text-2xl font-black text-amber-300 mt-1 block">98.1%</span>
              <span className="text-[10px] text-slate-400">Hardhat & harness detection</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Inference Latency</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">420ms</span>
              <span className="text-[10px] text-slate-400">Edge deployed inference</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Fraud Prevention</span>
              <span className="text-2xl font-black text-indigo-300 mt-1 block">₹34.2 Lakhs</span>
              <span className="text-[10px] text-slate-400">Blocked duplicate bill submissions</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
