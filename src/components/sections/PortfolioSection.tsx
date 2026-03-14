import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Globe, Building2, Plane, Hotel, Leaf, Monitor, CreditCard, Shield, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const caseStudies = [
  { id: 1, title: 'SenePay', category: 'FinTech', context: 'Plateforme de paiement digitale pour PME sénégalaises acceptant mobile money et cartes bancaires.', action: 'Développement API paiement intégrée Orange Money, Wave, Free Money. Dashboard merchant. Webhook sécurisé.', result: '268 marchands actifs | 50+ intégrations | Réduction 40% des délais', tags: ['FinTech', 'API', 'Sénégal'], tagColors: ['badge-blue', 'badge-teal', 'badge-orange'], icon: CreditCard, url: 'https://sene-pay.com' },
  { id: 2, title: 'MaFactureProSN', category: 'SaaS Facturation', context: 'Solution de facturation en ligne conforme aux normes DGI Sénégal pour PME et freelances.', action: 'Plateforme SaaS avec TVA 18%, NINEA, templates conformes, intégration paiement SenePay.', result: '150+ clients actifs | 3 000+ factures mensuelles | Conformité DGI 100%', tags: ['SaaS', 'Compliance', 'Sénégal'], tagColors: ['badge-orange', 'badge-blue', 'badge-teal'], icon: CreditCard, url: 'https://mafactureprosn.com' },
  { id: 3, title: 'SenServices', category: 'GovTech', context: 'Simplifier les démarches administratives citoyennes au Sénégal via une plateforme digitale moderne.', action: 'Conception et développement d'une plateforme React/Node.js avec automatisation des processus administratifs.', result: '1 000+ utilisateurs actifs | Réduction 70% des délais administratifs', tags: ['GovTech', 'E-gouvernance', 'React'], tagColors: ['badge-teal', 'badge-blue', 'badge-orange'], icon: Monitor, url: 'https://senservicessenegal.com' },
  { id: 4, title: 'SenAdmin', category: 'GovTech B2G', context: 'Backend gouvernemental pour gestion administrative centralisée des institutions sénégalaises.', action: 'Plateforme B2G avec authentification sécurisée, gestion documentaire, audit trail, API institutionnelle.', result: '2 ministères en déploiement | +300% efficacité administrative | Sécurité bancaire', tags: ['GovTech', 'B2G', 'Admin'], tagColors: ['badge-teal', 'badge-orange', 'badge-blue'], icon: Shield, url: 'https://senadmin.com' },
  { id: 5, title: 'MyDiagnostick', category: 'HealthTech', context: 'Application mobile détection intelligente des fibrillations auriculaires via technologie ECG et IA.', action: 'App React Native avec capteur ECG, modèle IA détection FA, dashboard patient et médecin.', result: 'Déploiement alpha | Détection 92% accuracy | Partnership 5+ cliniques', tags: ['HealthTech', 'IA', 'Mobile'], tagColors: ['badge-coral', 'badge-blue', 'badge-teal'], icon: Heart, url: 'https://mydcardio.com' },
  { id: 6, title: 'SenStock', category: 'Stock Management', context: 'Solution de gestion de stock pour PME sénégalaises avec interface mobile-first et rapports automatisés.', action: 'Plateforme cloud avec suivi inventaire temps réel, prédictions IA, intégration e-commerce.', result: '500+ PME sénégalaises | Réduction 50% des ruptures de stock | ROI positif 3 mois', tags: ['SaaS', 'Sénégal', 'Inventory'], tagColors: ['badge-blue', 'badge-teal', 'badge-orange'], icon: Building2, url: 'https://senstock.com' },
  { id: 7, title: 'DominiqkMendy.com', category: 'Personal Brand', context: 'Portfolio digital et plateforme de consultation en transformation digitale et IA pour leaders africains.', action: 'Site personnel combinant portfolio, blog, calendrier de consultation, case studies, et système de réservation.', result: 'Positionnement expert continental | 100+ leads mensuels | Autorité thought-leader', tags: ['Personal Brand', 'Consulting', 'IA'], tagColors: ['badge-orange', 'badge-blue', 'badge-teal'], icon: Monitor, url: 'https://dominiqkmendy.com' },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-teal/5 blur-[150px]" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-orange/5 blur-[150px]" />
      </div>
      <div className="section-container relative z-10">
        <div className="mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">{t('cases.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-foreground md:text-4xl lg:text-5xl metallic-text">{t('cases.subtitle')}</motion.h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div key={study.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl group relative transition-all duration-500">
                <div className="border-b border-border/30 p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-medium ${study.tagColors[tagIndex]}`}>{tag}</span>
                      ))}
                    </div>
                    {study.url ? (
                      <a href={study.url} target="_blank" rel="noopener noreferrer"><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></a>
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/30" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="rounded-lg bg-primary/10 p-2"><Icon className="h-5 w-5 text-primary" /></div>
                    <h3 className="text-lg font-medium text-foreground">{study.title}</h3>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{study.category}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4 space-y-3">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Contexte</span>
                      <p className="text-sm text-foreground">{study.context}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Action</span>
                      <p className="text-sm text-foreground">{study.action}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-4 border border-primary/20">
                    <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-primary">{study.result}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-12 text-center">
          <Button variant="outlinePrimary" size="lg" asChild><a href="#contact">{t('portfolio.cta')}</a></Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
