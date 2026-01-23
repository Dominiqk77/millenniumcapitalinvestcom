import { motion } from 'framer-motion';
import { MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const team = [
  {
    name: 'Dominiqk Mendy',
    role: 'Founder & CEO',
    bio: 'Global AI Expert & Digital Sovereignty Architect with 15+ years experience across US, Europe, Africa, and Middle East. Pioneering institutional-grade technology solutions.',
    linkedin: 'https://linkedin.com',
  },
];

const locations = [
  { region: 'Americas', city: 'Wyoming, USA', flag: '🇺🇸' },
  { region: 'Europe', city: 'Paris, France', flag: '🇫🇷' },
  { region: 'Africa', city: 'Dakar, Senegal', flag: '🇸🇳' },
  { region: 'Middle East', city: 'Dubai, UAE', flag: '🇦🇪' },
];

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
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
            className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            {t('team.operations')}
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Team Member */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {team.map((member) => (
              <div key={member.name} className="glass-card p-8">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 ring-2 ring-primary/20" />
                    <div className="absolute -bottom-2 -right-2 rounded-full bg-primary p-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Linkedin className="h-4 w-4 text-primary-foreground" />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                    <p className="mb-4 text-primary">{member.role}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
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
                  className="glass-card group p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-3 text-3xl">{location.flag}</div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {location.region}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{location.city}</span>
                  </div>
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
