import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, EyeOff, Sparkles, AlertCircle, User, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) return <Navigate to="/app/dashboard" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = login(username, password);
      setLoading(false);
      if (result.success) {
        navigate('/app/dashboard');
      } else {
        setError(result.error);
      }
    }, 900);
  };

  const quickLogin = (role) => {
    setUsername(role);
    setPassword(role === 'admin' ? 'admin123' : 'research123');
  };

  return (
    <div className="min-h-screen bg-[#071A2F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0F4C81]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00B894]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-medical-grid opacity-40" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="inline-flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#00B894]/40 flex items-center justify-center shadow-2xl shadow-[#00B894]/20">
              <ShieldCheck className="w-8 h-8 text-[#00B894]" />
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                TrialGuard<span className="text-[#00B894]">.AI</span>
              </div>
              <div className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-0.5">
                Clinical Trial Intelligence Platform
              </div>
            </div>
          </a>
        </motion.div>

        {/* Login Card */}
        <motion.div
          className="glass-card p-8 border border-slate-700/60 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00B894]/10 border border-[#00B894]/30 text-[#00B894] text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3 h-3" />
              SECURE ACCESS PORTAL
            </div>
            <h1 className="text-2xl font-bold font-heading text-white">Sign In to Dashboard</h1>
            <p className="text-sm text-slate-400 mt-1">Enterprise Clinical Operations Center</p>
          </div>

          {/* Quick Login Pills */}
          <div className="flex gap-2 mb-5">
            <button
              onClick={() => quickLogin('admin')}
              className="flex-1 py-1.5 text-xs font-mono rounded-lg bg-[#0F4C81]/30 border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#0F4C81]/50 transition-all"
            >
              Admin Demo
            </button>
            <button
              onClick={() => quickLogin('researcher')}
              className="flex-1 py-1.5 text-xs font-mono rounded-lg bg-[#00B894]/10 border border-[#00B894]/30 text-[#00B894] hover:bg-[#00B894]/20 transition-all"
            >
              Researcher Demo
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">USERNAME</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin or researcher"
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#00B894] rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">PASSWORD</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-900/80 border border-slate-700 focus:border-[#00B894] rounded-xl pl-10 pr-10 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-[#00B894] to-[#38BDF8] hover:opacity-95 transition-all shadow-lg shadow-[#00B894]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Access Clinical Dashboard</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-500 font-mono">
            FDA 21 CFR Part 11 compliant authentication • SOC 2 Type II
          </div>
        </motion.div>

        <p className="text-center text-xs text-slate-600 mt-4">
          <a href="/" className="hover:text-slate-400 transition-colors">← Back to Landing Page</a>
        </p>
      </div>
    </div>
  );
}
