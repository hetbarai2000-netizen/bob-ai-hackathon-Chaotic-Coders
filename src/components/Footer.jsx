import React from 'react';
import { ShieldCheck, Mail, ArrowUp } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B5E20] border-t border-[#2E7D32] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2E7D32]/60">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                TrialGuard<span className="text-[#A5D6A7]">.AI</span>
              </span>
            </a>

            <p className="text-green-200/80 text-xs leading-relaxed max-w-sm">
              Enterprise AI platform for real-time clinical trial compliance, protocol deviation detection, and automated 21 CFR Part 11 CAPA resolution.
            </p>

            <div className="flex items-center gap-3 pt-2 text-green-200/60">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:compliance@trialguard.ai"
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Platform & AI
            </h4>
            <ul className="space-y-2 text-xs text-green-200/70">
              <li><a href="#solution" className="hover:text-white transition-colors">AI Monitoring Workflow</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Deviation Detection</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">System Architecture</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Risk Heatmap Dashboard</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise Pricing</a></li>
            </ul>
          </div>

          {/* Col 3: Compliance & Regulatory */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Regulatory Standards
            </h4>
            <ul className="space-y-2 text-xs text-green-200/70">
              <li><span className="text-[#A5D6A7] font-mono">FDA 21 CFR Part 11</span></li>
              <li><span className="text-green-100 font-mono">ICH GCP E6(R3)</span></li>
              <li><span className="text-green-100 font-mono">HIPAA BAA Compliant</span></li>
              <li><span className="text-green-100 font-mono">SOC 2 Type II Certified</span></li>
            </ul>
          </div>

          {/* Col 4: Quick Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-green-200/70">
              <li><a href="#team" className="hover:text-white transition-colors">Leadership & Team</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Clinical Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Enterprise Demo</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-green-200/50 font-mono">
          <div>
            © {new Date().getFullYear()} TrialGuard AI Inc. All rights reserved. Precision Medical AI.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 text-green-200/60 hover:text-white border border-white/15 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
