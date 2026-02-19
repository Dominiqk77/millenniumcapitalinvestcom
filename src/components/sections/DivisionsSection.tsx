import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Shield, CreditCard, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const divisions = [
  {
    id: '01',
    titleKey: 'divisions.govtech.title',
    descKey: 'divisions.govtech.desc',
    icon: Shield,
    video: '/videos/division-1.mp4',
    color: 'brand-teal',
    glowClass: 'bg-brand-teal/20',
  },
  {
    id: '02',
    titleKey: 'divisions.fintech.title',
    descKey: 'divisions.fintech.desc',
    icon: CreditCard,
    video: '/videos/division-2.mp4',
    color: 'brand-blue',
    glowClass: 'bg-brand-blue/20',
  },
  {
    id: '03',
    titleKey: 'divisions.ai.title',
    descKey: 'divisions.ai.desc',
    icon: Bot,
    video: '/videos/division-3.mp4',
    color: 'brand-orange',
    glowClass: 'bg-brand-orange/20',
  },
];

const DivisionsSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * 3), 2);
    setActiveIndex(index);
  });

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
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-25"
              >
                <source src={division.video} type="video/mp4" />
              </video>
              <div className={`absolute inset-0 ${division.glowClass} blur-[100px]`} />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="section-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                {t('divisions.title')}
              </p>
              <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
                {t('divisions.subtitle')}
              </h2>

              {/* Division Cards */}
              <div className="mt-8 space-y-4">
                {divisions.map((division, index) => {
                  const Icon = division.icon;
                  const isActive = activeIndex === index;

                  return (
                    <motion.div
                      key={division.id}
                      animate={{ 
                        borderColor: isActive ? 'hsl(var(--primary) / 0.5)' : 'hsl(var(--border) / 0.3)',
                        backgroundColor: isActive ? 'hsl(var(--primary) / 0.05)' : 'hsl(var(--secondary) / 0.2)',
                      }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setActiveIndex(index)}
                      className="group cursor-pointer rounded-xl border p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className={`text-3xl font-bold ${isActive ? 'text-primary' : 'text-muted-foreground/40'}`}>
                          {division.id}
                        </span>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <div className={`rounded-lg p-2 ${isActive ? 'bg-primary/20' : 'bg-secondary'}`}>
                              <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                            </div>
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
              <div className="relative aspect-square w-full max-w-lg">
                {/* Decorative rings with brand colors */}
                <div className="absolute inset-0 rounded-full border border-brand-orange/20 animate-pulse" />
                <div className="absolute inset-8 rounded-full border border-brand-blue/20" />
                <div className="absolute inset-16 rounded-full border border-brand-teal/20" />
                
                {/* Brand color dots */}
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-orange animate-pulse" />
                <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-coral animate-pulse delay-300" />
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-blue animate-pulse delay-500" />
                <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-teal animate-pulse delay-700" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {divisions.map((division, index) => {
                    const Icon = division.icon;
                    return (
                      <motion.div
                        key={division.id}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 0.5
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute"
                      >
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

export default DivisionsSection;
