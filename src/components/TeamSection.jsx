import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Code, Cpu, Award } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TeamSection() {
  const team = [
    {
      name: 'Het Barai',
      role: 'Clinical AI Lead',
      bio: 'Pioneering domain-adapted LLM architectures and automated GCP protocol deviation reasoning engines.',
      icon: Cpu,
      badge: 'AI Architecture',
      color: '#2E7D32',
      avatar: 'HB',
    },
    {
      name: 'Vatsal Paghadal',
      role: 'Regulatory & QA Lead',
      bio: 'Expert in FDA 21 CFR Part 11, ICH E6(R3) guidelines, and automated CAPA regulatory taxonomy design.',
      icon: Shield,
      badge: 'Regulatory QA',
      color: '#43A047',
      avatar: 'VP',
    },
    {
      name: 'Vishwa Darji',
      role: 'Full Stack & UX Architect',
      bio: 'Crafting precision enterprise glassmorphism interfaces and high-throughput real-time telemetry visualizers.',
      icon: Code,
      badge: 'Full Stack & UX',
      color: '#1B5E20',
      avatar: 'VD',
    },
    {
      name: 'Hrutvijsinh Jadeja',
      role: 'Backend Architect',
      bio: 'Designing zero-trust microservice data pipelines, FHIR stream ingestion, and cryptographic audit logging.',
      icon: Award,
      badge: 'Distributed Systems',
      color: '#43A047',
      avatar: 'HJ',
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Biotech & AI Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            The Team Behind TrialGuard AI
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Combining clinical research rigor, regulatory compliance expertise, and scalable AI infrastructure.
          </p>
        </div>

        {/* Team Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
                key={member.name}
                className="glass-card glass-card-hover p-6 border border-gray-200 relative overflow-hidden flex flex-col justify-between group cursor-pointer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div>
                  {/* Top Avatar Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] border-2 flex items-center justify-center text-xl font-mono font-bold text-white shadow-lg group-hover:scale-105 transition-transform"
                      style={{ borderColor: member.color }}
                    >
                      {member.avatar}
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#F5F7FA] text-gray-600 border border-gray-200">
                      {member.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-1 group-hover:text-[#2E7D32] transition-colors">
                    {member.name}
                  </h3>

                  <div className="text-xs font-mono font-semibold text-[#2E7D32] mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Card Footer Links */}
                <div className="pt-4 border-t border-gray-200 flex items-center gap-3 text-gray-400">
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-[#F5F7FA] hover:bg-gray-200 hover:text-gray-700 transition-colors"
                    aria-label={`LinkedIn for ${member.name}`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-[#F5F7FA] hover:bg-gray-200 hover:text-gray-700 transition-colors"
                    aria-label={`GitHub for ${member.name}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-lg bg-[#F5F7FA] hover:bg-gray-200 hover:text-gray-700 transition-colors"
                    aria-label={`Email for ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
