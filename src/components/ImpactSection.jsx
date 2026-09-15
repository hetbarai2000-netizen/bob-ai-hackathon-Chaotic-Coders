import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

function Counter({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}{suffix}
    </span>
  );
}

export default function ImpactSection() {
  const stats = [
    {
      value: 200,
      suffix: '+',
      title: 'Clinical Sites',
      subtitle: 'Monitored Globally',
      description: 'Continuous real-time ingestion across US, EU, and APAC investigative sites.',
      icon: Award,
      color: '#2E7D32',
    },
    {
      value: 95,
      suffix: '%',
      title: 'Protocol Compliance',
      subtitle: 'Average Retention Rate',
      description: 'Maintained zero critical deviation findings during unannounced FDA inspections.',
      icon: ShieldCheck,
      color: '#43A047',
    },
    {
      value: 60,
      suffix: '%',
      title: 'Faster Audit Readiness',
      subtitle: 'Instant Inspection Prep',
      description: '21 CFR Part 11 compliant audit binders generated in minutes instead of weeks.',
      icon: Clock,
      color: '#2E7D32',
    },
    {
      value: 80,
      suffix: '%',
      title: 'Reduction in Manual Review',
      subtitle: 'CRA Site Overhead Saved',
      description: 'Allows Clinical Research Associates to focus on critical subject safety.',
      icon: TrendingUp,
      color: '#43A047',
    },
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-medical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Validated Regulatory Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Proven Impact for Clinical Trial Sponsors & CROs
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Empirical data from deployment across Phase I-III clinical trials worldwide.
          </p>
        </div>

        {/* 4 Animated Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="glass-card glass-card-hover p-8 relative overflow-hidden border border-gray-200 text-center flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] mx-auto flex items-center justify-center mb-5 border border-gray-200" style={{ color: item.color }}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-bold font-mono text-gray-900 tracking-tight mb-2">
                    <Counter end={item.value} suffix={item.suffix} />
                  </div>

                  <h3 className="text-base font-bold font-heading text-gray-800 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-[#2E7D32] uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote validation card */}
        <div className="mt-16 glass-card p-8 border border-gray-200 bg-gradient-to-r from-[#F5F7FA] via-white to-[#F5F7FA] text-center max-w-4xl mx-auto">
          <blockquote className="text-gray-700 text-lg font-medium italic mb-4">
            "TrialGuard AI transformed our Phase III trial monitoring. We caught a systematic lab window drift across 4 sites 3 months before our FDA interim audit."
          </blockquote>
          <div className="text-xs font-mono text-[#2E7D32]">
            — Vice President of Clinical Operations, Top 10 Global Pharmaceutical Sponsor
          </div>
        </div>

      </div>
    </section>
  );
}
