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
    color: 'brand-blue',
    borderColor: 'border-brand-blue/30',
    bgColor: 'bg-brand-blue/10',
    textColor: 'text-brand-blue',
  },
  {
    titleKey: 'why.roi.title',
    descKey: 'why.roi.desc',
    icon: TrendingUp,
    stat: '300%',
    statLabel: 'ROI',
    color: 'brand-orange',
    borderColor: 'border-brand-orange/30',
    bgColor: 'bg-brand-orange/10',
    textColor: 'text-brand-orange',
  },
  {
    titleKey: 'why.security.title',
    descKey: 'why.security.desc',
    icon: Shield,
    stat: '100%',
    statLabel: 'Compliance',
    color: 'brand-teal',
    borderColor: 'border-brand-teal/30',
    bgColor: 'bg-brand-teal/10',
    textColor: 'text-brand-teal',
  },
];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background Pattern with brand colors */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-brand-teal/10 blur-[120px]" />
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
                className={`glass-card group relative overflow-hidden p-8 transition-all duration-500 hover:${card.borderColor}`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 ${card.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stat */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${card.textColor}`}>{card.stat}</span>
                    <span className="text-lg font-medium text-muted-foreground">{card.statLabel}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 inline-flex rounded-xl ${card.bgColor} p-3`}>
                    <Icon className={`h-6 w-6 ${card.textColor}`} />
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

                {/* Decorative corner */}
                <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${card.bgColor} blur-2xl opacity-50`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
