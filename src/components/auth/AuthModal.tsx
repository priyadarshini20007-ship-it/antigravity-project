import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Shield, 
  User, 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  X, 
  Eye, 
  EyeOff, 
  Clock, 
  AlertCircle,
  FileCheck,
  Check
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    closeAuthModal, 
    authDefaultTab, 
    authMode, 
    setRole, 
    addToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'worker' | 'employer' | 'admin'>(authDefaultTab);
  const [mode, setMode] = useState<'signin' | 'signup'>(authMode);
  
  // Worker inputs
  const [workerPhone, setWorkerPhone] = useState('9876543210');
  const [workerUan, setWorkerUan] = useState('9842-1082-9912');
  const [workerName, setWorkerName] = useState('Ravi Kumar');
  
  // Employer inputs
  const [employerEmail, setEmployerEmail] = useState('suresh.patel@abcconstructions.com');
  const [employerGst, setEmployerGst] = useState('27AAACA1234F1Z5');
  const [employerCompany, setEmployerCompany] = useState('ABC Constructions Infrastructure Ltd.');
  const [employerPassword, setEmployerPassword] = useState('Nirmaan@2026');
  
  // Admin inputs
  const [adminKey, setAdminKey] = useState('ADMIN-OPS-2026');

  // OTP Simulation
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['5', '8', '4', '2']);
  const [otpTimer, setOtpTimer] = useState(45);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setActiveTab(authDefaultTab);
    setMode(authMode);
    setIsOtpSent(false);
    setErrorMessage('');
  }, [authDefaultTab, authMode, isAuthModalOpen]);

  useEffect(() => {
    let interval: any;
    if (isOtpSent && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, otpTimer]);

  if (!isAuthModalOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
      setOtpTimer(45);
      addToast('info', 'OTP Sent 📲', 'Verification code sent to registered mobile/email: 5842');
    }, 700);
  };

  const handleVerifyAndLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === 'worker') {
        setRole('worker');
        addToast('success', 'Welcome, Ravi Kumar 👷', 'Authenticated with active ₹2,00,000 health cover.');
      } else if (activeTab === 'employer') {
        setRole('employer');
        addToast('success', 'Welcome, ABC Constructions 🏢', 'Contractor Safety & Billing dashboard loaded.');
      } else {
        setRole('admin');
        addToast('success', 'Super Admin Access Granted 🛡️', 'Central Operations Command loaded.');
      }
      closeAuthModal();
    }, 800);
  };

  const handleQuickDemoLogin = (target: 'worker' | 'employer' | 'admin') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRole(target);
      if (target === 'worker') {
        addToast('success', 'Demo Worker Login', 'Logged in as Ravi Kumar 👷');
      } else if (target === 'employer') {
        addToast('success', 'Demo Employer Login', 'Logged in as ABC Constructions 🏢');
      } else {
        addToast('success', 'Demo Admin Login', 'Logged in as Super Admin 🛡️');
      }
      closeAuthModal();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl space-y-5 max-h-[95vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-amber-500 p-0.5 shadow-md">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-400" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black text-white">
              {mode === 'signin' ? 'Sign In to NirmaanCare' : 'Create Account / Register'}
            </h3>
            <p className="text-xs text-slate-400">
              {activeTab === 'worker' ? 'Blue-Collar Construction Worker Portal' :
               activeTab === 'employer' ? 'Builder & Contractor Enterprise Healthcare' : 'Central Admin Operations'}
            </p>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            type="button"
            onClick={() => { setActiveTab('worker'); setIsOtpSent(false); }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'worker'
                ? 'bg-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Worker 👷</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('employer'); setIsOtpSent(false); }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'employer'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer 🏢</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('admin'); setIsOtpSent(false); }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'admin'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin 🛡️</span>
          </button>
        </div>

        {/* 1-Click Fast Pitch Demo Button */}
        <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium">Competition Fast Demo:</span>
          </div>
          <button
            type="button"
            onClick={() => handleQuickDemoLogin(activeTab)}
            className="px-3 py-1.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-bold transition-all cursor-pointer"
          >
            1-Click Demo {activeTab === 'worker' ? 'Ravi 👷' : activeTab === 'employer' ? 'ABC Infra 🏢' : 'Admin 🛡️'}
          </button>
        </div>

        {/* Form Container */}
        {activeTab === 'worker' && (
          <form onSubmit={isOtpSent ? handleVerifyAndLogin : handleSendOtp} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Full Name (as per Aadhaar)
                </label>
                <input
                  type="text"
                  value={workerName}
                  onChange={(e) => setWorkerName(e.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-teal-500"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Mobile Number (Linked with Aadhaar/e-Shram)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={workerPhone}
                  onChange={(e) => setWorkerPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-3.5 py-2.5 text-xs text-white outline-none focus:border-teal-500 font-mono"
                  required
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  e-Shram UAN or BOCW ID (Optional)
                </label>
                <input
                  type="text"
                  value={workerUan}
                  onChange={(e) => setWorkerUan(e.target.value)}
                  placeholder="UAN-9842-1082-9912"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-teal-500 font-mono"
                />
              </div>
            )}

            {isOtpSent && (
              <div className="bg-slate-950 p-3.5 rounded-xl border border-teal-500/30 space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-bold">Enter 4-Digit OTP</span>
                  <span className="text-teal-400 font-mono text-[11px]">Resend in {otpTimer}s</span>
                </div>
                <div className="flex gap-2 justify-center py-1">
                  {otpCode.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const newOtp = [...otpCode];
                        newOtp[idx] = e.target.value;
                        setOtpCode(newOtp);
                      }}
                      className="w-12 h-12 text-center text-lg font-black bg-slate-900 border border-slate-700 rounded-xl text-teal-300 focus:border-teal-400 outline-none"
                    />
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 text-center">
                  Mock OTP auto-filled: <strong>5842</strong>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-extrabold text-xs shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : isOtpSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verify OTP & Open Worker Dashboard</span>
                </>
              ) : (
                <>
                  <span>Send OTP via SMS</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Employer Auth Form */}
        {activeTab === 'employer' && (
          <form onSubmit={handleVerifyAndLogin} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Construction Company Name
                </label>
                <input
                  type="text"
                  value={employerCompany}
                  onChange={(e) => setEmployerCompany(e.target.value)}
                  placeholder="e.g. ABC Constructions Infrastructure"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Corporate Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  value={employerEmail}
                  onChange={(e) => setEmployerEmail(e.target.value)}
                  placeholder="safety.head@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500"
                  required
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Company GSTIN / PAN
                </label>
                <input
                  type="text"
                  value={employerGst}
                  onChange={(e) => setEmployerGst(e.target.value)}
                  placeholder="27AAACA1234F1Z5"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500 font-mono"
                  required
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => addToast('info', 'Password Reset', 'Password reset instructions sent to work email.')}
                  className="text-[10px] text-amber-400 hover:underline"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={employerPassword}
                  onChange={(e) => setEmployerPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white outline-none focus:border-amber-500 font-mono"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Signing In Contractor Desk...</span>
                </>
              ) : (
                <>
                  <Building2 className="w-4 h-4" />
                  <span>{mode === 'signin' ? 'Sign In as Contractor' : 'Register 14-Day Free Enterprise Trial'}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Admin Auth Form */}
        {activeTab === 'admin' && (
          <form onSubmit={handleVerifyAndLogin} className="space-y-4">
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Master Operations Access Key
              </label>
              <div className="relative">
                <ShieldCheck className="w-4 h-4 text-indigo-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  placeholder="ADMIN-OPS-KEY"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white outline-none focus:border-indigo-500 font-mono"
                  required
                />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Authorized NirmaanCare TPA Medical Operations & Claims Board
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Authorizing Operations Master Key...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enter Super Admin Command Center</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer Toggle between Sign In / Sign Up */}
        {activeTab !== 'admin' && (
          <div className="pt-2 border-t border-slate-800 text-center text-xs text-slate-400">
            {mode === 'signin' ? (
              <p>
                New contractor or unregistered worker?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-teal-400 font-bold hover:underline ml-1 cursor-pointer"
                >
                  Create an Account
                </button>
              </p>
            ) : (
              <p>
                Already registered?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="text-teal-400 font-bold hover:underline ml-1 cursor-pointer"
                >
                  Sign In to Dashboard
                </button>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
