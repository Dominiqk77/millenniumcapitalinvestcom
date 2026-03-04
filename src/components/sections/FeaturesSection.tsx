import { motion } from 'framer-motion';
import { Workflow, Cloud, BarChart3, ShieldCheck, Eye, Plug } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const features = [
  { titleKey: 'features.workflow', descKey: 'features.workflow.desc', icon: Workflow },
  { titleKey: 'features.cloud', descKey: 'features.cloud.desc', icon: Cloud },
  { titleKey: 'features.analytics', descKey: 'features.analytics.desc', icon: BarChart3 },
  { titleKey: 'features.security', descKey: 'features.security.desc', icon: ShieldCheck },
  { titleKey: 'features.transparency', descKey: 'features.transparency.desc', icon: Eye },
  { titleKey: 'features.api', descKey: 'features.api.desc', icon: Plug },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Tech grid background instead of video */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl metallic-text"
          >
            {t('features.title')}
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-glow group relative p-6"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
