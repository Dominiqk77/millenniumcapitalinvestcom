import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const plans = [
  { id: 'starter', nameKey: 'pricing.starter', description: 'Idéal pour les startups et projets initiaux', features: ['Consultation initiale & découverte', 'Architecture de base', 'Jusqu\'à 2 intégrations', 'Support standard (48h)', 'Garantie 3 mois'], highlighted: false },
  { id: 'pro', nameKey: 'pricing.pro', description: 'Pour les entreprises en croissance avec des besoins complexes', features: ['Tout le plan Starter', 'Architecture avancée & scalabilité', 'Jusqu\'à 10 intégrations', 'Support prioritaire (24h)', 'Analytics propulsés par l\'IA', 'Garantie 12 mois', 'Chef de projet dédié'], highlighted: true },
  { id: 'enterprise', nameKey: 'pricing.enterprise', , description: 'Solutions sur mesure pour les grandes organisations', features: ['Tout le plan Pro', 'Intégrations illimitées', 'Solutions en marque blanche', 'Support premium 24/7', 'Déploiement on-premise', 'SLA garanti', 'Advisory exécutif', 'Conformité sur mesure'], highlighted: false },
];

const PricingSection = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">{t('pricing.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="mb-8 text-3xl font-medium text-foreground md:text-4xl lg:text-5xl metallic-text">{t('pricing.subtitle')}</motion.h2>
          
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl relative p-6 transition-all duration-500 ${plan.highlighted ? 'ring-2 ring-primary scale-[1.02]' : ''}`}>
              {plan.highlighted && (
                <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-brand-orange to-brand-coral px-14 py-1.5 text-xs font-medium text-white shadow-lg">
                  <Star className="mr-1 inline h-3 w-3" />Populaire
                </div>
              )}
              <h3 className="mb-2 text-xl font-medium text-foreground">{t(plan.nameKey)}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-medium gradient-brand">Tarification personnalisée</span>
                <p className="text-sm text-muted-foreground mt-2">Devis gratuit adapté à vos besoins</p>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-brand-orange' : 'text-primary'}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? 'premium' : 'outline'} className="w-full btn-shine" asChild>
                <a href="#contact">{plan.monthlyPrice !== null ? t('pricing.getStarted') : t('pricing.contact')}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
