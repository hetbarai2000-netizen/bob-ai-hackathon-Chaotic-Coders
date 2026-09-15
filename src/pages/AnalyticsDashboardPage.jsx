import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ANALYTICS } from '../data/mockData';

const { complianceTimeline, deviationsByType, capaResolutionRate } = ANALYTICS;

const TIME_RANGES = ['7D', '30D', '90D', '1Y'];

function SectionHeader({ title, subtitle }) {
  const { isDark } = useTheme();
  return (
    <div className="mb-4">
      <h3 className={`text-sm font-bold font-heading ${isDark ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      <p className={`text-[11px] font-mono mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
    </div>
  );
}

function ComplianceLineChart({ data, range }) {
  const { isDark } = useTheme();
  const W = 400, H = 100;
  const max = 100, min = 85;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((d.value - min) / (max - min)) * H;
    return [x, y];
  });
  const polyline = points.map((p) => p.join(',')).join(' ');

  return (
    <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <SectionHeader title="Protocol Compliance Over Time" subtitle={`Showing last ${range === '7D' ? '7 days' : range === '30D' ? '30 days' : range === '90D' ? '3 months' : '12 months'}`} />
      <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full h-36">
        <defs>
          <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B894" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00B894" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Y-axis grid lines */}
        {[90, 93, 96, 99].map((v) => {
          const y = H - ((v - min) / (max - min)) * H;
          return (
            <g key={v}>
              <line x1={0} y1={y} x2={W} y2={y} stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeWidth="1" />
              <text x={W - 2} y={y - 2} fill="#64748b" fontSize="8" textAnchor="end" fontFamily="monospace">{v}%</text>
            </g>
          );
        })}
        <polygon points={`0,${H} ${polyline} ${W},${H}`} fill="url(#compGrad)" />
        <polyline points={polyline} fill="none" stroke="#00B894" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {points.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="#00B894" stroke={isDark ? '#0f172a' : 'white'} strokeWidth="2" />
            <text x={x} y={H + 16} fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">{data[i].month}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function DeviationBarChart({ data }) {
  const { isDark } = useTheme();
  const maxVal = Math.max(...data.map((d) => d.count));
  const COLORS = ['#38BDF8', '#00B894', '#EF4444', '#F59E0B', '#A855F7', '#EC4899'];

  return (
    <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <SectionHeader title="Deviations by Category" subtitle="Cumulative breakdown for current study period" />
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={d.type}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{d.type}</span>
              <span className="font-mono font-bold" style={{ color: COLORS[i % COLORS.length] }}>{d.count}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: COLORS[i % COLORS.length] }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(d.count / maxVal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.06 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CAPAResolutionChart({ data }) {
  const { isDark } = useTheme();
  const W = 300, H = 100;
  const barW = W / data.length - 8;

  return (
    <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <SectionHeader title="AI vs Manual CAPA Resolution" subtitle="Weekly percentage of AI-automated CAPAs" />
      <svg viewBox={`0 0 ${W} ${H + 24}`} className="w-full h-36">
        {data.map((d, i) => {
          const x = i * (W / data.length) + 4;
          const autoH = (d.auto / 100) * H;
          const manH = (d.manual / 100) * H;
          return (
            <g key={d.week}>
              {/* Auto bar */}
              <motion.rect
                x={x}
                y={H - autoH}
                width={barW * 0.55}
                height={autoH}
                rx={3}
                fill="#00B894"
                fillOpacity={0.85}
                initial={{ height: 0, y: H }}
                whileInView={{ height: autoH, y: H - autoH }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              />
              {/* Manual bar */}
              <motion.rect
                x={x + barW * 0.55 + 2}
                y={H - manH}
                width={barW * 0.45 - 2}
                height={manH}
                rx={3}
                fill="#EF4444"
                fillOpacity={0.7}
                initial={{ height: 0, y: H }}
                whileInView={{ height: manH, y: H - manH }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              />
              <text x={x + barW / 2} y={H + 16} fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">{d.week}</text>
            </g>
          );
        })}
      </svg>
      <div className="flex gap-4 mt-2 text-[10px] font-mono">
        <div className="flex items-center gap-1.5 text-[#00B894]">
          <div className="w-3 h-2 rounded bg-[#00B894]" />AI Automated
        </div>
        <div className="flex items-center gap-1.5 text-red-400">
          <div className="w-3 h-2 rounded bg-red-500" />Manual
        </div>
      </div>
    </div>
  );
}

function DonutChart({ value, label, color }) {
  const { isDark } = useTheme();
  const r = 38;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <div className={`p-5 rounded-2xl border flex flex-col items-center ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeWidth="10" />
          <motion.circle
            cx="50" cy="50" r={r}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${circ}`}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - dash }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold font-mono" style={{ color }}>{value}%</span>
        </div>
      </div>
      <div className={`text-xs font-mono text-center mt-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</div>
    </div>
  );
}

export default function AnalyticsDashboardPage() {
  const { isDark } = useTheme();
  const [timeRange, setTimeRange] = useState('90D');

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold font-heading">Analytics Dashboard</h1>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Performance metrics and trend analysis across all active clinical trials
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Time Range Selector */}
          <div className={`flex p-1 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
            {TIME_RANGES.map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  timeRange === r ? 'bg-[#0F4C81] text-white' : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <button className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'}`}>
            <Download className="w-3.5 h-3.5" />
            Export Report
          </button>
        </div>
      </div>

      {/* Donut Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <DonutChart value={97} label="Protocol Compliance" color="#00B894" />
        <DonutChart value={96} label="CAPA Automation Rate" color="#38BDF8" />
        <DonutChart value={98} label="Inspection Readiness" color="#A855F7" />
        <DonutChart value={89} label="Visit Window Adherence" color="#F59E0B" />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <ComplianceLineChart data={complianceTimeline} range={timeRange} />
        <DeviationBarChart data={deviationsByType} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <CAPAResolutionChart data={capaResolutionRate} />
        </div>
        {/* Summary Table */}
        <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <SectionHeader title="Study Performance Summary" subtitle="Aggregate KPIs for current period" />
          <div className="space-y-3">
            {[
              ['Total Active Sites', '214', '#38BDF8'],
              ['Total Subjects', '4,290', '#38BDF8'],
              ['Avg Compliance Score', '97.4%', '#00B894'],
              ['Open Deviations', '3', '#F59E0B'],
              ['CAPAs Generated', '84', '#00B894'],
              ['Avg CAPA Time', '48 sec', '#00B894'],
              ['FDA Audit Ready', '98.1%', '#A855F7'],
              ['Countries Active', '18', '#38BDF8'],
            ].map(([label, value, color]) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                <span className="font-mono font-bold" style={{ color }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
