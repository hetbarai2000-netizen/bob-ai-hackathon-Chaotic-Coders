import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, AlertTriangle, MapPin, FileText, BarChart3,
  ShieldCheck, LogOut, Sun, Moon, Menu, X, ChevronRight, Bell, Settings
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { to: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'researcher'] },
  { to: '/app/patients', icon: Users, label: 'Patient Monitoring', roles: ['admin', 'researcher'] },
  { to: '/app/deviations', icon: AlertTriangle, label: 'AI Deviation Detection', roles: ['admin', 'researcher'] },
  { to: '/app/risk', icon: MapPin, label: 'Site Risk Heatmap', roles: ['admin', 'researcher'] },
  { to: '/app/capa', icon: FileText, label: 'CAPA Reports', roles: ['admin'] },
  { to: '/app/analytics', icon: BarChart3, label: 'Analytics', roles: ['admin', 'researcher'] },
  { to: '/app/settings', icon: Settings, label: 'Settings', roles: ['admin', 'researcher'] },
];

function SidebarContent({ sidebarOpen, visibleNav, user, onLogout, onLinkClick }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 pb-5 border-b border-slate-800">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#00B894]/40 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-[#00B894]" />
          </div>
          {sidebarOpen && (
            <span className="font-heading font-bold text-base text-white">
              TrialGuard<span className="text-[#00B894]">.AI</span>
            </span>
          )}
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {visibleNav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-[#0F4C81]/60 text-white border border-[#38BDF8]/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
              {sidebarOpen && (
                <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User footer */}
      <div className="p-3 border-t border-slate-800">
        <div className={`flex items-center gap-3 p-2 rounded-xl ${sidebarOpen ? '' : 'justify-center'}`}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#38BDF8]/30 flex items-center justify-center text-xs font-bold font-mono text-[#38BDF8] shrink-0">
            {user?.avatar}
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">{user?.name}</div>
              <div className="text-[10px] text-slate-500 font-mono capitalize">{user?.role}</div>
            </div>
          )}
        </div>
        <button
          onClick={onLogout}
          className={`mt-2 flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all w-full ${
            sidebarOpen ? '' : 'justify-center'
          }`}
        >
          <LogOut className="w-3.5 h-3.5 shrink-0" />
          {sidebarOpen && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );
}

export default function AppShell() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleNav = NAV_ITEMS.filter((n) => n.roles.includes(user?.role));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'bg-[#071A2F]' : 'bg-slate-100'}`}>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col border-r transition-all duration-300 shrink-0 ${
          isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-white border-slate-200'
        } ${sidebarOpen ? 'w-56' : 'w-16'}`}
      >
        <SidebarContent
          sidebarOpen={sidebarOpen}
          visibleNav={visibleNav}
          user={user}
          onLogout={handleLogout}
          onLinkClick={null}
        />
      </aside>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className={`fixed left-0 top-0 bottom-0 w-64 z-50 lg:hidden flex flex-col border-r ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <SidebarContent
                sidebarOpen={true}
                visibleNav={visibleNav}
                user={user}
                onLogout={handleLogout}
                onLinkClick={() => setMobileOpen(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b shrink-0 ${
          isDark ? 'bg-slate-950/80 border-slate-800 backdrop-blur-md' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
            {/* Desktop sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Live indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00B894]/10 border border-[#00B894]/30 text-[#00B894] text-[10px] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B894] animate-pulse" />
              LIVE TELEMETRY
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Notifications */}
            <button className={`p-2 rounded-lg relative transition-colors ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}>
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
            </button>

            {/* User avatar */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#071A2F] border border-[#38BDF8]/30 flex items-center justify-center text-xs font-bold font-mono text-[#38BDF8]">
                {user?.avatar}
              </div>
              <div className="hidden sm:block">
                <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{user?.name}</div>
                <div className="text-[10px] text-slate-500 font-mono capitalize">{user?.role}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
