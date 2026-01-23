import { create } from 'zustand';

type Language = 'fr' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.process': 'Processus',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.about': 'À propos',
    'nav.divisions': 'Divisions',
    'nav.bookCall': 'Réserver un appel',
    
    // Hero
    'hero.line1': 'Build Smarter.',
    'hero.line2': 'Grow Faster.',
    'hero.line3': 'With AI.',
    'hero.subtitle': 'Nous concevons et déployons des plateformes AI, FinTech et GovTech de nouvelle génération pour les environnements à enjeux critiques — de la conformité financière américaine à la souveraineté numérique africaine. Notre propriété intellectuelle, valorisée à €2.8M, génère un ROI institutionnel mesurable.',
    'hero.cta.primary': 'Démarrer',
    'hero.cta.secondary': 'En savoir plus',
    'hero.users': '+4.7K Utilisateurs',
    'hero.scroll': 'Scroll pour découvrir',
    
    // Trust Quote
    'trust.badge': 'TRANSFORMER LES DONNÉES EN DÉCISIONS.',
    'trust.quote': 'Nous établissons le pont entre les standards internationaux de sécurité (RGPD, Conformité US) et les défis d\'implémentation les plus complexes au monde — en délivrant une technologie qui garantit performance et souveraineté totale des données.',
    'trust.role': 'Co-Fondateur & Directeur Stratégie Institutionnelle & Partenariats GovTech Globaux',
    'trust.company': 'Millennium Capital Invest LLC',
    
    // Divisions
    'divisions.title': 'Nos divisions',
    'divisions.subtitle': 'Trois couches d\'exécution. Un standard institutionnel.',
    'divisions.govtech.title': 'Plateformes GovTech Souveraines',
    'divisions.govtech.desc': 'Déployer des systèmes citoyens et administratifs sécurisés avec des workflows auditables et un contrôle juridictionnel des données.',
    'divisions.fintech.title': 'Systèmes FinTech & RegTech',
    'divisions.fintech.desc': 'Paiements, automatisation de la conformité, réduction de la fraude, reporting et outils d\'intégrité financière.',
    'divisions.ai.title': 'Architecture AI & Automatisation',
    'divisions.ai.desc': 'Agents, workflows, intelligence décisionnelle et infrastructure AI scalable.',
    
    // Why Choose Us
    'why.title': 'Pourquoi nous choisir ?',
    'why.subtitle': 'AI-Driven. Human-Focused.',
    'why.experience.title': '15+ Ans d\'Expertise Multi-Régionale',
    'why.experience.desc': 'US, Europe, Afrique, Moyen-Orient',
    'why.roi.title': '300% ROI Institutionnel Prouvé',
    'why.roi.desc': 'Efficacité financière mesurable',
    'why.security.title': 'Souveraineté, Sécurité & RGPD',
    'why.security.desc': 'Conformité totale garantie',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Solutions sur mesure pour chaque besoin',
    'services.branding': 'Identité de Marque',
    'services.design': 'Design',
    'services.development': 'Développement',
    'services.marketing': 'SEO/Marketing',
    
    // Features
    'features.title': 'Toutes les fonctionnalités en un seul endroit',
    'features.workflow': 'Moteur de Workflow Adaptatif',
    'features.workflow.desc': 'Propriété intellectuelle propriétaire',
    'features.cloud': 'Architecture Cloud Hybride Scalable',
    'features.cloud.desc': 'Docker/Kubernetes',
    'features.analytics': 'Analytics Prédictifs & Tableaux Exécutifs',
    'features.analytics.desc': 'Intelligence décisionnelle temps réel',
    'features.security': 'Sécurité FinTech & Réduction Fraude',
    'features.security.desc': 'Protection de niveau institutionnel',
    'features.transparency': 'Transparence Temps Réel & Suivi',
    'features.transparency.desc': 'Traçabilité complète des processus',
    'features.api': 'Interopérabilité via APIs Standardisées',
    'features.api.desc': 'Intégration universelle',
    
    // Process
    'process.title': 'Notre processus simple & intelligent',
    'process.step1.title': 'Découverte & Cadrage Risques',
    'process.step1.desc': 'Analyse de conformité et définition des objectifs',
    'process.step2.title': 'Architecture Souveraine & Interopérabilité',
    'process.step2.desc': 'Conception technique et intégrations',
    'process.step3.title': 'Déploiement, Formation & Reporting ROI',
    'process.step3.desc': 'Mise en production et mesure d\'impact',
    
    // Case Studies
    'cases.title': 'Success Stories',
    'cases.subtitle': 'Résultats mesurables pour nos clients',
    
    // Pricing
    'pricing.title': 'Tarifs transparents',
    'pricing.subtitle': 'Des solutions adaptées à votre échelle',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.monthly': 'Mensuel',
    'pricing.yearly': 'Annuel',
    'pricing.contact': 'Nous contacter',
    'pricing.getStarted': 'Commencer',
    
    // Team
    'team.title': 'Leadership',
    'team.operations': 'Opérations Globales',
    
    // CTA
    'cta.title': 'Prêt à automatiser plus intelligemment ?',
    'cta.subtitle': 'Construisons le futur ensemble.',
    'cta.book': 'Réserver un appel gratuit',
    'cta.deck': 'Demander le deck investisseur',
    
    // Footer
    'footer.legal': 'Société enregistrée au Wyoming, USA',
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'nav.divisions': 'Divisions',
    'nav.bookCall': 'Book a call',
    
    // Hero
    'hero.line1': 'Build Smarter.',
    'hero.line2': 'Grow Faster.',
    'hero.line3': 'With AI.',
    'hero.subtitle': 'We architect and deploy next-generation AI, FinTech, and GovTech platforms for high-stakes environments — from US financial compliance to African digital sovereignty. Our proprietary IP, valued at €2.8M, delivers measurable institutional ROI.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    'hero.users': '+4.7K Users',
    'hero.scroll': 'Scroll to explore',
    
    // Trust Quote
    'trust.badge': 'TURNING DATA INTO DECISIONS.',
    'trust.quote': 'We bridge proven international security standards (GDPR/RGPD, US Compliance) with the world\'s most complex implementation challenges — delivering technology that guarantees performance and total data sovereignty.',
    'trust.role': 'Co-Founder & Director of Institutional Strategy & Global GovTech Partnerships',
    'trust.company': 'Millennium Capital Invest LLC',
    
    // Divisions
    'divisions.title': 'Our divisions',
    'divisions.subtitle': 'Three execution layers. One institutional standard.',
    'divisions.govtech.title': 'Sovereign GovTech Platforms',
    'divisions.govtech.desc': 'Deliver secure citizen & administration systems with auditable workflows and jurisdictional data control.',
    'divisions.fintech.title': 'FinTech & RegTech Systems',
    'divisions.fintech.desc': 'Payments, compliance automation, fraud reduction, reporting, and financial integrity tooling.',
    'divisions.ai.title': 'AI Architecture & Automation',
    'divisions.ai.desc': 'Agents, workflows, decision intelligence, and scalable AI infrastructure.',
    
    // Why Choose Us
    'why.title': 'Why choose us?',
    'why.subtitle': 'AI-Driven. Human-Focused.',
    'why.experience.title': '15+ Years of Multi-Regional Expertise',
    'why.experience.desc': 'US, Europe, Africa, Middle East',
    'why.roi.title': '300% Proven Institutional ROI',
    'why.roi.desc': 'Measurable financial efficiency',
    'why.security.title': 'Sovereignty, Security & GDPR',
    'why.security.desc': 'Total compliance guaranteed',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Tailored solutions for every need',
    'services.branding': 'Branding Identity',
    'services.design': 'Design',
    'services.development': 'Development',
    'services.marketing': 'SEO/Marketing',
    
    // Features
    'features.title': 'All features in one place',
    'features.workflow': 'Adaptive Workflow Engine',
    'features.workflow.desc': 'Proprietary IP',
    'features.cloud': 'Cloud-Hybrid Scalable Architecture',
    'features.cloud.desc': 'Docker/Kubernetes',
    'features.analytics': 'Predictive Analytics & Executive Dashboards',
    'features.analytics.desc': 'Real-time decision intelligence',
    'features.security': 'FinTech Security & Fraud Reduction',
    'features.security.desc': 'Institutional-grade protection',
    'features.transparency': 'Real-Time Transparency & Tracking',
    'features.transparency.desc': 'Complete process traceability',
    'features.api': 'Interoperability via Standardized APIs',
    'features.api.desc': 'Universal integration',
    
    // Process
    'process.title': 'Our simple & smart process',
    'process.step1.title': 'Discovery & Risk Framing',
    'process.step1.desc': 'Compliance analysis and objective definition',
    'process.step2.title': 'Sovereign Architecture & Interoperability',
    'process.step2.desc': 'Technical design and integrations',
    'process.step3.title': 'Deployment, Training & ROI Reporting',
    'process.step3.desc': 'Production launch and impact measurement',
    
    // Case Studies
    'cases.title': 'Success Stories',
    'cases.subtitle': 'Measurable results for our clients',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Solutions scaled to your needs',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.contact': 'Contact Us',
    'pricing.getStarted': 'Get Started',
    
    // Team
    'team.title': 'Leadership',
    'team.operations': 'Global Operations',
    
    // CTA
    'cta.title': 'Ready to automate smarter?',
    'cta.subtitle': 'Let\'s build the future together.',
    'cta.book': 'Book a free call',
    'cta.deck': 'Request investor deck',
    
    // Footer
    'footer.legal': 'Company registered in Wyoming, USA',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
};

export const useLanguage = create<LanguageStore>((set, get) => ({
  language: 'fr',
  setLanguage: (lang) => set({ language: lang }),
  t: (key: string) => {
    const { language } = get();
    return translations[language][key] || key;
  },
}));
