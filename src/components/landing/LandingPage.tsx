import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Shield, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Stethoscope, 
  FileText, 
  Building2, 
  Users, 
  HeartHandshake, 
  IndianRupee, 
  Zap, 
  ShieldAlert, 
  TrendingUp, 
  PhoneCall, 
  Check, 
  Award, 
  HelpCircle,
  Clock,
  HardHat,
  ChevronDown,
  ChevronUp,
  LogIn,
  Bot,
  QrCode
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setRole, setIsPitchGuideOpen, openAuthModal, addToast } = useApp();

  // Interactive Pricing Calculator State
  const [calculatorWorkers, setCalculatorWorkers] = useState<number>(500);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>('');
  const [contactCompany, setContactCompany] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  // Interactive FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick Landing AI Triage Mini Demo State
  const [miniTriageStep, setMiniTriageStep] = useState<number>(1);
  const [miniInjuryType, setMiniInjuryType] = useState<string>('Scaffolding slip from 8ft elevation');
  const [miniBleeding, setMiniBleeding] = useState<boolean>(false);
  const [miniPainLevel, setMiniPainLevel] = useState<number>(8);
  const [miniTriageResult, setMiniTriageResult] = useState<string | null>(null);

  const monthlyInvestment = calculatorWorkers * 150;
  const estimatedDowntimeSavings = Math.round(calculatorWorkers * 680);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      addToast('success', 'Corporate Demo Request Received! 🏗️', 'NirmaanCare Enterprise Specialist will contact you within 2 business hours.');
      setContactSubmitted(false);
      setContactName('');
      setContactCompany('');
      setContactPhone('');
    }, 1200);
  };

  const handleRunMiniTriage = () => {
    const isHigh = miniPainLevel >= 7 || miniInjuryType.includes('Scaffolding');
    setMiniTriageResult(isHigh ? 'HIGH RISK' : 'MEDIUM RISK');
    addToast('info', 'AI Triage Engine Executed', 'Clinical score computed with 96.4% confidence.');
  };

  const faqs = [
    {
      q: 'How can NirmaanCare offer ₹150 / worker / month healthcare?',
      a: 'We pool group micro-insurance risk across thousands of construction workers, combine it with preventative AI safety telemetry that cuts accident rates by up to 75%, and leverage proprietary TPA cashless tie-ups with partner hospitals.'
    },
    {
      q: 'How does 100% Cashless Hospitalization work during emergencies?',
      a: 'When an accident occurs, our AI Injury Assistant issues an instant pre-authorization token. Partner hospitals (Fortis, Apollo, Max) admit the worker immediately with zero cash deposit required from worker or contractor.'
    },
    {
      q: 'Does NirmaanCare replace government welfare schemes like BOCW & e-Shram?',
      a: 'No, we supercharge them! We act as an automated digital concierge that pre-fills worker data and claims statutory government grants (up to ₹50,000 BOCW medical assistance & ₹2,00,000 e-Shram accidental cover) with zero paperwork friction.'
    },
    {
      q: 'Can contractors add or remove daily-wage workers dynamically?',
      a: 'Yes. Our Employer Dashboard supports 1-click Excel/CSV bulk uploads, real-time worker additions, and daily site roster syncing with prorated billing.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20 animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        {/* Background glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-teal-500/20 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
          
          {/* Top Pitch Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/40 shadow-xl text-xs font-bold text-teal-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span className="truncate">₹150 / Worker / Month • 100% Cashless • AI Predictive Safety</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Healthcare Protection for the <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-amber-300 to-amber-400">
              People Who Build India.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Affordable occupational healthcare, instant cashless insurance assistance, and AI-powered site safety for India's 50M+ construction and daily-wage workforce.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => setRole('employer')}
              className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 hover:from-teal-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2.5 transition-all hover:scale-105 cursor-pointer"
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span>Protect Your Workers (Employer Portal)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setRole('worker')}
              className="w-full sm:w-auto py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-teal-500/50 flex items-center justify-center gap-2.5 transition-all shadow-lg cursor-pointer"
            >
              <Users className="w-4 h-4 text-teal-400" />
              <span>Worker Login (Ravi Kumar 👷)</span>
            </button>

            <button
              onClick={() => setIsPitchGuideOpen(true)}
              className="w-full sm:w-auto py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
              <span>Launch 3-Min Pitch Demo</span>
            </button>
          </div>

          {/* 3 Core Stats Bar (As required by prompt) */}
          <div className="pt-8 sm:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-center">
              <div className="text-2xl sm:text-4xl font-black text-white">50M+</div>
              <p className="text-xs text-teal-400 font-bold mt-1">Construction & Daily-Wage Workers</p>
              <span className="text-[11px] text-slate-400 mt-0.5 block">India's unorganized builder workforce</span>
            </div>

            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-center">
              <div className="text-2xl sm:text-4xl font-black text-amber-400">₹150</div>
              <p className="text-xs text-white font-bold mt-1">Average Cost / Worker / Month</p>
              <span className="text-[11px] text-slate-400 mt-0.5 block">Affordable group micro-protection</span>
            </div>

            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col justify-center">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400">24/7</div>
              <p className="text-xs text-emerald-400 font-bold mt-1">Healthcare & Emergency Assistance</p>
              <span className="text-[11px] text-slate-400 mt-0.5 block">AI Triage & Level-1 Trauma Hospital Tie-up</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (As required by prompt) */}
      <section id="the-problem-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
            The Harsh Reality
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">The Problem</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Why India's construction workforce is caught in a perpetual cycle of medical debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Zero Immediate Healthcare Access</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Construction workers have no employer health coverage. When scaffolding slips or fractures happen, they rely on distant crowded government hospitals with no cashless admission.
            </p>
          </div>

          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Sudden Debt Trap</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Workplace injuries immediately stop the daily wage. Families borrow ₹50,000–₹1,00,000 from local predatory moneylenders at 40-60% interest rates, pushing them into bonded debt.
            </p>
          </div>

          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white">Complex Government Schemes</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Welfare funds (BOCW Board, e-Shram, PM-JAY) exist on paper with crores in unspent reserves, but illiteracy and bureaucratic paperwork prevent workers from ever claiming benefits.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTION (As required by prompt) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-teal-950/60 to-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/40">
              The Startup Solution
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
              Complete Protection at ₹150 / Worker / Month
            </h2>
            <p className="text-xs sm:text-base text-slate-300 mt-2 sm:mt-3 leading-relaxed">
              NirmaanCare provides employers with an end-to-end, B2B digital healthcare and micro-insurance suite tailored specifically for construction job sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> 100% Cashless Hospitalization
              </div>
              <p className="text-xs text-slate-400">Pre-authorized cashless admission up to ₹2,00,000 at 45+ partner trauma hospitals.</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> 24/7 AI Clinical Triage
              </div>
              <p className="text-xs text-slate-400">Multilingual injury assessment determining immediate severity (Low/Med/High) in 30 seconds.</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Telemedicine Suite
              </div>
              <p className="text-xs text-slate-400">Instant video consultations with verified orthopedic, burn and trauma doctors.</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> 1-Click Auto-File Claims
              </div>
              <p className="text-xs text-slate-400">Digital incident filing that pre-fills worker data and issues hospital pre-auth within 18 minutes.</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> AI Safety Risk Monitor
              </div>
              <p className="text-xs text-slate-400">Predictive site hazard telemetry analyzing height hazards, overtime fatigue, and PPE compliance.</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="text-teal-400 font-bold text-sm flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Government Scheme Concierge
              </div>
              <p className="text-xs text-slate-400">Automated eligibility matcher unlocking statutory e-Shram & BOCW board cash grants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 font-black text-sm flex items-center justify-center mx-auto">
              1
            </div>
            <h4 className="text-base font-bold text-white">Employer Enrolls</h4>
            <p className="text-xs text-slate-400">
              Contractor uploads worker roster & activates ₹150/worker/month group subscription.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 font-black text-sm flex items-center justify-center mx-auto">
              2
            </div>
            <h4 className="text-base font-bold text-white">Digital Swasthya Card</h4>
            <p className="text-xs text-slate-400">
              Workers receive digital health ID cards with QR codes and ₹2,00,000 cashless cover.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 font-black text-sm flex items-center justify-center mx-auto">
              3
            </div>
            <h4 className="text-base font-bold text-white">AI Injury Triage</h4>
            <p className="text-xs text-slate-400">
              In case of injury, worker snaps photo & answers simple questions for instant guidance.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 font-black text-sm flex items-center justify-center mx-auto">
              4
            </div>
            <h4 className="text-base font-bold text-white">Cashless Care</h4>
            <p className="text-xs text-slate-400">
              Zero out-of-pocket hospital bills and wage protection shielding the family.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ROI & PRICING CALCULATOR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Interactive ROI Calculator
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
              Calculate Your Monthly Cost & ROI
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Slide to adjust your active construction worker headcount across all project sites.
            </p>
          </div>

          {/* Slider */}
          <div className="max-w-2xl mx-auto bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Number of On-Site Workers:
              </span>
              <span className="text-xl sm:text-2xl font-black text-teal-400 font-mono">
                {calculatorWorkers} Workers
              </span>
            </div>

            <input
              type="range"
              min="50"
              max="2500"
              step="50"
              value={calculatorWorkers}
              onChange={(e) => setCalculatorWorkers(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-bold">
              <span>50 Workers (Small Builder)</span>
              <span>500 (Standard)</span>
              <span>2500+ (Tier-1 Infra)</span>
            </div>

            {/* Calculations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Monthly Protection Investment</span>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  ₹{monthlyInvestment.toLocaleString('en-IN')}<span className="text-xs text-slate-400 font-normal"> / mo</span>
                </div>
                <span className="text-[10px] text-teal-400 mt-0.5 block">@ ₹150 / worker / month</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-emerald-500/30">
                <span className="text-[10px] text-emerald-400 uppercase font-bold block">Est. Downtime & Legal Savings</span>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                  ₹{estimatedDowntimeSavings.toLocaleString('en-IN')}<span className="text-xs text-slate-400 font-normal"> / mo</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 block">Over 4.5x ROI in prevented stoppage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT & REAL WORKER VOICES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
            Real Impact
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">Protecting Real Human Lives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Ravi Kumar"
                className="w-12 h-12 rounded-xl object-cover border border-teal-400 shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white">Ravi Kumar</h4>
                <p className="text-[11px] text-teal-300">Mason, Metro Line 4</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "When I fell from the scaffold, NirmaanCare authorized my ₹85,000 hospital surgery without taking 1 rupee from my pocket. My children's school fees were not stopped."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Meena Devi"
                className="w-12 h-12 rounded-xl object-cover border border-teal-400 shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white">Meena Devi</h4>
                <p className="text-[11px] text-teal-300">Rebar Worker, Mumbai</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "Talking to Dr. Priya on video in Hindi directly from the site saved me from a serious wound infection. The medicine was delivered right to our worker camp."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 font-black text-sm flex items-center justify-center shrink-0">
                ABC
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Suresh Patel</h4>
                <p className="text-[11px] text-amber-300">Safety VP, ABC Infra</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "At ₹150/worker, this is the highest ROI safety decision we ever made. Our site project downtime dropped by 72% and worker attendance reached an all-time high."
            </p>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-teal-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-teal-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CONTACT & ENTERPRISE DEMO REQUEST FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">Deploy NirmaanCare on Your Site</h3>
            <p className="text-xs text-slate-400 mt-1">
              Start protecting your construction workers in less than 24 hours.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">Your Name</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">Company / Contractor Name</label>
                <input
                  type="text"
                  value={contactCompany}
                  onChange={(e) => setContactCompany(e.target.value)}
                  placeholder="e.g. Apex Builders Ltd."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Phone Number (WhatsApp)</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-teal-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={contactSubmitted}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {contactSubmitted ? 'Submitting Deployment Request...' : 'Schedule Corporate Pilot & On-Site Health Camp'}
            </button>
          </form>
        </div>
      </section>

      {/* 9. PITCH CLOSING TAGLINE CALLOUT (As specified in prompt) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4">
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-amber-950/60 border border-teal-500/40 shadow-2xl relative">
          <span className="text-3xl sm:text-5xl block mb-3">👷‍♂️ 🛡️</span>
          <blockquote className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
            “One injury shouldn't destroy a family's income.”
          </blockquote>
          <p className="text-xs sm:text-sm text-teal-300 font-semibold mt-3">
            NirmaanCare — Dignified healthcare & safety for India's construction workforce.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setIsPitchGuideOpen(true)}
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Start Live Pitch Presentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
