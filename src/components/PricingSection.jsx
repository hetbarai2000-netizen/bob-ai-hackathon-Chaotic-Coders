import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Crown,
  ArrowRight,
  X
} from 'lucide-react';

const plans = [
  {
    id: 'pilot',
    name: 'Pilot',
    badge: 'For CROs',
    icon: Zap,
    price: 'Custom',
    priceNote: 'Per site / month',
    description: 'Validate TrialGuard on a single active study. Includes proof-of-value reports for stakeholder buy-in.',
    color: '#43A047',
    highlight: false,
    cta: 'Request Pilot',
    features: [
      { text: 'Up to 3 Clinical Sites', included: true },
      { text: 'Real-Time Deviation Detection', included: true },
      { text: 'Automated CAPA Draft Generation', included: true },
      { text: 'FDA 21 CFR Part 11 Audit Trails', included: true },
      { text: 'ICH E6(R3) Protocol Comparison', included: true },
      { text: 'Multi-Study / Portfolio Monitoring', included: false },
      { text: 'Dedicated CRA Success Manager', included: false },
      { text: 'On-Premise / Private Cloud Deploy', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Most Popular',
    icon: Crown,
    price: 'Custom',
    priceNote: 'Per study / site',
    description: 'Full-scale deployment for Phase II-III multi-site global trials. White-glove onboarding and EDC integration.',
    color: '#2E7D32',
    highlight: true,
    cta: 'Request Enterprise Demo',
    features: [
      { text: 'Unlimited Clinical Sites', included: true },
      { text: 'Real-Time Deviation Detection', included: true },
      { text: 'Automated CAPA Draft Generation', included: true },
      { text: 'FDA 21 CFR Part 11 Audit Trails', included: true },
      { text: 'ICH E6(R3) Protocol Comparison', included: true },
      { text: 'Multi-Study / Portfolio Monitoring', included: true },
      { text: 'Dedicated CRA Success Manager', included: true },
      { text: 'On-Premise / Private Cloud Deploy', included: false },
    ],
  },
  {
    id: 'sovereign',
    name: 'Sovereign',
    badge: 'For Big Pharma',
    icon: ShieldCheck,
    price: 'Custom',
    priceNote: 'Full portfolio pricing',
    description: 'Air-gapped, on-premise or private cloud installation for regulatory-sensitive Phase I/II programs.',
    color: '#1B5E20',
    highlight: false,
    cta: 'Contact Sales',
    features: [
      { text: 'Unlimited Clinical Sites', included: true },
      { text: 'Real-Time Deviation Detection', included: true },
      { text: 'Automated CAPA Draft Generation', included: true },
      { text: 'FDA 21 CFR Part 11 Audit Trails', included: true },
      { text: 'ICH E6(R3) Protocol Comparison', included: true },
      { text: 'Multi-Study / Portfolio Monitoring', included: true },
      { text: 'Dedicated CRA Success Manager', included: true },
      { text: 'On-Premise / Private Cloud Deploy', included: true },
    ],
  },
];

export default function PricingSection({ onRequestDemo }) {
  const [hoveredPlan, setHoveredPlan] = useState('enterprise');

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#F5F7FA] border-t border-gray-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E8F5E9]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Flexible Plans for Every<br />
            <span className="text-gradient">Clinical Trial Scale</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            All pricing is custom-quoted to match your site count, study phase, and regulatory jurisdiction. No hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === plan.id;
            const isHighlight = plan.highlight;

            return (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan('enterprise')}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 overflow-hidden ${
                  isHighlight
                    ? 'border-[#2E7D32] bg-gradient-to-b from-[#E8F5E9] to-white shadow-2xl shadow-[#2E7D32]/10 scale-[1.02]'
                    : isHovered
                    ? 'border-gray-300 bg-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {isHighlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2E7D32] to-transparent" />
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
                        style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-gray-900 text-lg">{plan.name}</h3>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isHighlight
                          ? 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]'
                          : 'bg-gray-100 text-gray-500 border border-gray-200'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <div className="mb-5 pb-5 border-b border-gray-200">
                    <div className="text-3xl font-bold font-mono text-gray-900 mb-0.5">{plan.price}</div>
                    <div className="text-xs text-gray-500 font-mono">{plan.priceNote}</div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{plan.description}</p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat.text} className="flex items-start gap-2.5 text-xs">
                        {feat.included ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.color }} />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? 'text-gray-700' : 'text-gray-400'}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onRequestDemo}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      isHighlight
                        ? 'bg-gradient-to-r from-[#1B5E20] to-[#43A047] text-white hover:opacity-90 shadow-lg shadow-[#2E7D32]/25'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs font-mono text-gray-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />No up-front hardware costs</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />48-hour onboarding SLA</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />BAA + DPA Executed at Signing</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />SOC 2 Type II Certified</span>
        </div>

      </div>
    </section>
  );
}
