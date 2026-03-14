import { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import DivisionsSection from '@/components/sections/DivisionsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import VisionAfricaSection from '@/components/sections/VisionAfricaSection';
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    document.title = 'Millennium Capital Invest | Construisez Plus Intelligemment. Avec l\'IA.';
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <StickyCTA />
      <main>
        <HeroSection />
        <div className="section-separator" />
        <TrustSection />
        <div className="section-separator" />
        <DivisionsSection />
        <div className="section-separator" />
        <WhyUsSection />
        <div className="section-separator" />
        <ServicesSection />
        <div className="section-separator" />
        <FeaturesSection />
        <div className="section-separator" />
        <ProcessSection />
        <div className="section-separator" />
        <PortfolioSection />
      <div className="section-separator" />
      <VisionAfricaSection />
        <div className="section-separator" />
        <PricingSection />
        <div className="section-separator" />
        <TeamSection />
        <div className="section-separator" />
        <ContactSection />
      </main>
      <Footer />
      <div className="grain-overlay" />
    </div>
  );
};

export default Index;
