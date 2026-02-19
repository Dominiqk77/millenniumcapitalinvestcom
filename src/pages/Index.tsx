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
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    document.title = 'Millennium Capital Invest | Build Smarter. Grow Faster. With AI.';
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <StickyCTA />
      <main>
        <HeroSection />
        <TrustSection />
        <DivisionsSection />
        <WhyUsSection />
        <ServicesSection />
        <FeaturesSection />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <div className="grain-overlay" />
    </div>
  );
};

export default Index;
