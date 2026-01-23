import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const plans = [
  {
    id: 'starter',
    nameKey: 'pricing.starter',
    monthlyPrice: 2500,
    yearlyPrice: 25000,
    description: 'Perfect for startups and small projects',
    features: [
      'Initial consultation & discovery',
      'Basic architecture design',
      'Up to 2 integrations',
      'Standard support (48h)',
      '3 months warranty',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    nameKey: 'pricing.pro',
    monthlyPrice: 7500,
    yearlyPrice: 75000,
    description: 'For growing businesses with complex needs',
    features: [
      'Everything in Starter',
      'Advanced architecture & scaling',
      'Up to 10 integrations',
      'Priority support (24h)',
      'AI-powered analytics',
      '12 months warranty',
      'Dedicated project manager',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    nameKey: 'pricing.enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Custom solutions for large organizations',
    features: [
      'Everything in Pro',
      'Unlimited integrations',
      'White-label solutions',
      '24/7 premium support',
      'On-premise deployment',
      'SLA guarantees',
      'Executive advisory',
      'Custom compliance',
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t('pricing.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            {t('pricing.subtitle')}
          </motion.h2>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-secondary/30 p-1"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                isYearly
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('pricing.yearly')}
              <span className="ml-2 text-xs text-primary">-17%</span>
            </button>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card relative overflow-hidden p-6 ${
                plan.highlighted ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t(plan.nameKey)}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-4xl font-bold text-foreground">
                      €{isYearly ? plan.yearlyPrice?.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-foreground">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? 'premium' : 'outline'}
                className="w-full"
                asChild
              >
                <a href="#contact">
                  {plan.monthlyPrice !== null ? t('pricing.getStarted') : t('pricing.contact')}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
