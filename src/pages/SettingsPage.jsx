import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun, Moon, Bell, Shield, User, Database,
  CheckCircle2, Save, Monitor, Activity
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function SettingsSection({ title, icon: Icon, children }) {
  const { isDark } = useTheme();
  return (
    <motion.div
      className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-lg bg-[#0F4C81]/30 flex items-center justify-center text-[#38BDF8]">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className={`text-sm font-bold font-heading ${isDark ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function ToggleSetting({ label, description, enabled, onChange, isDark }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{label}</div>
        {description && <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{description}</div>}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 transition-all duration-300 ${
          enabled
            ? 'bg-[#00B894] border-[#00B894]'
            : isDark ? 'bg-slate-700 border-slate-700' : 'bg-slate-200 border-slate-200'
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 mt-px rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            enabled ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  // Notification settings
  const [notifDeviations, setNotifDeviations] = useState(true);
  const [notifCapa, setNotifCapa] = useState(true);
  const [notifCompliance, setNotifCompliance] = useState(false);
  const [notifEmail, setNotifEmail] = useState(true);

  // Display settings
  const [denseMode, setDenseMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Security
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [sessionLog, setSessionLog] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const settingSections = [
    {
      category: 'Profile & Role',
      items: [
        { label: 'Full Name', value: user?.name },
        { label: 'Username', value: user?.username || 'admin' },
        { label: 'Role', value: user?.role },
        { label: 'Title', value: user?.title },
        { label: 'Organization', value: user?.org },
      ],
    },
  ];

  return (
    <div className={`p-4 sm:p-6 lg:p-8 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold font-heading">Settings</h1>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage your account preferences and system configuration
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            saved
              ? 'bg-[#00B894]/20 text-[#00B894] border border-[#00B894]/40'
              : 'bg-gradient-to-r from-[#00B894] to-[#38BDF8] text-slate-950 shadow-lg shadow-[#00B894]/20 hover:opacity-90'
          }`}
        >
          {saved ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Saved</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Profile Info */}
        <SettingsSection title="Account Profile" icon={User}>
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-800/60">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#38BDF8]/30 flex items-center justify-center text-lg font-bold font-mono text-[#38BDF8]">
              {user?.avatar}
            </div>
            <div>
              <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{user?.name}</div>
              <div className="text-xs text-slate-500 font-mono capitalize">{user?.role} · {user?.org}</div>
              <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-[#00B894]/10 border border-[#00B894]/30 text-[#00B894] text-[10px] font-mono">
                <span className="w-1 h-1 rounded-full bg-[#00B894]" />
                Active Session
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {settingSections[0].items.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                <span className={`font-mono font-semibold capitalize ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {value || '—'}
                </span>
              </div>
            ))}
          </div>
        </SettingsSection>

        {/* Appearance */}
        <SettingsSection title="Appearance" icon={Monitor}>
          <div className="flex items-center justify-between">
            <div>
              <div className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Color Theme</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Currently: {isDark ? 'Dark Mode' : 'Light Mode'}
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {isDark ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>
          <ToggleSetting
            label="Dense Table Mode"
            description="Compact row height for data-heavy views"
            enabled={denseMode}
            onChange={setDenseMode}
            isDark={isDark}
          />
          <ToggleSetting
            label="UI Animations"
            description="Framer Motion transitions and micro-animations"
            enabled={animationsEnabled}
            onChange={setAnimationsEnabled}
            isDark={isDark}
          />
          <ToggleSetting
            label="Auto-Refresh Dashboard"
            description="Refresh telemetry data every 30 seconds"
            enabled={autoRefresh}
            onChange={setAutoRefresh}
            isDark={isDark}
          />
        </SettingsSection>

        {/* Notification Settings */}
        <SettingsSection title="Notifications" icon={Bell}>
          <ToggleSetting
            label="Protocol Deviation Alerts"
            description="Real-time push alerts for new deviations"
            enabled={notifDeviations}
            onChange={setNotifDeviations}
            isDark={isDark}
          />
          <ToggleSetting
            label="CAPA Status Updates"
            description="Notify when CAPA requires signature or review"
            enabled={notifCapa}
            onChange={setNotifCapa}
            isDark={isDark}
          />
          <ToggleSetting
            label="Compliance Score Drops"
            description="Alert when site compliance falls below threshold"
            enabled={notifCompliance}
            onChange={setNotifCompliance}
            isDark={isDark}
          />
          <ToggleSetting
            label="Email Digest (Daily)"
            description="Morning summary of all protocol activity"
            enabled={notifEmail}
            onChange={setNotifEmail}
            isDark={isDark}
          />
        </SettingsSection>

        {/* Security Settings */}
        <SettingsSection title="Security & Access" icon={Shield}>
          <ToggleSetting
            label="Multi-Factor Authentication"
            description="FDA 21 CFR Part 11 compliant second-factor"
            enabled={mfaEnabled}
            onChange={setMfaEnabled}
            isDark={isDark}
          />
          <ToggleSetting
            label="Session Activity Logging"
            description="Log all actions to tamper-evident audit trail"
            enabled={sessionLog}
            onChange={setSessionLog}
            isDark={isDark}
          />

          <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Compliance Status</div>
            <div className="space-y-1.5">
              {[
                ['FDA 21 CFR Part 11', 'COMPLIANT'],
                ['ICH GCP E6(R3)', 'COMPLIANT'],
                ['SOC 2 Type II', 'CERTIFIED'],
                ['HIPAA BAA', 'EXECUTED'],
              ].map(([label, status]) => (
                <div key={label} className="flex items-center justify-between text-[11px]">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                  <span className="text-[#00B894] font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SettingsSection>

        {/* Data & Integrations */}
        <SettingsSection title="Data & Integrations" icon={Database}>
          <div className="space-y-2">
            {[
              { name: 'Medidata RAVE', status: 'Connected', color: '#00B894' },
              { name: 'Veeva Vault', status: 'Connected', color: '#00B894' },
              { name: 'Epic EHR', status: 'Connected', color: '#00B894' },
              { name: 'Cerner PowerChart', status: 'Disconnected', color: '#EF4444' },
            ].map(({ name, status, color }) => (
              <div
                key={name}
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{name}</div>
                  <div className="text-[10px] font-mono mt-0.5" style={{ color }}>{status}</div>
                </div>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
              </div>
            ))}
          </div>
        </SettingsSection>

        {/* System Info */}
        <SettingsSection title="System Information" icon={Activity}>
          <div className="space-y-2.5">
            {[
              ['Platform Version', 'TrialGuard v3.4.1'],
              ['AI Engine', 'ClinicalLLM-7B (Fine-tuned)'],
              ['Protocol Schema', 'ICH E6(R3) · 2026 Edition'],
              ['Last Sync', '2026-09-15 11:42 UTC'],
              ['Audit Log Entries', '14,892 (This Session)'],
              ['Blockchain Hash', '0x91f3...e7c2'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span>
                <span className={`font-mono text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{value}</span>
              </div>
            ))}
          </div>
        </SettingsSection>

      </div>
    </div>
  );
}
