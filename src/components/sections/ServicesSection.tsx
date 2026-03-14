import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, PenTool, Code, TrendingUp, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const serviceCategories = [
  { id: 'branding', titleKey: 'services.branding', icon: Palette, features: ['Stratégie de marque & positionnement', 'Système d\'identité visuelle', 'Charte graphique & assets', 'Naming & Messaging'] },
  { id: 'design', titleKey: 'services.design', icon: PenTool, features: ['Design UI/UX', 'Design produit', 'Design Systems', 'Prototypage & Tests'] },
  { id: 'development', titleKey: 'services.development', icon: Code, features: ['Développement Web & Mobile', 'Architecture Cloud', 'Développement API', 'DevOps & Infrastructure'] },
  { id: 'marketing', titleKey: 'services.marketing', icon: TrendingUp, features: ['SEO & Stratégie de contenu', 'Marketing de performance', 'Analytics & Reporting', 'Growth Hacking'] },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  return (
    <section id="services" className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">{t('services.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-foreground md:text-4xl lg:text-5xl metallic-text">{t('services.subtitle')}</motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-2">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory.id === category.id;
              return (
                <motion.button key={category.id} onClick={() => setActiveCategory(category)} whileHover={{ x: 4 }} className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${isActive ? 'border-primary/50 bg-primary/10' : 'border-border/30 bg-secondary/20 hover:border-primary/30'}`}>
                  <div className={`rounded-lg p-2 ${isActive ? 'bg-primary/20' : 'bg-secondary'}`}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <span className={`font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{t(category.titleKey)}</span>
                  <ChevronRight className={`ml-auto h-5 w-5 transition-transform ${isActive ? 'rotate-90 text-primary' : 'text-muted-foreground'}`} />
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="glass-card-glow h-full p-8">
                <h3 className="mb-6 text-xl font-medium text-foreground">{t(activeCategory.titleKey)}</h3>
                <ul className="space-y-4">
                  {activeCategory.features.map((feature, index) => (
                    <motion.li key={feature} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="flex items-center gap-3">
                      <span className="text-lg font-medium text-primary/60">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }} className="glass-card-glow flex h-full items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                  <div className="relative rounded-3xl bg-secondary/50 p-16 backdrop-blur-xl">
                    {(() => { const Icon = activeCategory.icon; return <Icon className="h-24 w-24 text-primary" />; })()}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
