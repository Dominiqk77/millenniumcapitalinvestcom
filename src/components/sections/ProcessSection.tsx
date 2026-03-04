import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Layers, Rocket } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const steps = [
  { number: '01', titleKey: 'process.step1.title', descKey: 'process.step1.desc', icon: Search },
  { number: '02', titleKey: 'process.step2.title', descKey: 'process.step2.desc', icon: Layers },
  { number: '03', titleKey: 'process.step3.title', descKey: 'process.step3.desc', icon: Rocket },
];

const ProcessSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      {/* Tech grid instead of video */}
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background-deep/90 to-background-deep" />

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M50%,200 L50%,400 L50%,600"
          fill="none"
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="section-container relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl metallic-text"
          >
            {t('process.title')}
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border/30 md:left-1/2 md:block">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-primary via-primary to-primary/20" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`glass-card-glow p-6 ${isEven ? 'md:ml-auto' : ''} max-w-md`}>
                      <span className="mb-2 block text-4xl font-bold text-primary/30">{step.number}</span>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">{t(step.titleKey)}</h3>
                      <p className="text-muted-foreground">{t(step.descKey)}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 z-10 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="glow-primary rounded-2xl border border-primary/30 bg-background p-4"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                  </div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
