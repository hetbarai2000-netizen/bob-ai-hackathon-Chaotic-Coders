import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Sparkles, X, CheckCircle2, ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { DEVIATIONS } from '../data/mockData';

const SEV_STYLE = {
  Critical: { bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/30', bar: 'bg-red-500' },
  Major:    { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30', bar: 'bg-amber-400' },
  Minor:    { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30', bar: 'bg-emerald-500' },
};
const STATUS_STYLE = {
  Open:       { text: 'text-red-400' },
  'In Review': { text: 'text-amber-400' },
  Resolved:   { text: 'text-emerald-400' },
};

const AI_STREAM_LINES = [
  '> Ingesting deviation record into NLP pipeline...',
  '> Tokenizing clinical protocol context (ICH E6 R3)...',
  '> Entity extraction: [SITE] [PATIENT_ID] [VISIT_WINDOW] [DEVIATION_TYPE]',
  '> Cross-referencing FDA 21 CFR taxonomy database...',
  '> Root-cause graph traversal complete (depth=4)...',
  '> Generating corrective action recommendations...',
  '> Validating against regulatory citation library...',
  '> Drafting FDA-compliant CAPA document...',
  '✓ CAPA draft ready for CRA e-signature review.',
];

function AISimulation({ deviation, onClose }) {
  const { isDark } = useTheme();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState([]);

  React.useEffect(() => {
    if (step < AI_STREAM_LINES.length) {
      const t = setTimeout(() => {
        setLines((l) => [...l, AI_STREAM_LINES[step]]);
        setStep((s) => s + 1);
      }, 320);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setDone(true), 400);
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`max-w-xl w-full rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? 'bg-slate-900 border-[#00B894]/40' : 'bg-white border-slate-200'
        }`}
      >
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00B894] font-bold">
            <Sparkles className="w-4 h-4" />
            AI CAPA GENERATOR v3.4
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Generating CAPA: {deviation.id}
            </h3>
            <div className={`text-xs font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {deviation.site} → {deviation.trial} → {deviation.patient}
            </div>
          </div>

          {/* Terminal stream */}
          <div className={`p-4 rounded-xl font-mono text-xs space-y-1.5 min-h-[180px] ${isDark ? 'bg-slate-950 border border-slate-800' : 'bg-slate-50 border border-slate-200'}`}>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={line.startsWith('✓') ? 'text-[#00B894] font-bold' : isDark ? 'text-slate-300' : 'text-slate-600'}
              >
                {line}
              </motion.div>
            ))}
            {!done && <span className="inline-block w-2 h-3 bg-[#00B894] animate-pulse" />}
          </div>

          {/* Result card */}
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`space-y-3 p-4 rounded-xl border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
              >
                {[
                  ['Root Cause', deviation.rootCause],
                  ['Corrective Action', deviation.corrective],
                  ['Preventive Action', deviation.preventive],
                  ['Regulatory Citation', deviation.citation],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">{label}</div>
                    <div className={`text-xs ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{value}</div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#00B894] flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    Ready for CRA E-Signature
                  </span>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-[#00B894] text-slate-950 text-xs font-bold hover:bg-[#38BDF8] transition-colors"
                  >
                    Sign & Approve
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default function DeviationDetectionPage() {
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  const [sevFilter, setSevFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [aiTarget, setAiTarget] = useState(null);

  const filtered = DEVIATIONS.filter((d) => {
    const s = sevFilter === 'All' || d.severity === sevFilter;
    const st = statusFilter === 'All' || d.status === statusFilter;
    const q = search === '' || d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.deviation.toLowerCase().includes(search.toLowerCase()) ||
      d.siteName.toLowerCase().includes(search.toLowerCase());
    return s && st && q;
  });

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-heading">AI Deviation Detection</h1>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Real-time protocol deviation ingestion with automated severity classification
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: 'Total Deviations', value: DEVIATIONS.length, color: '#38BDF8' },
          { label: 'Critical', value: DEVIATIONS.filter((d) => d.severity === 'Critical').length, color: '#EF4444' },
          { label: 'Major', value: DEVIATIONS.filter((d) => d.severity === 'Major').length, color: '#F59E0B' },
          { label: 'Resolved', value: DEVIATIONS.filter((d) => d.status === 'Resolved').length, color: '#00B894' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row gap-3 mb-5 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search deviation ID, site, description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none border transition-colors ${
              isDark ? 'bg-slate-950/60 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-[#00B894]' : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-[#00B894]'
            }`}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['All', 'Critical', 'Major', 'Minor'].map((s) => (
            <button key={s} onClick={() => setSevFilter(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${sevFilter === s ? 'bg-[#0F4C81] text-white border border-[#38BDF8]/30' : isDark ? 'bg-slate-950/60 text-slate-400 border border-slate-700' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
              {s}
            </button>
          ))}
          <div className={`w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
          {['All', 'Open', 'In Review', 'Resolved'].map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${statusFilter === s ? 'bg-[#0F4C81] text-white border border-[#38BDF8]/30' : isDark ? 'bg-slate-950/60 text-slate-400 border border-slate-700' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Deviation Cards */}
      <div className="space-y-3">
        {filtered.map((dev, i) => {
          const sev = SEV_STYLE[dev.severity];
          const status = STATUS_STYLE[dev.status];
          const isExpanded = expanded === dev.id;
          return (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div
                className="p-4 flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer"
                onClick={() => setExpanded(isExpanded ? null : dev.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono font-bold text-[#38BDF8]">{dev.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold border ${sev.bg} ${sev.text} ${sev.border}`}>{dev.severity}</span>
                    <span className={`text-[10px] font-mono font-semibold ${status.text}`}>{dev.status}</span>
                  </div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{dev.deviation}</p>
                  <div className={`text-[11px] font-mono mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {dev.siteName} · {dev.trial} · {dev.patient} · {dev.date}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 font-mono">Risk Score</div>
                    <div className="text-lg font-bold font-mono" style={{ color: dev.riskScore > 7 ? '#EF4444' : dev.riskScore > 4 ? '#F59E0B' : '#00B894' }}>
                      {dev.riskScore}
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setAiTarget(dev); }}
                    className="px-3 py-1.5 rounded-xl bg-[#00B894]/15 hover:bg-[#00B894] text-[#00B894] hover:text-slate-950 border border-[#00B894]/40 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Run AI CAPA
                  </button>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`border-t px-4 py-4 space-y-3 ${isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'}`}
                  >
                    {[
                      ['Root Cause', dev.rootCause],
                      ['Corrective Action', dev.corrective],
                      ['Preventive Action', dev.preventive],
                      ['Regulatory Citation', dev.citation],
                      ['Assigned To', dev.assignee],
                    ].map(([label, value]) => (
                      <div key={label} className="grid grid-cols-3 gap-2 text-xs">
                        <span className="text-slate-500 font-mono">{label}</span>
                        <span className={`col-span-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{value}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* AI Simulation Modal */}
      <AnimatePresence>
        {aiTarget && <AISimulation deviation={aiTarget} onClose={() => setAiTarget(null)} />}
      </AnimatePresence>
    </div>
  );
}
