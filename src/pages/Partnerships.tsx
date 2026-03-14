import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Users, Zap, CheckCircle, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const tracks = [
  { key: 'track1', icon: Landmark, badgeClass: 'badge-teal' },
  { key: 'track2', icon: Users, badgeClass: 'badge-blue' },
  { key: 'track3', icon: Zap, badgeClass: 'badge-orange' },
];

const Partnerships = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', org: '', email: '', country: '', track: '', message: '' });

  useEffect(() => { document.title = 'Partnerships — Millennium Capital Invest'; }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm({ name: '', org: '', email: '', country: '', track: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative overflow-hidden bg-background-deep pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-brand-blue/10 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-brand-teal/10 blur-[150px]" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 text-4xl font-medium text-foreground md:text-5xl lg:text-6xl">{t('partnerships.title')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('partnerships.subtitle')}</motion.p>
        </div>
      </section>

      <section className="section-container py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="glass-card flex flex-col p-8">
                <div className={`mb-4 inline-flex w-fit rounded-xl p-3 ${track.badgeClass} border`}><Icon className="h-6 w-6" /></div>
                <h3 className="mb-6 text-xl font-medium text-foreground">{t(`partnerships.${track.key}.title`)}</h3>
                <div className="space-y-5 flex-1">
                  <div><h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{t('partnerships.whoFor')}</h4><p className="text-sm text-muted-foreground">{t(`partnerships.${track.key}.who`)}</p></div>
                  <div><h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{t('partnerships.whatGet')}</h4><p className="text-sm text-muted-foreground">{t(`partnerships.${track.key}.get`)}</p></div>
                  <div><h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">{t('partnerships.pilotLooks')}</h4><p className="text-sm text-muted-foreground">{t(`partnerships.${track.key}.pilot`)}</p></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-background-deep py-20 lg:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-3xl font-medium text-foreground">{t('partnerships.formTitle')}</h2>
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card flex flex-col items-center justify-center p-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-brand-teal" />
                <h3 className="mb-2 text-2xl font-medium text-foreground">{t('partnerships.formSuccess')}</h3>
                <p className="text-muted-foreground">{t('partnerships.formSuccessDesc')}</p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formName')}</label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary/50" /></div>
                  <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formOrg')}</label><Input value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} required className="bg-secondary/50" /></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formEmail')}</label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-secondary/50" /></div>
                  <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formCountry')}</label><Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required className="bg-secondary/50" /></div>
                </div>
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formTrack')}</label><select value={form.track} onChange={(e) => setForm({ ...form, track: e.target.value })} required className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="" disabled>—</option><option value="public">{t('partnerships.track1.title')}</option><option value="integrator">{t('partnerships.track2.title')}</option><option value="fintech">{t('partnerships.track3.title')}</option></select></div>
                <div><label className="mb-2 block text-sm font-medium text-foreground">{t('partnerships.formMessage')}</label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="bg-secondary/50" /></div>
                <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />{t('partnerships.formSending')}</>) : (<><Send className="mr-2 h-5 w-5" />{t('partnerships.formSubmit')}</>)}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Partnerships;
