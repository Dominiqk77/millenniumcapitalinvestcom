import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const products = [
  { key: 'senadmin', url: 'https://senadmin.com', statusKey: 'products.beta', badgeClass: 'badge-teal', glowColor: 'brand-teal' },
  { key: 'senepay', url: 'https://sene-pay.com', statusKey: 'products.development', badgeClass: 'badge-blue', glowColor: 'brand-blue' },
  { key: 'senservices', url: 'https://senservicesenegal.com', statusKey: 'products.beta', badgeClass: 'badge-orange', glowColor: 'brand-orange' },
];

const Products = () => {
  const { t } = useLanguage();
  useEffect(() => { document.title = 'Products — Millennium Capital Invest'; }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative overflow-hidden bg-background-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-brand-teal/10 blur-[150px]" />
          <div className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-[150px]" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 text-4xl font-medium text-foreground md:text-5xl lg:text-6xl">{t('products.title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('products.subtitle')}</motion.p>
        </div>
      </section>

      <div className="section-container -mt-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="glass-card flex items-start gap-4 p-5 border-brand-orange/30">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <p className="text-sm text-muted-foreground">{t('products.disclaimer')}</p>
        </motion.div>
      </div>

      <section className="section-container py-20 lg:py-28">
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div key={product.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="glass-card flex flex-col p-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-medium text-foreground">{t(`products.${product.key}.title`)}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-medium border ${product.badgeClass}`}>{t(product.statusKey)}</span>
              </div>
              <p className="mb-8 flex-1 text-muted-foreground">{t(`products.${product.key}.desc`)}</p>
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground">
                <ExternalLink className="h-4 w-4" />{t('products.visit')}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-background-deep py-20">
        <div className="section-container text-center">
          <h2 className="mb-6 text-3xl font-medium text-foreground">{t('products.cta')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="premium" size="lg" asChild><Link to="/partnerships">{t('partnerships.formSubmit')}</Link></Button>
            <Button variant="outline" size="lg" asChild><a href="/#contact"><Calendar className="mr-2 h-5 w-5" />{t('cta.book')}</a></Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
