import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  CreditCard, 
  Activity, 
  TrendingUp, 
  Download, 
  Sparkles, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { AiSafetyRiskMonitor } from './AiSafetyRiskMonitor';
import { WorkerManagementTable } from './WorkerManagementTable';
import { EmployerSubscription } from './EmployerSubscription';
import { EmployerAnalytics } from './EmployerAnalytics';
import { ExecutiveReportModal } from './ExecutiveReportModal';

export const EmployerDashboard: React.FC = () => {
  const { 
    employerWorkerCount, 
    employerPlan, 
    t, 
    claims, 
    sites 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'safety' | 'roster' | 'billing' | 'analytics'>('safety');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const pricePerWorker = employerPlan === 'basic' ? 100 : employerPlan === 'standard' ? 150 : 200;
  const monthlyCost = employerWorkerCount * pricePerWorker;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 animate-fadeIn">
      
      {/* Employer Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-2xl shadow-xl shrink-0">
              ABC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  ABC Constructions Infrastructure Ltd.
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                  Corporate Contractor
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Employer Healthcare & Predictive Occupational Safety Command Centre
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
                <span>Active Sites: <strong className="text-slate-200">3 Infrastructure Corridors</strong></span>
                <span>•</span>
                <span>Tier: <strong className="text-teal-400 capitalize">{employerPlan} Plan</strong></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>ESG Safety Audit Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Row (7 Required Employer Metrics from Prompt) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
        
        {/* Metric 1: Total Workers Enrolled */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('totalEnrolledWorkers')}
          </span>
          <div className="text-2xl font-black text-white mt-1">
            {employerWorkerCount}
          </div>
          <span className="text-[10px] text-teal-400 font-semibold mt-0.5 block">100% on Roster</span>
        </div>

        {/* Metric 2: Active Health Coverage */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('activeHealthCoverage')}
          </span>
          <div className="text-2xl font-black text-emerald-400 mt-1">
            488
          </div>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">12 Pending KYC</span>
        </div>

        {/* Metric 3: Workers Currently Injured */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('injuredWorkers')}
          </span>
          <div className="text-2xl font-black text-rose-400 mt-1">
            3
          </div>
          <span className="text-[10px] text-rose-300 font-semibold mt-0.5 block">Zero Fatalities</span>
        </div>

        {/* Metric 4: Claims Submitted */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('claimsSubmitted')}
          </span>
          <div className="text-2xl font-black text-white mt-1">
            14
          </div>
          <span className="text-[10px] text-teal-400 font-semibold mt-0.5 block">₹7.65L Total</span>
        </div>

        {/* Metric 5: Claims Pending */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('claimsPending')}
          </span>
          <div className="text-2xl font-black text-amber-400 mt-1">
            2
          </div>
          <span className="text-[10px] text-amber-300 font-semibold mt-0.5 block">Under TPA Audit</span>
        </div>

        {/* Metric 6: Monthly Subscription Cost */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('monthlyCost')}
          </span>
          <div className="text-2xl font-black text-emerald-400 mt-1">
            ₹75,000
          </div>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">@ ₹150 / worker</span>
        </div>

        {/* Metric 7: Health-Risk Alerts */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            {t('healthRiskAlerts')}
          </span>
          <div className="text-2xl font-black text-rose-400 flex items-center gap-1.5 mt-1">
            <span>2</span>
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          </div>
          <span className="text-[10px] text-rose-300 font-semibold mt-0.5 block">Site A Scaffolding</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
        {[
          { id: 'safety', label: '🏗️ AI Safety Risk Monitor' },
          { id: 'roster', label: '👥 Worker Roster (500)' },
          { id: 'billing', label: '💳 Subscription & Billing (₹75k/mo)' },
          { id: 'analytics', label: '📊 Health & Incident Analytics' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: AI Safety Risk Monitor */}
      {activeTab === 'safety' && <AiSafetyRiskMonitor />}

      {/* Tab 2: Worker Roster */}
      {activeTab === 'roster' && <WorkerManagementTable />}

      {/* Tab 3: Subscription & Billing */}
      {activeTab === 'billing' && <EmployerSubscription />}

      {/* Tab 4: Analytics */}
      {activeTab === 'analytics' && (
        <EmployerAnalytics onDownloadReport={() => setIsReportModalOpen(true)} />
      )}

      {/* Executive Report Modal */}
      <ExecutiveReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
};
