import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  PhoneOff, 
  Sparkles, 
  FileText, 
  Download, 
  CheckCircle2,
  Stethoscope,
  Volume2,
  X
} from 'lucide-react';

export const VideoCallModal: React.FC = () => {
  const { activeVideoCall, endVideoCall, worker, addToast } = useApp();
  
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [callDuration, setCallDuration] = useState(14); // seconds
  const [activeTab, setActiveTab] = useState<'video' | 'prescription'>('video');
  const [transcriptLines] = useState<string[]>([
    'Dr. Ananya: "Namaste Ravi ji, I see the AI triage report regarding your slip on the scaffolding planks."',
    'Ravi: "Yes doctor, my lower left leg hurts when I put weight on it, though bleeding stopped."',
    'Dr. Ananya: "Understood. The swelling is moderate. I am prescribing pain relief & recommending an X-Ray confirmation."'
  ]);

  useEffect(() => {
    if (!activeVideoCall) return;
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeVideoCall]);

  if (!activeVideoCall) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleDownloadPrescription = () => {
    addToast('success', 'Prescription Downloaded', 'Digital PDF Rx signed by Dr. Ananya Sharma saved to your device.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-lg animate-fadeIn">
      <div className="bg-slate-900 border border-teal-500/40 rounded-3xl max-w-5xl w-full h-[92vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Video Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white">NirmaanCare Live Tele-Consultation</span>
                <span className="text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full">
                  HD Encrypted
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Connected with {activeVideoCall.doctorName} • {formatTime(callDuration)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'video' ? 'prescription' : 'video')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'prescription'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Prescription</span>
              <span className="sm:hidden">Rx</span>
            </button>
            
            <button
              onClick={endVideoCall}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close call"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Call Body: Split View or Video + Notes */}
        <div className="flex-1 p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-y-auto">
          
          {/* Main Video Stream Window */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="relative flex-1 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-center justify-center">
              
              {/* Doctor Video Feed Simulation */}
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                alt="Doctor Feed"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Doctor Status Card in Feed with Audio Waveform animation */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl flex items-center gap-2.5 shadow-lg max-w-[80%]">
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block leading-tight truncate">{activeVideoCall.doctorName}</span>
                  <div className="text-[10px] text-teal-400 flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-1 bg-teal-400 rounded-full animate-audio-bar-1" />
                      <span className="w-1 bg-teal-400 rounded-full animate-audio-bar-2" />
                      <span className="w-1 bg-teal-400 rounded-full animate-audio-bar-3" />
                      <span className="w-1 bg-teal-400 rounded-full animate-audio-bar-4" />
                    </div>
                    <span>Speaking • Trauma Specialist</span>
                  </div>
                </div>
              </div>

              {/* Worker Picture-in-Picture Stream */}
              <div className="absolute bottom-4 right-4 w-28 sm:w-36 h-22 sm:h-28 rounded-2xl overflow-hidden border-2 border-teal-500/80 shadow-2xl bg-slate-900">
                {isVideoOn ? (
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-500">
                    <VideoOff className="w-5 h-5" />
                    <span className="text-[9px] mt-1">Camera Off</span>
                  </div>
                )}
                <div className="absolute bottom-1 left-1 bg-slate-950/80 px-1.5 py-0.5 rounded text-[9px] text-white font-bold">
                  {worker.name} (You)
                </div>
              </div>

              {/* AI Scribe Overlay Pill */}
              <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md border border-teal-500/30 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs text-slate-200 hidden sm:flex">
                <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-spin" />
                <span>AI Clinical Scribe Active (Auto-summarizing notes)</span>
              </div>
            </div>

            {/* In-Call Controls Bar */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-3 flex items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsMicOn(!isMicOn)}
                className={`p-3 sm:p-3.5 rounded-2xl transition-all cursor-pointer ${
                  isMicOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'
                }`}
                title={isMicOn ? 'Mute Mic' : 'Unmute Mic'}
              >
                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-3 sm:p-3.5 rounded-2xl transition-all cursor-pointer ${
                  isVideoOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-rose-600 text-white'
                }`}
                title={isVideoOn ? 'Turn Camera Off' : 'Turn Camera On'}
              >
                {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>

              <button
                onClick={endVideoCall}
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
              >
                <PhoneOff className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>End Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Live Scribe & Prescription Generator */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between overflow-y-auto space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  E-Prescription & Notes
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  Live Sync
                </span>
              </div>

              {/* Live Medical Transcript */}
              <div className="mt-3 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Live Consultation Transcript:
                </span>
                <div className="space-y-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 text-xs">
                  {transcriptLines.map((line, idx) => (
                    <p key={idx} className="text-slate-300 leading-relaxed font-sans text-xs">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Digital Prescription Details */}
              <div className="mt-4 bg-slate-900 border border-teal-500/30 rounded-xl p-3.5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-white">Clinical Diagnosis</span>
                  <span className="text-[10px] text-teal-400 font-mono">ICD-10 Trauma</span>
                </div>
                <p className="text-xs font-semibold text-teal-300">
                  Left Tibia Hairline Stress / Soft Tissue Contusion
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                    Prescribed Medicines (Generic Available):
                  </span>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-between">
                      <div>
                        <strong className="text-white">Zerodol-P (Aceclofenac + Para)</strong>
                        <span className="text-slate-400 block text-[10px]">100mg/325mg • Twice daily after meals</span>
                      </div>
                      <span className="text-teal-400 font-bold">5 Days</span>
                    </div>

                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-between">
                      <div>
                        <strong className="text-white">Chymoral Forte</strong>
                        <span className="text-slate-400 block text-[10px]">100k AU • For localized swelling</span>
                      </div>
                      <span className="text-teal-400 font-bold">5 Days</span>
                    </div>

                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-between">
                      <div>
                        <strong className="text-white">Volini / Diclofenac Topical Gel</strong>
                        <span className="text-slate-400 block text-[10px]">Apply gently thrice daily</span>
                      </div>
                      <span className="text-teal-400 font-bold">7 Days</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 pt-1">
                  <strong>Advice:</strong> Complete limb rest for 48 hours. Avoid climbing scaffolds. Follow up in 5 days.
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2">
              <button
                onClick={handleDownloadPrescription}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Signed Prescription (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
