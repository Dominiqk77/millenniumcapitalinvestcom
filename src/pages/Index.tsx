import { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
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
    // Update document title
    document.title = 'Millennium Capital Invest | Build Smarter. Grow Faster. With AI.';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'We architect and deploy next-generation AI, FinTech, and GovTech platforms for high-stakes environments. Proprietary IP valued at €2.8M. 15+ years multi-regional expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'We architect and deploy next-generation AI, FinTech, and GovTech platforms for high-stakes environments. Proprietary IP valued at €2.8M. 15+ years multi-regional expertise.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
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

      {/* Footer */}
      <Footer />

      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default Index;
