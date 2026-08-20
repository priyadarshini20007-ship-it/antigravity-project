import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  FileText, 
  Calendar, 
  AlertTriangle, 
  Stethoscope, 
  Hospital, 
  Building2, 
  QrCode, 
  PhoneCall, 
  CheckCircle2, 
  HeartHandshake,
  ArrowRight,
  Shield
} from 'lucide-react';
import { AiInjuryAssistant } from './AiInjuryAssistant';
import { TelemedicineSuite } from './TelemedicineSuite';
import { ClaimsTracker } from './ClaimsTracker';
import { GovtBenefitsAssistant } from './GovtBenefitsAssistant';
import { NearbyHospitals } from './NearbyHospitals';
import { DigitalHealthCardModal } from './DigitalHealthCardModal';

export const WorkerDashboard: React.FC = () => {
  const { worker, language, t } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'injury' | 'telemed' | 'claims' | 'govt' | 'hospitals'>('overview');
  const [isHealthCardOpen, setIsHealthCardOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn">
      
      {/* Worker Header & Profile Card */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/60 to-slate-900 border border-teal-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="relative shrink-0">
              <img
                src={worker.avatar}
                alt={worker.name}
                className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-teal-400 shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-white rounded-full border-2 border-slate-900 shadow">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  {language === 'hi' ? worker.nameHi : language === 'ta' ? worker.nameTa : worker.name} 👷
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {t('activeCoverageValue')}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-teal-300 font-medium mt-1">
                {language === 'hi' ? worker.roleHi : worker.role} • {worker.siteName}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400 mt-2 font-mono">
                <span>e-Shram: <strong className="text-slate-200">{worker.eShramId}</strong></span>
                <span className="hidden sm:inline">•</span>
                <span>Employer: <strong className="text-slate-200">{worker.employer}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Action buttons on header */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setIsHealthCardOpen(true)}
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <QrCode className="w-4 h-4 text-teal-400" />
              <span>Digital Swasthya Card</span>
            </button>

            <a
              href="tel:108"
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>24x7 Ambulance SOS</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Main KPI Cards (As required by prompt) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        
        {/* Card 1: Health Coverage */}
        <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              {t('activeCoverage')}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-lg sm:text-xl font-black text-emerald-400">Active</div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 block">100% Cashless at 45+ Hospitals</span>
          </div>
        </div>

        {/* Card 2: Insurance Sum Insured */}
        <div className="bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              {t('sumInsuredTitle')}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-lg sm:text-xl font-black text-white">₹{worker.sumInsured.toLocaleString('en-IN')}</div>
            <span className="text-[10px] sm:text-[11px] text-teal-400 mt-0.5 block">Group Micro-Insurance Policy</span>
          </div>
        </div>

        {/* Card 3: Active Claims */}
        <div 
          onClick={() => setActiveTab('claims')}
          className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              {t('activeClaimsTitle')}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-lg sm:text-xl font-black text-amber-400 flex items-center gap-1.5">
              <span>{worker.activeClaimsCount} Active</span>
              <span className="text-[11px] font-normal text-slate-400">(NC-10245)</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 group-hover:text-amber-300">
              Verification • Track <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 4: Next Consultation */}
        <div 
          onClick={() => setActiveTab('telemed')}
          className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-between transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              {t('nextConsultationTitle')}
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-lg sm:text-xl font-black text-cyan-300">Tomorrow</div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 group-hover:text-cyan-200">
              10:30 AM Dr. Ananya <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* 4 Big Quick Actions Touch Cards (Worker UI priority) */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-300">
            Quick Actions for Ravi 👷
          </h3>
          <span className="text-xs text-teal-400 font-semibold">Touch & Accessible</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Action 1: Report Injury */}
          <button
            onClick={() => setActiveTab('injury')}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between shadow-lg group cursor-pointer ${
              activeTab === 'injury'
                ? 'bg-rose-950/40 border-rose-500 ring-2 ring-rose-500/40'
                : 'bg-slate-900 border-slate-800 hover:border-rose-500/50 hover:bg-slate-850'
            }`}
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-rose-300 transition-colors">
                {t('reportInjuryBtn')}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t('reportInjuryDesc')}
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs font-bold text-rose-400">
              <span>Open AI Triage</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Action 2: Talk to Doctor */}
          <button
            onClick={() => setActiveTab('telemed')}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between shadow-lg group cursor-pointer ${
              activeTab === 'telemed'
                ? 'bg-teal-950/40 border-teal-500 ring-2 ring-teal-500/40'
                : 'bg-slate-900 border-slate-800 hover:border-teal-500/50 hover:bg-slate-850'
            }`}
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-3 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-teal-300 transition-colors">
                {t('talkToDoctorBtn')}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t('talkToDoctorDesc')}
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs font-bold text-teal-400">
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Action 3: Track Claim */}
          <button
            onClick={() => setActiveTab('claims')}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between shadow-lg group cursor-pointer ${
              activeTab === 'claims'
                ? 'bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/40'
                : 'bg-slate-900 border-slate-800 hover:border-amber-500/50 hover:bg-slate-850'
            }`}
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {t('trackClaimBtn')}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t('trackClaimDesc')}
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs font-bold text-amber-400">
              <span>View Timeline</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Action 4: Find Hospital */}
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col justify-between shadow-lg group cursor-pointer ${
              activeTab === 'hospitals'
                ? 'bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/40'
                : 'bg-slate-900 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850'
            }`}
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                <Hospital className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                {t('findHospitalBtn')}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {t('findHospitalDesc')}
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs font-bold text-indigo-400">
              <span>Explore Network</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
        {[
          { id: 'overview', label: 'My Benefits & Profile' },
          { id: 'injury', label: '🚨 AI Injury Assistant' },
          { id: 'telemed', label: '👨‍⚕️ Telemedicine' },
          { id: 'claims', label: '📄 Cashless Claims' },
          { id: 'govt', label: '🏛️ Govt Schemes' },
          { id: 'hospitals', label: '🏥 Nearby Hospitals' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview & My Benefits Card (As required by prompt) */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* My Benefits Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-teal-400" />
                <h3 className="text-base sm:text-lg font-black text-white">{t('myBenefitsTitle')}</h3>
              </div>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto">
                100% Employer Funded
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              
              {/* Benefit 1 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                  <Hospital className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t('benefit1')}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Zero cash deposit needed at admission in partner network hospitals. Direct TPA clearance.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t('benefit2')}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Instant video consultations with verified orthopedic, trauma and occupational health doctors.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t('benefit3')}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Comprehensive micro-insurance safety net shielding your family against wage loss & trauma debt.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t('benefit4')}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Free application concierge for e-Shram, BOCW board grants, and Ayushman Bharat PM-JAY.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick AI Injury Assistant Teaser in Overview */}
          <AiInjuryAssistant
            onNavigateToTelemed={() => setActiveTab('telemed')}
            onNavigateToClaims={() => setActiveTab('claims')}
          />
        </div>
      )}

      {/* Tab 2: AI Injury Assistant */}
      {activeTab === 'injury' && (
        <AiInjuryAssistant
          onNavigateToTelemed={() => setActiveTab('telemed')}
          onNavigateToClaims={() => setActiveTab('claims')}
        />
      )}

      {/* Tab 3: Telemedicine Suite */}
      {activeTab === 'telemed' && <TelemedicineSuite />}

      {/* Tab 4: Cashless Claims Tracker */}
      {activeTab === 'claims' && <ClaimsTracker />}

      {/* Tab 5: Government Benefits Assistant */}
      {activeTab === 'govt' && <GovtBenefitsAssistant />}

      {/* Tab 6: Nearby Hospitals */}
      {activeTab === 'hospitals' && <NearbyHospitals />}

      {/* Digital Swasthya Card Modal */}
      <DigitalHealthCardModal
        isOpen={isHealthCardOpen}
        onClose={() => setIsHealthCardOpen(false)}
      />
    </div>
  );
};
