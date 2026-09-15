import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  X
} from 'lucide-react';

export default function DashboardPreview({ onRequestDemo }) {
  const [selectedTrialFilter, setSelectedTrialFilter] = useState('All Studies');
  const [capaModalOpen, setCapaModalOpen] = useState(false);
  const [generatingCapa, setGeneratingCapa] = useState(false);
  const [capaSuccess, setCapaSuccess] = useState(false);
  const [activeDev, setActiveDev] = useState(null);

  // Fake Live Data Streams
  const deviationLogs = [
    {
      id: 'DEV-8041',
      site: 'Site 104 - Johns Hopkins',
      trial: 'Phase III Oncology (ONC-402)',
      patient: 'SUBJ-4091',
      deviation: 'Visit 4 Blood Window +3 Days Exceeded',
      severity: 'Major',
      date: '2026-09-15 11:24',
      status: 'Open - CAPA Required',
      riskScore: 6.8,
    },
    {
      id: 'DEV-8042',
      site: 'Site 082 - Charité Berlin',
      trial: 'Phase II Cardiology (CARD-108)',
      patient: 'SUBJ-1102',
      deviation: 'Dosage Cohort Escalation Form Missing E-Sign',
      severity: 'Minor',
      date: '2026-09-15 10:15',
      status: 'In Review',
      riskScore: 3.2,
    },
    {
      id: 'DEV-8043',
      site: 'Site 210 - Tokyo University',
      trial: 'Phase III Oncology (ONC-402)',
      patient: 'SUBJ-8819',
      deviation: 'Inclusion Criterion #4 Lab Assay Out of Window',
      severity: 'Critical',
      date: '2026-09-15 08:42',
      status: 'Open - CAPA Required',
      riskScore: 8.9,
    },
    {
      id: 'DEV-8044',
      site: 'Site 014 - Mayo Clinic',
      trial: 'Rare Disease (RD-990)',
      patient: 'SUBJ-0041',
      deviation: 'Daily eCOA Diary Completion Window Missed',
      severity: 'Minor',
      date: '2026-09-14 18:30',
      status: 'Resolved',
      riskScore: 1.5,
    },
  ];

  const siteHeatmap = [
    { site: 'Site 104 (Boston)', region: 'US East', subjects: 45, compliance: '94.2%', status: 'Warning', risk: 'Medium' },
    { site: 'Site 082 (Zurich)', region: 'Europe', subjects: 62, compliance: '98.9%', status: 'Compliant', risk: 'Low' },
    { site: 'Site 210 (Tokyo)', region: 'Asia-Pac', subjects: 38, compliance: '89.1%', status: 'Critical', risk: 'High' },
    { site: 'Site 014 (Rochester)', region: 'US Midwest', subjects: 84, compliance: '99.4%', status: 'Compliant', risk: 'Low' },
  ];

  const handleRunCAPASimulation = (dev) => {
    setActiveDev(dev);
    setCapaModalOpen(true);
    setGeneratingCapa(true);
    setCapaSuccess(false);

    setTimeout(() => {
      setGeneratingCapa(false);
      setCapaSuccess(true);
    }, 2000);
  };

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Compliance Command Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Live Clinical Trial Analytics & Risk Heatmap
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Experience the actual TrialGuard dashboard interface used by global study managers to monitor site telemetry and generate automated CAPAs.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="glass-card border border-gray-200 shadow-2xl rounded-2xl overflow-hidden bg-white">
          
          {/* Dashboard Header Bar */}
          <div className="p-4 sm:p-6 bg-[#F5F7FA] border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#2E7D32] animate-pulse" />
              <div>
                <h3 className="font-heading font-bold text-gray-900 text-base flex items-center gap-2">
                  TrialGuard Enterprise Dashboard
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]">
                    LIVE TELEMETRY
                  </span>
                </h3>
                <p className="text-xs text-gray-500 font-mono">Protocol: ONC-402 Phase III Oncology (Global)</p>
              </div>
            </div>

            {/* Filter Tabs & Controls */}
            <div className="flex items-center gap-2">
              <div className="flex bg-white p-1 rounded-xl border border-gray-200 text-xs font-medium">
                {['All Studies', 'Oncology Phase III', 'Cardiology Phase II'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedTrialFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      selectedTrialFilter === filter
                        ? 'bg-[#2E7D32] text-white shadow'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <button
                onClick={onRequestDemo}
                className="px-3.5 py-1.5 rounded-xl bg-[#2E7D32] text-white text-xs font-semibold hover:bg-[#43A047] transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export 21 CFR Binder</span>
              </button>
            </div>

          </div>

          {/* Top Metric Cards */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-gray-200">
            
            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200">
              <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                <span>Overall Compliance Score</span>
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              </div>
              <div className="text-3xl font-bold font-mono text-gray-900">97.4%</div>
              <div className="text-[11px] text-[#2E7D32] flex items-center gap-1 mt-1 font-mono">
                <span>+2.1% vs last audit window</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200">
              <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                <span>Active Clinical Sites</span>
                <MapPin className="w-4 h-4 text-[#43A047]" />
              </div>
              <div className="text-3xl font-bold font-mono text-gray-900">214 <span className="text-xs font-normal text-gray-500">sites</span></div>
              <div className="text-[11px] text-gray-500 mt-1 font-mono">18 Countries • 4,290 Subjects</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200">
              <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                <span>Open Protocol Deviations</span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-bold font-mono text-amber-600">3 <span className="text-xs font-normal text-gray-500">requiring action</span></div>
              <div className="text-[11px] text-amber-600 mt-1 font-mono">1 Critical • 1 Major • 1 Minor</div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200">
              <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                <span>Auto CAPAs Executed</span>
                <FileText className="w-4 h-4 text-[#2E7D32]" />
              </div>
              <div className="text-3xl font-bold font-mono text-[#2E7D32]">84</div>
              <div className="text-[11px] text-[#2E7D32] mt-1 font-mono">100% FDA 21 CFR Part 11 signed</div>
            </div>

          </div>

          {/* Main Dashboard Workspace: Deviation Log + Site Heatmap */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 cols: Protocol Deviation Ingestion Log */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-gray-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Live Ingested Protocol Deviations
                </h4>
                <span className="text-xs text-gray-500 font-mono">Click item to test AI CAPA Generator</span>
              </div>

              <div className="space-y-2.5">
                {deviationLogs.map((dev) => (
                  <div
                    key={dev.id}
                    className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 hover:border-[#43A047]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#2E7D32]">{dev.id}</span>
                        <span className="text-xs text-gray-700 font-semibold">{dev.site}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                          dev.severity === 'Critical'
                            ? 'bg-red-50 text-red-600 border border-red-200'
                            : dev.severity === 'Major'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]'
                        }`}>
                          {dev.severity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 font-medium">{dev.deviation}</p>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {dev.trial} • {dev.patient} • Ingested: {dev.date}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleRunCAPASimulation(dev)}
                        className="px-3 py-1.5 rounded-lg bg-[#E8F5E9] hover:bg-[#2E7D32] text-[#2E7D32] hover:text-white border border-[#A5D6A7] hover:border-[#2E7D32] text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Run AI CAPA</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 cols: Site Compliance Heatmap */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-heading font-bold text-gray-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2E7D32]" />
                Site Risk Matrix & Compliance
              </h4>

              <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 space-y-3">
                {siteHeatmap.map((s) => (
                  <div key={s.site} className="p-3 rounded-lg bg-white border border-gray-200 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-gray-700">{s.site}</span>
                      <span className={`font-mono font-bold ${
                        s.status === 'Critical' ? 'text-red-600' : s.status === 'Warning' ? 'text-amber-600' : 'text-[#2E7D32]'
                      }`}>
                        {s.compliance}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${
                          s.status === 'Critical' ? 'bg-red-500' : s.status === 'Warning' ? 'bg-amber-400' : 'bg-[#43A047]'
                        }`}
                        style={{ width: s.compliance }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                      <span>Region: {s.region}</span>
                      <span>Subjects: {s.subjects}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI CAPA Resolution Stats */}
              <div className="p-4 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7]">
                <div className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
                  AI CAPA Drafting Engine
                </div>
                <p className="text-[11px] text-gray-600">
                  Average time to draft, review, and issue FDA-compliant CAPA: <span className="font-mono font-bold text-[#2E7D32]">48 seconds</span> (vs 14 days manual).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* AI CAPA Generator Simulation Modal */}
      <AnimatePresence>
        {capaModalOpen && activeDev && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-xl w-full p-6 border border-[#A5D6A7] shadow-2xl bg-white relative"
            >
              <button
                onClick={() => setCapaModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#2E7D32] mb-2">
                <Sparkles className="w-4 h-4" />
                AUTOMATED CAPA GENERATOR v3.4
              </div>

              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                Generating CAPA Document: {activeDev.id}
              </h3>
              <p className="text-xs text-gray-600 font-mono mb-4">
                Target: {activeDev.site} | Deviation: {activeDev.deviation}
              </p>

              {generatingCapa ? (
                <div className="py-8 flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full border-4 border-[#A5D6A7] border-t-[#2E7D32] animate-spin" />
                  <div className="text-xs font-mono text-gray-600 animate-pulse">
                    Synthesizing Root Cause Analysis & FDA 21 CFR Part 11 Action Plan...
                  </div>
                </div>
              ) : capaSuccess ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#1B5E20] border border-[#2E7D32] text-xs font-mono space-y-2 text-green-100">
                    <div className="text-green-300 font-bold">&gt; CAPA DOCUMENT DRAFT COMPLETE [HASH: 0x88f...a19]</div>
                    <div>&gt; ROOT CAUSE: Site lab coordinator schedule conflict during Holiday window.</div>
                    <div>&gt; CORRECTIVE ACTION: Re-baseline Visit 5 assays; audit blood draw aliquots.</div>
                    <div>&gt; PREVENTIVE ACTION: Implement automated SMS notification trigger 48h prior.</div>
                    <div>&gt; REGULATORY CITATION: FDA 21 CFR 312.60 & ICH GCP E6(R3) 4.5</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#2E7D32] flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-4 h-4" /> Ready for CRA E-Signature
                    </span>
                    <button
                      onClick={() => setCapaModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-[#2E7D32] text-white text-xs font-bold hover:bg-[#43A047] transition-colors"
                    >
                      Sign & Approve CAPA
                    </button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
