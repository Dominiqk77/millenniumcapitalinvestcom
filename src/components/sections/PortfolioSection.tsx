import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Globe, Building2, Plane, Hotel, Leaf, Monitor } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const caseStudies = [
  { id: 1, title: 'SenServices', category: 'GovTech', context: 'Simplifier les démarches administratives citoyennes au Sénégal via une plateforme digitale moderne.', action: 'Conception et développement d\'une plateforme React/Node.js avec automatisation des processus administratifs.', result: '1 000+ utilisateurs actifs en 3 mois | Réduction 70% des délais', tags: ['GovTech', 'E-gouvernance', 'React'], tagColors: ['badge-teal', 'badge-blue', 'badge-orange'], icon: Monitor, url: 'https://senservicesenegal.com' },
  { id: 2, title: 'Millennium Capital Invest', category: 'Transformation Digitale', context: 'Direction stratégique d\'une entreprise internationale spécialisée dans la transformation digitale et l\'IA.', action: 'Pilotage de 250+ projets dans 15+ pays, intégration IA et technologies émergentes pour l\'innovation business.', result: '+45% croissance ROI portefeuille clients | 20+ pays', tags: ['Stratégie', 'IA', 'International'], tagColors: ['badge-orange', 'badge-blue', 'badge-teal'], icon: Globe },
  { id: 3, title: 'Riad Royal Collection', category: 'Marketing Digital', context: 'Collection de riads de luxe à Marrakech nécessitant une présence en ligne premium et une optimisation des réservations.', action: '5 sites web premium + système de réservation centralisé + stratégie SEO multilingue (FR/EN/AR).', result: '+75% réservations directes | +120% visibilité organique', tags: ['Hôtellerie', 'SEO', 'Web'], tagColors: ['badge-coral', 'badge-teal', 'badge-blue'], icon: Hotel },
  { id: 4, title: 'Come And Go Ltd', category: 'Tourisme Digital', context: 'Tour opérateur spécialisé Maroc — besoin d\'une plateforme de réservation et d\'une app mobile.', action: 'Plateforme de réservation en ligne + application mobile de guide touristique + CRM sur mesure.', result: '+40% ventes | 25 000+ téléchargements app', tags: ['Tourisme', 'Mobile', 'CRM'], tagColors: ['badge-blue', 'badge-orange', 'badge-teal'], icon: Plane },
  { id: 5, title: 'Atlas Hospitality Consulting', category: 'SaaS Hôtelier', context: 'Solutions numériques sur mesure pour l\'industrie hôtelière marocaine.', action: 'Plateforme SaaS de gestion hôtelière + analytics yield management + marketing automation.', result: '30+ établissements adoptés | +40% RevPAR moyen', tags: ['SaaS', 'Hôtellerie', 'Analytics'], tagColors: ['badge-teal', 'badge-coral', 'badge-blue'], icon: Building2 },
  { id: 6, title: 'Agro-Food Industrie', category: 'Agroalimentaire', context: 'Stratégie marketing digital et management commercial pour expansion internationale.', action: 'Direction d\'équipe de 12 personnes, stratégie digitale, expansion sur 3 nouveaux marchés.', result: '2,5M€ CA annuel | +65% leads | 3 nouveaux marchés', tags: ['Marketing', 'Commerce', 'International'], tagColors: ['badge-orange', 'badge-teal', 'badge-blue'], icon: Leaf },
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
              <motion.div key={study.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="glass-card-glow group relative transition-all duration-500">
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
