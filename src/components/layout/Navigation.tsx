import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import logoMain from '@/assets/logo-main.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') || 'Accueil' },
    { href: '/solutions', label: t('nav.solutions') },
    { href: '#divisions', label: t('nav.divisions') },
    { href: '/partnerships', label: t('nav.partnerships') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  return (
    <>
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/40' : 'bg-transparent'}`}>
        <nav className="section-container flex h-20 items-center justify-between">
          <a href="#" className="relative z-10 flex items-center gap-3 group">
            <motion.img src={logoMain} alt="Millennium Capital Invest" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="block text-lg font-medium tracking-tight text-foreground">Millennium Capital</span>
              <span className="block text-xs text-muted-foreground">Invest LLC</span>
            </div>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (<a key={link.href} href={link.href} className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>))}
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <button onClick={toggleLanguage} className="flex items-center gap-2 rounded-full border border-border/50 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-primary">
              <Globe className="h-4 w-4" />{language.toUpperCase()}
            </button>
            <Button variant="premium" size="default" asChild><a href="#contact">{t('nav.bookCall')}</a></Button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="relative z-10 p-2 lg:hidden" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </nav>
        {isScrolled && (<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="absolute bottom-0 left-0 right-0 h-px gradient-brand-bg opacity-50" />)}
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden">
            <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }} className="text-2xl font-medium text-foreground transition-colors hover:text-primary">{link.label}</motion.a>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} className="mt-8 flex flex-col items-center gap-4">
                <button onClick={toggleLanguage} className="flex items-center gap-2 text-muted-foreground"><Globe className="h-5 w-5" />{language === 'fr' ? 'English' : 'Français'}</button>
                <Button variant="premium" size="lg" asChild><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.bookCall')}</a></Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
