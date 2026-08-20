import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { InjuryTriageInput } from '../../types';
import { 
  Bot, 
  UploadCloud, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  PhoneCall, 
  Video, 
  FileText, 
  Sparkles, 
  RotateCcw, 
  Activity, 
  Check, 
  Info,
  Camera,
  Scan,
  ShieldCheck
} from 'lucide-react';

const BODY_PARTS = [
  'Head & Skull',
  'Neck & Cervical',
  'Eye / Face',
  'Shoulder & Arm',
  'Hand / Fingers',
  'Chest & Ribs',
  'Back / Spine',
  'Knee & Tibia',
  'Ankle & Foot'
];

export const AiInjuryAssistant: React.FC<{ onNavigateToTelemed?: () => void; onNavigateToClaims?: () => void }> = ({
  onNavigateToTelemed,
  onNavigateToClaims
}) => {
  const { 
    runAiTriage, 
    lastTriageResult, 
    clearTriage, 
    t, 
    language, 
    autoFileNewClaim, 
    addToast 
  } = useApp();

  const [incidentDescription, setIncidentDescription] = useState('Scaffolding slip at 8ft height, fell on wooden planks with severe impact on lower left leg.');
  const [bodyPart, setBodyPart] = useState('Knee & Tibia');
  const [bleeding, setBleeding] = useState(false);
  const [canMove, setCanMove] = useState(false);
  const [severePain, setSeverePain] = useState(true);
  const [painLevel, setPainLevel] = useState(8);
  const [lostConsciousness, setLostConsciousness] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&auto=format&fit=crop&q=80'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Quick Preset Scenarios for instantaneous pitch demo
  const loadScenario = (preset: 'fall' | 'cut' | 'sprain') => {
    if (preset === 'fall') {
      setIncidentDescription('Fall from 8ft scaffolding level, heard a crack sound on left lower leg.');
      setBodyPart('Knee & Tibia');
      setBleeding(false);
      setCanMove(false);
      setSeverePain(true);
      setPainLevel(9);
      setLostConsciousness(false);
      setImagePreview('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&auto=format&fit=crop&q=80');
      addToast('info', 'Loaded High Risk Scenario', 'Fall from height with suspected fracture');
    } else if (preset === 'cut') {
      setIncidentDescription('Deep laceration on right thumb while cutting steel rebar with disc saw.');
      setBodyPart('Hand / Fingers');
      setBleeding(true);
      setCanMove(true);
      setSeverePain(true);
      setPainLevel(6);
      setLostConsciousness(false);
      setImagePreview('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=300&auto=format&fit=crop&q=80');
      addToast('info', 'Loaded Medium Risk Scenario', 'Rebar cut with bleeding');
    } else {
      setIncidentDescription('Twisted ankle stepping on loose gravel while carrying cement sack.');
      setBodyPart('Ankle & Foot');
      setBleeding(false);
      setCanMove(true);
      setSeverePain(false);
      setPainLevel(3);
      setLostConsciousness(false);
      setImagePreview(null);
      addToast('info', 'Loaded Low Risk Scenario', 'Minor soft tissue strain');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        addToast('success', 'Injury Photo Uploaded', 'AI Computer Vision will inspect wound morphology.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    setTimeout(() => {
      const input: InjuryTriageInput = {
        incidentDescription,
        bodyPart,
        bleeding,
        canMove,
        severePain,
        painLevel,
        lostConsciousness,
        imageUrl: imagePreview || undefined
      };
      runAiTriage(input);
      setIsAnalyzing(false);
      addToast('success', 'AI Triage Complete', 'Clinical risk category generated.');
    }, 850);
  };

  const handleAutoFileFromTriage = () => {
    const note = `${bodyPart} Trauma: ${incidentDescription}`;
    autoFileNewClaim(note, 85000);
    if (onNavigateToClaims) {
      onNavigateToClaims();
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl relative overflow-hidden">
      {/* Header with glowing badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
            <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-white">{t('aiAssistantTitle')}</h2>
              <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 animate-pulse">
                <Sparkles className="w-3 h-3" />
                Live NLP & Vision
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{t('aiAssistantSubtitle')}</p>
          </div>
        </div>

        {/* 1-Click Demo Scenarios */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start sm:self-auto overflow-x-auto max-w-full">
          <span className="text-[11px] font-bold text-slate-400 px-1 hidden md:inline">Demo Presets:</span>
          <button
            type="button"
            onClick={() => loadScenario('fall')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-colors shrink-0 cursor-pointer"
          >
            ⚡ Fall (High)
          </button>
          <button
            type="button"
            onClick={() => loadScenario('cut')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors shrink-0 cursor-pointer"
          >
            ⚡ Cut (Med)
          </button>
          <button
            type="button"
            onClick={() => loadScenario('sprain')}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-colors shrink-0 cursor-pointer"
          >
            ⚡ Sprain (Low)
          </button>
        </div>
      </div>

      {/* Main Questionnaire & Result Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left: Interactive Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4 sm:space-y-5">
          
          {/* Question 1 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              {t('q1')}
            </label>
            <textarea
              value={incidentDescription}
              onChange={(e) => setIncidentDescription(e.target.value)}
              rows={2}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-600"
              placeholder={t('q1Placeholder')}
              required
            />
          </div>

          {/* Question 2: Body Part */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              {t('q2')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {BODY_PARTS.map((part) => {
                const isSelected = bodyPart === part;
                return (
                  <button
                    type="button"
                    key={part}
                    onClick={() => setBodyPart(part)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-teal-500/20 border-teal-500 text-teal-300 font-bold shadow-sm shadow-teal-500/20'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{part}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 ml-1" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Questions 3 & 4: Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Q3: Bleeding */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 sm:p-3.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200 block">{t('q3')}</span>
                <span className="text-[11px] text-slate-400">Active open blood flow</span>
              </div>
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setBleeding(true)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    bleeding ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setBleeding(false)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    !bleeding ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {/* Q4: Mobility */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 sm:p-3.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200 block">{t('q4')}</span>
                <span className="text-[11px] text-slate-400">Able to bend/move freely</span>
              </div>
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setCanMove(true)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    canMove ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setCanMove(false)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    !canMove ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Question 5: Pain Slider (1 to 10) */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 sm:p-3.5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {t('q5')}
              </label>
              <span className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                painLevel >= 8 ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' :
                painLevel >= 5 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              }`}>
                Pain Score: {painLevel}/10 ({painLevel >= 8 ? 'Severe' : painLevel >= 5 ? 'Moderate' : 'Mild'})
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={painLevel}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPainLevel(val);
                setSeverePain(val >= 7);
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-semibold">
              <span>1 (Mild)</span>
              <span>5 (Moderate)</span>
              <span>10 (Unbearable)</span>
            </div>
          </div>

          {/* Question 6: Consciousness */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 sm:p-3.5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-200 block">{t('q6')}</span>
              <span className="text-[11px] text-slate-400">Blackout, severe dizziness, or head impact</span>
            </div>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
              <button
                type="button"
                onClick={() => setLostConsciousness(true)}
                className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  lostConsciousness ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setLostConsciousness(false)}
                className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                  !lostConsciousness ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Photo Upload Section with Scanning Grid Simulation */}
          <div className="bg-slate-950/60 border border-slate-800 border-dashed rounded-xl p-3.5 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-teal-400" />
                {t('uploadInjuryPhoto')}
              </span>
              {imagePreview && (
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="text-[11px] text-rose-400 hover:underline cursor-pointer"
                >
                  Remove Photo
                </button>
              )}
            </div>

            {imagePreview ? (
              <div className="flex items-center gap-3 sm:gap-4 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-700 shrink-0">
                  <img
                    src={imagePreview}
                    alt="Injury Scan Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-teal-500/10 pointer-events-none" />
                  <div className="absolute inset-x-0 h-0.5 bg-teal-400 shadow-[0_0_8px_#14b8a6] animate-scan-line pointer-events-none" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white truncate">Injury_Visual_Scan.jpg</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 rounded font-mono">CV Active</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Morphology check: Localized soft tissue contusion & erythema pattern detected.
                  </p>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-4 border border-slate-800 rounded-xl hover:border-teal-500/50 cursor-pointer transition-colors bg-slate-900/40">
                <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-xs font-semibold text-slate-300">Click to capture or upload injury photo</span>
                <span className="text-[10px] text-slate-500 mt-0.5">JPG, PNG, WebP (Max 10MB)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isAnalyzing}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 hover:from-teal-500 hover:to-teal-400 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                <span>{t('analyzingText')}</span>
              </>
            ) : (
              <>
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('analyzeInjuryBtn')}</span>
              </>
            )}
          </button>
        </form>

        {/* Right: AI Triage Output Screen */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 flex-1 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient background glow depending on risk */}
            {lastTriageResult && (
              <div
                className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  lastTriageResult.riskLevel === 'HIGH' ? 'bg-rose-500' :
                  lastTriageResult.riskLevel === 'MEDIUM' ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
              />
            )}

            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-teal-400" />
                  AI Clinical Assessment Output
                </span>
                {lastTriageResult && (
                  <button
                    onClick={clearTriage}
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {lastTriageResult ? (
                <div className="space-y-3.5 mt-4 animate-fadeIn">
                  
                  {/* Big Risk Badge Card */}
                  <div
                    className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
                      lastTriageResult.riskLevel === 'HIGH'
                        ? 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                        : lastTriageResult.riskLevel === 'MEDIUM'
                        ? 'bg-amber-950/40 border-amber-500/60 text-amber-200'
                        : 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-slate-900/80 shrink-0">
                      {lastTriageResult.riskLevel === 'HIGH' ? (
                        <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 text-rose-400 animate-bounce" />
                      ) : lastTriageResult.riskLevel === 'MEDIUM' ? (
                        <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider block opacity-90">
                        Assessed Risk Category:
                      </span>
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white mt-0.5">
                        {language === 'hi' ? lastTriageResult.titleHi : language === 'ta' ? lastTriageResult.titleTa : lastTriageResult.title}
                      </h4>
                      <p className="text-xs mt-1 leading-relaxed opacity-90">
                        {language === 'hi' ? lastTriageResult.messageHi : language === 'ta' ? lastTriageResult.messageTa : lastTriageResult.message}
                      </p>
                    </div>
                  </div>

                  {/* Clinical Reasoning Breakdown */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                      AI Diagnostic Telemetry:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Confidence</span>
                        <span className="font-bold text-white">{lastTriageResult.aiAnalysis.confidence}%</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Severity Class</span>
                        <span className="font-bold text-white truncate block">{lastTriageResult.aiAnalysis.detectedSeverity}</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Specialist Needed</span>
                        <span className="font-bold text-white truncate block">{lastTriageResult.aiAnalysis.specialistRecommended}</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block text-[10px]">Intervention Window</span>
                        <span className="font-bold text-white truncate block">{lastTriageResult.aiAnalysis.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  {/* First Aid & Protocol Steps */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                      Recommended Immediate Actions:
                    </span>
                    <ul className="space-y-1.5">
                      {lastTriageResult.recommendations.map((rec, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800/80">
                          <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Immediate Action Buttons */}
                  <div className="pt-2 space-y-2">
                    {lastTriageResult.riskLevel === 'HIGH' ? (
                      <>
                        <a
                          href="tel:108"
                          className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
                        >
                          <PhoneCall className="w-4 h-4 animate-bounce" />
                          <span>🚨 Dial 108 Emergency Ambulance</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleAutoFileFromTriage}
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                        >
                          <FileText className="w-4 h-4 text-teal-400" />
                          <span>Auto-Generate Cashless Pre-Auth Claim (₹85,000)</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            if (onNavigateToTelemed) onNavigateToTelemed();
                            addToast('info', 'Opening Doctor Directory', 'Select a specialist for instant video call');
                          }}
                          className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
                        >
                          <Video className="w-4 h-4" />
                          <span>{t('startCallNow')} (Free for Ravi)</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleAutoFileFromTriage}
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-800 transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5 text-teal-400" />
                          <span>File Minor Incident Log with Employer</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-10 flex flex-col items-center justify-center text-center text-slate-400 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div className="max-w-xs">
                    <h5 className="text-sm font-bold text-white">AI Clinical Engine Ready</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete the questions or click any demo preset above to run clinical severity triage.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 leading-relaxed">
                {t('aiDisclaimer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
