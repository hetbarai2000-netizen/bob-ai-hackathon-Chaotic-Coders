import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onRequestDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Technology', href: '#technology' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Impact', href: '#impact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-lg border-b border-gray-200/80 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] border border-[#43A047]/40 flex items-center justify-center shadow-lg shadow-[#2E7D32]/10 group-hover:border-[#43A047] transition-all duration-300">
              <ShieldCheck className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-xl tracking-tight text-gray-900 group-hover:text-[#2E7D32] transition-colors">
                  TrialGuard<span className="text-[#2E7D32]">.AI</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-[#2E7D32] bg-[#2E7D32]/10 border border-[#2E7D32]/30 rounded-full uppercase">
                  GCP v3.4
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase -mt-0.5">
                Clinical Trial Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-white/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onRequestDemo}
              className="relative group overflow-hidden rounded-xl px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#2E7D32] via-[#43A047] to-[#2E7D32] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-lg shadow-[#2E7D32]/20 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2E7D32] rounded-lg"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 bg-gray-100/60 rounded-lg border border-gray-200/60"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-gray-200 m-3 p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full py-3 text-xs font-semibold text-white bg-[#2E7D32] hover:bg-[#43A047] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
