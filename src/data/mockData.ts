import { WorkerProfile, Doctor, Claim, ConstructionSite, GovernmentScheme, Hospital } from '../types';

export const INITIAL_WORKER: WorkerProfile = {
  id: 'WRK-7842',
  name: 'Ravi Kumar',
  nameHi: 'रवि कुमार',
  nameTa: 'ரவி குமார்',
  role: 'Senior Mason & Scaffolding Specialist',
  roleHi: 'वरिष्ठ राजमिस्त्री एवं पाड़ विशेषज्ञ',
  trade: 'Masonry & High-Elevation Scaffolding',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  age: 34,
  phone: '+91 98765 43210',
  aadhaarLast4: '8821',
  eShramId: 'UAN-9842-1082-9912',
  bocwId: 'BOCW-MH-2024-91823',
  bloodGroup: 'O+ Positive',
  employer: 'ABC Constructions Infrastructure Ltd.',
  siteName: 'Metro Line 4 - Elevated Corridor (Pier 42-68)',
  coverageStatus: 'Active',
  sumInsured: 200000, // ₹2,00,000
  activeClaimsCount: 1,
  nextConsultation: 'Tomorrow, 10:30 AM',
  emergencyContact: {
    name: 'Sunita Devi (Wife)',
    relationship: 'Spouse',
    phone: '+91 98765 88912',
  },
};

