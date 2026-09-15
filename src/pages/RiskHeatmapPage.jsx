import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SITES } from '../data/mockData';

const RISK_STYLE = {
  High:    { bg: 'bg-red-500/20', border: 'border-red-500/40', text: 'text-red-400', bar: '#EF4444', dot: 'bg-red-500' },
  Medium:  { bg: 'bg-amber-500/15', border: 'border-amber-500/30', text: 'text-amber-400', bar: '#F59E0B', dot: 'bg-amber-400' },
  Low:     { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', bar: '#00B894', dot: 'bg-emerald-400' },
};

function HeatCell({ site, onClick, isSelected }) {
  const r = RISK_STYLE[site.risk];
  const size = Math.max(60, Math.min(120, site.subjects));
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06, zIndex: 10 }}
      onClick={() => onClick(site)}
      className={`relative cursor-pointer rounded-2xl border-2 p-3 flex flex-col items-center justify-center text-center transition-all ${r.bg} ${r.border} ${isSelected ? 'ring-2 ring-white/30' : ''}`}
      style={{ minHeight: `${Math.max(80, size)}px` }}
      title={`${site.name} — ${site.compliance}% compliance`}
    >
      <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${r.text}`}>{site.risk}</div>
      <div className="text-base font-bold font-mono text-white mt-0.5">{site.compliance}%</div>
      <div className="text-[10px] text-slate-400 font-mono">{site.id}</div>
      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse ${r.dot}`} />
    </motion.div>
  );
}

export default function RiskHeatmapPage() {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState(null);
  const [regionFilter, setRegionFilter] = useState('All');

  const regions = ['All', ...new Set(SITES.map((s) => s.region))];
  const filtered = regionFilter === 'All' ? SITES : SITES.filter((s) => s.region === regionFilter);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-heading">Site Risk Heatmap</h1>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Global investigative site risk matrix — click any cell for full site details
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'High Risk Sites', count: SITES.filter((s) => s.risk === 'High').length, color: '#EF4444', icon: AlertTriangle },
          { label: 'Medium Risk Sites', count: SITES.filter((s) => s.risk === 'Medium').length, color: '#F59E0B', icon: Info },
          { label: 'Low Risk / Compliant', count: SITES.filter((s) => s.risk === 'Low').length, color: '#00B894', icon: CheckCircle2 },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`p-4 rounded-2xl border flex items-center gap-3 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}18`, color: s.color }}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.count}</div>
                <div className="text-[10px] text-slate-500 font-mono">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Grid */}
        <div className={`lg:col-span-2 p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-sm font-semibold font-heading ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Global Risk Distribution
            </h3>
            <div className="flex gap-2">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegionFilter(r)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-all ${
                    regionFilter === r
                      ? 'bg-[#0F4C81] text-white border border-[#38BDF8]/30'
                      : isDark ? 'bg-slate-800 text-slate-400 border border-slate-700' : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 mb-4 text-[10px] font-mono">
            {Object.entries(RISK_STYLE).map(([risk, style]) => (
              <div key={risk} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded ${style.dot}`} />
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{risk} Risk</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {filtered.map((site) => (
              <HeatCell
                key={site.id}
                site={site}
                onClick={setSelected}
                isSelected={selected?.id === site.id}
              />
            ))}
          </div>
        </div>

        {/* Site Detail Panel */}
        <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
          <h3 className={`text-sm font-semibold font-heading mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {selected ? 'Site Details' : 'Select a site on the heatmap'}
          </h3>

          {selected ? (() => {
            const r = RISK_STYLE[selected.risk];
            return (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className={`p-4 rounded-xl border ${r.bg} ${r.border}`}>
                  <div className={`text-xs font-mono font-bold uppercase tracking-wider mb-1 ${r.text}`}>
                    {selected.risk} Risk
                  </div>
                  <div className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>{selected.name}</div>
                  <div className="text-xs text-slate-400 font-mono">{selected.city}, {selected.country} · {selected.region}</div>
                </div>

                {/* Compliance Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Compliance Score</span>
                    <span className="font-mono font-bold" style={{ color: r.bar }}>{selected.compliance}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: r.bar }}
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.compliance}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  {[
                    ['Principal Investigator', selected.pi],
                    ['Enrolled Subjects', selected.subjects],
                    ['Last Monitored Visit', selected.lastVisit],
                    ['Site Status', selected.status],
                    ['FDA Compliance', `${selected.compliance}%`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between text-xs">
                      <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                      <span className={`font-mono font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{value}</span>
                    </div>
                  ))}
                </div>

                {/* Mini compliance sparkline */}
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[10px] font-mono text-slate-500 mb-2">30-Day Compliance Trend</div>
                  <svg viewBox="0 0 120 30" className="w-full h-8">
                    <polyline
                      points={Array.from({ length: 8 }, (_, i) => {
                        const x = (i / 7) * 120;
                        const y = 30 - (selected.compliance * 0.25 + Math.sin(i * 1.2) * 3);
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke={r.bar}
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })() : (
            <div className="flex flex-col items-center justify-center h-48 text-slate-600 text-sm text-center">
              <MapPin className="w-10 h-10 mb-3 opacity-30" />
              Click any site cell on the heatmap to view full risk profile and compliance metrics
            </div>
          )}
        </div>
      </div>

      {/* Full Site Table */}
      <div className={`mt-6 rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className={`px-5 py-3 border-b ${isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'}`}>
          <h3 className={`text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            All Sites — Compliance Matrix
          </h3>
        </div>
        <div className="divide-y divide-slate-800/40">
          {SITES.sort((a, b) => a.compliance - b.compliance).map((site) => {
            const r = RISK_STYLE[site.risk];
            return (
              <div
                key={site.id}
                onClick={() => setSelected(site)}
                className={`flex items-center gap-4 px-5 py-3 cursor-pointer transition-colors ${isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}
              >
                <div className={`w-2 h-2 rounded-full ${r.dot}`} />
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-semibold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>{site.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{site.city}, {site.country} · {site.subjects} subjects</div>
                </div>
                <div className="w-24">
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${site.compliance}%`, background: r.bar }} />
                  </div>
                </div>
                <div className="text-xs font-mono font-bold w-12 text-right" style={{ color: r.bar }}>{site.compliance}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
