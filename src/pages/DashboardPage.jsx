import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, AlertTriangle, MapPin, FileText, TrendingUp,
  Activity, CheckCircle2, Zap, ArrowUpRight, BarChart3, Users
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { ANALYTICS } from '../data/mockData';

const { kpis, recentActivity, complianceTimeline } = ANALYTICS;

function KPICard({ label, value, sub, icon: Icon, color, trend }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      className={`p-5 rounded-2xl border flex flex-col gap-3 ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${color}18`, color }}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div>
        <div className={`text-3xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</div>
        <div className="text-[11px] mt-1 font-mono" style={{ color }}>
          {trend && <TrendingUp className="w-3 h-3 inline mr-1" />}{sub}
        </div>
      </div>
    </motion.div>
  );
}

function MiniLineChart({ data }) {
  const { isDark } = useTheme();
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value)) - 1;
  const W = 220, H = 60;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((d.value - min) / (max - min)) * H;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Compliance Trend (6 Months)</span>
        <span className="text-[#00B894] text-xs font-mono font-bold">↑ {data[data.length - 1].value}%</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-14">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B894" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00B894" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={points} fill="none" stroke="#00B894" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <polygon points={`0,${H} ${points} ${W},${H}`} fill="url(#grad)" />
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * W;
          const y = H - ((d.value - min) / (max - min)) * H;
          return <circle key={i} cx={x} cy={y} r="3" fill="#00B894" />;
        })}
      </svg>
      <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
        {data.map((d) => <span key={d.month}>{d.month}</span>)}
      </div>
    </div>
  );
}

function ActivityFeed({ items }) {
  const { isDark } = useTheme();
  const colors = { deviation: 'text-amber-400', capa: 'text-[#00B894]', critical: 'text-red-400', compliance: 'text-[#38BDF8]' };
  const icons = { deviation: AlertTriangle, capa: FileText, critical: AlertTriangle, compliance: ShieldCheck };

  return (
    <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Recent Activity</span>
        <Activity className="w-4 h-4 text-[#38BDF8]" />
      </div>
      <div className="space-y-3">
        {items.map((item, i) => {
          const Icon = icons[item.type];
          return (
            <div key={i} className={`flex items-start gap-3 text-xs p-2 rounded-lg ${isDark ? 'hover:bg-slate-800/60' : 'hover:bg-slate-50'} transition-colors`}>
              <span className="font-mono text-slate-500 shrink-0 mt-0.5">{item.time}</span>
              <Icon className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${colors[item.type]}`} />
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{item.event}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const { isDark } = useTheme();

  const kpiCards = [
    { label: 'Overall Compliance Score', value: `${kpis.overallCompliance}%`, sub: '+2.1% vs last audit', icon: ShieldCheck, color: '#00B894', trend: true },
    { label: 'Active Clinical Sites', value: kpis.activeSites, sub: `18 Countries • ${kpis.totalSubjects.toLocaleString()} Subjects`, icon: MapPin, color: '#38BDF8', trend: false },
    { label: 'Open Deviations', value: kpis.openDeviations, sub: `${kpis.criticalDeviations} Critical requiring action`, icon: AlertTriangle, color: '#F59E0B', trend: false },
    { label: 'Auto CAPAs This Week', value: kpis.autoCapasThisWeek, sub: 'Avg resolution: 48 seconds', icon: FileText, color: '#00B894', trend: true },
    { label: 'Inspection Readiness', value: `${kpis.inspectionReadiness}%`, sub: 'FDA Audit-Ready Binder', icon: CheckCircle2, color: '#38BDF8', trend: true },
    { label: 'Protocol Compliance', value: '95.0%', sub: 'ICH E6(R3) Adherence Rate', icon: Zap, color: '#A855F7', trend: true },
  ];

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-heading">Command Center</h1>
            <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Welcome back, {user?.name} · {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00B894]/10 border border-[#00B894]/30 text-[#00B894] text-xs font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B894] animate-pulse" />
            LIVE TELEMETRY
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {kpiCards.map((card, i) => (
          <motion.div key={card.label} transition={{ delay: i * 0.05 }}>
            <KPICard {...card} />
          </motion.div>
        ))}
      </div>

      {/* Charts + Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <MiniLineChart data={complianceTimeline} />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed items={recentActivity} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
        <h3 className={`text-sm font-semibold font-heading mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'View Patients', icon: Users, href: '/app/patients', color: '#38BDF8' },
            { label: 'Review Deviations', icon: AlertTriangle, href: '/app/deviations', color: '#F59E0B' },
            { label: 'Risk Heatmap', icon: MapPin, href: '/app/risk', color: '#EF4444' },
            { label: 'Analytics Report', icon: BarChart3, href: '/app/analytics', color: '#00B894' },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                className={`flex items-center gap-2.5 p-3.5 rounded-xl border transition-all group ${
                  isDark
                    ? 'bg-slate-950/50 border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${action.color}15`, color: action.color }}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold flex-1">{action.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
