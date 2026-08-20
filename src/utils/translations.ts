import { Language } from '../types';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    appName: 'NirmaanCare',
    tagline: 'Healthcare Protection for the People Who Build India',
    heroSubtitle: 'Affordable occupational healthcare, instant cashless insurance assistance, and AI-powered site safety for construction workers.',
    protectWorkers: 'Protect Your Workers',
    workerLogin: 'Worker Portal',
    launchDemo: 'Launch Pitch Demo',
    pitchMode: '3-Min Pitch Guide',
    switchRole: 'Switch Role',
    langSelect: 'Language',
    
    // Roles
    roleWorker: 'Worker (Ravi Kumar)',
    roleEmployer: 'Employer (ABC Constructions)',
    roleAdmin: 'Super Admin (NirmaanCare)',
    roleLanding: 'Landing Page',

    // Worker Dashboard
    welcomeWorker: 'Welcome, Ravi',
    activeCoverage: 'Health Coverage',
    activeCoverageValue: 'Active (Verified)',
    sumInsuredTitle: 'Insurance Sum Insured',
    activeClaimsTitle: 'Active Claims',
    nextConsultationTitle: 'Next Consultation',
    tomorrowConsultation: 'Tomorrow, 10:30 AM',
    
    // Quick Actions
    reportInjuryBtn: '🚨 Report Injury',
    reportInjuryDesc: 'AI triage severity check & instant incident filing',
    talkToDoctorBtn: '👨‍⚕️ Talk to Doctor',
    talkToDoctorDesc: 'Book free 24/7 video or audio consultation',
    trackClaimBtn: '📄 Track Claim',
    trackClaimDesc: 'Real-time cashless hospital & pre-auth updates',
    findHospitalBtn: '🏥 Find Hospital',
    findHospitalDesc: 'Locate 45+ nearby 100% cashless partner hospitals',
    
    // Worker Benefits Card
    myBenefitsTitle: 'My NirmaanCare Benefits',
    benefit1: '100% Cashless Hospitalization (Up to ₹2,00,000)',
    benefit2: 'Free 24/7 Telemedicine with Top MD Doctors',
    benefit3: 'Accident & Disability Protection Net',
    benefit4: 'Free Government Scheme Claims Assistance',

    // AI Injury Assistant
    aiAssistantTitle: 'AI Injury Assistant',
    aiAssistantSubtitle: 'Answer simple questions & upload a photo for instant medical triage guidance.',
    aiDisclaimer: 'Disclaimer: This AI result provides triage guidance and is not a definitive medical diagnosis. For life-threatening emergencies, dial 108 immediately.',
    q1: '1. What happened at the workplace?',
    q1Placeholder: 'e.g. Slipped from 2nd floor bamboo scaffold, hit iron rod on right knee',
    q2: '2. Which body part is injured?',
    q3: '3. Is there active bleeding?',
    q4: '4. Can you move the injured body part freely?',
    q5: '5. What is the pain level? (1 = Mild, 10 = Severe)',
    q6: '6. Did you lose consciousness or feel dizzy?',
    uploadInjuryPhoto: 'Upload injury photo for AI visual inspection (Optional)',
    analyzeInjuryBtn: '🤖 Run AI Clinical Triage',
    analyzingText: 'AI analyzing symptoms, kinetic injury mechanics & clinical severity...',
    
    // Risk Levels
    lowRiskTitle: 'LOW RISK (Minor Trauma)',
    lowRiskDesc: 'Your symptoms appear less severe. Telemedicine consultation recommended.',
    mediumRiskTitle: 'MEDIUM RISK (Moderate Trauma)',
    mediumRiskDesc: 'Medical consultation recommended within 24 hours. Keep injured area immobilized.',
    highRiskTitle: 'HIGH RISK (Potential Critical Trauma)',
    highRiskDesc: 'Possible serious injury. Please seek emergency medical care immediately at cashless partner hospital.',
    
    // Telemedicine
    telemedicineTitle: 'Talk to a Doctor',
    telemedicineSubtitle: 'Connect with verified occupational trauma and general medicine specialists.',
    bookConsultation: 'Book Consultation',
    startCallNow: 'Start Instant Video Call',
    instantConnect: 'Instant Emergency Call',
    
    // Claim Tracker
    claimTrackingTitle: 'Active Cashless Claim Tracking',
    autoFileClaimBtn: '⚡ Auto-File New Claim',
    autoFileClaimDesc: 'Instantly pre-fill and submit a claim using your digital health card.',
    
    // Government schemes
    govtEligibleTitle: 'Am I Eligible for Government Benefits?',
    govtEligibleSubtitle: 'Check your eligibility for national and state welfare schemes with verified assistance.',
    getHelpApplying: 'Get Help Applying',
    
    // Employer Dashboard
    employerDashboardTitle: 'ABC Constructions - Safety & Healthcare Command Centre',
    totalEnrolledWorkers: 'Total Workers Enrolled',
    activeHealthCoverage: 'Active Health Coverage',
    injuredWorkers: 'Workers Currently Injured',
    claimsSubmitted: 'Claims Submitted',
    claimsPending: 'Claims Pending Approval',
    monthlyCost: 'Monthly Protection Cost',
    healthRiskAlerts: 'Active AI Hazard Alerts',
    
    // AI Safety Monitor
    aiSafetyTitle: 'AI Safety Risk Monitor',
    aiSafetySubtitle: 'Real-time computer vision and IoT hazard prediction engine across construction sites.',
    siteRiskScore: 'Site Risk Score',
    recommendations: 'AI Safety Recommendations',
    
    // Employer Subscription
    subscriptionPlans: 'Employer Healthcare Plans',
    standardPlanDesc: 'Standard Plan: ₹150 / worker / month (Most Popular)',
    payMonthlyBill: 'Pay Monthly Premium (₹75,000)',
    downloadReport: 'Download Executive Pitch Report'
  },
  hi: {
    appName: 'निर्माणकेयर',
    tagline: 'भारत का निर्माण करने वाले कामगारों की स्वास्थ्य सुरक्षा',
    heroSubtitle: 'निर्माण श्रमिकों के लिए मात्र ₹150/महीने में स्वास्थ्य सुरक्षा, टेलीमेडिसिन, एआई चोट जांच और कैशलेस बीमा सहायता।',
    protectWorkers: 'श्रमिकों को सुरक्षित करें',
    workerLogin: 'श्रमिक पोर्टल लॉगिन',
    launchDemo: 'लाइव डेमो शुरू करें',
    pitchMode: '3-मिनट पिच गाइड',
    switchRole: 'भूमिका बदलें',
    langSelect: 'भाषा',
    
    // Roles
    roleWorker: 'श्रमिक (रवि कुमार 👷)',
    roleEmployer: 'ठेकेदार / कंपनी (ABC कंस्ट्रक्शंस)',
    roleAdmin: 'सुपर एडमिन (निर्माणकेयर)',
    roleLanding: 'मुख्य वेबसाइट (होम)',

    // Worker Dashboard
    welcomeWorker: 'नमस्ते, रवि 👷',
    activeCoverage: 'स्वास्थ्य सुरक्षा स्थिति',
    activeCoverageValue: 'सक्रिय (वेरिफाइड)',
    sumInsuredTitle: 'कुल बीमा राशि',
    activeClaimsTitle: 'सक्रिय क्लेम',
    nextConsultationTitle: 'अगला डॉक्टर परामर्श',
    tomorrowConsultation: 'कल, सुबह 10:30 बजे',
    
    // Quick Actions
    reportInjuryBtn: '🚨 चोट की रिपोर्ट करें',
    reportInjuryDesc: 'एआई द्वारा चोट की गंभीरता जांचें और तुरंत रिपोर्ट दर्ज करें',
    talkToDoctorBtn: '👨‍⚕️ डॉक्टर से बात करें',
    talkToDoctorDesc: '24/7 मुफ्त वीडियो या फोन द्वारा विशेषज्ञ डॉक्टर से परामर्श लें',
    trackClaimBtn: '📄 क्लेम स्थिति देखें',
    trackClaimDesc: 'अस्पताल के बिल और कैशलेस अप्रूवल की लाइव जानकारी',
    findHospitalBtn: '🏥 नजदीकी अस्पताल ढूंढें',
    findHospitalDesc: '45+ कैशलेस पार्टनर अस्पतालों की सूची व आपातकालीन कॉल',
    
    // Worker Benefits Card
    myBenefitsTitle: 'मेरी निर्माणकेयर सुविधाएं',
    benefit1: '100% कैशलेस अस्पताल इलाज (₹2,00,000 तक)',
    benefit2: 'विशेषज्ञ डॉक्टरों से 24/7 मुफ्त ऑनलाइन परामर्श',
    benefit3: 'कार्यस्थल दुर्घटना एवं विकलांगता आर्थिक सुरक्षा',
    benefit4: 'सरकारी योजनाओं (ई-श्रम, BOCW) में मुफ्त आवेदन सहायता',

    // AI Injury Assistant
    aiAssistantTitle: 'एआई चोट सहायक (AI Injury Assistant)',
    aiAssistantSubtitle: 'सरल प्रश्नों के उत्तर दें और तुरंत डॉक्टर की सलाह व जोखिम स्तर जानें।',
    aiDisclaimer: 'महत्वपूर्ण सूचना: यह एआई परिणाम केवल प्राथमिक मार्गदर्शन के लिए है, चिकित्सीय निदान नहीं। गंभीर आपातकाल में तुरंत 108 पर कॉल करें।',
    q1: '1. कार्यस्थल पर क्या हुआ?',
    q1Placeholder: 'उदा. पाड़ (Scaffolding) से फिसले, दाहिने घुटने पर लोहे की रॉड लगी',
    q2: '2. शरीर के किस हिस्से में चोट लगी है?',
    q3: '3. क्या चोट से खून बह रहा है?',
    q4: '4. क्या आप चोट वाले अंग को हिला पा रहे हैं?',
    q5: '5. दर्द कितना तेज है? (1 = हल्का, 10 = असहनीय)',
    q6: '6. क्या आपको चक्कर आए या बेहोशी हुई?',
    uploadInjuryPhoto: 'एआई जांच हेतु चोट की फोटो अपलोड करें (वैकल्पिक)',
    analyzeInjuryBtn: '🤖 एआई से चोट की जांच कराएं',
    analyzingText: 'एआई लक्षणों एवं फोटो का विश्लेषण कर रहा है...',
    
    // Risk Levels
    lowRiskTitle: 'कम जोखिम (सामान्य चोट - LOW RISK)',
    lowRiskDesc: 'आपके लक्षण सामान्य प्रतीत होते हैं। घर बैठे ऑनलाइन डॉक्टर से परामर्श लें।',
    mediumRiskTitle: 'मध्यम जोखिम (गंभीरता संभव - MEDIUM RISK)',
    mediumRiskDesc: '24 घंटे के भीतर डॉक्टर को दिखाना जरूरी है। चोट वाले हिस्से को हिलाएं नहीं।',
    highRiskTitle: 'उच्च जोखिम (तत्काल आपातकाल - HIGH RISK)',
    highRiskDesc: 'गंभीर चोट की संभावना है। कृपया तुरंत नजदीकी कैशलेस अस्पताल के आपातकालीन विभाग में जाएं।',
    
    // Telemedicine
    telemedicineTitle: 'डॉक्टर से बात करें',
    telemedicineSubtitle: 'अनुभवी ट्रामा और सामान्य रोग विशेषज्ञों से तुरंत परामर्श लें।',
    bookConsultation: 'समय बुक करें',
    startCallNow: 'वीडियो कॉल शुरू करें',
    instantConnect: 'आपातकालीन कॉल',
    
    // Claim Tracker
    claimTrackingTitle: 'सक्रिय कैशलेस क्लेम ट्रैकिंग',
    autoFileClaimBtn: '⚡ नया क्लेम तुरंत दर्ज करें (ऑटो-फाइल)',
    autoFileClaimDesc: 'अपने डिजिटल स्वास्थ्य कार्ड से 1-क्लिक में क्लेम फॉर्म भरें।',
    
    // Government schemes
    govtEligibleTitle: 'क्या मुझे सरकारी योजनाओं का लाभ मिल सकता है?',
    govtEligibleSubtitle: 'ई-श्रम और भवन निर्माण कल्याण बोर्ड (BOCW) की योजनाओं की पात्रता जांचें।',
    getHelpApplying: 'आवेदन में मदद लें',
    
    // Employer Dashboard
    employerDashboardTitle: 'ABC कंस्ट्रक्शंस - सुरक्षा एवं स्वास्थ्य कमांड सेंटर',
    totalEnrolledWorkers: 'कुल नामांकित श्रमिक',
    activeHealthCoverage: 'सक्रिय स्वास्थ्य कवर',
    injuredWorkers: 'वर्तमान में घायल श्रमिक',
    claimsSubmitted: 'दाखिल किए गए क्लेम',
    claimsPending: 'प्रक्रियाधीन क्लेम',
    monthlyCost: 'मासिक सुरक्षा लागत',
    healthRiskAlerts: 'सक्रिय एआई सुरक्षा अलर्ट',
    
    // AI Safety Monitor
    aiSafetyTitle: 'एआई साइट सुरक्षा मॉनिटर',
    aiSafetySubtitle: 'कंप्यूटर विज़न और सेंसर द्वारा दुर्घटना की पूर्व भविष्यवाणी।',
    siteRiskScore: 'साइट जोखिम स्कोर',
    recommendations: 'एआई सुरक्षा सिफारिशें',
    
    // Employer Subscription
    subscriptionPlans: 'नियोक्ता स्वास्थ्य योजनाएं',
    standardPlanDesc: 'मानक प्लान: ₹150 / श्रमिक / महीना (सबसे लोकप्रिय)',
    payMonthlyBill: 'मासिक प्रीमियम का भुगतान करें (₹75,000)',
    downloadReport: 'सुरक्षा रिपोर्ट डाउनलोड करें'
  },
  ta: {
    appName: 'நிர்மாண்கேர்',
    tagline: 'இந்தியாவை உருவாக்கும் கட்டுமான தொழிலாளர்களுக்கு சுகாதார பாதுகாப்பு',
    heroSubtitle: 'கட்டுமான தொழிலாளர்களுக்கு மாதம் ₹150 இல் தொழில்சார் சுகாதாரம், டெலிமெடிசின், மற்றும் பணமில்லா காப்பீடு.',
    protectWorkers: 'தொழிலாளர்களை பாதுகாக்கவும்',
    workerLogin: 'தொழிலாளர் போர்டல்',
    launchDemo: 'டெமோவை தொடங்குங்கள்',
    pitchMode: '3-நிமிட பிட்ச் வழிகாட்டி',
    switchRole: 'பயனர் மாற்றவும்',
    langSelect: 'மொழி',
    
    // Roles
    roleWorker: 'தொழிலாளர் (ரவி குமார் 👷)',
    roleEmployer: 'நிறுவனம் (ABC கன்ஸ்ட்ரக்ஷன்ஸ்)',
    roleAdmin: 'சூப்பர் அட்மின்',
    roleLanding: 'முகப்பு பக்கம்',

    // Worker Dashboard
    welcomeWorker: 'வணக்கம், ரவி 👷',
    activeCoverage: 'சுகாதார பாதுகாப்பு நிலை',
    activeCoverageValue: 'செயலில் உள்ளது (சரிபார்க்கப்பட்டது)',
    sumInsuredTitle: 'காப்பீட்டு தொகை',
    activeClaimsTitle: 'நடப்பு கிளைம்கள்',
    nextConsultationTitle: 'அடுத்த மருத்துவ ஆலோசனை',
    tomorrowConsultation: 'நாளை, காலை 10:30',
    
    // Quick Actions
    reportInjuryBtn: '🚨 காயத்தை பதிவு செய்க',
    reportInjuryDesc: 'AI மூலம் காயத்தின் தீவிரத்தை சரிபார்த்து உடனே பதிவு செய்யவும்',
    talkToDoctorBtn: '👨‍⚕️ மருத்துவரிடம் பேசுங்கள்',
    talkToDoctorDesc: '24/7 இலவச வீடியோ அல்லது போன் மூலம் ஆலோசனை பெறவும்',
    trackClaimBtn: '📄 கிளைம் நிலை கண்காணிக்க',
    trackClaimDesc: 'பணமில்லா மருத்துவமனை அனுமதி மற்றும் கட்டண நிலை',
    findHospitalBtn: '🏥 அருகிலுள்ள மருத்துவமனை',
    findHospitalDesc: '45+ பணமில்லா மருத்துவமனைகளின் பட்டியல் மற்றும் அவசர அழைப்பு',
    
    // Worker Benefits Card
    myBenefitsTitle: 'எனது நிர்மாண்கேர் நன்மைகள்',
    benefit1: '100% பணமில்லா மருத்துவமனை சிகிச்சை (₹2,00,000 வரை)',
    benefit2: 'சிறப்பு மருத்துவர்களுடன் இலவச ஆன்லைன் ஆலோசனை',
    benefit3: 'விபத்து மற்றும் ஊனமுற்றோர் பாதுகாப்பு',
    benefit4: 'அரசு நலத்திட்ட விண்ணப்ப உதவி',

    // AI Injury Assistant
    aiAssistantTitle: 'AI காயம் உதவி மையம்',
    aiAssistantSubtitle: 'எளிய கேள்விகளுக்கு பதிலளித்து உடனடி மருத்துவ வழிகாட்டலைப் பெறுங்கள்.',
    aiDisclaimer: 'குறிப்பு: இந்த AI முடிவு முதலுதவி வழிகாட்டலுக்கானது மட்டுமே. அவசர சிகிச்சைக்கு 108 ஐ அழைக்கவும்.',
    q1: '1. பணியிடத்தில் என்ன நடந்தது?',
    q1Placeholder: 'எ.கா: சாரக்கட்டிலிருந்து வழுக்கி விழுந்ததில் முழங்காலில் காயம்',
    q2: '2. உடலின் எந்த பகுதியில் காயம்?',
    q3: '3. ரத்தம் கசிகிறதா?',
    q4: '4. காயமடைந்த பகுதியை அசைக்க முடிகிறதா?',
    q5: '5. வலியின் அளவு எவ்வளவு? (1 முதல் 10 வரை)',
    q6: '6. மயக்கம் ஏற்பட்டதா?',
    uploadInjuryPhoto: 'AI ஆய்வுக்காக காயத்தின் புகைப்படத்தைப் பதிவேற்றவும் (விருப்பத்தேர்வு)',
    analyzeInjuryBtn: '🤖 AI மூலம் ஆய்வு செய்க',
    analyzingText: 'AI உங்கள் காயத்தை ஆய்வு செய்கிறது...',
    
    // Risk Levels
    lowRiskTitle: 'குறைந்த ஆபத்து (LOW RISK)',
    lowRiskDesc: 'காயம் சிறியது. வீட்டிலிருந்தே வீடியோ ஆலோசனை பெறலாம்.',
    mediumRiskTitle: 'நடுத்தர ஆபத்து (MEDIUM RISK)',
    mediumRiskDesc: '24 மணி நேரத்திற்குள் மருத்துவரை அணுகவும்.',
    highRiskTitle: 'அதி தீவிர ஆபத்து (HIGH RISK)',
    highRiskDesc: 'உடனடியாக அருகிலுள்ள பணமில்லா மருத்துவமனை அவசர சிகிச்சைப் பிரிவுக்குச் செல்லவும்.',
    
    // Telemedicine
    telemedicineTitle: 'மருத்துவரிடம் பேசுங்கள்',
    telemedicineSubtitle: 'அனுபவம் வாய்ந்த சிறப்பு மருத்துவர்களுடன் ஆலோசியுங்கள்.',
    bookConsultation: 'முன்பதிவு செய்க',
    startCallNow: 'வீடியோ அழைப்பு தொடங்கு',
    instantConnect: 'அவசர அழைப்பு',
    
    // Claim Tracker
    claimTrackingTitle: 'நடப்பு கிளைம் கண்காணிப்பு',
    autoFileClaimBtn: '⚡ புதிய கிளைம் உடனே பதிவு செய்',
    autoFileClaimDesc: 'உங்கள் டிஜிட்டல் அட்டை மூலம் 1-கிளிக்கில் கிளைம் செய்யவும்.',
    
    // Government schemes
    govtEligibleTitle: 'அரசு நலத்திட்டங்களுக்கு நான் தகுதியானவரா?',
    govtEligibleSubtitle: 'இ-ஷ்ரம் மற்றும் கட்டுமான நல வாரிய திட்டங்களின் தகுதியை சரிபார்க்கவும்.',
    getHelpApplying: 'விண்ணப்பிக்க உதவி பெறவும்',
    
    // Employer Dashboard
    employerDashboardTitle: 'ABC கன்ஸ்ட்ரக்ஷன்ஸ் - பாதுகாப்பு மற்றும் சுகாதார மையம்',
    totalEnrolledWorkers: 'பதிவு செய்த தொழிலாளர்கள்',
    activeHealthCoverage: 'செயலில் உள்ள பாதுகாப்பு',
    injuredWorkers: 'காயமடைந்த தொழிலாளர்கள்',
    claimsSubmitted: 'சமர்ப்பிக்கப்பட்ட கிளைம்கள்',
    claimsPending: 'நிலுவையில் உள்ள கிளைம்கள்',
    monthlyCost: 'மாதாந்திர சந்தா கட்டணம்',
    healthRiskAlerts: 'AI எச்சரிக்கைகள்',
    
    // AI Safety Monitor
    aiSafetyTitle: 'AI தள பாதுகாப்பு கண்காணிப்பாளர்',
    aiSafetySubtitle: 'விபத்துகளை முன்கூட்டியே கணிக்கும் AI தொழில்நுட்பம்.',
    siteRiskScore: 'தளத்தின் ஆபத்து மதிப்பீடு',
    recommendations: 'AI பாதுகாப்பு பரிந்துரைகள்',
    
    // Employer Subscription
    subscriptionPlans: 'நிறுவன சந்தா திட்டங்கள்',
    standardPlanDesc: 'ஸ்டாண்டர்ட் திட்டம்: ₹150 / தொழிலாளர் / மாதம்',
    payMonthlyBill: 'மாத சந்தா செலுத்தவும் (₹75,000)',
    downloadReport: 'அறிக்கை பதிவிறக்குக'
  }
};
