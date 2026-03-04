import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const floatingElements = [
  { text: '</>', x: '10%', y: '20%', delay: 0, duration: 7 },
  { text: '{ }', x: '85%', y: '15%', delay: 1, duration: 9 },
  { text: 'AI', x: '75%', y: '70%', delay: 2, duration: 6 },
  { text: '0101', x: '15%', y: '75%', delay: 0.5, duration: 8 },
  { text: '/**/', x: '90%', y: '45%', delay: 1.5, duration: 10 },
  { text: '=>', x: '5%', y: '50%', delay: 3, duration: 7 },
  { text: '[ ]', x: '60%', y: '85%', delay: 2.5, duration: 9 },
  { text: 'fn()', x: '40%', y: '10%', delay: 0.8, duration: 8 },
  { text: '<AI/>', x: '25%', y: '60%', delay: 1.2, duration: 11 },
  { text: ':::', x: '70%', y: '30%', delay: 0.3, duration: 7 },
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(210,20%,6%)] to-[hsl(220,30%,4%)]">
      {/* Tech Grid Background - more visible */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      
      {/* Animated gradient orbs - larger and more intense */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[700px] w-[700px] rounded-full bg-brand-orange/15 blur-[200px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 bottom-1/4 h-[650px] w-[650px] rounded-full bg-brand-blue/12 blur-[200px]"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-teal/10 blur-[180px]"
      />
      {/* 4th orb - coral */}
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-coral/10 blur-[180px]"
      />

      {/* Hexagon decorative elements */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" xmlns="http://www.w3.org/2000/svg">
        <motion.polygon
          points="200,50 230,70 230,110 200,130 170,110 170,70"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          animate={{ opacity: [0.2, 0.6, 0.2], rotate: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ transformOrigin: '200px 90px' }}
        />
        <motion.polygon
          points="800,150 840,175 840,225 800,250 760,225 760,175"
          fill="none"
          stroke="hsl(var(--brand-orange))"
          strokeWidth="0.5"
          animate={{ opacity: [0.3, 0.7, 0.3], rotate: [0, -60, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ transformOrigin: '800px 200px' }}
        />
        <motion.polygon
          points="1100,400 1140,425 1140,475 1100,500 1060,475 1060,425"
          fill="none"
          stroke="hsl(var(--brand-teal))"
          strokeWidth="0.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.polygon
          points="300,500 340,525 340,575 300,600 260,575 260,525"
          fill="none"
          stroke="hsl(var(--brand-blue))"
          strokeWidth="0.5"
          animate={{ opacity: [0.15, 0.5, 0.15], rotate: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{ transformOrigin: '300px 550px' }}
        />
      </svg>

      {/* Floating code elements - more visible */}
      {floatingElements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.25, 0.12, 0.25, 0],
            y: [0, -30, -15, -40, -60],
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            delay: el.delay,
            ease: "easeInOut"
          }}
          className="absolute font-mono text-sm text-primary/25 pointer-events-none select-none"
          style={{ left: el.x, top: el.y }}
        >
          {el.text}
        </motion.span>
      ))}

      {/* Circuit lines SVG - more visible */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,300 Q200,250 400,300 T800,280"
          fill="none"
          stroke="hsl(210 8% 78% / 0.15)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
        <motion.path
          d="M100,500 Q400,450 700,500 T1200,480"
          fill="none"
          stroke="hsl(25 95% 55% / 0.12)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
        <motion.path
          d="M200,100 Q500,150 800,100 T1400,120"
          fill="none"
          stroke="hsl(210 85% 50% / 0.12)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
        <motion.path
          d="M50,650 Q350,600 650,650 T1100,630"
          fill="none"
          stroke="hsl(160 70% 45% / 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, delay: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        />
      </svg>

      {/* Gradient Overlays - reduced for more vibrancy */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      {/* Content */}
      <div className="section-container relative z-10 py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('hero.users')}</span>
            <div className="flex -space-x-1">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              <span className="h-2 w-2 rounded-full bg-brand-coral" />
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="h-2 w-2 rounded-full bg-brand-teal" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl metallic-text"
          >
            <span className="block">{t('hero.line1')}</span>
            <span className="block">{t('hero.line2')}</span>
            <span className="gradient-text-primary serif-accent block drop-shadow-lg">
              {t('hero.line3')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl"
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
            <Button variant="premium" size="xl" asChild className="min-w-[200px] btn-shine">
              <a href="#contact">{t('hero.cta.primary')}</a>
            </Button>
            <Button variant="glass" size="xl" asChild className="min-w-[200px]">
              <a href="#divisions">{t('hero.cta.secondary')}</a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              RGPD
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              US Compliance
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              {t('hero.ip')}
            </span>
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
