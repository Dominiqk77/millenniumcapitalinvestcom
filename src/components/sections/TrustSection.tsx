import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const TrustSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative overflow-hidden bg-background-deep py-32 md:py-40"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="section-container relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {t('trust.badge')}
            </span>
          </motion.div>

          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Quote className="mx-auto h-12 w-12 text-primary/40" />
          </motion.div>

          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl"
          >
            "{t('trust.quote')}"
          </motion.blockquote>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            {/* Avatar Placeholder */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-primary/20" />
            <div>
              <p className="text-sm text-muted-foreground">{t('trust.role')}</p>
              <p className="mt-1 font-semibold text-foreground">{t('trust.company')}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustSection;
