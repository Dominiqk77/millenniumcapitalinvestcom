import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoMain from '@/assets/logo-main.png';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background-deep">
        <div className="section-container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMain} alt="Millennium Capital Invest" className="h-10 w-auto" />
            <span className="text-lg font-semibold text-foreground">Millennium Capital Invest</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="section-container py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="mb-6 text-sm text-muted-foreground">Last updated: July 2025</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
              <p>By accessing or using the services provided by Millennium Capital Invest LLC ("Company"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">2. Services</h2>
              <p>Millennium Capital Invest LLC provides AI architecture, FinTech/RegTech systems, GovTech platforms, and digital transformation consulting services. All services are subject to separate service agreements detailing scope, deliverables, and pricing.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">3. Intellectual Property</h2>
              <p>All proprietary platforms, methodologies, and technologies developed by Millennium Capital Invest LLC remain the exclusive property of the Company. Client-specific deliverables are subject to individual contract terms.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
              <p>In no event shall Millennium Capital Invest LLC be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">5. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">6. Company Information</h2>
              <p>
                <strong className="text-foreground">Millennium Capital Invest LLC</strong><br />
                State of Wyoming, United States<br />
                Filed: July 17, 2025 — Entity ID: 2025-001724094<br />
                Contact: contact@millenniumcapitalinvest.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
