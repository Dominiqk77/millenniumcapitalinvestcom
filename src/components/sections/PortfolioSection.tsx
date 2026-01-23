import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Digital Sovereignty Platform',
    category: 'GovTech',
    context: 'African government ministry needed secure citizen data management',
    action: 'Built sovereign cloud infrastructure with GDPR-compliant workflows',
    result: '300% ROI | 99.9% uptime | 2M citizens served',
    tags: ['GovTech', 'Sovereignty', 'AI'],
    tagColors: ['badge-teal', 'badge-blue', 'badge-orange'],
  },
  {
    id: 2,
    title: 'RegTech Compliance Engine',
    category: 'FinTech',
    context: 'US financial institution required automated compliance reporting',
    action: 'Deployed AI-powered regulatory automation platform',
    result: '85% time reduction | Zero violations | $2M saved annually',
    tags: ['FinTech', 'RegTech', 'Automation'],
    tagColors: ['badge-blue', 'badge-coral', 'badge-orange'],
  },
  {
    id: 3,
    title: 'AI-Powered Fraud Detection',
    category: 'AI',
    context: 'Payment processor facing increasing fraud attempts',
    action: 'Implemented real-time ML fraud detection with 99.7% accuracy',
    result: '95% fraud reduction | 0.1s response time | €5M protected',
    tags: ['AI', 'Security', 'FinTech'],
    tagColors: ['badge-orange', 'badge-teal', 'badge-blue'],
  },
  {
    id: 4,
    title: 'Smart City Dashboard',
    category: 'GovTech',
    context: 'European city needed unified urban management platform',
    action: 'Created IoT-integrated predictive analytics dashboard',
    result: '40% efficiency gain | 500K daily transactions | Award-winning UX',
    tags: ['GovTech', 'IoT', 'Analytics'],
    tagColors: ['badge-teal', 'badge-coral', 'badge-blue'],
  },
];

const PortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-teal/5 blur-[150px]" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-orange/5 blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t('cases.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            {t('cases.subtitle')}
          </motion.h2>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group relative overflow-hidden transition-all duration-500 hover:border-primary/30"
            >
              {/* Top Section */}
              <div className="border-b border-border/30 p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${study.tagColors[tagIndex]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{study.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Context
                    </span>
                    <p className="text-sm text-foreground">{study.context}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Action
                    </span>
                    <p className="text-sm text-foreground">{study.action}</p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-4 border border-primary/20">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{study.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outlinePrimary" size="lg" asChild>
            <a href="#contact">View all case studies</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
