export type AppRole = 'landing' | 'worker' | 'employer' | 'admin';

export type Language = 'en' | 'hi' | 'ta';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface WorkerProfile {
  id: string;
  name: string;
  nameHi: string;
  nameTa: string;
  role: string;
  roleHi: string;
  trade: string;
  avatar: string;
  age: number;
  phone: string;
  aadhaarLast4: string;
  eShramId: string;
  bocwId: string;
  bloodGroup: string;
  employer: string;
  siteName: string;
  coverageStatus: 'Active' | 'Pending' | 'Expired';
  sumInsured: number; // e.g. 200000
  activeClaimsCount: number;
  nextConsultation: string | null;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface InjuryTriageInput {
  incidentDescription: string;
  bodyPart: string;
  bleeding: boolean;
  canMove: boolean;
  severePain: boolean;
  painLevel: number; // 1 to 10
  lostConsciousness: boolean;
  imageFile?: File | null;
  imageUrl?: string;
}

export interface InjuryTriageResult {
  riskLevel: RiskLevel;
  title: string;
  titleHi: string;
  titleTa: string;
  message: string;
  messageHi: string;
  messageTa: string;
  recommendations: string[];
  aiAnalysis: {
    confidence: number;
    detectedSeverity: string;
    immediateAction: string;
    specialistRecommended: string;
    timeframe: string;
  };
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  fee: number; // ₹0 for workers on platform
  languages: string[];
  availableTime: string;
  avatar: string;
  hospitalAffiliation: string;
}

export interface TelemedicineAppointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorAvatar: string;
  workerId: string;
  workerName: string;
  date: string;
  time: string;
  mode: 'Video Consultation' | 'Audio Call';
  status: 'Confirmed' | 'Completed' | 'In Progress';
  meetingLink: string;
  symptomsSummary?: string;
  prescription?: {
    diagnosis: string;
    medicines: Array<{
      name: string;
      dosage: string;
      frequency: string;
      duration: string;
    }>;
    notes: string;
    followUp: string;
    doctorSignature: string;
  };
}

export type ClaimStage = 
  | 'Injury Reported'
  | 'Documents Uploaded'
  | 'Claim Submitted'
  | 'Verification'
  | 'Approved'
  | 'Hospital Payment';

export interface Claim {
  id: string; // e.g. NC-10245
  workerId: string;
  workerName: string;
  employerName: string;
  siteName: string;
  incidentType: string;
  incidentDate: string;
  claimAmount: number;
  approvedAmount?: number;
  hospitalName: string;
  currentStageIndex: number; // 0 to 5
  status: 'Processing' | 'Verification' | 'Approved' | 'Settled' | 'Action Required';
  stages: Array<{
    title: string;
    description: string;
    date: string;
    completed: boolean;
    current: boolean;
  }>;
  documents: Array<{
    id: string;
    name: string;
    category: 'Medical Bill' | 'X-Ray / Scan' | 'Incident Report' | 'Discharge Summary';
    size: string;
    uploadDate: string;
    status: 'Verified' | 'Pending Review';
  }>;
  notes: string;
}

export interface ConstructionSite {
  id: string;
  name: string;
  location: string;
  totalWorkers: number;
  riskScore: number; // 0 - 100
  riskLevel: RiskLevel;
  trend: 'increasing' | 'stable' | 'decreasing';
  factors: {
    workingAtHeight: number; // 0-100%
    heavyMachinery: number;
    longWorkingHours: number;
    lackOfPpe: number;
    previousIncidents: number;
    unsafeWorkPatterns: number;
  };
  recommendations: string[];
  lastSafetyAudit: string;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  nameHi: string;
  nameTa: string;
  category: 'Accident' | 'Healthcare' | 'Maternity' | 'Social Security';
  sponsoringBody: string;
  eligibility: string;
  eligibilityHi: string;
  eligibilityTa: string;
  benefitAmount: string;
  benefitDescription: string;
  benefitDescriptionHi: string;
  requiredDocuments: string[];
  applicationStatus: 'Eligible - Not Applied' | 'Application in Progress' | 'Active Beneficiary';
  matchScore: number; // 95%
  isOfficialVerificationRequired: boolean;
}

export interface Hospital {
  id: string;
  name: string;
  distance: string;
  address: string;
  city: string;
  isCashless: boolean;
  emergencyPhone: string;
  specialties: string[];
  rating: number;
  bedAvailability: string;
  latitude: number;
  longitude: number;
}
