import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  ClockAlert, 
  GitBranch, 
  UserX, 
  AlertCircle, 
  ArrowUpRight 
} from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      id: 'paper-logs',
      icon: FileSpreadsheet,
      title: 'Paper Logs & Disconnected EDC',
      subtitle: 'Manual Transcription & Data Silos',
      description:
        'Sponsors and CROs rely on manual site monitoring visits weeks after patient visits occur. Fragmented EHRs, paper source logs, and unvalidated spreadsheets introduce high transcription error rates.',
      stat: '34%',
      statLabel: 'Data Error Rate in Manual Logs',
      color: '#2E7D32',
    },
    {
      id: 'delayed-audits',
      icon: ClockAlert,
      title: 'Delayed Audits & Inspection Prep',
      subtitle: 'Post-hoc Crisis Remediation',
      description:
        'Protocol non-compliance is typically identified during high-stakes FDA pre-approval inspections (PAI), resulting in costly Form 483 warning letters and delayed drug launch dates.',
      stat: '$1.4M',
      statLabel: 'Avg Delay Cost Per Month',
      color: '#E65100',
    },
    {
      id: 'protocol-drift',
      icon: GitBranch,
      title: 'Protocol Drift & Window Slippage',
      subtitle: 'Unnoticed Schedule Deviations',
      description:
        'Slight variances in lab visit windows, unaligned blood specimen draws, or improper dose adjustments drift unmonitored across dozens of global investigative sites.',
      stat: '68%',
      statLabel: 'Trials Experience Unmonitored Drift',
      color: '#C62828',
    },
    {
      id: 'patient-risk',
      icon: UserX,
      title: 'Patient Risk & Unchecked Safety Signals',
      subtitle: 'Safety Reporting Bottlenecks',
      description:
        'Adverse Event (AE) signals and dosage toxicity markers hidden in unstructured clinical notes are missed until aggregate safety reports are compiled months later.',
      stat: '4.2x',
      statLabel: 'Increased Risk to Subject Safety',
      color: '#B71C1C',
    },
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-[#F5F7FA]">
      {/* Faint molecular structure SVG graphic overlay background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-dots-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The $2.6B Clinical Trial Failure Mode</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Why Traditional Clinical Trials Fail
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Legacy manual monitoring methods cannot scale with complex modern precision medicine protocols, resulting in regulatory rejection and uncollected endpoints.
          </p>
        </div>

        {/* Four Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="glass-card glass-card-hover p-8 relative overflow-hidden group cursor-pointer border border-gray-200 hover:border-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Subtle top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex items-start justify-between mb-6">
                  {/* Icon with soft hover float animation */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-[#F5F7FA] border border-gray-200 flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Stat badge */}
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono text-gray-900 group-hover:text-[#2E7D32] transition-colors">
                      {item.stat}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                <div className="mb-2 text-xs font-mono font-medium tracking-wider uppercase" style={{ color: item.color }}>
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center gap-2 group-hover:text-gray-800">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-gray-400" />
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
