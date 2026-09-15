// ============================================================
// TrialGuard AI — Centralized Mock Clinical Trial Data Store
// ============================================================

export const SITES = [
  { id: 'S-104', name: 'Boston Medical Center', city: 'Boston', country: 'US', region: 'US East', subjects: 45, compliance: 94.2, risk: 'Medium', status: 'Warning', pi: 'Dr. A. Rahman', lastVisit: '2026-09-14' },
  { id: 'S-082', name: 'Charité Berlin', city: 'Berlin', country: 'DE', region: 'Europe', subjects: 62, compliance: 98.9, risk: 'Low', status: 'Compliant', pi: 'Dr. H. Müller', lastVisit: '2026-09-15' },
  { id: 'S-210', name: 'Tokyo University Hospital', city: 'Tokyo', country: 'JP', region: 'Asia-Pac', subjects: 38, compliance: 89.1, risk: 'High', status: 'Critical', pi: 'Dr. K. Yamamoto', lastVisit: '2026-09-13' },
  { id: 'S-014', name: 'Mayo Clinic', city: 'Rochester', country: 'US', region: 'US Midwest', subjects: 84, compliance: 99.4, risk: 'Low', status: 'Compliant', pi: 'Dr. J. Williams', lastVisit: '2026-09-15' },
  { id: 'S-051', name: 'Karolinska Institut', city: 'Stockholm', country: 'SE', region: 'Europe', subjects: 29, compliance: 96.7, risk: 'Low', status: 'Compliant', pi: 'Dr. E. Lindqvist', lastVisit: '2026-09-14' },
  { id: 'S-177', name: 'Peking Union Hospital', city: 'Beijing', country: 'CN', region: 'Asia-Pac', subjects: 53, compliance: 91.3, risk: 'Medium', status: 'Warning', pi: 'Dr. W. Zhang', lastVisit: '2026-09-12' },
  { id: 'S-033', name: 'Johns Hopkins Hospital', city: 'Baltimore', country: 'US', region: 'US East', subjects: 71, compliance: 97.8, risk: 'Low', status: 'Compliant', pi: 'Dr. P. Novak', lastVisit: '2026-09-15' },
  { id: 'S-092', name: 'IRCCS San Raffaele', city: 'Milan', country: 'IT', region: 'Europe', subjects: 41, compliance: 95.4, risk: 'Low', status: 'Compliant', pi: 'Dr. L. Ferrari', lastVisit: '2026-09-14' },
  { id: 'S-118', name: 'Toronto General Hospital', city: 'Toronto', country: 'CA', region: 'N. America', subjects: 36, compliance: 93.1, risk: 'Medium', status: 'Warning', pi: 'Dr. M. Okafor', lastVisit: '2026-09-11' },
  { id: 'S-205', name: 'Sydney Royal Hospital', city: 'Sydney', country: 'AU', region: 'Asia-Pac', subjects: 28, compliance: 97.2, risk: 'Low', status: 'Compliant', pi: 'Dr. B. Thompson', lastVisit: '2026-09-15' },
  { id: 'S-311', name: 'Seoul National University Hospital', city: 'Seoul', country: 'KR', region: 'Asia-Pac', subjects: 47, compliance: 96.1, risk: 'Low', status: 'Compliant', pi: 'Dr. J. Park', lastVisit: '2026-09-15' },
  { id: 'S-098', name: 'University College London Hospital', city: 'London', country: 'GB', region: 'Europe', subjects: 58, compliance: 90.4, risk: 'High', status: 'Critical', pi: 'Dr. R. Patel', lastVisit: '2026-09-10' },
];

