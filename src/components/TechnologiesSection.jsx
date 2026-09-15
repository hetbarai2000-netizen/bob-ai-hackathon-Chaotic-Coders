import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  BrainCircuit, 
  Cloud, 
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export default function TechnologiesSection() {
  const techCategories = [
    {
      category: 'Frontend & UI',
      icon: Code2,
      color: '#2E7D32',
      techs: ['Next.js', 'React 19', 'Tailwind CSS', 'Framer Motion'],
      desc: 'Sub-second real-time responsiveness & 60 FPS clinical rendering.',
    },
    {
      category: 'Backend Architecture',
      icon: Server,
      color: '#43A047',
      techs: ['FastAPI', 'Python 3.12', 'Node.js', 'Async Event Bus'],
      desc: 'High-throughput async clinical data streaming API.',
    },
    {
      category: 'Database & Storage',
      icon: Database,
      color: '#2E7D32',
      techs: ['PostgreSQL', 'Firebase', 'MongoDB', 'Pinecone Vector'],
      desc: 'ACID compliant relational storage + vector embedding index.',
    },
    {
      category: 'AI & Machine Learning',
      icon: BrainCircuit,
      color: '#1B5E20',
      techs: ['OpenAI GPT-4o', 'Clinical LLM', 'Vector DB', 'OCR Ingestion'],
      desc: 'Fine-tuned domain models trained on FDA & ICH GCP guidelines.',
    },
    {
      category: 'Deployment & Infrastructure',
      icon: Cloud,
      color: '#43A047',
      techs: ['Docker', 'Vercel', 'AWS Cloud', 'Kubernetes'],
      desc: 'SOC2 Type II certified multi-region enterprise cloud.',
    },
    {
      category: 'Regulatory Security',
      icon: ShieldCheck,
      color: '#E65100',
      techs: ['21 CFR Part 11', 'HIPAA Shield', 'GDPR Compliant', 'SOC2 Type II'],
      desc: 'Cryptographic audit trails and zero data retention guarantees.',
    },
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden bg-[#F5F7FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Robust Enterprise Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Powered by Cutting-Edge Biotech Infrastructure
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Engineered with modern frameworks, high-performance async processing, and HIPAA/21 CFR Part 11 compliant data pipelines.
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                className="glass-card p-6 border border-gray-200 hover:border-gray-300 transition-all group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#F5F7FA] flex items-center justify-center border border-gray-200 group-hover:scale-105 transition-transform"
                    style={{ color: cat.color }}
                  >
                    <Icon className="w-6 h-6 animate-slow-float" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    MODULE 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">
                  {cat.category}
                </h3>

                <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                  {cat.techs.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F5F7FA] text-gray-700 border border-gray-200 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
