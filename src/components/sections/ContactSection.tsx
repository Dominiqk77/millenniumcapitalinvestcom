import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, FileText, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', orgType: '', country: '', need: '', timeline: '', budget: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', orgType: '', country: '', need: '', timeline: '', budget: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl metallic-text"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            {t('cta.subtitle')}
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card-glow group p-8 transition-all">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t('cta.book')}</h3>
                <p className="mb-6 text-muted-foreground">
                  {t('cta.book.desc')}
                </p>
                <Button variant="premium" size="lg" className="w-full btn-shine" asChild>
                  <a href="#contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    {t('cta.book.btn')}
                  </a>
                </Button>
              </div>

              <div className="glass-card-glow group p-8 transition-all">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t('cta.deck')}</h3>
                <p className="mb-6 text-muted-foreground">
                  {t('cta.deck.desc')}
                </p>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="/investor-deck">
                    <FileText className="mr-2 h-5 w-5" />
                    {t('cta.deck')}
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="glass-card-glow flex flex-col items-center justify-center p-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-brand-teal" />
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">{t('contact.success')}</h3>
                  <p className="text-muted-foreground">{t('contact.successDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card-glow p-8">
                  <h3 className="mb-6 text-xl font-semibold text-foreground">{t('contact.title')}</h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">{t('contact.name')}</label>
                        <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-secondary/50" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">{t('contact.email')}</label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-secondary/50" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">{t('contact.company')}</label>
                        <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-secondary/50" />
                      </div>
                      <div>
                        <label htmlFor="orgType" className="mb-2 block text-sm font-medium text-foreground">{t('contact.orgType')}</label>
                        <select id="orgType" value={formData.orgType} onChange={(e) => setFormData({ ...formData, orgType: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">—</option>
                          <option value="public">{t('contact.orgType.public')}</option>
                          <option value="enterprise">{t('contact.orgType.enterprise')}</option>
                          <option value="startup">{t('contact.orgType.startup')}</option>
                          <option value="ngo">{t('contact.orgType.ngo')}</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="country" className="mb-2 block text-sm font-medium text-foreground">{t('contact.country')}</label>
                        <Input id="country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="bg-secondary/50" />
                      </div>
                      <div>
                        <label htmlFor="need" className="mb-2 block text-sm font-medium text-foreground">{t('contact.need')}</label>
                        <select id="need" value={formData.need} onChange={(e) => setFormData({ ...formData, need: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">—</option>
                          <option value="ai">{t('contact.need.ai')}</option>
                          <option value="fintech">{t('contact.need.fintech')}</option>
                          <option value="govtech">{t('contact.need.govtech')}</option>
                          <option value="other">{t('contact.need.other')}</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-foreground">{t('contact.timeline')}</label>
                        <select id="timeline" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                          <option value="">—</option>
                          <option value="immediate">{t('contact.timeline.immediate')}</option>
                          <option value="quarter">{t('contact.timeline.quarter')}</option>
                          <option value="semester">{t('contact.timeline.semester')}</option>
                          <option value="exploring">{t('contact.timeline.exploring')}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">{t('contact.budget')}</label>
                        <Input id="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} placeholder="ex. €50K–€200K" className="bg-secondary/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">{t('contact.message')}</label>
                      <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} required className="bg-secondary/50" />
                    </div>
                    <Button type="submit" variant="premium" size="lg" className="w-full btn-shine" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />{t('contact.sending')}</>
                      ) : (
                        <><Send className="mr-2 h-5 w-5" />{t('contact.send')}</>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
