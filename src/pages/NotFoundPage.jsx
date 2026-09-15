import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Home, AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#071A2F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0F4C81]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#EF4444]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-medical-grid opacity-30" />

      <div className="relative z-10 text-center max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#00B894]/40 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#00B894]" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              TrialGuard<span className="text-[#00B894]">.AI</span>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          {/* 404 Display */}
          <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>

          <div className="text-8xl font-bold font-mono text-slate-800 mb-4 select-none">404</div>

          <h1 className="text-3xl font-bold font-heading text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            The clinical dashboard endpoint you're looking for doesn't exist or you may not have the required access permissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00B894] to-[#38BDF8] text-slate-950 text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-[#00B894]/20"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
          <a
            href="/login"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-all hover:border-slate-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sign In to Dashboard</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-xs font-mono text-slate-600"
        >
          Error Code: 404_ROUTE_NOT_FOUND · FDA 21 CFR Part 11 Access Logged
        </motion.div>
      </div>
    </div>
  );
}
