import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  ArrowUpRight, 
  CheckCircle, 
  HeartHandshake, 
  ShieldAlert, 
  Stethoscope, 
  FileText, 
  Building2, 
  Activity, 
  Coins, 
  TrendingUp 
} from 'lucide-react';

export const PITCH_STEPS = [
  {
    step: 1,
    title: '1. Open Landing Page & Hook',
    subtitle: 'NirmaanCare: Healthcare Protection for India’s 50M+ Construction Workers',
    targetRole: 'landing' as const,
    keyPoints: [
      'Hook: 50M+ unorganized construction workers power India’s $1.4T infrastructure boom, yet 85% have ZERO health coverage.',
      'Show hero section, live stats badge (50M+ Workers, ₹150/mo, 24/7 care).',
      'Explain the B2B2C model: Employers purchase coverage at ₹150/worker/month.'
    ],
    icon: <Sparkles className="w-5 h-5 text-amber-400" />
  },
  {
    step: 2,
    title: '2. The Problem & Market Reality',
    subtitle: 'A single workplace fracture pushes an entire family into bonded debt',
    targetRole: 'landing' as const,
    scrollTarget: 'the-problem-section',
    keyPoints: [
      'Daily wage stops the minute an injury occurs.',
      'Workers borrow from predatory local moneylenders at 36-60% interest.',
      'Government welfare schemes (e-Shram, BOCW) exist on paper but are plagued by paperwork friction.'
    ],
    icon: <ShieldAlert className="w-5 h-5 text-rose-400" />
  },
  {
    step: 3,
    title: '3. Worker Login: Ravi Kumar 👷',
    subtitle: 'Zero-friction digital portal for blue-collar construction workforce',
    targetRole: 'worker' as const,
    keyPoints: [
      'Welcome Ravi: Mason at ABC Constructions Site A (Metro Line 4).',
      'Active NirmaanCare Swasthya Card with ₹2,00,000 cashless cover.',
      'High-contrast, pictorial, multilingual UI (English, Hindi, Tamil) for accessible navigation.'
    ],
    icon: <HeartHandshake className="w-5 h-5 text-teal-400" />
  },
  {
    step: 4,
    title: '4. Report Workplace Injury',
    subtitle: 'Worker slips on scaffolding — immediate incident reporting',
    targetRole: 'worker' as const,
    workerTab: 'injury-report',
    keyPoints: [
      'Click "🚨 Report Injury" on Worker Dashboard.',
      'Simple 6-question triage designed for quick on-site completion by worker or safety buddy.',
      'Option to snap/upload injury photo for visual inspection.'
    ],
    icon: <ShieldAlert className="w-5 h-5 text-amber-400" />
  },
  {
    step: 5,
    title: '5. Demonstrate AI Injury Assistant',
    subtitle: 'Clinical NLP + Kinetic Trauma Risk Engine',
    targetRole: 'worker' as const,
    workerTab: 'injury-report',
    keyPoints: [
      'Demonstrate instant AI Triage rating (LOW / MEDIUM / HIGH RISK).',
      'Shows clinical confidence score (96.4%) and recommended immediate first-aid protocols.',
      'Prominent disclaimer: "AI triage guidance, not a medical diagnosis" ensuring compliance.'
    ],
    icon: <Activity className="w-5 h-5 text-teal-400" />
  },
  {
    step: 6,
    title: '6. Telemedicine Consultation Booking',
    subtitle: 'Instant video consultation with verified trauma specialists',
    targetRole: 'worker' as const,
    workerTab: 'telemedicine',
    keyPoints: [
      'Browse doctors (Dr. Ananya Sharma - Trauma Specialist, AIIMS Alumni).',
      '100% Free consultation for enrolled workers.',
      'Simulate 1-click live video call with camera preview, live chat, and generated digital prescription.'
    ],
    icon: <Stethoscope className="w-5 h-5 text-cyan-400" />
  },
  {
    step: 7,
    title: '7. Cashless Claim Management & Auto-File',
    subtitle: 'Claim ID: NC-10245 — 100% cashless pre-authorization',
    targetRole: 'worker' as const,
    workerTab: 'claims',
    keyPoints: [
      'Show 6-stage visual timeline (Injury Reported -> Docs -> Submitted -> Verification -> Approved -> Hospital Payment).',
      'Demonstrate "⚡ Auto-File Claim" button: auto-generates ₹85,000 cashless pre-auth with zero out-of-pocket cash.',
      'Highlight Government Benefits Matcher (e-Shram & BOCW Board ₹50,000 grant).'
    ],
    icon: <FileText className="w-5 h-5 text-emerald-400" />
  },
  {
    step: 8,
    title: '8. Switch to Employer Dashboard',
    subtitle: 'ABC Constructions Infrastructure Ltd. (500 Enrolled Workers)',
    targetRole: 'employer' as const,
    keyPoints: [
      'Contractor command center: 500 enrolled workers, 488 active coverages, 3 currently injured.',
      'Real-time incident reporting and worker roster management with 1-click Excel upload.',
      'Replaces messy paper safety logs with enterprise compliance oversight.'
    ],
    icon: <Building2 className="w-5 h-5 text-indigo-400" />
  },
  {
    step: 9,
    title: '9. AI Safety Risk Monitor',
    subtitle: 'Predictive hazard analytics preventing accidents before they occur',
    targetRole: 'employer' as const,
    employerTab: 'safety-monitor',
    keyPoints: [
      'Show Site A: Metro Line 4 Elevated Corridor → Risk Score: 78/100 (HIGH RISK).',
      'Telemetry breakdown: Height risk (88%), Heavy machinery proximity (76%), Overtime fatigue (72%), PPE deficit (34%).',
      'Actionable AI recommendations: Mandatory harness inspection, double-lanyard compliance, and shift limits.'
    ],
    icon: <Activity className="w-5 h-5 text-rose-400" />
  },
  {
    step: 10,
    title: '10. ₹150/Worker/Month Subscription & ROI',
    subtitle: 'High-margin B2B SaaS + Group Micro-Insurance recurring revenue',
    targetRole: 'employer' as const,
    employerTab: 'billing',
    keyPoints: [
      'Transparent pricing tiers: Basic (₹100), Standard (₹150 - recommended), Premium (₹200).',
      'For 500 workers = ₹75,000/month. Reduces contractor project downtime losses by over 40%.',
      'Simulate 1-click corporate UPI / Razorpay payment with automated GST invoice generation.'
    ],
    icon: <Coins className="w-5 h-5 text-amber-400" />
  },
  {
    step: 11,
    title: '11. Employer & Admin Impact Analytics',
    subtitle: 'Data-driven safety insights, claims velocity & platform growth',
    targetRole: 'employer' as const,
    employerTab: 'analytics',
    keyPoints: [
      'Interactive charts: Injuries by month, injury types distribution, claims settlement velocity.',
      'Super Admin View: 50,000+ workers across India, 120+ builders, ₹1.8 Crore cashless claims handled.',
      'One-click "Download Executive Pitch & ESG Safety Audit Report".'
    ],
    icon: <TrendingUp className="w-5 h-5 text-teal-400" />
  },
  {
    step: 12,
    title: '12. Powerful Closing Pitch Statement',
    subtitle: 'The Core Mission of NirmaanCare',
    targetRole: 'landing' as const,
    keyPoints: [
      '“One injury shouldn’t destroy a family’s income.”',
      'NirmaanCare turns informal construction labor into protected, dignified, and insurable human capital.',
      'Ask for Judge Q&A and partnership opportunities.'
    ],
    icon: <CheckCircle className="w-5 h-5 text-emerald-400" />
  }
];

