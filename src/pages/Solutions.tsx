import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Landmark, Shield, RefreshCw, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import logoMain from '@/assets/logo-main.png';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const pillars = [
  {
    key: 'ai',
    icon: Brain,
    color: 'brand-orange',
    badgeClass: 'badge-orange',
    deliverables: ['d1', 'd2', 'd3', 'd4'],
    engagements: ['e1', 'e2', 'e3'],
    compliance: ['c1', 'c2', 'c3'],
  },
  {
    key: 'fintech',
    icon: Shield,
    color: 'brand-blue',
    badgeClass: 'badge-blue',
    deliverables: ['d1', 'd2', 'd3', 'd4'],
    engagements: ['e1', 'e2', 'e3'],
    compliance: ['c1', 'c2', 'c3'],
  },
  {
    key: 'govtech',
    icon: Landmark,
    color: 'brand-teal',
    badgeClass: 'badge-teal',
    deliverables: ['d1', 'd2', 'd3', 'd4'],
    engagements: ['e1', 'e2', 'e3'],
    compliance: ['c1', 'c2', 'c3'],
  },
  {
    key: 'transform',
    icon: RefreshCw,
    color: 'brand-coral',
    badgeClass: 'badge-coral',
    deliverables: ['d1', 'd2', 'd3', 'd4'],
    engagements: ['e1', 'e2', 'e3'],
    compliance: ['c1', 'c2', 'c3'],
  },
];

const Solutions = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'Solutions — Millennium Capital Invest';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          >
            {t('solutions.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            {t('solutions.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        const isAlt = index % 2 === 1;
        return (
          <section
            key={pillar.key}
            className={`py-20 lg:py-28 ${isAlt ? 'bg-background-deep' : 'bg-background'}`}
          >
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 ${pillar.badgeClass} border`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mb-3 text-3xl font-bold text-foreground">
                  {t(`solutions.${pillar.key}.title`)}
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                  {t(`solutions.${pillar.key}.desc`)}
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Deliverables */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {t('solutions.deliver')}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {t(`solutions.${pillar.key}.${d}`)}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Engagements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {t('solutions.engagements')}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.engagements.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {t(`solutions.${pillar.key}.${e}`)}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Compliance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {t('solutions.compliance')}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.compliance.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {t(`solutions.${pillar.key}.${c}`)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-background-deep py-20">
        <div className="section-container text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">{t('solutions.cta')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="premium" size="lg" asChild>
              <a href="/#contact">
                <Calendar className="mr-2 h-5 w-5" />
                {t('cta.book')}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/investor-deck">
                <FileText className="mr-2 h-5 w-5" />
                {t('cta.deck')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
