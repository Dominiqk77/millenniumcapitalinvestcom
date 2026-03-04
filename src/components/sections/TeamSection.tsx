import { motion } from 'framer-motion';
import { MapPin, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const team = [
  {
    name: 'Dominiqk Mendy',
    role: 'Fondateur & CEO',
    bio: 'Expert international en transformation digitale, IA et innovation technologique. 18+ ans d\'expérience multi-régionale (US, Europe, Afrique, Moyen-Orient). Pilotage de 250+ projets dans 15+ pays.',
    initials: 'DM',
    accentColor: 'brand-orange',
  },
  {
    name: 'Zineb FARES',
    role: 'Co-fondatrice & Relations Publiques',
    bio: 'Responsable des Relations Publiques et Partenariats Institutionnels chez Millennium Capital Invest. Stratégie de communication et développement des relations avec les parties prenantes clés.',
    initials: 'ZF',
    accentColor: 'brand-teal',
  },
];

const locations = [
  { region: 'Amériques', city: 'Wyoming, USA', flag: '🇺🇸', desc: 'Siège social & couverture marché US' },
  { region: 'Europe', city: 'Paris, France', flag: '🇫🇷', desc: 'Expertise réglementaire UE & RGPD' },
  { region: 'Afrique', city: 'Dakar, Sénégal', flag: '🇸🇳', desc: 'Déploiement GovTech & souveraineté numérique' },
  { region: 'Moyen-Orient', city: 'Dubaï, EAU', flag: '🇦🇪', desc: 'Expansion FinTech & partenariats régionaux' },
];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t('team.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl metallic-text"
          >
            {t('team.operations')}
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-glow p-8"
              >
                <div className="flex items-start gap-6">
                  {/* Initials avatar */}
                  <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-${member.accentColor}/15 border border-${member.accentColor}/30`}>
                    <span className={`text-2xl font-bold text-${member.accentColor}`}>{member.initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <Award className="h-5 w-5 text-primary/50" />
                    </div>
                    <p className="mb-3 text-sm font-semibold text-primary">{member.role}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Global Locations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card-glow group p-6 transition-all"
                >
                  <div className="mb-3 text-3xl">{location.flag}</div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {location.region}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{location.city}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{location.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