export const MOCK_WORKERS_ROSTER: WorkerProfile[] = [
  INITIAL_WORKER,
  {
    id: 'WRK-7843',
    name: 'Meena Devi',
    nameHi: 'मीना देवी',
    nameTa: 'மீனா தேவி',
    role: 'Rebar & Steel Binding Worker',
    roleHi: 'सरिया एवं स्टील बाइंडिंग कार्यकर्ता',
    trade: 'Steel Reinforcement',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    age: 29,
    phone: '+91 98112 34567',
    aadhaarLast4: '4190',
    eShramId: 'UAN-4190-2211-8844',
    bocwId: 'BOCW-MH-2024-55412',
    bloodGroup: 'B+ Positive',
    employer: 'ABC Constructions Infrastructure Ltd.',
    siteName: 'Metro Line 4 - Elevated Corridor',
    coverageStatus: 'Active',
    sumInsured: 200000,
    activeClaimsCount: 0,
    nextConsultation: null,
    emergencyContact: {
      name: 'Ramesh (Brother)',
      relationship: 'Brother',
      phone: '+91 98112 99887',
    },
  },
  {
    id: 'WRK-7844',
    name: 'Rajesh Singh',
    nameHi: 'राजेश सिंह',
    nameTa: 'ராஜேஷ் சிங்',
    role: 'Formwork Carpenter',
    roleHi: 'फॉर्मवर्क बढ़ई',
    trade: 'Carpentry & Shuttering',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    age: 41,
    phone: '+91 97654 12345',
    aadhaarLast4: '3312',
    eShramId: 'UAN-3312-9900-1122',
    bocwId: 'BOCW-MH-2023-88741',
    bloodGroup: 'A+ Positive',
    employer: 'ABC Constructions Infrastructure Ltd.',
    siteName: 'Skyrise Commercial Tower B2',
    coverageStatus: 'Active',
    sumInsured: 200000,
    activeClaimsCount: 1,
    nextConsultation: 'In 3 days',
    emergencyContact: {
      name: 'Geeta Singh',
      relationship: 'Spouse',
      phone: '+91 97654 99001',
    },
  },
  {
    id: 'WRK-7845',
    name: 'Arjun Patel',
    nameHi: 'अर्जुन पटेल',
    nameTa: 'அர்ஜுன் படேல்',
    role: 'Tower Crane & Heavy Rig Operator',
    roleHi: 'टावर क्रेन एवं भारी रिग ऑपरेटर',
    trade: 'Heavy Machinery Operation',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    age: 38,
    phone: '+91 99887 66554',
    aadhaarLast4: '7741',
    eShramId: 'UAN-7741-3344-9988',
    bocwId: 'BOCW-MH-2024-11234',
    bloodGroup: 'AB+ Positive',
    employer: 'ABC Constructions Infrastructure Ltd.',
    siteName: 'Metro Line 4 - Elevated Corridor',
    coverageStatus: 'Active',
    sumInsured: 200000,
    activeClaimsCount: 0,
    nextConsultation: null,
    emergencyContact: {
      name: 'Kavita Patel',
      relationship: 'Spouse',
      phone: '+91 99887 11223',
    },
  },
  {
    id: 'WRK-7846',
    name: 'Mohd. Salim',
    nameHi: 'मोहम्मद सलीम',
    nameTa: 'முகமது சலீம்',
    role: 'Welder & Structural Fabricator',
    roleHi: 'वेल्डर एवं संरचनात्मक फैब्रिकेटर',
    trade: 'Industrial Welding',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    age: 32,
    phone: '+91 98223 44556',
    aadhaarLast4: '6129',
    eShramId: 'UAN-6129-7711-3322',
    bocwId: 'BOCW-MH-2024-99321',
    bloodGroup: 'O- Negative',
    employer: 'ABC Constructions Infrastructure Ltd.',
    siteName: 'Express Highway Flyover Phase 2',
    coverageStatus: 'Active',
    sumInsured: 200000,
    activeClaimsCount: 0,
    nextConsultation: null,
    emergencyContact: {
      name: 'Fatima',
      relationship: 'Spouse',
      phone: '+91 98223 99008',
    },
  }
];

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'DOC-101',
    name: 'Dr. Ananya Sharma',
    specialty: 'Occupational Health & Trauma Specialist',
    experience: '12+ Years Experience (AIIMS New Delhi Alumni)',
    rating: 4.9,
    reviewsCount: 384,
    fee: 0, // Free for workers
    languages: ['Hindi', 'English', 'Bhojpuri'],
    availableTime: 'Tomorrow, 10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
    hospitalAffiliation: 'Apex Occupational Trauma Institute'
  },
  {
    id: 'DOC-102',
    name: 'Dr. Rajesh Verma',
    specialty: 'Orthopedic Surgeon & Fracture Care',
    experience: '15+ Years Experience (Apollo Trauma Care)',
    rating: 4.8,
    reviewsCount: 520,
    fee: 0,
    languages: ['Hindi', 'English', 'Punjabi'],
    availableTime: 'Today, 4:00 PM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    hospitalAffiliation: 'Apollo Specialty Hospitals'
  },
  {
    id: 'DOC-103',
    name: 'Dr. Priya Nair',
    specialty: 'General Physician & Respiratory Specialist',
    experience: '9+ Years Experience (Manipal Health)',
    rating: 4.9,
    reviewsCount: 290,
    fee: 0,
    languages: ['Tamil', 'Hindi', 'English', 'Malayalam'],
    availableTime: 'Today, 6:30 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813589-322199b514d8?w=150&auto=format&fit=crop&q=80',
    hospitalAffiliation: 'Manipal Health Network'
  },
  {
    id: 'DOC-104',
    name: 'Dr. Sandeep Kulkarni',
    specialty: 'Emergency Medicine & Burn/Wound Care',
    experience: '11+ Years Experience (Fortis Emergency Care)',
    rating: 4.7,
    reviewsCount: 410,
    fee: 0,
    languages: ['Hindi', 'Marathi', 'English'],
    availableTime: 'Available in 15 mins (Instant Urgent Care)',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=80',
    hospitalAffiliation: 'Fortis Escorts Emergency Unit'
  }
];

