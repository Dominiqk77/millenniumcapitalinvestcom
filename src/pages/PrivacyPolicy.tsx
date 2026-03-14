import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import logoMain from '@/assets/logo-main.png';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background-deep">
        <div className="section-container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMain} alt="Millennium Capital Invest" className="h-10 w-auto" />
            <span className="text-lg font-medium text-foreground">Millennium Capital Invest</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="section-container py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-medium text-foreground">Privacy Policy</h1>
          <p className="mb-6 text-sm text-muted-foreground">Last updated: July 2025</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">1. Introduction</h2>
              <p>Millennium Capital Invest LLC ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website millenniumcapitalinvest.com.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">2. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Personal Data:</strong> Name, email address, company name, and other contact information you voluntarily provide through our contact forms.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Browser type, operating system, access times, pages viewed, and referring URL.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">3. GDPR/RGPD Compliance</h2>
              <p>For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR/RGPD). You have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. Contact us at contact@millenniumcapitalinvest.com to exercise these rights.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">4. Data Sovereignty</h2>
              <p>We implement jurisdictional data controls ensuring your data is processed and stored in compliance with applicable local regulations. Our infrastructure supports data residency requirements across US, European, and African jurisdictions.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">5. Data Security</h2>
              <p>We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-foreground">6. Contact</h2>
              <p>If you have questions about this Privacy Policy, contact us at:</p>
              <p className="mt-2">
                <strong className="text-foreground">Millennium Capital Invest LLC</strong><br />
                Wyoming, United States<br />
                contact@millenniumcapitalinvest.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
