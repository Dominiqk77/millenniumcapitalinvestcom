import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
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
    accentColor: 'brand-blue',
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
    accentColor: 'brand-orange',
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
    accentColor: 'brand-teal',
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
        <div className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-brand-orange/5 blur-[120px]" />
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
            className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-secondary/30 p-1"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                isYearly
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('pricing.yearly')}
              <span className="ml-2 rounded-full bg-brand-teal/20 px-2 py-0.5 text-xs text-brand-teal">-17%</span>
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
              className={`glass-card relative overflow-hidden p-6 transition-all duration-500 ${
                plan.highlighted ? 'ring-2 ring-primary scale-[1.02]' : 'hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-brand-orange to-brand-coral px-14 py-1.5 text-xs font-bold text-white shadow-lg">
                  <Star className="mr-1 inline h-3 w-3" />
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
                  <span className="text-3xl font-bold gradient-brand">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-brand-orange' : 'text-primary'}`} />
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
