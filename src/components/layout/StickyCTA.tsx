import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" asChild className="hidden shadow-xl shadow-primary/10 lg:inline-flex">
              <a href="/investor-deck" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {t('cta.deck')}
              </a>
            </Button>
            <Button variant="premium" size="lg" asChild className="shadow-xl shadow-primary/20">
              <a href="#contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t('nav.bookCall')}
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
