import { motion } from 'framer-motion';
import { Globe, DollarSign, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const VisionAfricaSection = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Globe, title: 'GovTech', desc: 'Infrastructure numérique gouvernementale', color: 'brand-teal' },
    { icon: DollarSign, title: 'FinTech', desc: 'Inclusion financière digitale', color: 'brand-blue' },
    { icon: Zap, title: 'AI Consulting', desc: 'Transformation intelligente', color: 'brand-orange' },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-teal/5 blur-[150px]" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-orange/5 blur-[150px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl font-medium text-foreground md:text-4xl lg:text-5xl metallic-text mb-6">Building Digital Africa</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-lg text-muted-foreground max-w-2xl mx-auto">Transforming the African continent through technology, innovation, and digital sovereignty.</motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className={`inline-block p-3 rounded-lg bg-${pillar.color}/10 mb-4`}>
                  <Icon className={`h-6 w-6 text-${pillar.color}`} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 text-center"
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-medium text-primary mb-2">5</div>
            <p className="text-sm text-muted-foreground">Active Projects</p>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-medium text-primary mb-2">268+</div>
            <p className="text-sm text-muted-foreground">Merchants & Users</p>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-medium text-primary mb-2">1B+</div>
            <p className="text-sm text-muted-foreground">Impact Target</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAfricaSection;