export const PitchGuideModal: React.FC = () => {
  const { 
    isPitchGuideOpen, 
    setIsPitchGuideOpen, 
    pitchStep, 
    setPitchStep, 
    nextPitchStep, 
    prevPitchStep, 
    setRole,
    addToast 
  } = useApp();

  if (!isPitchGuideOpen) return null;

  const currentStepData = PITCH_STEPS[pitchStep - 1] || PITCH_STEPS[0];

  const handleJumpToScreen = () => {
    setRole(currentStepData.targetRole);
    if (currentStepData.scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(currentStepData.scrollTarget!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    addToast('info', `Navigated to ${currentStepData.targetRole.toUpperCase()} View`, `Step ${pitchStep}: ${currentStepData.title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-950/80 via-slate-900 to-amber-950/60 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Startup Pitch Guide
                </span>
                <span className="text-xs text-slate-400">Step {pitchStep} of {PITCH_STEPS.length}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">3–5 Minute Pitch Walkthrough</h3>
            </div>
          </div>
          <button
            onClick={() => setIsPitchGuideOpen(false)}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5">
          <div 
            className="bg-gradient-to-r from-teal-500 to-amber-500 h-full transition-all duration-300"
            style={{ width: `${(pitchStep / PITCH_STEPS.length) * 100}%` }}
          />
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 shrink-0">
              {currentStepData.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">{currentStepData.title}</h4>
              <p className="text-sm text-teal-400 font-medium mt-0.5">{currentStepData.subtitle}</p>
            </div>
          </div>

          {/* Key Talking Points */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span>🎤 Speaker Talking Points for Judges</span>
            </h5>
            <ul className="space-y-2.5">
              {currentStepData.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action button to switch view */}
          <button
            onClick={handleJumpToScreen}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
          >
            <span>👉 Jump to {currentStepData.targetRole.toUpperCase()} View for this Step</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={prevPitchStep}
            disabled={pitchStep === 1}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {/* Step circles */}
          <div className="hidden sm:flex items-center gap-1.5">
            {PITCH_STEPS.map((s) => (
              <button
                key={s.step}
                onClick={() => {
                  setPitchStep(s.step);
                  setRole(s.targetRole);
                }}
                className={`w-6 h-6 rounded-full text-[11px] font-bold transition-all flex items-center justify-center ${
                  pitchStep === s.step
                    ? 'bg-teal-500 text-white ring-2 ring-teal-400/50 scale-110'
                    : s.step < pitchStep
                    ? 'bg-teal-900/60 text-teal-300 border border-teal-600/40'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {s.step}
              </button>
            ))}
          </div>

          {pitchStep < PITCH_STEPS.length ? (
            <button
              onClick={() => {
                nextPitchStep();
                const nextStep = PITCH_STEPS[pitchStep];
                if (nextStep) {
                  setRole(nextStep.targetRole);
                }
              }}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
            >
              <span>Next Step ({pitchStep + 1})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setIsPitchGuideOpen(false)}
              className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Finish Demo Walkthrough</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
