import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CreditCard, 
  Check, 
  Sparkles, 
  Download, 
  ShieldCheck, 
  IndianRupee, 
  QrCode, 
  ArrowRight, 
  Building2, 
  FileText,
  Clock
} from 'lucide-react';

export const EmployerSubscription: React.FC = () => {
  const { 
    employerPlan, 
    setEmployerPlan, 
    employerWorkerCount, 
    setEmployerWorkerCount, 
    isMonthlyBillPaid, 
    payMonthlyBill, 
    t, 
    addToast 
  } = useApp();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const plans = [
    {
      id: 'basic' as const,
      name: 'Basic Protection',
      price: 100,
      period: '/ worker / month',
      description: 'Essential emergency coverage & digital health cards for daily-wage laborers.',
      features: [
        '₹1,00,000 Accidental Trauma Hospitalization',
        '24/7 AI Injury Triage NLP Engine',
        'Digital Swasthya Cards with QR Code',
        'Basic Emergency Ambulance Assistance (108)',
        'Quarterly Safety Compliance Summary'
      ],
      popular: false
    },
    {
      id: 'standard' as const,
      name: 'Standard Care (Recommended)',
      price: 150,
      period: '/ worker / month',
      description: 'Comprehensive occupational healthcare, unlimited telemedicine & AI safety monitor.',
      features: [
        '₹2,00,000 Cashless Secondary & Tertiary Care',
        'Unlimited 24/7 Video Telemedicine with Specialists',
        'AI Safety Risk Monitor with Site CCTV Telemetry',
        '1-Click Auto-File Cashless Claim Guarantee',
        'Full Government Welfare Scheme Concierge (e-Shram / BOCW)',
        'Monthly ESG & Labour Safety Audit Reports'
      ],
      popular: true
    },
    {
      id: 'premium' as const,
      name: 'Premium Enterprise Shield',
      price: 200,
      period: '/ worker / month',
      description: 'All-inclusive coverage including family OPD, maternity grants & dedicated on-site paramedic.',
      features: [
        '₹5,00,000 High-Limit Trauma & ICU Protection',
        'Worker Family & Dependent OPD Health Benefits',
        'On-site Weekly Paramedic Health Checkups & First-Aid Booth',
        'Dedicated 24/7 TPA Account Executive',
        'Real-time IoT PPE Vision Camera Deployment',
        'Priority Hospital Bed Allotment Guarantee'
      ],
      popular: false
    }
  ];

  const currentPricePerWorker = employerPlan === 'basic' ? 100 : employerPlan === 'standard' ? 150 : 200;
  const totalMonthlyCost = employerWorkerCount * currentPricePerWorker;

  const handleSimulatePayment = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      payMonthlyBill();
      setPaymentProcessing(false);
      setIsPaymentModalOpen(false);
    }, 1200);
  };

  const handleDownloadInvoice = () => {
    addToast('success', 'GST Tax Invoice Downloaded', 'Invoice #INV-NC-2026-8812 for ₹75,000 saved.');
  };

  return (
    <div className="space-y-8">
      
      {/* Active Subscription Billing Summary Card (As required by prompt) */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/50 to-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/30">
                Monthly Billing Breakdown
              </span>
              <span className="text-xs text-slate-400 font-mono">Invoice Period: Aug 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              ABC Constructions Infrastructure Ltd.
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Automated monthly group healthcare protection invoice for on-site construction workforce.
            </p>

            {/* Workers x Plan = Cost summary metrics */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Enrolled Workers</span>
                <span className="text-lg font-black text-white">{employerWorkerCount} Workers</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Current Plan</span>
                <span className="text-lg font-black text-teal-300 capitalize">{employerPlan} (₹{currentPricePerWorker}/mo)</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Monthly Cost</span>
                <span className="text-lg font-black text-emerald-400">₹{totalMonthlyCost.toLocaleString('en-IN')}/mo</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center space-y-3 min-w-[280px]">
            <div className="text-center">
              <span className="text-xs text-slate-400 block">Amount Payable</span>
              <div className="text-3xl font-black text-white mt-0.5">
                ₹{totalMonthlyCost.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center justify-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                GST Compliant (SAC 997133)
              </span>
            </div>

            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-slate-950" />
              <span>{t('payMonthlyBill')}</span>
            </button>

            <button
              onClick={handleDownloadInvoice}
              className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Tax Invoice (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Plan Tier Comparison */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-6">
          <h3 className="text-xl font-black text-white">{t('subscriptionPlans')}</h3>
          <p className="text-xs text-slate-400 mt-1">
            Predictable per-worker group pricing. Cancel or scale up/down worker headcounts anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const isSelected = employerPlan === plan.id;
            return (
              <div
                key={plan.id}
                className={`bg-slate-900 border rounded-3xl p-6 shadow-xl flex flex-col justify-between relative transition-all ${
                  isSelected
                    ? 'border-teal-500 ring-2 ring-teal-500/40 bg-slate-850 shadow-teal-500/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black text-white">{plan.name}</h4>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
                        Current Plan
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹{plan.price}</span>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{plan.description}</p>

                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => {
                      setEmployerPlan(plan.id);
                      addToast('success', 'Plan Updated', `ABC Constructions subscription switched to ${plan.name}`);
                    }}
                    className={`w-full py-3 rounded-xl font-extrabold text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    {isSelected ? 'Current Active Tier' : `Switch to ${plan.name}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simulated Razorpay / Corporate UPI Checkout Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-xs">
                  ₹
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">NirmaanCare Razorpay Corporate Desk</h4>
                  <span className="text-[10px] text-slate-400">100% Encrypted Payment Gateway</span>
                </div>
              </div>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {/* Bill Summary */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>Employer:</span>
                <span className="font-bold text-white">ABC Constructions Infrastructure</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Workers Covered:</span>
                <span className="font-bold text-white">{employerWorkerCount} Enrolled Workers</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Plan Rate:</span>
                <span className="font-bold text-teal-300">₹{currentPricePerWorker} / worker</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-800 text-sm font-extrabold text-white">
                <span>Total Amount:</span>
                <span className="text-emerald-400 text-base">₹{totalMonthlyCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Payment Options Simulation */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Select Payment Channel:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button type="button" className="p-2.5 rounded-xl bg-teal-500/20 border border-teal-500 text-teal-300 font-bold text-center">
                  Corporate UPI
                </button>
                <button type="button" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-center">
                  NetBanking NEFT
                </button>
                <button type="button" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-center">
                  Corporate Card
                </button>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="button"
              onClick={handleSimulatePayment}
              disabled={paymentProcessing}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {paymentProcessing ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Authorizing via Bank UPI Gateway...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize & Pay ₹{totalMonthlyCost.toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
