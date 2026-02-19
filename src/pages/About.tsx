import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, Building, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoMain from '@/assets/logo-main.png';

const regions = [
  { region: 'Americas', location: 'United States', description: 'Corporate registration & US market coverage' },
  { region: 'Europe', location: 'European Union', description: 'EU regulatory expertise & GDPR advisory' },
  { region: 'Africa', location: 'West Africa', description: 'GovTech deployment focus & digital sovereignty initiatives' },
  { region: 'Middle East', location: 'Gulf Region', description: 'FinTech expansion & regional partnerships' },
];

const About = () => {
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

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-background-deep py-24 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-teal/10 blur-[150px]" />
          </div>
          <div className="section-container relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
            >
              About <span className="gradient-text-primary">Millennium Capital Invest</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg text-muted-foreground"
            >
              We architect and deploy next-generation AI, FinTech, and GovTech platforms for high-stakes environments — delivering digital sovereignty and measurable institutional ROI.
            </motion.p>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-container py-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Leadership</h2>
            <div className="glass-card p-8 lg:p-12">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-secondary border border-border/50">
                  <span className="text-4xl font-bold text-primary">DM</span>
                </div>
                <div>
                  <h3 className="mb-1 text-2xl font-bold text-foreground">Dominiqk Mendy</h3>
                  <p className="mb-4 text-primary">Founder & CEO — Global AI Expert & Digital Sovereignty Architect</p>
                  <p className="text-muted-foreground leading-relaxed">
                    With 15+ years of multi-regional expertise spanning the US, Europe, Africa, and the Middle East, Dominiqk Mendy leads Millennium Capital Invest's mission to deliver institutional-grade technology solutions. His vision bridges proven international security standards (GDPR/RGPD, US Compliance) with the world's most complex implementation challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Served */}
        <section className="bg-background-deep py-16 lg:py-24">
          <div className="section-container">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">Regions Served</h2>
            <p className="mb-12 text-center text-muted-foreground">Delivery & partnerships focus across four strategic regions</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {regions.map((region, i) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <Globe className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{region.region}</h3>
                  <p className="mb-2 flex items-center justify-center gap-1 text-sm text-primary">
                    <MapPin className="h-3 w-3" /> {region.location}
                  </p>
                  <p className="text-xs text-muted-foreground">{region.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="section-container py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Company Facts</h2>
            <div className="glass-card divide-y divide-border/30">
              {[
                { icon: Building, label: 'Legal Entity', value: 'Millennium Capital Invest LLC' },
                { icon: MapPin, label: 'Jurisdiction', value: 'State of Wyoming, United States' },
                { icon: Calendar, label: 'Filed', value: 'July 17, 2025' },
                { icon: Shield, label: 'Entity ID', value: '2025-001724094' },
              ].map((fact) => (
                <div key={fact.label} className="flex items-center gap-4 p-5">
                  <fact.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                    <p className="font-medium text-foreground">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Millennium Capital Invest LLC — State of Wyoming, USA</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background-deep py-16">
          <div className="section-container text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">Ready to work with us?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="premium" size="lg" asChild>
                <a href="/#contact">Book a Call</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contact">Request Investor Deck</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
