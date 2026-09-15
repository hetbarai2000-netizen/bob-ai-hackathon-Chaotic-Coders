import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Binary, 
  Scale, 
  FileCheck2, 
  ShieldAlert, 
  Zap,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(2); // default step 3 selected

  const steps = [
    {
      step: 1,
      name: 'Patient Visit',
      icon: UserCheck,
      desc: 'Subject encounters site visit, laboratory assays, & eCOA inputs.',
      detailTitle: 'Automated Telemetry Capture',
      detailBody:
        'Continuous zero-friction extraction from EHR (Epic, Cerner), EDC (Medidata, Veeva), and patient wearables. Ingests raw unstructured doctor notes, lab PDFs, and vital sign streams.',
      tags: ['FHIR API', 'CDISC ODM', 'OCR Ingestion'],
    },
    {
      step: 2,
      name: 'AI Ingestion',
      icon: Binary,
      desc: 'Multimodal Parsing engine standardizes unstructured clinical notes.',
      detailTitle: 'Domain-Trained NLP Normalization',
      detailBody:
        'Advanced clinical LLM parses dosage acronyms, lab ranges, visit timestamp logs, and biomarker values into structured digital trial graphs.',
      tags: ['LLM Ingestion', 'Biomedical Named Entity Recognition', '21 CFR Part 11 Audit'],
    },
    {
      step: 3,
      name: 'Protocol Comparison',
      icon: Scale,
      desc: 'Continuous real-time alignment with FDA-submitted Schedule of Activities.',
      detailTitle: 'Dynamic Protocol Graph Evaluation',
      detailBody:
        'Evaluates actual patient visit timelines against approved trial protocols. Detects window slippage (e.g. Visit 4 delayed by 72h) and inclusion/exclusion boundary breaches.',
      tags: ['Protocol Graph DB', 'Window Matrix', 'Zero-Latency Engine'],
    },
    {
      step: 4,
      name: 'GCP Classification',
      icon: FileCheck2,
      desc: 'Categorizes deviations according to FDA ICH E6(R3) guidelines.',
      detailTitle: 'Regulatory Impact Taxonomy',
      detailBody:
        'Classifies identified variances automatically into Minor, Major, or Critical GCP non-compliance tiers with full citation of FDA & EMA regulations.',
      tags: ['ICH-GCP E6(R3)', 'FDA 483 Risk Taxonomy', 'Audit Trail'],
    },
    {
      step: 5,
      name: 'Risk Scoring',
      icon: ShieldAlert,
      desc: 'Algorithmic calculation of trial site risk impact score.',
      detailTitle: 'Predictive Site Risk Index',
      detailBody:
        'Calculates real-time risk scores for individual investigators, subjects, and study sites. Alerts Clinical Research Associates (CRAs) before trial endpoints are corrupted.',
      tags: ['Risk-Based Monitoring (RBM)', 'Predictive Heatmaps', 'Site Vectoring'],
    },
    {
      step: 6,
      name: 'CAPA Generation',
      icon: Zap,
      desc: 'Automated Corrective & Preventive Action plan drafting and sign-off.',
      detailTitle: 'Instant Regulatory Remediation',
      detailBody:
        'Generates FDA-compliant CAPA documentation with root cause analysis, preventive recommendations, and digital signature workflows in under 60 seconds.',
      tags: ['Auto CAPA Draft', 'E-Sign 21 CFR Part 11', 'Closed-Loop Remediation'],
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Compliance Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Continuous Real-Time Protocol Compliance Workflow
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            TrialGuard replaces reactive monthly site audits with an end-to-end, automated AI compliance loop that operates continuously across all study locations.
          </p>
        </div>

        {/* Horizontal Workflow Step Pipeline */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeStep === idx;

              return (
                <div key={item.step} className="relative group">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between h-full cursor-pointer ${
                      isSelected
                        ? 'bg-[#E8F5E9] border-[#2E7D32] shadow-lg shadow-[#2E7D32]/10 scale-[1.02]'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      {/* Step Number & Glowing status dot */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                          isSelected ? 'bg-[#2E7D32] text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          0{item.step}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-ping" />
                        )}
                      </div>

                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                        isSelected ? 'bg-[#C8E6C9] text-[#1B5E20]' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className={`font-heading font-bold text-sm mb-1 ${
                        isSelected ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {item.name}
                      </h3>

                      <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-gray-200 flex items-center text-[10px] text-[#2E7D32] font-mono">
                      <span>Explore Step</span>
                      <ChevronRight className={`w-3 h-3 ml-auto transition-transform ${isSelected ? 'translate-x-1 text-[#1B5E20]' : ''}`} />
                    </div>
                  </button>
                </div>
              );
            })}

          </div>
        </div>

        {/* Selected Step Expanded Details Glass Box */}
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 sm:p-8 border border-[#A5D6A7] shadow-2xl bg-gradient-to-r from-[#F1F8E9] via-white to-[#F1F8E9] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded bg-[#E8F5E9] text-[#2E7D32] text-xs font-mono font-bold">
                  STAGE 0{steps[activeStep].step} PIPELINE
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" /> Real-time Execution
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
                {steps[activeStep].detailTitle}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                {steps[activeStep].detailBody}
              </p>

              <div className="flex flex-wrap gap-2">
                {steps[activeStep].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#F5F7FA] text-[#2E7D32] border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#1B5E20] p-5 rounded-xl border border-[#2E7D32] text-white">
              <div className="text-xs font-mono text-green-200 uppercase tracking-wider mb-2">
                System Telemetry output
              </div>
              <div className="font-mono text-xs text-green-300 space-y-1.5 bg-[#0D3B14] p-3 rounded-lg border border-[#2E7D32]">
                <div>&gt; INGEST: Patient #4029 Site 04</div>
                <div>&gt; STATUS: {steps[activeStep].name.toUpperCase()}</div>
                <div>&gt; LATENCY: 42ms</div>
                <div>&gt; VERDICT: 0 Critical Alerts</div>
                <div className="text-green-200">&gt; AUDIT_HASH: 0x9f8b...e12a</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
