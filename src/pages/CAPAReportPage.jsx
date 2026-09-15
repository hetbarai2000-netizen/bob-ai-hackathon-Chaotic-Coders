import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Clock, Download,
  X, Hash, Shield, Eye
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CAPAS } from '../data/mockData';

const STATUS_STYLE = {
  Signed:    { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30', icon: CheckCircle2 },
  Filed:     { bg: 'bg-[#38BDF8]/10', text: 'text-[#38BDF8]', border: 'border-[#38BDF8]/30', icon: Shield },
  Draft:     { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30', icon: Clock },
  'In Review': { bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/30', icon: Eye },
};

const SEV_COLOR = { Critical: '#EF4444', Major: '#F59E0B', Minor: '#00B894' };

function CAPAModal({ capa, onClose }) {
  const { isDark } = useTheme();
  const s = STATUS_STYLE[capa.status];
  const StatusIcon = s.icon;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className={`max-w-2xl w-full rounded-2xl border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ${
          isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
        }`}
      >
        {/* Header */}
        <div className={`p-5 border-b flex items-start justify-between ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#38BDF8]">{capa.id}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border inline-flex items-center gap-1 ${s.bg} ${s.text} ${s.border}`}>
                <StatusIcon className="w-2.5 h-2.5" />
                {capa.status}
              </span>
            </div>
            <h2 className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
              CAPA Document Viewer
            </h2>
            <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {capa.devId} · {capa.trial} · {capa.subject}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0F4C81]/40 text-[#38BDF8] border border-[#38BDF8]/30 hover:bg-[#0F4C81]/60 transition-colors flex items-center gap-1.5">
              <Download className="w-3 h-3" />
              Export PDF
            </button>
            <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Document Header Banner */}
          <div className={`p-4 rounded-xl border text-center ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">
              21 CFR Part 11 Compliant CAPA Document
            </div>
            <div className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Corrective & Preventive Action Report
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">
              Document ID: {capa.id} · Created: {capa.created}
            </div>
          </div>

          {/* CAPA Details Grid */}
          <div className={`p-4 rounded-xl border space-y-3 ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Document Metadata</div>
            {[
              ['CAPA ID', capa.id],
              ['Protocol Deviation Reference', capa.devId],
              ['Clinical Trial Protocol', capa.trial],
              ['Subject Identifier', capa.subject],
              ['Investigative Site', capa.site],
              ['Severity Classification', capa.severity],
              ['Regulatory Citation', capa.regCitation],
              ['Status', capa.status],
              ['Document Created', capa.created],
              ['Signed By', capa.signedBy || 'Pending'],
              ['Signed Date', capa.signed || 'Pending E-Signature'],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 gap-2 text-xs">
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                <span className={`font-mono font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{value}</span>
              </div>
            ))}
          </div>

          {/* Root Cause */}
          {[
            { label: 'Section A — Root Cause Analysis', content: capa.rootCause, color: '#EF4444' },
            { label: 'Section B — Corrective Action Plan', content: capa.corrective, color: '#F59E0B' },
            { label: 'Section C — Preventive Action Plan', content: capa.preventive, color: '#00B894' },
          ].map((section) => (
            <div key={section.label} className={`p-4 rounded-xl border-l-4 ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
              style={{ borderLeftColor: section.color }}>
              <div className="text-[10px] font-mono uppercase tracking-wider mb-2" style={{ color: section.color }}>
                {section.label}
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{section.content}</p>
            </div>
          ))}

          {/* Hash / Digital Signature */}
          {capa.hash ? (
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#00B894]/10 border-[#00B894]/30' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-center gap-2 text-[#00B894] text-xs font-mono font-bold mb-2">
                <Hash className="w-3.5 h-3.5" />
                Cryptographic Signature — Audit Integrity Hash
              </div>
              <div className={`text-[10px] font-mono break-all ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{capa.hash}</div>
              <div className="text-[10px] text-[#00B894] mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Tamper-evident hash verified · FDA 21 CFR Part 11.70 compliant
              </div>
            </div>
          ) : (
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-amber-500/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'}`}>
              <div className="text-amber-400 text-xs font-mono font-bold flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Awaiting E-Signature — Hash will be generated upon signing
              </div>
            </div>
          )}
        </div>

        {/* Actions Footer */}
        {capa.status === 'Draft' || capa.status === 'In Review' ? (
          <div className={`p-4 border-t flex gap-3 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#00B894] to-[#38BDF8] text-slate-950 text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <CheckCircle2 className="w-4 h-4" />
              Sign & Approve CAPA
            </button>
            <button onClick={onClose} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
              Close
            </button>
          </div>
        ) : (
          <div className={`p-4 border-t text-center text-xs font-mono text-emerald-400 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <CheckCircle2 className="w-4 h-4 inline mr-1.5" />
            Document {capa.status} · No further action required
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function CAPAReportPage() {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = statusFilter === 'All' ? CAPAS : CAPAS.filter((c) => c.status === statusFilter);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-heading">CAPA Report Viewer</h1>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Corrective & Preventive Action documents — 21 CFR Part 11 audit-ready
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {['Signed', 'Filed', 'In Review', 'Draft'].map((s) => {
          const style = STATUS_STYLE[s];
          const Icon = style.icon;
          return (
            <div key={s} className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <Icon className="w-4 h-4 mb-2" style={{ color: s === 'Signed' || s === 'Filed' ? '#00B894' : s === 'Draft' ? '#F59E0B' : '#A855F7' }} />
              <div className="text-xl font-bold font-mono" style={{ color: s === 'Signed' || s === 'Filed' ? '#00B894' : s === 'Draft' ? '#F59E0B' : '#A855F7' }}>
                {CAPAS.filter((c) => c.status === s).length}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">{s}</div>
            </div>
          );
        })}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {['All', 'Signed', 'Filed', 'In Review', 'Draft'].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              statusFilter === s ? 'bg-[#0F4C81] text-white border border-[#38BDF8]/30' : isDark ? 'bg-slate-900/80 text-slate-400 border border-slate-800' : 'bg-slate-100 text-slate-500 border border-slate-200'
            }`}>
            {s}
          </button>
        ))}
      </div>

      {/* CAPA Table */}
      <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className={`grid grid-cols-7 gap-2 px-5 py-3 text-[10px] font-mono uppercase tracking-wider border-b ${isDark ? 'text-slate-500 border-slate-800 bg-slate-950/40' : 'text-slate-400 border-slate-100 bg-slate-50'}`}>
          <span className="col-span-2">CAPA ID / Deviation</span>
          <span>Site</span>
          <span>Trial</span>
          <span>Severity</span>
          <span>Created</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-800/30">
          {filtered.map((capa, i) => {
            const s = STATUS_STYLE[capa.status];
            const StatusIcon = s.icon;
            return (
              <motion.div
                key={capa.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(capa)}
                className={`grid grid-cols-7 gap-2 px-5 py-3.5 cursor-pointer transition-colors text-xs items-center ${isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}
              >
                <div className="col-span-2">
                  <div className="font-mono font-bold text-[#38BDF8]">{capa.id}</div>
                  <div className={`text-[10px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{capa.devId}</div>
                </div>
                <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{capa.site}</span>
                <span className={`font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{capa.trial}</span>
                <span className="font-mono font-semibold" style={{ color: SEV_COLOR[capa.severity] }}>{capa.severity}</span>
                <span className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{capa.created}</span>
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${s.bg} ${s.text} ${s.border}`}>
                  <StatusIcon className="w-3 h-3" />
                  {capa.status}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CAPAModal capa={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
