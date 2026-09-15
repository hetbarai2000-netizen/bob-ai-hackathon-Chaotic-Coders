import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Activity, 
  FileCheck, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

export default function HeroSection({ onRequestDemo }) {
  // Animated alert stream simulator inside the hero glass dashboard widget
  const [activeAlertIndex, setActiveAlertIndex] = useState(0);
  const alerts = [
    { site: 'Site 104 - Boston Medical', detail: 'Lab Visit Window +2 days over limit', severity: 'Minor', time: 'Just now' },
    { site: 'Site 082 - Zurich Pharma', detail: 'Dosage Cohort B variance detected', severity: 'Moderate', time: '2m ago' },
    { site: 'Site 210 - Tokyo BioLabs', detail: 'eCOA Daily Diary completion 100%', severity: 'Compliant', time: '5m ago' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [alerts.length]);

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-medical-grid">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8F5E9]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#C8E6C9]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTA */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] backdrop-blur-md mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-gray-700">
                Next-Gen GCP & ICH E6(R3) Compliance Engine
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-gray-900 leading-[1.1] mb-6">
              AI That Detects <br className="hidden sm:block" />
              <span className="text-gradient">Clinical Trial Deviations</span> <br />
              <span className="text-[#2E7D32]">Before Regulators Do</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed mb-8">
              Monitor patient visits, protocol adherence, dosage deviations, and GCP compliance in real time using automated multi-agent intelligence and FDA 21 CFR Part 11 compliant audit trails.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onRequestDemo}
                className="group relative overflow-hidden px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#43A047] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-xl shadow-[#2E7D32]/25 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#architecture"
                className="px-7 py-3.5 rounded-xl font-medium text-sm text-gray-700 hover:text-gray-900 bg-white/80 hover:bg-white border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Cpu className="w-4 h-4 text-[#2E7D32]" />
                <span>View Architecture</span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-gray-200 w-full grid grid-cols-3 gap-4 text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span className="text-xs font-medium">21 CFR Part 11</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span className="text-xs font-medium">HIPAA & GDPR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <span className="text-xs font-medium">SOC2 Type II</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glass Dashboard Showcase */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glowing card container */}
            <div className="glass-card p-6 border border-gray-200 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
              
              {/* Header inside glass widget */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#2E7D32] animate-pulse" />
                  <span className="font-heading font-semibold text-sm text-gray-800">
                    TrialGuard Live Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-md border border-[#A5D6A7]/40">
                  REAL-TIME ACTIVE
                </span>
              </div>

              {/* Animated ECG Line */}
              <div className="py-4 border-b border-gray-100 relative">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-gray-500 font-mono flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#2E7D32]" />
                    Site Signal Feed (ECG)
                  </span>
                  <span className="text-xs text-[#2E7D32] font-mono font-medium">99.98 Hz</span>
                </div>
                <div className="w-full h-12 relative overflow-hidden bg-[#F5F7FA] rounded-lg p-1 border border-gray-200">
                  <svg className="w-full h-full" viewBox="0 0 500 50" preserveAspectRatio="none">
                    <path
                      d="M0 25 L80 25 L95 10 L105 40 L115 15 L125 30 L135 25 L240 25 L255 5 L270 45 L285 20 L295 30 L305 25 L500 25"
                      fill="none"
                      stroke="#2E7D32"
                      strokeWidth="2.5"
                      className="animate-ecg"
                    />
                  </svg>
                </div>
              </div>

              {/* Key Metrics Grid inside Widget */}
              <div className="grid grid-cols-2 gap-3 my-4">
                
                {/* Metric 1: Compliance */}
                <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                    <span>Compliance %</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#2E7D32]" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-gray-900">97.4%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2E7D32] to-[#43A047] h-1.5 rounded-full w-[97%]" />
                  </div>
                </div>

                {/* Metric 2: Risk Score */}
                <div className="p-3.5 rounded-xl bg-[#F5F7FA] border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-1">
                    <span>Risk Score</span>
                    <ShieldAlert className="w-3.5 h-3.5 text-[#43A047]" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#2E7D32]">1.2 <span className="text-xs text-gray-400 font-normal">/ 10</span></div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
                    <span className="text-[10px] text-[#2E7D32] font-medium uppercase">LOW RISK LEVEL</span>
                  </div>
                </div>

              </div>

              {/* Animated Protocol Alerts widget */}
              <div className="p-4 rounded-xl bg-[#FFF8E1] border border-[#FFE082] mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    Protocol Alerts Stream
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">Live Ingestion</span>
                </div>

                <div className="min-h-[50px] flex items-center justify-between gap-3 p-2.5 rounded-lg bg-white border border-amber-300/40">
                  <div className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0 animate-ping" />
                    <div>
                      <div className="text-xs font-medium text-gray-800">
                        {alerts[activeAlertIndex].site}
                      </div>
                      <div className="text-[11px] text-gray-500 font-mono">
                        {alerts[activeAlertIndex].detail}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-medium shrink-0 ${
                    alerts[activeAlertIndex].severity === 'Compliant'
                      ? 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]'
                      : 'bg-[#FFF8E1] text-amber-700 border border-amber-300'
                  }`}>
                    {alerts[activeAlertIndex].severity}
                  </span>
                </div>
              </div>

              {/* CAPA Generated Status */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7]">
                <div className="flex items-center gap-2.5">
                  <FileCheck className="w-4 h-4 text-[#2E7D32]" />
                  <span className="text-xs font-medium text-gray-700">Auto CAPA Resolution:</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#2E7D32] bg-[#C8E6C9] px-2 py-0.5 rounded">
                  84 CAPAs Signed (24h)
                </span>
              </div>

            </div>

            {/* Floating floating badge decoration */}
            <div className="absolute -bottom-5 -left-5 glass-card p-3 px-4 border border-[#A5D6A7] shadow-xl hidden sm:flex items-center gap-3 bg-white/95">
              <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Multi-Agent Protocol Engine</div>
                <div className="text-[10px] text-gray-500">Zero human latency</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
