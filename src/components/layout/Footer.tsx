import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import logoMain from '@/assets/logo-main.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    entreprise: [
      { label: 'À propos', href: '/about' },
      { label: 'Divisions', href: '#divisions' },
      { label: 'Processus', href: '#process' },
      { label: 'Équipe', href: '#team' },
    ],
    services: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Produits', href: '/products' },
      { label: 'Partenariats', href: '/partnerships' },
      { label: 'Consulting', href: '#services' },
    ],
    ressources: [
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'Investor Deck', href: '/investor-deck' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="relative border-t border-border/30 bg-background-deep">
      <div className="absolute top-0 left-0 right-0 h-px gradient-brand-bg opacity-30" />
      
      <div className="section-container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-3 group">
              <img src={logoMain} alt="Millennium Capital Invest" className="h-12 w-auto transition-transform group-hover:scale-105" />
              <div>
                <span className="block text-xl font-semibold text-foreground">Millennium Capital Invest</span>
                <span className="block text-xs text-muted-foreground">LLC • Wyoming, USA</span>
              </div>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plateformes AI, FinTech et GovTech de nouvelle génération pour les environnements à enjeux critiques. Souveraineté numérique depuis 2009.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:contact@millenniumcapitalinvest.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                contact@millenniumcapitalinvest.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Wyoming, USA | Paris | Dakar
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-brand-orange" />
              <span className="h-3 w-3 rounded-full bg-brand-coral" />
              <span className="h-3 w-3 rounded-full bg-brand-blue" />
              <span className="h-3 w-3 rounded-full bg-brand-teal" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Entreprise</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Ressources</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-glow mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Millennium Capital Invest LLC. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">{t('footer.privacy')}</a>
            <a href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">{t('footer.terms')}</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          {t('footer.legal')} — Entity ID: 2025-001724094
        </p>
      </div>
    </footer>
  );
};

export default Footer;
