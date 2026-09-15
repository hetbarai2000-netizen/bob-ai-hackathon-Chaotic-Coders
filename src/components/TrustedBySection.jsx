import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const partners = [
  { name: 'Medidata RAVE', abbr: 'RAVE', category: 'EDC Platform' },
  { name: 'Veeva Vault', abbr: 'VEEVA', category: 'Trial Management' },
  { name: 'Epic EHR', abbr: 'EPIC', category: 'EHR Integration' },
  { name: 'OpenAI GPT-4o', abbr: 'GPT-4o', category: 'AI Engine' },
  { name: 'AWS GovCloud', abbr: 'AWS', category: 'Infrastructure' },
  { name: 'IBM watsonx', abbr: 'IBM', category: 'Enterprise AI' },
];

const certifications = [
  { label: 'FDA 21 CFR Part 11', color: '#2E7D32' },
  { label: 'ICH GCP E6(R3)', color: '#43A047' },
  { label: 'HIPAA BAA', color: '#2E7D32' },
  { label: 'SOC 2 Type II', color: '#43A047' },
  { label: 'GDPR Annex 11', color: '#2E7D32' },
];

export default function TrustedBySection() {
  return (
    <section className="py-14 relative overflow-hidden border-t border-b border-gray-200 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            Integrated With & Validated Against Industry Leaders
          </p>
        </div>

        {/* Partner Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {partners.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] border border-[#43A047]/30 flex items-center justify-center text-[10px] font-mono font-bold text-white">
                {p.abbr.slice(0, 3)}
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{p.name}</div>
                <div className="text-[10px] font-mono text-gray-400">{p.category}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Certifications Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-mono font-semibold"
              style={{ color: cert.color, borderColor: `${cert.color}30` }}
            >
              <ShieldCheck className="w-3 h-3" />
              {cert.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