export const INITIAL_CLAIM: Claim = {
  id: 'NC-10245',
  workerId: 'WRK-7842',
  workerName: 'Ravi Kumar',
  employerName: 'ABC Constructions Infrastructure Ltd.',
  siteName: 'Metro Line 4 - Elevated Corridor',
  incidentType: 'Fall from construction platform (Elevated Scaffold Level 3)',
  incidentDate: '18 Aug 2026, 02:15 PM',
  claimAmount: 85000,
  approvedAmount: 85000,
  hospitalName: 'Fortis Escorts Trauma & Super Speciality Hospital',
  currentStageIndex: 3, // Verification stage
  status: 'Verification',
  stages: [
    {
      title: 'Injury Reported',
      description: 'Incident reported via AI Injury Assistant with high-risk triage score',
      date: '18 Aug, 02:40 PM',
      completed: true,
      current: false
    },
    {
      title: 'Documents Uploaded',
      description: 'Hospital admission form, X-Ray scans & employer site log verified',
      date: '18 Aug, 04:15 PM',
      completed: true,
      current: false
    },
    {
      title: 'Claim Submitted',
      description: 'Digital cashless claim submitted directly to NirmaanCare TPA Desk',
      date: '18 Aug, 05:30 PM',
      completed: true,
      current: false
    },
    {
      title: 'Verification',
      description: 'Medical board checking fracture reports & cashless pre-authorization',
      date: '19 Aug, 10:00 AM',
      completed: false,
      current: true
    },
    {
      title: 'Approved',
      description: 'Pre-auth cashless guarantee issued to Fortis Hospital',
      date: 'Estimated: Today, 6:00 PM',
      completed: false,
      current: false
    },
    {
      title: 'Hospital Payment',
      description: 'Direct cashless electronic settlement to hospital accounts',
      date: 'Estimated: Tomorrow, 11:00 AM',
      completed: false,
      current: false
    }
  ],
  documents: [
    {
      id: 'DOC-1',
      name: 'Left_Tibia_XRay_Radiology_Report.pdf',
      category: 'X-Ray / Scan',
      size: '2.4 MB',
      uploadDate: '18 Aug 2026',
      status: 'Verified'
    },
    {
      id: 'DOC-2',
      name: 'Emergency_Admission_Slip_Fortis.pdf',
      category: 'Medical Bill',
      size: '1.1 MB',
      uploadDate: '18 Aug 2026',
      status: 'Verified'
    },
    {
      id: 'DOC-3',
      name: 'Site_Supervisor_Incident_Report_Pier42.pdf',
      category: 'Incident Report',
      size: '890 KB',
      uploadDate: '18 Aug 2026',
      status: 'Verified'
    }
  ],
  notes: 'Worker sustained hairline fracture on left lower leg after 8ft scaffolding slip. Hospitalized at cashless partner Fortis Hospital. Zero out-of-pocket cost for worker.'
};

export const MOCK_CONSTRUCTION_SITES: ConstructionSite[] = [
  {
    id: 'SITE-01',
    name: 'Metro Line 4 - Elevated Corridor (Pier 42-68)',
    location: 'Western Expressway Stretch, Sector 12',
    totalWorkers: 240,
    riskScore: 78,
    riskLevel: 'HIGH',
    trend: 'increasing',
    factors: {
      workingAtHeight: 88,
      heavyMachinery: 76,
      longWorkingHours: 72,
      lackOfPpe: 34,
      previousIncidents: 4,
      unsafeWorkPatterns: 68
    },
    recommendations: [
      'Enforce mandatory double-lanyard safety harness on Pier 48-62 above 10m',
      'Reduce overtime shift length: 32 workers logged > 11 consecutive hours yesterday',
      'Deploy crane blindspot radar alert on high-traffic intersection',
      'Conduct urgent 15-minute daily toolbox talk on scaffolding board security'
    ],
    lastSafetyAudit: 'Yesterday, 05:30 PM (AI Vision Cam Check)'
  },
  {
    id: 'SITE-02',
    name: 'Skyrise Commercial Tower B2',
    location: 'Financial District, Block C',
    totalWorkers: 160,
    riskScore: 42,
    riskLevel: 'MEDIUM',
    trend: 'stable',
    factors: {
      workingAtHeight: 48,
      heavyMachinery: 40,
      longWorkingHours: 35,
      lackOfPpe: 18,
      previousIncidents: 1,
      unsafeWorkPatterns: 38
    },
    recommendations: [
      'Inspect basement excavation ventilation and air quality monitors',
      'Replace worn-out grip gloves for 24 rebar workers',
      'Schedule mandatory hydration and shade breaks during afternoon peak heat'
    ],
    lastSafetyAudit: '2 days ago'
  },
  {
    id: 'SITE-03',
    name: 'Express Highway Flyover Phase 2',
    location: 'Outer Ring Road bypass',
    totalWorkers: 100,
    riskScore: 18,
    riskLevel: 'LOW',
    trend: 'decreasing',
    factors: {
      workingAtHeight: 20,
      heavyMachinery: 25,
      longWorkingHours: 15,
      lackOfPpe: 8,
      previousIncidents: 0,
      unsafeWorkPatterns: 14
    },
    recommendations: [
      'Maintain 100% PPE compliance recorded during morning automated check',
      'Continue rotational machinery operator rest schedules'
    ],
    lastSafetyAudit: 'Today, 08:00 AM'
  }
];

