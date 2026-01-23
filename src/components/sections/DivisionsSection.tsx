import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, CreditCard, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const divisions = [
  {
    id: '01',
    titleKey: 'divisions.govtech.title',
    descKey: 'divisions.govtech.desc',
    icon: Shield,
    video: '/videos/division-1.mp4',
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    id: '02',
    titleKey: 'divisions.fintech.title',
    descKey: 'divisions.fintech.desc',
    icon: CreditCard,
    video: '/videos/division-2.mp4',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: '03',
    titleKey: 'divisions.ai.title',
    descKey: 'divisions.ai.desc',
    icon: Bot,
    video: '/videos/division-3.mp4',
    color: 'from-primary/20 to-primary/5',
  },
];

const DivisionsSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Pinned section effect
  const activeIndexFromScroll = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section
      id="divisions"
      ref={sectionRef}
      className="relative min-h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-background">
        {/* Background Video with Crossfade */}
        <div className="absolute inset-0">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-30"
              >
                <source src={division.video} type="video/mp4" />
              </video>
              <div className={`absolute inset-0 bg-gradient-to-br ${division.color}`} />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
              >
                {t('divisions.title')}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
              >
                {t('divisions.subtitle')}
              </motion.h2>

              {/* Division Cards */}
              <div className="mt-8 space-y-4">
                {divisions.map((division, index) => {
                  const Icon = division.icon;
                  const isActive = activeIndex === index;

                  return (
                    <motion.div
                      key={division.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`group cursor-pointer rounded-xl border p-6 transition-all duration-500 ${
                        isActive
                          ? 'border-primary/50 bg-primary/10'
                          : 'border-border/30 bg-secondary/20 hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-bold text-primary/40">{division.id}</span>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <Icon className={`h-5 w-5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                            <h3 className="text-lg font-semibold text-foreground">
                              {t(division.titleKey)}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {t(division.descKey)}
                          </p>
                        </div>
                        <ArrowRight className={`h-5 w-5 transition-all ${
                          isActive ? 'translate-x-0 text-primary opacity-100' : '-translate-x-2 opacity-0'
                        }`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-square w-full max-w-lg"
              >
                {/* Decorative rings */}
                <div className="absolute inset-0 animate-pulse rounded-full border border-primary/20" />
                <div className="absolute inset-8 rounded-full border border-primary/15" />
                <div className="absolute inset-16 rounded-full border border-primary/10" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {divisions.map((division, index) => {
                    const Icon = division.icon;
                    return (
                      <motion.div
                        key={division.id}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 0.5
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute"
                      >
                        <div className="glow-primary-strong rounded-3xl bg-secondary/50 p-12 backdrop-blur-xl">
                          <Icon className="h-24 w-24 text-primary" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
