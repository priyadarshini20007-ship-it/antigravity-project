import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AppRole, Language } from '../../types';
import { 
  Shield, 
  Sparkles, 
  RotateCcw, 
  Languages, 
  User, 
  Building2, 
  ShieldCheck, 
  Globe, 
  Menu, 
  X,
  PhoneCall,
  LogIn
} from 'lucide-react';

export const TopBar: React.FC = () => {
  const { 
    role, 
    setRole, 
    language, 
    setLanguage, 
    setIsPitchGuideOpen, 
    openAuthModal,
    resetDemoData, 
    addToast 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rolesList: Array<{ key: AppRole; label: string; icon: React.ReactNode; badge?: string }> = [
    { key: 'landing', label: 'Home', icon: <Globe className="w-4 h-4" /> },
    { key: 'worker', label: 'Worker Portal', icon: <User className="w-4 h-4 text-teal-400" />, badge: 'Ravi 👷' },
    { key: 'employer', label: 'Employer Dashboard', icon: <Building2 className="w-4 h-4 text-amber-400" />, badge: 'ABC Constr.' },
    { key: 'admin', label: 'Super Admin', icon: <ShieldCheck className="w-4 h-4 text-indigo-400" />, badge: 'HQ Ops' }
  ];

  return (
    <>
      {/* Top Floating Demo Control Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            
            {/* Logo */}
            <div 
              onClick={() => setRole('landing')}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-amber-500 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <div className="relative">
                    <Shield className="w-5 h-5 text-teal-400" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping opacity-75" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">
                    Nirmaan<span className="text-teal-400">Care</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                    MVP
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 -mt-1 font-medium hidden sm:inline">
                  Occupational Healthcare & Insurance
                </span>
              </div>
            </div>

            {/* Role Switcher Pill - Desktop */}
            <nav className="hidden lg:flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800 shadow-inner">
              {rolesList.map((item) => {
                const isActive = role === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setRole(item.key)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-500/20'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-teal-900/80 text-teal-200' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Side Tools: Pitch Guide + Auth + Language + Demo Reset */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* 3-Min Pitch Guide Button */}
              <button
                onClick={() => setIsPitchGuideOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-102 cursor-pointer"
                title="Launch Step-by-Step Pitch Guide for Competition Judges"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 animate-pulse" />
                <span className="hidden sm:inline">3-Min Pitch Guide</span>
                <span className="sm:hidden">Pitch</span>
              </button>

              {/* Sign In / Auth Button */}
              <button
                onClick={() => openAuthModal('worker', 'signin')}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-teal-400" />
                <span>Portal Login</span>
              </button>

              {/* Language Selector Dropdown */}
              <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
                <Languages className="w-3.5 h-3.5 text-teal-400 ml-1 hidden sm:inline" />
                <select
                  value={language}
                  onChange={(e) => {
                    const newLang = e.target.value as Language;
                    setLanguage(newLang);
                    addToast('info', 'Language Changed', newLang === 'hi' ? 'भाषा बदलकर हिन्दी की गई' : newLang === 'ta' ? 'மொழி தமிழுக்கு மாற்றப்பட்டது' : 'Language set to English');
                  }}
                  className="bg-transparent text-xs font-semibold text-slate-200 px-1.5 sm:px-2 py-1 outline-none cursor-pointer"
                >
                  <option value="en" className="bg-slate-900 text-white">EN</option>
                  <option value="hi" className="bg-slate-900 text-white">हिन्दी</option>
                  <option value="ta" className="bg-slate-900 text-white">தமிழ்</option>
                </select>
              </div>

              {/* Emergency Hotline Button */}
              <a
                href="tel:108"
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold transition-colors"
                title="24x7 Ambulance / Trauma Helpline"
              >
                <PhoneCall className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
                <span>108 SOS</span>
              </a>

              {/* Reset Demo State Button */}
              <button
                onClick={resetDemoData}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-100 text-xs transition-colors cursor-pointer"
                title="Reset Demo Data to Initial State"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
              <span>Select Platform View:</span>
              <button
                onClick={() => { openAuthModal('worker', 'signin'); setMobileMenuOpen(false); }}
                className="text-teal-400 font-bold flex items-center gap-1"
              >
                <LogIn className="w-3.5 h-3.5" /> Portal Login
              </button>
            </div>
            
            <div className="space-y-1.5">
              {rolesList.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setRole(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    role === item.key
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md'
                      : 'text-slate-300 bg-slate-950/70 hover:bg-slate-800 border border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 font-medium">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile SOS Call button */}
            <a
              href="tel:108"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-600/20 text-rose-300 border border-rose-500/40 text-xs font-bold"
            >
              <PhoneCall className="w-4 h-4 text-rose-400" />
              <span>Emergency Trauma & Ambulance (108 SOS)</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
};
