import React from 'react';
import { useApp } from './context/AppContext';
import { TopBar } from './components/navigation/TopBar';
import { PitchGuideModal } from './components/pitch/PitchGuideModal';
import { VideoCallModal } from './components/worker/VideoCallModal';
import { ToastContainer } from './components/common/ToastContainer';
import { LandingPage } from './components/landing/LandingPage';
import { WorkerDashboard } from './components/worker/WorkerDashboard';
import { EmployerDashboard } from './components/employer/EmployerDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Shield, HeartHandshake, PhoneCall, Globe } from 'lucide-react';

import { AuthModal } from './components/auth/AuthModal';

export const AppContent: React.FC = () => {
  const { role, setRole, setIsPitchGuideOpen } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-500 selection:text-white">
      
      {/* Top Header & Demo Navigation */}
      <TopBar />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {role === 'landing' && <LandingPage />}
        {role === 'worker' && <WorkerDashboard />}
        {role === 'employer' && <EmployerDashboard />}
        {role === 'admin' && <AdminDashboard />}
      </main>

      {/* Global Interactive Overlays */}
      <AuthModal />
      <PitchGuideModal />
      <VideoCallModal />
      <ToastContainer />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-850 py-10 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-black text-xs">
              NC
            </div>
            <div>
              <span className="font-extrabold text-white text-sm tracking-tight">NirmaanCare</span>
              <span className="block text-[11px] text-slate-500">
                Occupational Healthcare & Micro-Insurance Platform for India's Construction Workforce
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <button onClick={() => setRole('landing')} className="hover:text-teal-300 transition-colors">
              Home
            </button>
            <button onClick={() => setRole('worker')} className="hover:text-teal-300 transition-colors">
              Worker Portal (Ravi 👷)
            </button>
            <button onClick={() => setRole('employer')} className="hover:text-teal-300 transition-colors">
              Employer Dashboard (ABC Infra)
            </button>
            <button onClick={() => setRole('admin')} className="hover:text-teal-300 transition-colors">
              Super Admin
            </button>
            <button onClick={() => setIsPitchGuideOpen(true)} className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
              🎯 3-Min Pitch Guide
            </button>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-500 space-y-0.5">
            <p>© 2026 NirmaanCare Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="text-teal-400 font-semibold">“One injury shouldn't destroy a family's income.”</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return <AppContent />;
}

export default App;
