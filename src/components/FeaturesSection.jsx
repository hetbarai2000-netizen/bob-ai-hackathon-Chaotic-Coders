import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  GitCompare, 
  SearchCode, 
  BarChart3, 
  FileSpreadsheet, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function FeaturesSection({ onSelectFeature }) {
  const features = [
    {
      id: 'real-time-monitoring',
      icon: Activity,
      title: 'Real-Time Site Monitoring',
      description:
        'Continuous streaming ingestion of patient visits, laboratory results, eCOA diaries, and EDC updates across all global trial sites without waiting for site monitor visits.',
      badge: 'Continuous Stream',
    },
    {
      id: 'protocol-comparison',
      icon: GitCompare,
      title: 'Protocol Graph Comparison',
      description:
        'AI engine converts multi-hundred page PDF clinical protocols into structured knowledge graphs, automatically mapping visit windows, lab panels, and dosage escalation matrices.',
      badge: 'Knowledge Graph',
    },
    {
      id: 'deviation-detection',
      icon: SearchCode,
      title: 'Autonomous Deviation Detection',
      description:
        'Instantly flags visit window slippage, uncollected biomarker samples, missing consent updates, or unauthorized dose adjustments before they reach regulatory review.',
      badge: 'Zero-Latency',
    },
    {
      id: 'risk-prioritization',
      icon: BarChart3,
      title: 'Algorithmic Risk Prioritization',
      description:
        'Calculates real-time risk scores for investigators and subjects, prioritizing high-risk site visits so CRAs spend time where subject safety is at risk.',
      badge: 'FDA RBM Matrix',
    },
    {
      id: 'automated-capa',
      icon: FileSpreadsheet,
      title: 'Automated CAPA Generator',
      description:
        'Auto-drafts FDA-compliant Corrective & Preventive Action plans complete with root-cause taxonomy, preventive measures, and digital sign-off routing in 60 seconds.',
      badge: 'Instant Resolution',
    },
    {
      id: 'inspection-ready-reports',
      icon: Award,
      title: 'Inspection-Ready Audit Reports',
      description:
        'Generates 21 CFR Part 11 compliant audit binders, complete with cryptographic hash verification, FDA Form 483 readiness scores, and instant export for regulatory sponsors.',
      badge: '21 CFR Part 11',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-medical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Biotech Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Purpose-Built AI for Clinical Compliance
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Engineered specifically for clinical trial sponsors, CROs, and regulatory compliance teams demanding pharmaceutical-grade precision.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                onClick={onSelectFeature}
                className="glass-card glass-card-hover p-8 relative overflow-hidden flex flex-col justify-between group cursor-pointer border border-gray-200 hover:border-[#43A047]/40"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] border border-[#43A047]/30 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Pill badge */}
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#F5F7FA] text-[#2E7D32] border border-gray-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={onSelectFeature}
                  className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-900 transition-colors w-full cursor-pointer"
                >
                  <span className="font-mono text-[11px]">Request Live Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D32] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
