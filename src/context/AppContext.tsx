import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  AppRole, 
  Language, 
  WorkerProfile, 
  Doctor, 
  Claim, 
  ConstructionSite, 
  GovernmentScheme, 
  Hospital,
  TelemedicineAppointment,
  InjuryTriageResult,
  InjuryTriageInput
} from '../types';
import { 
  INITIAL_WORKER, 
  MOCK_WORKERS_ROSTER, 
  MOCK_DOCTORS, 
  INITIAL_CLAIM, 
  MOCK_CONSTRUCTION_SITES, 
  MOCK_GOVERNMENT_SCHEMES, 
  MOCK_HOSPITALS 
} from '../data/mockData';
import { TRANSLATIONS } from '../utils/translations';
import confetti from 'canvas-confetti';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface AppContextType {
  role: AppRole;
  setRole: (role: AppRole) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  
  // Worker state
  worker: WorkerProfile;
  setWorker: React.Dispatch<React.SetStateAction<WorkerProfile>>;
  workersRoster: WorkerProfile[];
  addWorkerToRoster: (newWorker: Omit<WorkerProfile, 'id'>) => void;
  
  // Claims state
  claims: Claim[];
  activeClaim: Claim | undefined;
  autoFileNewClaim: (incidentNote?: string, amount?: number) => Claim;
  updateClaimStage: (claimId: string, newStageIndex: number, newStatus?: Claim['status']) => void;
  adminApproveClaim: (claimId: string) => void;
  adminRejectClaim: (claimId: string, reason: string) => void;
  
  // Doctors & Telemedicine
  doctors: Doctor[];
  appointments: TelemedicineAppointment[];
  bookAppointment: (doctorId: string, date: string, time: string, symptoms?: string) => TelemedicineAppointment;
  activeVideoCall: TelemedicineAppointment | null;
  startVideoCall: (appointment: TelemedicineAppointment) => void;
  endVideoCall: () => void;
  
  // AI Triage
  lastTriageResult: InjuryTriageResult | null;
  runAiTriage: (input: InjuryTriageInput) => InjuryTriageResult;
  clearTriage: () => void;
  
  // Construction Sites & AI Risk Monitor
  sites: ConstructionSite[];
  updateSiteRisk: (siteId: string, newRisk: number) => void;
  
  // Government Schemes & Hospitals
  schemes: GovernmentScheme[];
  hospitals: Hospital[];
  
  // Employer Subscription & Billing
  employerPlan: 'basic' | 'standard' | 'premium';
  setEmployerPlan: (plan: 'basic' | 'standard' | 'premium') => void;
  employerWorkerCount: number;
  setEmployerWorkerCount: (count: number) => void;
  isMonthlyBillPaid: boolean;
  payMonthlyBill: () => void;
  
  // Pitch Mode Guide
  isPitchGuideOpen: boolean;
  setIsPitchGuideOpen: (open: boolean) => void;
  pitchStep: number;
  setPitchStep: (step: number) => void;
  nextPitchStep: () => void;
  prevPitchStep: () => void;

  // Auth Modal
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authDefaultTab: 'worker' | 'employer' | 'admin';
  authMode: 'signin' | 'signup';
  openAuthModal: (targetRole?: 'worker' | 'employer' | 'admin', mode?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;

  // UI & Toasts
  toasts: Toast[];
  addToast: (type: Toast['type'], title: string, message: string) => void;
  removeToast: (id: string) => void;
  resetDemoData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<AppRole>('landing');
  const [language, setLanguage] = useState<Language>('en');
  
  const [worker, setWorker] = useState<WorkerProfile>(INITIAL_WORKER);
  const [workersRoster, setWorkersRoster] = useState<WorkerProfile[]>(MOCK_WORKERS_ROSTER);
  const [claims, setClaims] = useState<Claim[]>([INITIAL_CLAIM]);
  const [doctors] = useState<Doctor[]>(MOCK_DOCTORS);
  const [sites, setSites] = useState<ConstructionSite[]>(MOCK_CONSTRUCTION_SITES);
  const [schemes] = useState<GovernmentScheme[]>(MOCK_GOVERNMENT_SCHEMES);
  const [hospitals] = useState<Hospital[]>(MOCK_HOSPITALS);

  // Auth Modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'worker' | 'employer' | 'admin'>('worker');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (targetRole: 'worker' | 'employer' | 'admin' = 'worker', mode: 'signin' | 'signup' = 'signin') => {
    setAuthDefaultTab(targetRole);
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };
  
  // Appointments
  const [appointments, setAppointments] = useState<TelemedicineAppointment[]>([
    {
      id: 'APT-901',
      doctorId: 'DOC-101',
      doctorName: 'Dr. Ananya Sharma',
      doctorSpecialty: 'Occupational Health & Trauma Specialist',
      doctorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
      workerId: 'WRK-7842',
      workerName: 'Ravi Kumar',
      date: 'Tomorrow, 20 Aug 2026',
      time: '10:30 AM',
      mode: 'Video Consultation',
      status: 'Confirmed',
      meetingLink: 'https://meet.nirmaancare.org/room/ravi-dr-ananya-901',
      symptomsSummary: 'Follow-up on scaffolding slip, hairline tibia fissure check & pain management'
    }
  ]);
  const [activeVideoCall, setActiveVideoCall] = useState<TelemedicineAppointment | null>(null);
  
  // AI Triage
  const [lastTriageResult, setLastTriageResult] = useState<InjuryTriageResult | null>(null);
  
  // Employer Subscription
  const [employerPlan, setEmployerPlan] = useState<'basic' | 'standard' | 'premium'>('standard');
  const [employerWorkerCount, setEmployerWorkerCount] = useState<number>(500);
  const [isMonthlyBillPaid, setIsMonthlyBillPaid] = useState<boolean>(true);
  
  // Pitch Tour
  const [isPitchGuideOpen, setIsPitchGuideOpen] = useState<boolean>(false);
  const [pitchStep, setPitchStep] = useState<number>(1);
  
  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: Toast['type'], title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const t = (key: string): string => {
    const langDict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return langDict[key] || TRANSLATIONS.en[key] || key;
  };

  const addWorkerToRoster = (newWorker: Omit<WorkerProfile, 'id'>) => {
    const generatedId = `WRK-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullWorker: WorkerProfile = {
      ...newWorker,
      id: generatedId
    };
    setWorkersRoster(prev => [fullWorker, ...prev]);
    setEmployerWorkerCount(prev => prev + 1);
    addToast('success', 'Worker Enrolled Successfully', `${fullWorker.name} added with ₹2,00,000 active health coverage.`);
  };

  const autoFileNewClaim = (incidentNote?: string, amount: number = 45000): Claim => {
    const newClaimId = `NC-${Math.floor(10000 + Math.random() * 90000)}`;
    const newClaim: Claim = {
      id: newClaimId,
      workerId: worker.id,
      workerName: worker.name,
      employerName: worker.employer,
      siteName: worker.siteName,
      incidentType: incidentNote || 'Workplace Hand/Limb Injury during Rebar Binding',
      incidentDate: 'Just Now',
      claimAmount: amount,
      approvedAmount: amount,
      hospitalName: 'Fortis Escorts Trauma & Super Speciality Hospital',
      currentStageIndex: 2, // Submitted
      status: 'Verification',
      stages: [
        {
          title: 'Injury Reported',
          description: 'Logged automatically via NirmaanCare AI Clinical Triage',
          date: 'Just Now',
          completed: true,
          current: false
        },
        {
          title: 'Documents Uploaded',
          description: 'Worker Digital ID & Employer Insurance Policy linked',
          date: 'Just Now',
          completed: true,
          current: false
        },
        {
          title: 'Claim Submitted',
          description: 'Cashless pre-authorization request generated & sent to TPA',
          date: 'Just Now',
          completed: true,
          current: true
        },
        {
          title: 'Verification',
          description: 'NirmaanCare medical audit & fraud clearance in progress',
          date: 'Est: within 2 hours',
          completed: false,
          current: false
        },
        {
          title: 'Approved',
          description: 'Cashless Guarantee Letter issued to Hospital',
          date: 'Est: within 4 hours',
          completed: false,
          current: false
        },
        {
          title: 'Hospital Payment',
          description: 'Direct NEFT/IMPS settlement to hospital account',
          date: 'Est: within 24 hours',
          completed: false,
          current: false
        }
      ],
      documents: [
        {
          id: 'DOC-AUTO-1',
          name: 'AI_Triage_Clinical_Report.pdf',
          category: 'Incident Report',
          size: '1.2 MB',
          uploadDate: 'Just Now',
          status: 'Verified'
        },
        {
          id: 'DOC-AUTO-2',
          name: 'Worker_Digital_Swasthya_Card.pdf',
          category: 'Medical Bill',
          size: '640 KB',
          uploadDate: 'Just Now',
          status: 'Verified'
        }
      ],
      notes: 'Auto-generated claim via 1-Click Worker Portal. Pre-authorized under ABC Constructions Standard Plan.'
    };

    setClaims(prev => [newClaim, ...prev]);
    setWorker(prev => ({ ...prev, activeClaimsCount: prev.activeClaimsCount + 1 }));
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    addToast('success', 'Claim Auto-Filed!', `Claim #${newClaimId} for ₹${amount.toLocaleString('en-IN')} submitted for pre-authorization.`);
    return newClaim;
  };

  const updateClaimStage = (claimId: string, newStageIndex: number, newStatus?: Claim['status']) => {
    setClaims(prev => prev.map(c => {
      if (c.id !== claimId) return c;
      const updatedStages = c.stages.map((st, idx) => ({
        ...st,
        completed: idx < newStageIndex,
        current: idx === newStageIndex
      }));
      return {
        ...c,
        currentStageIndex: newStageIndex,
        status: newStatus || (newStageIndex >= 4 ? 'Approved' : 'Verification'),
        stages: updatedStages
      };
    }));
  };

  const adminApproveClaim = (claimId: string) => {
    updateClaimStage(claimId, 4, 'Approved');
    addToast('success', 'Claim Approved by Admin', `Cashless pre-auth issued for ${claimId}. Hospital payment authorized.`);
  };

  const adminRejectClaim = (claimId: string, reason: string) => {
    setClaims(prev => prev.map(c => c.id === claimId ? { ...c, status: 'Action Required', notes: `Rejected/Docs requested: ${reason}` } : c));
    addToast('warning', 'Claim Action Required', `Claim ${claimId} flagged: ${reason}`);
  };

  const bookAppointment = (doctorId: string, date: string, time: string, symptoms?: string): TelemedicineAppointment => {
    const doc = doctors.find(d => d.id === doctorId) || doctors[0];
    const newApt: TelemedicineAppointment = {
      id: `APT-${Math.floor(100 + Math.random() * 900)}`,
      doctorId: doc.id,
      doctorName: doc.name,
      doctorSpecialty: doc.specialty,
      doctorAvatar: doc.avatar,
      workerId: worker.id,
      workerName: worker.name,
      date,
      time,
      mode: 'Video Consultation',
      status: 'Confirmed',
      meetingLink: `https://meet.nirmaancare.org/room/ravi-${doc.id.toLowerCase()}`,
      symptomsSummary: symptoms || 'Workplace injury consultation and recovery check'
    };

    setAppointments(prev => [newApt, ...prev]);
    setWorker(prev => ({ ...prev, nextConsultation: `${date} at ${time}` }));
    
    addToast('success', 'Appointment Confirmed! 👨‍⚕️', `Consultation with ${doc.name} booked for ${date}, ${time}.`);
    return newApt;
  };

  const startVideoCall = (appointment: TelemedicineAppointment) => {
    setActiveVideoCall(appointment);
  };

  const endVideoCall = () => {
    if (activeVideoCall) {
      // attach simulated digital prescription
      const completedApt: TelemedicineAppointment = {
        ...activeVideoCall,
        status: 'Completed',
        prescription: {
          diagnosis: 'Minor soft tissue contusion & hairline stress relief',
          medicines: [
            { name: 'Aceclofenac + Paracetamol (Zerodol-P)', dosage: '100mg/325mg', frequency: 'Twice daily after meals', duration: '5 days' },
            { name: 'Trypsin Chymotrypsin (Chymoral Forte)', dosage: '100,000 AU', frequency: 'Three times daily', duration: '5 days' },
            { name: 'Topical Diclofenac Gel (Volini)', dosage: 'Apply gently', frequency: 'Thrice daily', duration: '7 days' }
          ],
          notes: 'Keep leg elevated. Avoid heavy weight lifting (> 15kg) for 7 days. Return if pain increases.',
          followUp: 'Telemedicine follow-up in 5 days',
          doctorSignature: `Digitally Signed by ${activeVideoCall.doctorName} (Reg: MCI-84920)`
        }
      };
      setAppointments(prev => prev.map(a => a.id === completedApt.id ? completedApt : a));
      addToast('info', 'Video Consultation Ended', 'Digital prescription has been added to your Health Locker.');
    }
    setActiveVideoCall(null);
  };

  const runAiTriage = (input: InjuryTriageInput): InjuryTriageResult => {
    // Advanced Mock AI Clinical Logic
    let risk: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW';
    let score = 25;
    
    if (input.lostConsciousness || input.painLevel >= 8 || (!input.canMove && input.bleeding)) {
      risk = 'HIGH';
      score = 88;
    } else if (input.bleeding || !input.canMove || input.severePain || input.painLevel >= 5) {
      risk = 'MEDIUM';
      score = 58;
    } else {
      risk = 'LOW';
      score = 22;
    }

    let title = 'LOW RISK';
    let titleHi = 'कम जोखिम (LOW RISK)';
    let titleTa = 'குறைந்த ஆபத்து (LOW RISK)';
    let message = 'Your symptoms appear less severe. Telemedicine consultation recommended.';
    let messageHi = 'आपके लक्षण सामान्य प्रतीत होते हैं। ऑनलाइन डॉक्टर से परामर्श की सलाह दी जाती है।';
    let messageTa = 'உங்கள் அறிகுறிகள் கடுமையானதாக இல்லை. வீடியோ ஆலோசனை பரிந்துரைக்கப்படுகிறது.';
    let recs = [
      'Apply cold compress / ice pack for 15 minutes',
      'Keep the injured area elevated and rested',
      'Connect with NirmaanCare doctor via free video call for prescription'
    ];

    if (risk === 'MEDIUM') {
      title = 'MEDIUM RISK';
      titleHi = 'मध्यम जोखिम (MEDIUM RISK)';
      titleTa = 'நடுத்தர ஆபத்து (MEDIUM RISK)';
      message = 'Medical consultation recommended within 24 hours. Keep injured area immobilized.';
      messageHi = '24 घंटे के भीतर चिकित्सीय परामर्श आवश्यक है। चोट वाले हिस्से को हिलाएं नहीं।';
      messageTa = '24 மணி நேரத்திற்குள் மருத்துவரை அணுகவும். காயமடைந்த பகுதியை அசைக்க வேண்டாம்.';
      recs = [
        'Immobilize the affected body part with a splint or clean bandage',
        'Do not apply direct weight or heavy pressure',
        'Book urgent occupational doctor consultation today',
        'Pre-auth cashless claim can be auto-generated if hospital visit is needed'
      ];
    } else if (risk === 'HIGH') {
      title = 'HIGH RISK';
      titleHi = 'उच्च जोखिम (HIGH RISK)';
      titleTa = 'அதி தீவிர ஆபத்து (HIGH RISK)';
      message = 'Possible serious injury. Please seek emergency medical care immediately at nearest partner hospital.';
      messageHi = 'गंभीर चोट की संभावना है। कृपया तुरंत नजदीकी पार्टनर अस्पताल के इमरजेंसी वार्ड में जाएं।';
      messageTa = 'கடுமையான காயம் இருக்க வாய்ப்புள்ளது. உடனடியாக அருகிலுள்ள அவசர சிகிச்சைப் பிரிவுக்குச் செல்லவும்.';
      recs = [
        '🚨 Call 108 or Fortis Hospital Trauma Desk (+91 11 4713 5000) immediately',
        'Do NOT attempt to walk or move if spine/head/deep bone fracture is suspected',
        'NirmaanCare Cashless Desk has been alerted for automatic pre-authorization',
        'Employer safety officer has been notified of high-severity incident'
      ];
    }

    const result: InjuryTriageResult = {
      riskLevel: risk,
      title,
      titleHi,
      titleTa,
      message,
      messageHi,
      messageTa,
      recommendations: recs,
      aiAnalysis: {
        confidence: 96.4,
        detectedSeverity: risk === 'HIGH' ? 'Grade 3 Acute Trauma' : risk === 'MEDIUM' ? 'Grade 2 Moderate Strain/Contusion' : 'Grade 1 Superficial Abrasion',
        immediateAction: risk === 'HIGH' ? 'Emergency Level 1 Hospital Transport' : risk === 'MEDIUM' ? 'Orthopedic Tele-Consult within 24h' : 'Rest & Topical Analgesic',
        specialistRecommended: risk === 'HIGH' ? 'Trauma & Orthopedic Surgeon' : risk === 'MEDIUM' ? 'Occupational Physician' : 'General Practitioner',
        timeframe: risk === 'HIGH' ? 'Immediate (< 30 mins)' : risk === 'MEDIUM' ? 'Within 12-24 hours' : 'Within 48 hours'
      }
    };

    setLastTriageResult(result);
    return result;
  };

  const clearTriage = () => {
    setLastTriageResult(null);
  };

  const updateSiteRisk = (siteId: string, newRisk: number) => {
    setSites(prev => prev.map(s => {
      if (s.id !== siteId) return s;
      const riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' = newRisk >= 70 ? 'HIGH' : newRisk >= 40 ? 'MEDIUM' : 'LOW';
      return {
        ...s,
        riskScore: newRisk,
        riskLevel
      };
    }));
  };

  const payMonthlyBill = () => {
    setIsMonthlyBillPaid(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {}
    const cost = employerWorkerCount * (employerPlan === 'basic' ? 100 : employerPlan === 'standard' ? 150 : 200);
    addToast('success', 'Payment Successful! 💳', `₹${cost.toLocaleString('en-IN')} paid via Razorpay Corporate UPI. GST Tax Invoice generated.`);
  };

  const nextPitchStep = () => {
    setPitchStep(prev => Math.min(prev + 1, 12));
  };

  const prevPitchStep = () => {
    setPitchStep(prev => Math.max(prev - 1, 1));
  };

  const resetDemoData = () => {
    setRole('landing');
    setWorker(INITIAL_WORKER);
    setWorkersRoster(MOCK_WORKERS_ROSTER);
    setClaims([INITIAL_CLAIM]);
    setSites(MOCK_CONSTRUCTION_SITES);
    setEmployerPlan('standard');
    setEmployerWorkerCount(500);
    setIsMonthlyBillPaid(true);
    setLastTriageResult(null);
    setActiveVideoCall(null);
    setPitchStep(1);
    addToast('info', 'Demo Reset', 'All data reset to pitch-ready baseline.');
  };

  const activeClaim = claims[0];

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        language,
        setLanguage,
        t,
        worker,
        setWorker,
        workersRoster,
        addWorkerToRoster,
        claims,
        activeClaim,
        autoFileNewClaim,
        updateClaimStage,
        adminApproveClaim,
        adminRejectClaim,
        doctors,
        appointments,
        bookAppointment,
        activeVideoCall,
        startVideoCall,
        endVideoCall,
        lastTriageResult,
        runAiTriage,
        clearTriage,
        sites,
        updateSiteRisk,
        schemes,
        hospitals,
        employerPlan,
        setEmployerPlan,
        employerWorkerCount,
        setEmployerWorkerCount,
        isMonthlyBillPaid,
        payMonthlyBill,
        isPitchGuideOpen,
        setIsPitchGuideOpen,
        pitchStep,
        setPitchStep,
        nextPitchStep,
        prevPitchStep,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authDefaultTab,
        authMode,
        openAuthModal,
        closeAuthModal,
        toasts,
        addToast,
        removeToast,
        resetDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
