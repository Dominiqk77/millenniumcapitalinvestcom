import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const whyUsCards = [
  {
    titleKey: 'why.experience.title',
    descKey: 'why.experience.desc',
    icon: Globe,
    stat: '15+',
    statLabel: 'Years',
  },
  {
    titleKey: 'why.roi.title',
    descKey: 'why.roi.desc',
    icon: TrendingUp,
    stat: '300%',
    statLabel: 'ROI',
  },
  {
    titleKey: 'why.security.title',
    descKey: 'why.security.desc',
    icon: Shield,
    stat: '100%',
    statLabel: 'Compliance',
  },
];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t('why.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            {t('why.subtitle')}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {whyUsCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card group relative overflow-hidden p-8"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stat */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">{card.stat}</span>
                    <span className="text-lg font-medium text-muted-foreground">{card.statLabel}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {t(card.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {t(card.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
