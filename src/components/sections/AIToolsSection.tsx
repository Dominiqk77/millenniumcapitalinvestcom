import { motion } from 'framer-motion';
import aiToolsLogos from '@/assets/ai-tools-logos.webp';

const AIToolsSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-brand-orange/5 blur-[150px]" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-brand-blue/5 blur-[150px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            Technologies & Outils
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-medium text-foreground md:text-4xl lg:text-5xl metallic-text"
          >
            Nos Outils & Technologies IA
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Nous exploitons les technologies d&apos;intelligence artificielle les plus avancées pour concevoir des solutions performantes et innovantes.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <img
              src={aiToolsLogos}
              alt="Outils et technologies IA utilisés par Millennium Capital Invest"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsSection;
