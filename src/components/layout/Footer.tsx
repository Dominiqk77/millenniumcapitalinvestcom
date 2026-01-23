import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import logoLight from '@/assets/logo-light.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Divisions', href: '#divisions' },
      { label: 'Process', href: '#process' },
      { label: 'Team', href: '#team' },
    ],
    services: [
      { label: 'GovTech Platforms', href: '#divisions' },
      { label: 'FinTech Systems', href: '#divisions' },
      { label: 'AI Architecture', href: '#divisions' },
      { label: 'Consulting', href: '#services' },
    ],
    resources: [
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
      { label: 'Investor Deck', href: '#contact' },
    ],
  };

  return (
    <footer className="relative border-t border-border/30 bg-background-deep">
      <div className="section-container py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              <img src={logoLight} alt="Millennium Capital Invest" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-foreground">
                Millennium Capital Invest
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Next-generation AI, FinTech, and GovTech platforms for high-stakes environments.
              Building digital sovereignty since 2009.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:contact@millenniumcapitalinvest.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@millenniumcapitalinvest.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Wyoming, USA | Paris, France | Dakar, Senegal
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow mt-12" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Millennium Capital Invest LLC. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t('footer.terms')}
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Note */}
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          {t('footer.legal')} — Registered Agent: Wyoming Registered Agent Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
