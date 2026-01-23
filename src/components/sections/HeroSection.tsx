import { motion } from 'framer-motion';
import { ArrowDown, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-abstract.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Video Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          style={{ mixBlendMode: 'screen' }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Content */}
      <div className="section-container relative z-10 py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/30 px-4 py-2 backdrop-blur-sm"
          >
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t('hero.users')}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">{t('hero.line1')}</span>
            <span className="block">{t('hero.line2')}</span>
            <span className="gradient-text-primary serif-accent block">
              {t('hero.line3')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="premium" size="xl" asChild>
              <a href="#contact">{t('hero.cta.primary')}</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#divisions">{t('hero.cta.secondary')}</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a
            href="#trust"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-sm">{t('hero.scroll')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </section>
  );
};

export default HeroSection;
