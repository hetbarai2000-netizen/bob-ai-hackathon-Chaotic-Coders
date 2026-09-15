import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Building2, 
  Mail, 
  User, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    trialType: 'Phase III Trial',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-medical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Enterprise Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight">
              Request an Enterprise Trial Demonstration
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Schedule a technical walk-through with our Clinical AI Leads. Discover how TrialGuard integrates with your EDC and EHR systems in less than 48 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>FDA 21 CFR Part 11 & Annex 11 Compliance Assured</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <Lock className="w-4 h-4" />
                </div>
                <span>SOC 2 Type II Certified & Business Associate Agreement (BAA)</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Turnkey Connector for Medidata RAVE, Veeva Vault & Epic</span>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs font-mono text-gray-500 space-y-1">
              <div>&gt; ENTERPRISE EMAIL: compliance@trialguard.ai</div>
              <div>&gt; HEADQUARTERS: Boston BioTech Hub • Zurich Regulatory Office</div>
            </div>
          </div>

          {/* Right Column: Demo Form */}
          <div className="lg:col-span-7">
            <motion.div
              className="glass-card p-8 sm:p-10 border border-gray-200 shadow-2xl bg-white relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border-2 border-[#2E7D32] text-[#2E7D32] flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900">
                    Demo Request Received
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you! Our Clinical AI Lead will reach out to confirm your private sandbox demonstration within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', trialType: 'Phase III Trial', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#F5F7FA] text-gray-700 border border-gray-200 hover:text-gray-900 text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                    Request Product Access & Architecture Review
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-600 mb-1.5">
                        FULL NAME *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Sarah Jenkins"
                          className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-600 mb-1.5">
                        WORK EMAIL *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@pharma.com"
                          className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-600 mb-1.5">
                        ORGANIZATION / SPONSOR / CRO *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Global Biotech Corp"
                          className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-gray-600 mb-1.5">
                        TRIAL PHASE / SCOPE
                      </label>
                      <select
                        value={formData.trialType}
                        onChange={(e) => setFormData({ ...formData, trialType: e.target.value })}
                        className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition-colors"
                      >
                        <option value="Phase I Trial">Phase I Safety Trial</option>
                        <option value="Phase II Trial">Phase II Efficacy Study</option>
                        <option value="Phase III Trial">Phase III Global Registration</option>
                        <option value="Post-Market Surveillance">Phase IV / Post-Market</option>
                        <option value="CRO Platform Partnership">CRO Enterprise Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-gray-600 mb-1.5">
                      MESSAGE & SPECIFIC PROTOCOL REQUIREMENTS
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your upcoming study protocol or current EDC integration requirements..."
                        className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#43A047] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-xl shadow-[#2E7D32]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <span>Submit Enterprise Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-gray-400 font-mono">
                    By submitting, you agree to our 21 CFR Part 11 compliant data privacy charter.
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