export const MOCK_GOVERNMENT_SCHEMES: GovernmentScheme[] = [
  {
    id: 'SCH-01',
    name: 'e-Shram Suraksha Accident Assistance',
    nameHi: 'ई-श्रम सुरक्षा दुर्घटना बीमा सहायता',
    nameTa: 'இ-ஷ்ரம் விபத்து பாதுகாப்பு உதவி',
    category: 'Accident',
    sponsoringBody: 'Ministry of Labour & Employment, Govt. of India',
    eligibility: 'Unorganized and construction workers registered on e-Shram portal with active UAN (Age 18–59)',
    eligibilityHi: 'ई-श्रम पोर्टल पर पंजीकृत 18-59 वर्ष के असंगठित निर्माण श्रमिक',
    eligibilityTa: 'இ-ஷ்ரம் இணையதளத்தில் பதிவு செய்யப்பட்ட 18-59 வயதுடைய தொழிலாளர்கள்',
    benefitAmount: '₹2,00,000 (Accidental Death/Permanent Disability) / ₹1,00,000 (Partial Disability)',
    benefitDescription: 'Direct financial assistance deposited into worker Aadhaar-linked bank account in case of workplace accidental trauma or disability.',
    benefitDescriptionHi: 'कार्यस्थल दुर्घटना या स्थायी विकलांगता की स्थिति में सीधे बैंक खाते में आर्थिक सहायता।',
    requiredDocuments: ['e-Shram UAN Card', 'Aadhaar Card', 'Bank Passbook / Cancelled Cheque', 'Hospital Disability Certificate'],
    applicationStatus: 'Eligible - Not Applied',
    matchScore: 98,
    isOfficialVerificationRequired: true
  },
  {
    id: 'SCH-02',
    name: 'BOCW Welfare Board Medical Grant',
    nameHi: 'भवन एवं अन्य सन्निर्माण कर्मकार (BOCW) चिकित्सा अनुदान',
    nameTa: 'கட்டுமான தொழிலாளர் நல வாரிய மருத்துவ உதவி',
    category: 'Healthcare',
    sponsoringBody: 'State Building & Other Construction Workers Welfare Board',
    eligibility: 'Registered construction worker with valid BOCW membership and 90 days active work in preceding 12 months',
    eligibilityHi: 'मान्य BOCW सदस्यता कार्ड धारक निर्माण श्रमिक (पिछले 12 महीनों में 90 दिन कार्य)',
    eligibilityTa: 'செல்லுபடியாகும் BOCW அட்டை மற்றும் 90 நாட்கள் வேலை செய்த தொழிலாளர்கள்',
    benefitAmount: 'Up to ₹50,000 Hospitalization Grant + ₹10,000 Wage Loss Compensation',
    benefitDescription: 'Cash assistance for major illness, hospitalization, surgeries, and family maternity expenses for registered construction laborers.',
    benefitDescriptionHi: 'गंभीर बीमारी, अस्पताल में भर्ती होने और मजदूरी के नुकसान की भरपाई हेतु नकद अनुदान।',
    requiredDocuments: ['BOCW Registration Green Book', 'Contractor 90-Day Work Certificate', 'Hospital Original Discharge Summary & Bills'],
    applicationStatus: 'Application in Progress',
    matchScore: 95,
    isOfficialVerificationRequired: true
  },
  {
    id: 'SCH-03',
    name: 'Ayushman Bharat (PM-JAY)',
    nameHi: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना (PM-JAY)',
    nameTa: 'ஆயுஷ்மான் பாரத் (PM-JAY)',
    category: 'Healthcare',
    sponsoringBody: 'National Health Authority (NHA)',
    eligibility: 'Families identified under SECC socio-economic census / Antyodaya ration card holders',
    eligibilityHi: 'SECC जनगणना एवं अंत्योदय/बीपीएल राशन कार्ड धारक परिवार',
    eligibilityTa: 'SECC அல்லது BPL குடும்ப அட்டை வைத்திருக்கும் குடும்பங்கள்',
    benefitAmount: '₹5,00,000 per year cashless coverage per family for secondary & tertiary care',
    benefitDescription: 'Completely cashless secondary and tertiary hospitalization across 27,000+ empanelled government and private hospitals across India.',
    benefitDescriptionHi: 'देश भर के 27,000+ सूचीबद्ध अस्पतालों में प्रति परिवार ₹5 लाख का कैशलेस इलाज।',
    requiredDocuments: ['Ayushman Golden Card', 'Ration Card', 'Aadhaar Card'],
    applicationStatus: 'Active Beneficiary',
    matchScore: 92,
    isOfficialVerificationRequired: true
  },
  {
    id: 'SCH-04',
    name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    nameHi: 'प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)',
    nameTa: 'பிரதமர் சுரக்ஷா பீமா திட்டம் (PMSBY)',
    category: 'Accident',
    sponsoringBody: 'Department of Financial Services, Govt. of India',
    eligibility: 'All bank account holders aged 18 to 70 years',
    eligibilityHi: '18 से 70 वर्ष के सभी बैंक खाताधारक',
    eligibilityTa: '18 முதல் 70 வயது வரை உள்ள அனைத்து வங்கி கணக்கு வைத்திருப்பவர்கள்',
    benefitAmount: '₹2,00,000 Accidental Cover for just ₹20/year premium',
    benefitDescription: 'Ultra-low-cost government accidental death and permanent disability insurance directly auto-debited via bank savings account.',
    benefitDescriptionHi: 'मात्र ₹20 प्रति वर्ष प्रीमियम पर ₹2 लाख का आकस्मिक दुर्घटना बीमा।',
    requiredDocuments: ['Bank Savings Account Details', 'Aadhaar Card'],
    applicationStatus: 'Eligible - Not Applied',
    matchScore: 99,
    isOfficialVerificationRequired: true
  }
];

