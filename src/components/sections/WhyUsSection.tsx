import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Shield, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface CardProps {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
  statEnd: number;
  statSuffix: string;
  statLabel: string;
  bgColor: string;
  textColor: string;
  index: number;
}

const WhyUsCard = ({ titleKey, descKey, icon: Icon, statEnd, statSuffix, statLabel, bgColor, textColor, index }: CardProps) => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const steps = 60;
    const increment = statEnd / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= statEnd) { setCount(statEnd); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [hasStarted, statEnd]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="glass-card-glow group relative p-8 transition-all duration-500"
    >
      <div className={`absolute inset-0 ${bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="relative z-10">
        <div ref={ref} className="mb-6 flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${textColor}`}>{count}{statSuffix}</span>
          <span className="text-lg font-medium text-muted-foreground">{statLabel}</span>
        </div>
        <div className={`mb-4 inline-flex rounded-xl ${bgColor} p-3`}>
          <Icon className={`h-6 w-6 ${textColor}`} />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{t(titleKey)}</h3>
        <p className="text-sm text-muted-foreground">{t(descKey)}</p>
      </div>
      <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${bgColor} blur-2xl opacity-50`} />
    </motion.div>
  );
};

const whyUsCards = [
  { titleKey: 'why.experience.title', descKey: 'why.experience.desc', icon: Globe, statEnd: 18, statSuffix: '+', statLabel: 'Ans', bgColor: 'bg-brand-blue/10', textColor: 'text-brand-blue' },
  { titleKey: 'why.roi.title', descKey: 'why.roi.desc', icon: TrendingUp, statEnd: 300, statSuffix: '%', statLabel: 'ROI', bgColor: 'bg-brand-orange/10', textColor: 'text-brand-orange' },
  { titleKey: 'why.security.title', descKey: 'why.security.desc', icon: Shield, statEnd: 100, statSuffix: '%', statLabel: 'Conformité', bgColor: 'bg-brand-teal/10', textColor: 'text-brand-teal' },
];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden gradient-mesh-bg py-24 md:py-32">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t('why.title')}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl metallic-text text-glow">
            {t('why.subtitle')}
          </motion.h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whyUsCards.map((card, index) => (
            <WhyUsCard key={card.titleKey} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
