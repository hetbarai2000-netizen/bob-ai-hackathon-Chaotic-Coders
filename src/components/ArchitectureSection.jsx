import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  ArrowRight, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  ShieldCheck, 
  BarChart, 
  FileSignature, 
  CheckCircle2,
  Server
} from 'lucide-react';

export default function ArchitectureSection() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodes = [
    {
      id: 'patient-data',
      name: 'Patient Data',
      type: 'Source Telemetry',
      icon: Database,
      latency: '<15ms',
      detail: 'Standardized FHIR, CDISC ODM, EDC streams & ambient EHR notes.',
      color: '#2E7D32',
    },
    {
      id: 'data-ingestion',
      name: 'Data Ingestion',
      type: 'Stream Pipeline',
      icon: Server,
      latency: '24ms',
      detail: 'Zero-trust message bus with real-time cryptographic audit hashing.',
      color: '#43A047',
    },
    {
      id: 'rule-engine',
      name: 'Rule Engine',
      type: 'Protocol Matrix',
      icon: Layers,
      latency: '8ms',
      detail: 'Deterministic evaluation of visit windows & Schedule of Activities.',
      color: '#2E7D32',
    },
    {
      id: 'llm',
      name: 'LLM Orchestrator',
      type: 'Clinical Multi-Agent',
      icon: BrainCircuit,
      latency: '110ms',
      detail: 'Fine-tuned Medical LLM extracting nuances from unstructured physician notes.',
      color: '#1B5E20',
    },
    {
      id: 'severity-classifier',
      name: 'Severity Classifier',
      type: 'Regulatory Taxonomy',
      icon: ShieldCheck,
      latency: '14ms',
      detail: 'FDA ICH E6(R3) & 483 risk categorization (Minor / Major / Critical).',
      color: '#E65100',
    },
    {
      id: 'risk-engine',
      name: 'Risk Engine',
      type: 'Site Analytics',
      icon: BarChart,
      latency: '18ms',
      detail: 'Algorithmic site & subject risk vector calculation.',
      color: '#43A047',
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      type: 'Command Center',
      icon: Cpu,
      latency: '<5ms',
      detail: '21 CFR Part 11 compliant real-time monitoring interface.',
      color: '#2E7D32',
    },
    {
      id: 'capa-generator',
      name: 'CAPA Generator',
      type: 'Remediation Loop',
      icon: FileSignature,
      latency: '450ms',
      detail: 'Automated CAPA drafting, root cause analysis & e-signature routing.',
      color: '#43A047',
    },
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>High-Throughput Clinical Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            TrialGuard System Architecture
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            From raw patient telemetry stream to automated FDA-compliant CAPA execution in under 700ms.
          </p>
        </div>

        {/* Animated Architecture Pipeline Layout */}
        <div className="glass-card p-6 sm:p-10 border border-gray-200 shadow-2xl bg-gradient-to-b from-white to-[#F5F7FA]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isHovered = hoveredNode === node.id;

              return (
                <div key={node.id} className="relative">
                  <motion.div
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between ${
                      isHovered
                        ? 'bg-[#E8F5E9] border-[#2E7D32] shadow-xl shadow-[#2E7D32]/10 scale-[1.03]'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <div>
                      {/* Top Node Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-xl bg-[#F5F7FA] flex items-center justify-center border border-gray-200"
                          style={{ color: node.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F7FA] text-gray-500 border border-gray-200">
                          {node.latency}
                        </span>
                      </div>

                      <div className="text-[10px] font-mono text-[#2E7D32] uppercase tracking-wider mb-1">
                        Node 0{index + 1} • {node.type}
                      </div>

                      <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">
                        {node.name}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed">
                        {node.detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[10px] font-mono text-[#2E7D32]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"></span>
                        ACTIVE NODE
                      </span>
                      {index < nodes.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-300 hidden lg:block" />
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom Security & Standards Assurance */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>Zero Data Retraining Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>AES-256 Encrypted Stream (At Rest & In Transit)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>Cryptographic Audit Trail Hashing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
