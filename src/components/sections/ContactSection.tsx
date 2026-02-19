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
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background-deep py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
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
            {/* CTA Cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Book a Call Card */}
              <div className="glass-card group p-8 transition-all hover:border-primary/50">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {t('cta.book')}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Schedule a 30-minute discovery call to discuss your project requirements and explore how we can help.
                </p>
                <Button variant="premium" size="lg" className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Now
                </Button>
              </div>

              {/* Investor Deck Card */}
              <div className="glass-card group p-8 transition-all hover:border-primary/50">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {t('cta.deck')}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Access our detailed investor presentation with financial projections, IP valuation, and growth strategy.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  <FileText className="mr-2 h-5 w-5" />
                  Request Deck
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="glass-card flex flex-col items-center justify-center p-12 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-brand-teal" />
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8">
                  <h3 className="mb-6 text-xl font-semibold text-foreground">
                    Send us a message
                  </h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                        <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required className="bg-secondary/50" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" required className="bg-secondary/50" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">Company</label>
                        <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your company" className="bg-secondary/50" />
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">Budget Range</label>
                        <Input id="budget" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} placeholder="e.g. €50K–€200K" className="bg-secondary/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                      <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} required className="bg-secondary/50" />
                    </div>
                    <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending...</>
                      ) : (
                        <><Send className="mr-2 h-5 w-5" />Send Message</>
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
