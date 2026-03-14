import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Shield, CreditCard, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const divisions = [
  { id: '01', titleKey: 'divisions.govtech.title', descKey: 'divisions.govtech.desc', icon: Shield, color: 'brand-teal', glowClass: 'bg-brand-teal/20', borderGlow: 'hsl(160 70% 45% / 0.4)' },
  { id: '02', titleKey: 'divisions.fintech.title', descKey: 'divisions.fintech.desc', icon: CreditCard, color: 'brand-blue', glowClass: 'bg-brand-blue/20', borderGlow: 'hsl(210 85% 50% / 0.4)' },
  { id: '03', titleKey: 'divisions.ai.title', descKey: 'divisions.ai.desc', icon: Bot, color: 'brand-orange', glowClass: 'bg-brand-orange/20', borderGlow: 'hsl(25 95% 55% / 0.4)' },
];

const DivisionsMobile = () => {
  const { t } = useLanguage();
  return (
    <section id="divisions" className="relative overflow-hidden gradient-mesh-bg py-20 md:py-28">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
      <div className="section-container relative z-10">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-3 text-sm font-medium uppercase tracking-widest text-primary text-center">{t('divisions.title')}</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="mb-10 text-2xl font-medium text-foreground sm:text-3xl md:text-4xl metallic-text text-center leading-tight">{t('divisions.subtitle')}</motion.h2>
        <div className="space-y-5">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, margin: "-30px" }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl group relative p-5 sm:p-6 transition-all duration-500"
              >
                <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${division.glowClass} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-medium text-primary/30 group-hover:text-primary/60 transition-colors">{division.id}</span>
                    <div className={`rounded-xl p-2.5 bg-${division.color}/10`}>
                      <Icon className={`h-5 w-5 text-${division.color}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-foreground flex-1">{t(division.titleKey)}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground pl-0">{t(division.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const DivisionsDesktop = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 3), 2);
    setActiveIndex(index);
  });

  return (
    <section id="divisions" ref={sectionRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden gradient-mesh-bg">
        <div className="absolute inset-0">
          {divisions.map((division, index) => (
            <motion.div key={division.id} animate={{ opacity: activeIndex === index ? 1 : 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
              <div className={`absolute inset-0 ${division.glowClass} blur-[120px] opacity-30`} />
            </motion.div>
          ))}
          <div className="absolute inset-0 tech-grid opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.circle cx="80%" cy="30%" r="3" fill="hsl(var(--primary))" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="85%" cy="50%" r="2" fill="hsl(var(--brand-orange))" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="75%" cy="70%" r="3" fill="hsl(var(--brand-teal))" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
          <motion.line x1="80%" y1="30%" x2="85%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />
          <motion.line x1="85%" y1="50%" x2="75%" y2="70%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1" />
        </svg>

        <div className="section-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">{t('divisions.title')}</p>
              <h2 className="mb-6 text-4xl font-medium text-foreground md:text-5xl metallic-text text-glow">{t('divisions.subtitle')}</h2>
              <div className="mt-8 space-y-4">
                {divisions.map((division, index) => {
                  const Icon = division.icon;
                  const isActive = activeIndex === index;
                  return (
                    <motion.div key={division.id} animate={{ borderColor: isActive ? division.borderGlow : 'hsl(var(--border) / 0.3)', backgroundColor: isActive ? 'hsl(var(--primary) / 0.05)' : 'hsl(var(--secondary) / 0.2)' }} transition={{ duration: 0.5 }} onClick={() => setActiveIndex(index)} className="group cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:scale-[1.01]">
                      <div className="flex items-start gap-4">
                        <span className={`text-3xl font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground/40'}`}>{division.id}</span>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <div className={`rounded-lg p-2 transition-all ${isActive ? `bg-${division.color}/20` : 'bg-secondary'}`}>
                              <Icon className={`h-5 w-5 transition-colors ${isActive ? `text-${division.color}` : 'text-muted-foreground'}`} />
                            </div>
                            <h3 className="text-lg font-medium text-foreground">{t(division.titleKey)}</h3>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">{t(division.descKey)}</p>
                        </div>
                        <ArrowRight className={`h-5 w-5 transition-all ${isActive ? 'translate-x-0 text-primary opacity-100' : '-translate-x-2 opacity-0'}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-full border border-brand-orange/15" />
                <div className="absolute inset-8 rounded-full border border-brand-blue/15" />
                <div className="absolute inset-16 rounded-full border border-brand-teal/15" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-orange neon-glow-orange" />
                  <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-coral" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-8">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-blue neon-glow-blue" />
                  <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-teal neon-glow-teal" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {divisions.map((division, index) => {
                    const Icon = division.icon;
                    return (
                      <motion.div key={division.id} animate={{ opacity: activeIndex === index ? 1 : 0, scale: activeIndex === index ? 1 : 0.5 }} transition={{ duration: 0.5 }} className="absolute">
                        <div className="glow-primary-strong rounded-3xl bg-secondary/80 p-12 backdrop-blur-xl border border-primary/20">
                          <Icon className="h-24 w-24 text-primary" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DivisionsSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isDesktop ? <DivisionsDesktop /> : <DivisionsMobile />;
};

export default DivisionsSection;