export const PATIENTS = [
  { id: 'SUBJ-4091', site: 'S-104', trial: 'ONC-402', age: 54, gender: 'F', visitStatus: 'At Risk', lastVisit: '2026-09-10', nextVisit: '2026-09-17', compliance: 87, vitals: { hr: 78, bp: '128/84', temp: 36.8, spo2: 97 } },
  { id: 'SUBJ-1102', site: 'S-082', trial: 'CARD-108', age: 62, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-14', nextVisit: '2026-09-21', compliance: 99, vitals: { hr: 68, bp: '118/76', temp: 36.6, spo2: 99 } },
  { id: 'SUBJ-8819', site: 'S-210', trial: 'ONC-402', age: 47, gender: 'F', visitStatus: 'Overdue', lastVisit: '2026-09-03', nextVisit: '2026-09-10', compliance: 74, vitals: { hr: 92, bp: '145/92', temp: 37.2, spo2: 95 } },
  { id: 'SUBJ-0041', site: 'S-014', trial: 'RD-990', age: 38, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-15', nextVisit: '2026-09-22', compliance: 100, vitals: { hr: 72, bp: '116/74', temp: 36.5, spo2: 98 } },
  { id: 'SUBJ-3312', site: 'S-033', trial: 'ONC-402', age: 59, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-13', nextVisit: '2026-09-20', compliance: 96, vitals: { hr: 65, bp: '122/78', temp: 36.7, spo2: 98 } },
  { id: 'SUBJ-7701', site: 'S-051', trial: 'CARD-108', age: 71, gender: 'F', visitStatus: 'At Risk', lastVisit: '2026-09-08', nextVisit: '2026-09-15', compliance: 91, vitals: { hr: 82, bp: '136/88', temp: 36.9, spo2: 96 } },
  { id: 'SUBJ-2244', site: 'S-177', trial: 'ONC-402', age: 45, gender: 'M', visitStatus: 'At Risk', lastVisit: '2026-09-07', nextVisit: '2026-09-14', compliance: 83, vitals: { hr: 88, bp: '132/86', temp: 37.0, spo2: 96 } },
  { id: 'SUBJ-5589', site: 'S-092', trial: 'RD-990', age: 33, gender: 'F', visitStatus: 'On Time', lastVisit: '2026-09-15', nextVisit: '2026-09-29', compliance: 100, vitals: { hr: 70, bp: '114/72', temp: 36.5, spo2: 99 } },
  { id: 'SUBJ-9023', site: 'S-118', trial: 'CARD-108', age: 66, gender: 'M', visitStatus: 'Overdue', lastVisit: '2026-09-01', nextVisit: '2026-09-08', compliance: 71, vitals: { hr: 95, bp: '148/94', temp: 37.3, spo2: 94 } },
  { id: 'SUBJ-1488', site: 'S-205', trial: 'ONC-402', age: 52, gender: 'F', visitStatus: 'On Time', lastVisit: '2026-09-14', nextVisit: '2026-09-21', compliance: 98, vitals: { hr: 74, bp: '120/78', temp: 36.6, spo2: 98 } },
  { id: 'SUBJ-6634', site: 'S-104', trial: 'ONC-402', age: 49, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-13', nextVisit: '2026-09-20', compliance: 94, vitals: { hr: 76, bp: '124/80', temp: 36.8, spo2: 97 } },
  { id: 'SUBJ-3391', site: 'S-014', trial: 'CARD-108', age: 57, gender: 'F', visitStatus: 'On Time', lastVisit: '2026-09-15', nextVisit: '2026-09-22', compliance: 100, vitals: { hr: 64, bp: '112/70', temp: 36.4, spo2: 99 } },
  { id: 'SUBJ-5512', site: 'S-311', trial: 'NEURO-221', age: 44, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-15', nextVisit: '2026-09-22', compliance: 97, vitals: { hr: 69, bp: '119/77', temp: 36.7, spo2: 98 } },
  { id: 'SUBJ-7203', site: 'S-098', trial: 'NEURO-221', age: 61, gender: 'F', visitStatus: 'Overdue', lastVisit: '2026-09-02', nextVisit: '2026-09-09', compliance: 68, vitals: { hr: 99, bp: '151/96', temp: 37.4, spo2: 93 } },
  { id: 'SUBJ-4418', site: 'S-082', trial: 'RD-990', age: 36, gender: 'M', visitStatus: 'On Time', lastVisit: '2026-09-15', nextVisit: '2026-09-22', compliance: 100, vitals: { hr: 66, bp: '115/73', temp: 36.5, spo2: 99 } },
  { id: 'SUBJ-8834', site: 'S-033', trial: 'CARD-108', age: 78, gender: 'F', visitStatus: 'At Risk', lastVisit: '2026-09-06', nextVisit: '2026-09-13', compliance: 85, vitals: { hr: 84, bp: '140/89', temp: 36.9, spo2: 95 } },
];

export const DEVIATIONS = [
  { id: 'DEV-8041', site: 'S-104', siteName: 'Boston Medical Center', trial: 'ONC-402', patient: 'SUBJ-4091', deviation: 'Visit 4 Blood Window +3 Days Exceeded', category: 'Visit Window', severity: 'Major', date: '2026-09-15 11:24', status: 'Open', riskScore: 6.8, rootCause: 'Site lab coordinator scheduling conflict during the Labor Day holiday window.', corrective: 'Re-baseline Visit 5 assays; audit blood draw aliquots from Visit 4.', preventive: 'Implement automated SMS notification trigger 48h prior to all visit windows.', citation: 'FDA 21 CFR 312.60 & ICH GCP E6(R3) 4.5.2', assignee: 'CRA Martinez' },
  { id: 'DEV-8042', site: 'S-082', siteName: 'Charité Berlin', trial: 'CARD-108', patient: 'SUBJ-1102', deviation: 'Dosage Cohort Escalation Form Missing E-Signature', category: 'Documentation', severity: 'Minor', date: '2026-09-15 10:15', status: 'In Review', riskScore: 3.2, rootCause: 'PI delegation log not updated before CRA-4 completed escalation authorization.', corrective: 'Obtain retroactive e-signature; update delegation log immediately.', preventive: 'Require delegation log pre-authorization check in EDC workflow.', citation: 'FDA 21 CFR Part 11.10(a) & ICH GCP E6(R3) 8.3.2', assignee: 'CRA Fischer' },
  { id: 'DEV-8043', site: 'S-210', siteName: 'Tokyo University Hospital', trial: 'ONC-402', patient: 'SUBJ-8819', deviation: 'Inclusion Criterion #4 Lab Assay Out of Window', category: 'Eligibility', severity: 'Critical', date: '2026-09-15 08:42', status: 'Open', riskScore: 8.9, rootCause: 'Subject enrollment proceeded despite serum creatinine value exceeding protocol threshold of 1.5x ULN.', corrective: 'Immediate subject safety assessment; notify IRB and Sponsor Medical Monitor.', preventive: 'Implement hard-stop EDC eligibility check before enrollment confirmation.', citation: 'FDA 21 CFR 312.32 & ICH GCP E6(R3) 4.3.1', assignee: 'CRA Tanaka' },
  { id: 'DEV-8044', site: 'S-014', siteName: 'Mayo Clinic', trial: 'RD-990', patient: 'SUBJ-0041', deviation: 'Daily eCOA Diary Completion Window Missed', category: 'eCOA Compliance', severity: 'Minor', date: '2026-09-14 18:30', status: 'Resolved', riskScore: 1.5, rootCause: 'Subject traveled internationally; timezone sync error in eCOA application.', corrective: 'Manual backup paper diary entry collected and transcribed.', preventive: 'Upgrade eCOA app to v4.2 with automatic timezone detection.', citation: 'ICH GCP E6(R3) 5.5.3 & 21 CFR Part 11', assignee: 'CRA Johnson' },
  { id: 'DEV-8045', site: 'S-177', siteName: 'Peking Union Hospital', trial: 'ONC-402', patient: 'SUBJ-2244', deviation: 'Concomitant Medication Not Documented in EDC', category: 'Documentation', severity: 'Major', date: '2026-09-13 14:20', status: 'Open', riskScore: 5.4, rootCause: 'Subject disclosed anti-hypertensive use at Visit 3; not captured in eCRF within required 24h window.', corrective: 'Retroactive eCRF amendment submitted with supporting medical records.', preventive: 'Implement automated ConMed capture prompt at every site visit check-in.', citation: 'ICH GCP E6(R3) 4.9.2 & FDA 21 CFR 312.62', assignee: 'CRA Chen' },
  { id: 'DEV-8046', site: 'S-118', siteName: 'Toronto General Hospital', trial: 'CARD-108', patient: 'SUBJ-9023', deviation: 'Informed Consent Re-consent Not Executed After Protocol Amendment v2.1', category: 'Consent', severity: 'Critical', date: '2026-09-12 09:15', status: 'Open', riskScore: 9.1, rootCause: 'Site coordinator missed amendment notification email distribution list. Subject continued on study without updated consent.', corrective: 'Immediate re-consent of subject; halt study procedures pending IRB notification.', preventive: 'Mandatory amendment notification confirmation required in site CTMS.', citation: 'FDA 21 CFR 50.25 & ICH GCP E6(R3) 4.8.2', assignee: 'CRA Singh' },
  { id: 'DEV-8047', site: 'S-098', siteName: 'University College London Hospital', trial: 'NEURO-221', patient: 'SUBJ-7203', deviation: 'Subject Missed 2 Consecutive Protocol Visits Without Documentation', category: 'Visit Window', severity: 'Major', date: '2026-09-11 16:45', status: 'Open', riskScore: 7.3, rootCause: 'Site coordinator was on extended leave and visit reminders were not rerouted to backup staff.', corrective: 'Contact subject immediately; document lost to follow-up risk assessment.', preventive: 'Implement redundant visit reminder system with escalation to backup coordinator.', citation: 'FDA 21 CFR 312.62 & ICH GCP E6(R3) 4.5.1', assignee: 'CRA Davies' },
];

export const CAPAS = [
  { id: 'CAPA-2041', devId: 'DEV-8043', site: 'S-210', trial: 'ONC-402', subject: 'SUBJ-8819', severity: 'Critical', status: 'Signed', created: '2026-09-15', signed: '2026-09-15', signedBy: 'Dr. K. Yamamoto', regCitation: 'FDA 21 CFR 312.32 & ICH GCP E6(R3) 4.3.1', rootCause: 'Subject enrolled despite serum creatinine exceeding protocol threshold of 1.5x ULN.', corrective: 'Immediate subject safety assessment; notify IRB and Sponsor Medical Monitor within 24 hours.', preventive: 'Implement hard-stop EDC eligibility check before enrollment confirmation is permitted.', hash: '0x88f2c4e9a1b3d7f0c5e2a4b1d8c3f2e7a9b4c1d6e3f0a7b2c5d8e1f4a3b6c9' },
  { id: 'CAPA-2040', devId: 'DEV-8046', site: 'S-118', trial: 'CARD-108', subject: 'SUBJ-9023', severity: 'Critical', status: 'Draft', created: '2026-09-12', signed: null, signedBy: null, regCitation: 'FDA 21 CFR 50.25 & ICH GCP E6(R3) 4.8.2', rootCause: 'Protocol Amendment v2.1 re-consent not executed. Site coordinator missed amendment notification email.', corrective: 'Immediate re-consent of subject; halt study procedures pending IRB notification and approval.', preventive: 'Mandatory amendment notification confirmation required in site CTMS before procedures may resume.', hash: null },
  { id: 'CAPA-2038', devId: 'DEV-8041', site: 'S-104', trial: 'ONC-402', subject: 'SUBJ-4091', severity: 'Major', status: 'Filed', created: '2026-09-14', signed: '2026-09-14', signedBy: 'Dr. A. Rahman', regCitation: 'FDA 21 CFR 312.60 & ICH GCP E6(R3) 4.5.2', rootCause: 'Lab coordinator scheduling conflict during holiday window caused Visit 4 blood draw to exceed ±3 day window.', corrective: 'Re-baseline Visit 5 assays; review and audit all blood draw aliquots from Visit 4 collection.', preventive: 'Implement automated SMS notification trigger 48 hours prior to all visit windows for lab coordinators.', hash: '0x91a3c5e7b2d4f6a1c3e5b7d9f2a4c6e8b1d3f5a7c9e2b4d6f8a1c3e5b7d9f1' },
  { id: 'CAPA-2036', devId: 'DEV-8045', site: 'S-177', trial: 'ONC-402', subject: 'SUBJ-2244', severity: 'Major', status: 'In Review', created: '2026-09-13', signed: null, signedBy: null, regCitation: 'ICH GCP E6(R3) 4.9.2 & FDA 21 CFR 312.62', rootCause: 'Concomitant anti-hypertensive medication disclosed at Visit 3 not captured in eCRF within required 24h window.', corrective: 'Retroactive eCRF amendment submitted with supporting historical medical records attached.', preventive: 'Implement automated ConMed capture prompt at every study visit check-in screen.', hash: null },
  { id: 'CAPA-2033', devId: 'DEV-8042', site: 'S-082', trial: 'CARD-108', subject: 'SUBJ-1102', severity: 'Minor', status: 'Signed', created: '2026-09-12', signed: '2026-09-13', signedBy: 'Dr. H. Müller', regCitation: 'FDA 21 CFR Part 11.10(a) & ICH GCP E6(R3) 8.3.2', rootCause: 'PI delegation log not updated before CRA-4 completed cohort escalation authorization.', corrective: 'Retroactive e-signature obtained; delegation log updated with correct effective dates.', preventive: 'EDC workflow updated to require delegation log pre-authorization check before escalation forms accessible.', hash: '0x4a7d2f1e9c6b3a8d5e2f7c4b1a8d5e2f7c4b1a6d3e0f7c4b1a6d3e0f7c4b19' },
  { id: 'CAPA-2030', devId: 'DEV-8047', site: 'S-098', trial: 'NEURO-221', subject: 'SUBJ-7203', severity: 'Major', status: 'In Review', created: '2026-09-11', signed: null, signedBy: null, regCitation: 'FDA 21 CFR 312.62 & ICH GCP E6(R3) 4.5.1', rootCause: 'Site coordinator absence with no documented handoff; backup coordinator not notified of pending visit reminders.', corrective: 'Urgent subject contact attempt; lost-to-follow-up risk assessment documented in eCRF.', preventive: 'Implement redundant visit reminder system with automatic escalation triggered by coordinator absence flag.', hash: null },
];

export const ANALYTICS = {
  complianceTimeline: [
    { month: 'Apr', value: 91.2 }, { month: 'May', value: 93.5 }, { month: 'Jun', value: 94.1 },
    { month: 'Jul', value: 95.8 }, { month: 'Aug', value: 96.3 }, { month: 'Sep', value: 97.4 },
  ],
  deviationsByType: [
    { type: 'Visit Window', count: 18 }, { type: 'Documentation', count: 24 },
    { type: 'Eligibility', count: 7 }, { type: 'eCOA Compliance', count: 12 },
    { type: 'Consent', count: 4 }, { type: 'Dosage', count: 9 },
  ],
  capaResolutionRate: [
    { week: 'W1', auto: 82, manual: 18 }, { week: 'W2', auto: 85, manual: 15 },
    { week: 'W3', auto: 88, manual: 12 }, { week: 'W4', auto: 91, manual: 9 },
    { week: 'W5', auto: 94, manual: 6 }, { week: 'W6', auto: 96, manual: 4 },
  ],
  kpis: {
    overallCompliance: 97.4,
    activeSites: 214,
    totalSubjects: 4290,
    openDeviations: 4,
    criticalDeviations: 2,
    autoCapasThisWeek: 84,
    avgCapaTime: '48s',
    inspectionReadiness: 98.1,
  },
  recentActivity: [
    { time: '11:24', event: 'DEV-8041 ingested — Major deviation at Site 104', type: 'deviation' },
    { time: '10:15', event: 'DEV-8042 flagged — Missing e-signature at Charité Berlin', type: 'deviation' },
    { time: '09:31', event: 'CAPA-2041 signed by Dr. Yamamoto — Critical resolved', type: 'capa' },
    { time: '08:42', event: 'DEV-8043 detected — Critical eligibility breach at Site 210', type: 'critical' },
    { time: '07:55', event: 'Site 014 (Mayo) — Compliance score updated to 99.4%', type: 'compliance' },
    { time: '06:30', event: 'CAPA-2038 filed and archived — ONC-402 deviation closed', type: 'capa' },
  ],
};

// Active trial protocols
export const TRIALS = [
  { id: 'ONC-402', name: 'Phase III Oncology — Pembrolizumab + Chemotherapy', phase: 'III', sites: 6, subjects: 187, status: 'Active', sponsor: 'BioNorth Therapeutics', indication: 'Non-Small Cell Lung Cancer (NSCLC)' },
  { id: 'CARD-108', name: 'Phase II Cardiology — Novel ACE Inhibitor Combo', phase: 'II', sites: 4, subjects: 143, status: 'Active', sponsor: 'CardioGen Labs', indication: 'Heart Failure with Reduced Ejection Fraction (HFrEF)' },
  { id: 'RD-990', name: 'Rare Disease — Enzyme Replacement Therapy', phase: 'II/III', sites: 3, subjects: 72, status: 'Active', sponsor: 'OrphanCure Research', indication: 'Gaucher Disease Type 1' },
  { id: 'NEURO-221', name: 'Phase II Neurology — Tau Protein Inhibitor', phase: 'II', sites: 2, subjects: 64, status: 'Active', sponsor: 'NeuroAxis Global', indication: 'Early-Stage Alzheimer\'s Disease' },
];