export const MOCK_HOSPITALS: Hospital[] = [
  {
    id: 'HOSP-01',
    name: 'Fortis Escorts Trauma & Super Speciality Hospital',
    distance: '2.4 km away (7 mins)',
    address: 'Plot 12, Expressway Link Road, Sector 14',
    city: 'Metro Corridor Zone',
    isCashless: true,
    emergencyPhone: '108 / +91 11 4713 5000',
    specialties: ['24/7 Level-1 Trauma Centre', 'Orthopedics', 'Plastic & Burn Surgery', 'ICU'],
    rating: 4.8,
    bedAvailability: '14 Cashless ICU & Trauma Beds Available',
    latitude: 28.5355,
    longitude: 77.3910
  },
  {
    id: 'HOSP-02',
    name: 'Apollo Specialty Trauma Centre & Fracture Hospital',
    distance: '4.1 km away (12 mins)',
    address: 'Sarita Vihar Crossing, Ring Road',
    city: 'South Zone',
    isCashless: true,
    emergencyPhone: '+91 11 2692 5858',
    specialties: ['Accidental Fracture Unit', 'Occupational Spine Care', 'General Surgery'],
    rating: 4.7,
    bedAvailability: '22 General & Emergency Beds Available',
    latitude: 28.5300,
    longitude: 77.2800
  },
  {
    id: 'HOSP-03',
    name: 'Max Super Speciality Hospital & Emergency Wing',
    distance: '5.8 km away (16 mins)',
    address: 'Press Enclave Road, Saket Institutional Area',
    city: 'Central Zone',
    isCashless: true,
    emergencyPhone: '+91 11 6611 5050',
    specialties: ['Polytrauma', 'Neuro-Trauma', 'Chest & Respiratory Care'],
    rating: 4.9,
    bedAvailability: '9 Cashless Beds Available',
    latitude: 28.5245,
    longitude: 77.2066
  },
  {
    id: 'HOSP-04',
    name: 'AIIMS Apex Trauma & Emergency Care Centre',
    distance: '7.2 km away (20 mins)',
    address: 'Ring Road, Raj Nagar, Safdarjung Enclave',
    city: 'South Extension',
    isCashless: true,
    emergencyPhone: '102 / +91 11 2618 3100',
    specialties: ['Government Tertiary Care', 'Advanced Emergency', 'Burn Trauma'],
    rating: 4.9,
    bedAvailability: 'Emergency Triage Open 24/7',
    latitude: 28.5684,
    longitude: 77.2058
  }
];
