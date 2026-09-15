import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, Building, Mail, User } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Clinical Trial Sponsor',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="glass-card max-w-lg w-full p-6 sm:p-8 border border-[#A5D6A7] shadow-2xl bg-white relative overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 rounded-lg bg-[#F5F7FA] border border-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRIALGUARD AI DEMO</span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] border-2 border-[#2E7D32] text-[#2E7D32] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading text-gray-900">
                Demo Booking Confirmed
              </h3>
              <p className="text-xs text-gray-600">
                A calendar invitation with private sandbox access credentials has been dispatched to <span className="text-[#2E7D32] font-mono">{formData.email}</span>.
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#2E7D32] text-white font-bold text-xs hover:bg-[#43A047] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold font-heading text-gray-900">
                  Schedule Private Demo
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Connect with our Clinical AI Leads to evaluate TrialGuard on your active study protocols.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-600 mb-1">YOUR NAME</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alexander Vance"
                    className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-600 mb-1">WORK EMAIL</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a.vance@moderna.com"
                    className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-600 mb-1">ORGANIZATION</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Moderna Therapeutics"
                    className="w-full bg-[#F5F7FA] border border-gray-200 focus:border-[#2E7D32] rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-900 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#1B5E20] to-[#43A047] hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>Confirm Demo Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
