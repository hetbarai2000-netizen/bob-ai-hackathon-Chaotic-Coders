import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, User, Activity, Clock,
  CheckCircle2, AlertTriangle, X, Heart, Thermometer,
  Droplets
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PATIENTS, SITES } from '../data/mockData';

const STATUS_STYLE = {
  'On Time':  { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'At Risk':  { bg: 'bg-amber-500/15',   text: 'text-amber-400',   border: 'border-amber-500/30' },
  'Overdue':  { bg: 'bg-red-500/15',     text: 'text-red-400',     border: 'border-red-500/30' },
};

function VitalSparkline({ value, max, color }) {
  const pts = Array.from({ length: 8 }, (_, i) =>
    `${(i / 7) * 80},${20 - Math.sin(i * 0.9 + value * 0.1) * 8 - (value / max) * 6}`
  ).join(' ');
  return (
    <svg viewBox="0 0 80 24" className="w-14 h-5">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function PatientDrawer({ patient, onClose }) {
  const { isDark } = useTheme();
  const site = SITES.find((s) => s.id === patient.site);
  const statusStyle = STATUS_STYLE[patient.visitStatus];

  // Fake ECG path
  const ecgPath = 'M0 30 L60 30 L75 10 L85 50 L100 15 L115 35 L130 30 L280 30 L295 5 L310 55 L325 20 L340 35 L360 30 L500 30';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className={`w-full max-w-md flex flex-col border-l overflow-y-auto ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      >
        {/* Header */}
        <div className={`p-5 border-b sticky top-0 z-10 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-[#38BDF8] font-bold">{patient.id}</span>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <h2 className={`text-lg font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Subject Profile
          </h2>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Trial: {patient.trial} · {site?.name}
          </p>
        </div>

        <div className="p-5 space-y-5">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
            {patient.visitStatus === 'On Time' && <CheckCircle2 className="w-3.5 h-3.5" />}
            {patient.visitStatus === 'At Risk' && <AlertTriangle className="w-3.5 h-3.5" />}
            {patient.visitStatus === 'Overdue' && <AlertTriangle className="w-3.5 h-3.5" />}
            Visit Status: {patient.visitStatus}
          </div>

          {/* Demographics */}
          <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Demographics</div>
            {[
              ['Age', `${patient.age} years`],
              ['Gender', patient.gender === 'M' ? 'Male' : 'Female'],
              ['Last Visit', patient.lastVisit],
              ['Next Visit', patient.nextVisit],
              ['Protocol Adherence', `${patient.compliance}%`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-xs">
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{k}</span>
                <span className={`font-mono font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{v}</span>
              </div>
            ))}
          </div>

          {/* Compliance Bar */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Protocol Adherence</span>
              <span className="font-mono font-bold" style={{ color: patient.compliance > 90 ? '#00B894' : patient.compliance > 80 ? '#F59E0B' : '#EF4444' }}>
                {patient.compliance}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${patient.compliance}%`,
                  background: patient.compliance > 90 ? '#00B894' : patient.compliance > 80 ? '#F59E0B' : '#EF4444'
                }}
              />
            </div>
          </div>

          {/* ECG Vital Chart */}
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-[#00B894]" />
              ECG Signal Feed
            </div>
            <svg viewBox="0 0 500 50" className="w-full h-10 overflow-hidden">
              <path d={ecgPath} fill="none" stroke="#00B894" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className="animate-ecg" />
            </svg>
            <div className="text-[10px] text-[#00B894] font-mono mt-1">{patient.vitals.hr} BPM · Normal Sinus Rhythm</div>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Heart Rate', value: `${patient.vitals.hr} bpm`, icon: Heart, color: '#EF4444' },
              { label: 'Blood Pressure', value: patient.vitals.bp, icon: Activity, color: '#38BDF8' },
              { label: 'Temperature', value: `${patient.vitals.temp}°C`, icon: Thermometer, color: '#F59E0B' },
              { label: 'SpO₂', value: `${patient.vitals.spo2}%`, icon: Droplets, color: '#00B894' },
            ].map((vital) => {
              const Icon = vital.icon;
              return (
                <div key={vital.label} className={`p-3 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-slate-500 font-mono">{vital.label}</span>
                    <Icon className="w-3 h-3" style={{ color: vital.color }} />
                  </div>
                  <div className="font-bold font-mono text-sm" style={{ color: vital.color }}>{vital.value}</div>
                  <VitalSparkline value={parseInt(vital.value)} max={200} color={vital.color} />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PatientMonitoringPage() {
  const { isDark } = useTheme();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filtered = PATIENTS.filter((p) => {
    const matchSearch = p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.site.toLowerCase().includes(search.toLowerCase()) ||
      p.trial.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || p.visitStatus === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-heading">Patient Monitoring</h1>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Live visit schedule and protocol adherence for all enrolled subjects
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'On Time', count: PATIENTS.filter((p) => p.visitStatus === 'On Time').length, color: '#00B894' },
          { label: 'At Risk', count: PATIENTS.filter((p) => p.visitStatus === 'At Risk').length, color: '#F59E0B' },
          { label: 'Overdue', count: PATIENTS.filter((p) => p.visitStatus === 'Overdue').length, color: '#EF4444' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl border text-center ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.count}</div>
            <div className="text-xs text-slate-500 font-mono mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className={`flex flex-col sm:flex-row gap-3 mb-5 p-4 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search subject ID, site, trial..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none border transition-colors ${
              isDark
                ? 'bg-slate-950/60 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-[#00B894]'
                : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[#00B894]'
            }`}
          />
        </div>
        <div className="flex gap-2">
          {['All', 'On Time', 'At Risk', 'Overdue'].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                statusFilter === s
                  ? 'bg-[#0F4C81] text-white border border-[#38BDF8]/30'
                  : isDark
                  ? 'bg-slate-950/60 text-slate-400 border border-slate-700 hover:text-white'
                  : 'bg-slate-100 text-slate-500 border border-slate-200 hover:text-slate-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Patient Table */}
      <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className={`grid grid-cols-7 gap-2 px-5 py-3 text-[10px] font-mono uppercase tracking-wider border-b ${
          isDark ? 'text-slate-500 border-slate-800 bg-slate-950/40' : 'text-slate-400 border-slate-100 bg-slate-50'
        }`}>
          <span className="col-span-2">Subject ID</span>
          <span>Trial</span>
          <span>Site</span>
          <span>Next Visit</span>
          <span>Adherence</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-800/50">
          {filtered.map((p, i) => {
            const s = STATUS_STYLE[p.visitStatus];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelectedPatient(p)}
                className={`grid grid-cols-7 gap-2 px-5 py-3.5 cursor-pointer transition-colors text-xs items-center ${
                  isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                }`}
              >
                <div className="col-span-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0F4C81]/40 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-mono font-semibold text-[#38BDF8]">{p.id}</div>
                    <div className="text-slate-500 text-[10px]">{p.age}y · {p.gender === 'M' ? 'Male' : 'Female'}</div>
                  </div>
                </div>
                <span className={`font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{p.trial}</span>
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{p.site}</span>
                <span className={`font-mono flex items-center gap-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <Clock className="w-3 h-3 text-slate-500" />
                  {p.nextVisit}
                </span>
                <div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${p.compliance}%`,
                        background: p.compliance > 90 ? '#00B894' : p.compliance > 80 ? '#F59E0B' : '#EF4444'
                      }}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">{p.compliance}%</div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border inline-flex items-center gap-1 ${s.bg} ${s.text} ${s.border}`}>
                  {p.visitStatus}
                </span>
              </motion.div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">No subjects match your filter.</div>
        )}
      </div>

      {/* Patient Drawer */}
      <AnimatePresence>
        {selectedPatient && (
          <PatientDrawer patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
