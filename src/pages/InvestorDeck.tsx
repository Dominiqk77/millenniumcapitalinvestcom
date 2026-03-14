import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Loader2, Send, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const InvestorDeck = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', org: '', role: '', country: '', interest: '' });

  useEffect(() => { document.title = 'Investor Deck — Millennium Capital Invest'; }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm({ name: '', email: '', org: '', role: '', country: '', interest: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative overflow-hidden bg-background-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute right-1/3 bottom-1/3 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-6 inline-flex rounded-xl bg-primary/10 p-4"><FileText className="h-10 w-10 text-primary" /></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 text-4xl font-medium text-foreground md:text-5xl lg:text-6xl">{t('investor.title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('investor.subtitle')}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mx-auto mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground/70"><Shield className="h-4 w-4" />{t('investor.note')}</motion.p>
        </div>
      </section>

      <section className="section-container py-20 lg:py-28">
        <div className="mx-auto max-w-lg">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card flex flex-col items-center justify-center p-12 text-center">
              <CheckCircle className="mb-4 h-16 w-16 text-brand-teal" />
              <h3 className="mb-2 text-2xl font-medium text-foreground">{t('investor.success')}</h3>
              <p className="text-muted-foreground">{t('investor.successDesc')}</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formName')}</label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary/50" /></div>
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formEmail')}</label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-secondary/50" /></div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formOrg')}</label><Input value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} required className="bg-secondary/50" /></div>
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formRole')}</label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required className="bg-secondary/50" /></div>
              </div>
              <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formCountry')}</label><Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required className="bg-secondary/50" /></div>
              <div><label className="mb-2 block text-sm font-medium text-foreground">{t('investor.formInterest')}</label><select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} required className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="" disabled>—</option><option value="govtech">{t('investor.formInterest.govtech')}</option><option value="fintech">{t('investor.formInterest.fintech')}</option><option value="ai">{t('investor.formInterest.ai')}</option><option value="all">{t('investor.formInterest.all')}</option></select></div>
              <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />{t('investor.formSending')}</>) : (<><Send className="mr-2 h-5 w-5" />{t('investor.formSubmit')}</>)}
              </Button>
            </motion.form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InvestorDeck;
