import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  TrendingUp, 
  PieChart as PieChartIcon, 
  BarChart3, 
  ShieldCheck, 
  Download, 
  Activity, 
  Users, 
  Stethoscope, 
  HeartHandshake 
} from 'lucide-react';

export const EmployerAnalytics: React.FC<{ onDownloadReport: () => void }> = ({ onDownloadReport }) => {
  const { t, employerWorkerCount } = useApp();

  // Monthly Injury Trends Data (Jan to Aug)
  const monthlyData = [
    { month: 'Jan', count: 8, height: 40 },
    { month: 'Feb', count: 6, height: 30 },
    { month: 'Mar', count: 9, height: 45 },
    { month: 'Apr', count: 5, height: 25 },
    { month: 'May', count: 4, height: 20 },
    { month: 'Jun', count: 3, height: 15 },
    { month: 'Jul', count: 2, height: 10 },
    { month: 'Aug', count: 1, height: 5 } // 75% reduction since NirmaanCare AI deployment!
  ];

  // Injury types distribution
  const injuryTypes = [
    { type: 'Scaffolding & Height Slips', percentage: 38, count: 12, color: 'bg-rose-500', barColor: '#f43f5e' },
    { type: 'Rebar Cuts & Lacerations', percentage: 28, count: 9, color: 'bg-amber-500', barColor: '#f59e0b' },
    { type: 'Falling Tool / Material Hits', percentage: 18, count: 6, color: 'bg-teal-500', barColor: '#14b8a6' },
    { type: 'Heavy Machinery & Pinching', percentage: 16, count: 5, color: 'bg-indigo-500', barColor: '#6366f1' }
  ];

  // Claims Status
  const claimsStatusData = [
    { label: 'Settled & Paid', count: 11, amount: '₹6,40,000', color: 'text-emerald-400' },
    { label: 'In Verification', count: 2, amount: '₹1,25,000', color: 'text-amber-400' },
    { label: 'Action Required', count: 1, amount: '₹45,000', color: 'text-indigo-400' }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Download Report Action */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-teal-400" />
              Occupational Health & Safety Analytics
            </h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              72% Incident Drop YoY
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time health telemetry across ABC Constructions active infrastructure projects.
          </p>
        </div>

        <button
          onClick={onDownloadReport}
          className="py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>{t('downloadReport')} (PDF)</span>
        </button>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Workdays Saved</span>
          <div className="text-2xl font-black text-white mt-1">420+ Days</div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">Zero prolonged worker downtime</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Average Claim Speed</span>
          <div className="text-2xl font-black text-teal-300 mt-1">18 Mins</div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Pre-Auth Guarantee turn-around</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Telemed Consultations</span>
          <div className="text-2xl font-black text-cyan-300 mt-1">142 Calls</div>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Prevented unnecessary ER visits</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Worker Retention</span>
          <div className="text-2xl font-black text-amber-400 mt-1">94.8%</div>
          <span className="text-[10px] text-emerald-400 mt-0.5 block">+28% higher than industry avg</span>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Monthly Injuries Histogram (Jan - Aug) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-400" />
                Workplace Injuries by Month (2026)
              </span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                -75% After NirmaanCare AI
              </span>
            </div>

            {/* Custom Bar Chart Visualizer */}
            <div className="pt-6 pb-2">
              <div className="h-44 flex items-end justify-between gap-3 px-2 border-b border-slate-800">
                {monthlyData.map((d) => (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">
                      {d.count}
                    </span>
                    <div className="w-full bg-slate-950 rounded-t-lg h-36 flex items-end overflow-hidden">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-teal-600 to-teal-400 group-hover:from-teal-500 group-hover:to-teal-300 transition-all duration-300"
                        style={{ height: `${d.height * 2}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-teal-300">
                      {d.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between">
            <span>AI Predictive hazard warnings active on Site A & Site B</span>
            <span className="text-teal-300 font-bold">Audit Cycle: Daily</span>
          </div>
        </div>

        {/* Chart 2: Injury Types Breakdown */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <PieChartIcon className="w-4 h-4 text-amber-400" />
                Injury Severity & Type Distribution
              </span>
            </div>

            <div className="space-y-3.5 mt-4">
              {injuryTypes.map((item) => (
                <div key={item.type} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{item.type}</span>
                    <span className="font-mono font-bold text-white">{item.percentage}% ({item.count} cases)</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Claims by Status pill card */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Claims Pipeline Summary (14 Total):
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {claimsStatusData.map((cs) => (
                <div key={cs.label} className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <span className={`text-base font-black ${cs.color} block`}>{cs.count}</span>
                  <span className="text-[9px] text-slate-400 block">{cs.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
