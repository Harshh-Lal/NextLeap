import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LogoCloud from '../components/LogoCloud';
import MetricsSection from '../components/MetricsSection';
import ProblemsWeSolve from '../components/ProblemsWeSolve';
import ServicesSection from '../components/ServicesSection';
import CaseStudySection from '../components/CaseStudySection';
import ProcessSection from '../components/ProcessSection';
import InsightsSection from '../components/InsightsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <LogoCloud />
        <MetricsSection />
        <ProblemsWeSolve />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
