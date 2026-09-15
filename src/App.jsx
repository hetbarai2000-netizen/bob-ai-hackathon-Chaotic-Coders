import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Landing page components
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import ArchitectureSection from './components/ArchitectureSection';
import TechnologiesSection from './components/TechnologiesSection';
import DashboardPreview from './components/DashboardPreview';
import ImpactSection from './components/ImpactSection';
import PricingSection from './components/PricingSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ScrollProgressBar from './components/ScrollProgressBar';

// App pages
import LoginPage from './pages/LoginPage';
import AppShell from './app/AppShell';
import DashboardPage from './pages/DashboardPage';
import PatientMonitoringPage from './pages/PatientMonitoringPage';
import DeviationDetectionPage from './pages/DeviationDetectionPage';
import RiskHeatmapPage from './pages/RiskHeatmapPage';
import CAPAReportPage from './pages/CAPAReportPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

// Protected route wrapper
function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Landing page composition
function LandingPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const handleOpenDemoModal = () => setDemoModalOpen(true);
  const handleCloseDemoModal = () => setDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative selection:bg-[#2E7D32] selection:text-white">
      <ScrollProgressBar />
      <BackgroundCanvas />
      <Navbar onRequestDemo={handleOpenDemoModal} />
      <main className="relative z-10">
        <HeroSection onRequestDemo={handleOpenDemoModal} />
        <TrustedBySection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection onSelectFeature={handleOpenDemoModal} />
        <ArchitectureSection />
        <TechnologiesSection />
        <DashboardPreview onRequestDemo={handleOpenDemoModal} />
        <ImpactSection />
        <PricingSection onRequestDemo={handleOpenDemoModal} />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected App Shell + nested pages */}
      <Route
        path="/app"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/app/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="patients" element={<PatientMonitoringPage />} />
        <Route path="deviations" element={<DeviationDetectionPage />} />
        <Route path="risk" element={<RiskHeatmapPage />} />
        <Route path="capa" element={<CAPAReportPage />} />
        <Route path="analytics" element={<AnalyticsDashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
