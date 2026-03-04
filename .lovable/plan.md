

# Plan d'Action : Refonte Premium + Portfolio Reel + Presentation Investisseurs

Ce plan transforme le site en une vitrine ultra-premium prete pour la presentation investisseurs dans 1H. Tout en francais par defaut, suppression de toutes les videos, ajout d'animations tech futuristes, portfolio reel depuis dominiqkmendy.com, et correction du logo partout.

---

## 1. Logo et Favicon — Partout

**Fichiers** : `index.html`, `Navigation.tsx`, `Footer.tsx`, `public/favicon.png`

- Copier le logo fourni (`user-uploads://...`) vers `public/favicon.png` et `src/assets/logo-main.png`
- Verifier que `index.html` pointe bien vers `/favicon.png`
- S'assurer que Navigation et Footer utilisent bien `logo-main.png` (deja fait mais a verifier)
- Supprimer toute reference a Lovable dans le code (liens, badges, etc.)

## 2. Supprimer TOUTES les videos

**Fichiers** : `HeroSection.tsx`, `DivisionsSection.tsx`, `FeaturesSection.tsx`, `ProcessSection.tsx`

- **HeroSection** : Supprimer le `<video>` et remplacer par un fond avec des elements illustratifs tech animes (particules, grille 3D, code flottant avec framer-motion)
- **DivisionsSection** : Supprimer les 3 `<video>` du background, garder les glows animes
- **FeaturesSection** : Supprimer le `<video>` background
- **ProcessSection** : Supprimer le `<video>` background

## 3. Hero Section — Ultra Futuriste Tech

**Fichier** : `HeroSection.tsx`

Remplacer la video par un arriere-plan genere en CSS/SVG avec :
- Grille de points perspective animee (CSS grid dots avec opacity pulse)
- Particules de code flottantes (`</>`, `{ }`, `AI`, `0101`) en mouvement avec framer-motion
- Lignes de circuit animees (SVG paths avec stroke-dashoffset)
- Gradient orbs animes (brand-orange, brand-blue, brand-teal) qui bougent lentement
- Garder l'image `hero-abstract.jpg` en fond subtle avec opacity 0.15

Le hero text reste en FR : "Construisez Plus Intelligemment. Croissez Plus Vite. Avec l'IA."

## 4. Tout le contenu en Francais par defaut

**Fichier** : `useLanguage.ts`

- Le `language` par defaut est deja `'fr'` — OK
- Verifier et corriger les contenus hardcodes en anglais dans les composants :
  - `ServicesSection.tsx` : les features sont hardcodees en anglais (`'Brand Strategy & Positioning'`, etc.) — les passer en francais
  - `PricingSection.tsx` : descriptions en anglais (`'Perfect for startups...'`, features en anglais) — tout passer en FR
  - `ContactSection.tsx` : `'Schedule a 30-minute discovery call...'` et `'Schedule Now'` en anglais — FR
  - `PortfolioSection.tsx` : tout le contenu est hardcode en anglais — FR
  - `TeamSection.tsx` : bios en anglais — FR
  - `HeroSection.tsx` : `'hero.line1'` = `'Build Smarter.'` meme en FR — changer en francais

## 5. Portfolio reel depuis dominiqkmendy.com

**Fichier** : `PortfolioSection.tsx`

Remplacer les 4 case studies fictives par les projets reels verifies du fondateur :

1. **SenServices** — Plateforme e-gouvernance Senegal
   - Contexte : Simplifier les demarches administratives citoyennes au Senegal
   - Action : Plateforme web React/Node.js avec automatisation administrative
   - Resultat : 1000+ utilisateurs actifs en 3 mois, reduction 70% delais

2. **Millennium Capital Invest** — Transformation digitale internationale
   - Contexte : Direction strategique transformation digitale internationale
   - Action : Pilotage de 250+ projets dans 15+ pays, integration AI
   - Resultat : 45% croissance ROI portefeuille clients

3. **Riad Royal Collection** — Marketing digital hotelier premium
   - Contexte : Collection de riads luxe a Marrakech
   - Action : 5 sites web premium + systeme reservation centralise + SEO multilingue
   - Resultat : +75% reservations directes, +120% visibilite

4. **Come And Go Ltd** — Plateforme tourisme digitale
   - Contexte : Tour operateur specialise Maroc
   - Action : Plateforme reservation + app mobile + CRM sur mesure
   - Resultat : +40% ventes, app telechargee 25,000+ fois

5. **Atlas Hospitality Consulting** — SaaS hotelier
   - Contexte : Solutions numeriques pour l'hotellerie marocaine
   - Action : Plateforme SaaS de gestion hoteliere + analytics yield management
   - Resultat : 30+ etablissements adoptes, +40% RevPAR

6. **Agro-Food Industrie** — Expansion agroalimentaire
   - Contexte : Strategie marketing et management commercial
   - Action : Equipe de 12 personnes, strategie digitale, expansion internationale
   - Resultat : 2.5M EUR CA annuel, +65% leads, 3 nouveaux marches

## 6. Team Section — Sans photo, avec Zineb

**Fichier** : `TeamSection.tsx`

- Supprimer le placeholder avatar/photo du fondateur
- Ajouter **Dominiqk Mendy** — Fondateur & CEO — "Expert international en transformation digitale, IA et innovation technologique. 18+ ans d'experience multi-regionale."
- Ajouter **Zineb FARES** — Co-fondatrice & RP — "Responsable des Relations Publiques et Partenariats Institutionnels chez Millennium Capital Invest."
- Affichage : nom + role + bio courte en glass-card, sans image, design typographique premium

## 7. Animations et effets tech futuristes

**Fichiers** : `index.css`, `tailwind.config.ts`, nouveaux composants

### Nouvelles animations CSS dans `index.css` :
- `.tech-grid` : grille de points avec perspective et animation de vague
- `.floating-code` : elements de code qui flottent avec opacity variable
- `.circuit-lines` : lignes de circuit SVG animees
- `.glow-orb` : orbes de couleur avec animation breathing
- `.particle-field` : champ de particules CSS

### Dans `tailwind.config.ts` :
- Ajouter keyframes : `orbit`, `code-float`, `circuit-draw`, `matrix-rain`

### Appliquer sur les sections :
- **DivisionsSection** : remplacer les videos par des SVG de circuit animes avec les couleurs de la division active
- **FeaturesSection** : ajouter un grid de points en fond au lieu de la video
- **ProcessSection** : ajouter des lignes de connexion animees entre les etapes au lieu de la video
- **WhyUsSection** : ajouter un effet de particules subtil en fond
- **TrustSection** : ajouter un effet holographique subtil sur la citation

## 8. Design Premium ameliore

**Fichiers** : `index.css`, composants divers

- Ajouter un effet `text-shadow` metallique sur les titres h1/h2
- Ajouter des `border-gradient` animes sur les glass-cards au hover
- Micro-interactions : scale 1.02 + glow au hover sur tous les CTA
- Effet "shine" (bande lumineuse qui traverse) sur les boutons premium
- Separateurs entre sections avec le gradient brand + pulse animation
- Ajouter des elements decoratifs geometriques (hexagones, triangles) inspires du monogramme M du logo

## 9. Corrections Pricing — Tout en FR

**Fichier** : `PricingSection.tsx`

- Passer les descriptions et features en francais via des cles de traduction
- `/year` → `/an`, `/month` → `/mois`
- `'Popular'` → `'Populaire'`
- `'Custom'` → `'Sur mesure'`

## 10. Services Section — FR

**Fichier** : `ServicesSection.tsx`

- Remplacer les features hardcodees en anglais par du francais :
  - Branding : "Strategie de marque", "Systeme d'identite visuelle", "Charte graphique", "Naming & Messaging"
  - Design : "Design UI/UX", "Design produit", "Design Systems", "Prototypage & Tests"
  - Development : "Developpement Web & Mobile", "Architecture Cloud", "Developpement API", "DevOps & Infrastructure"
  - Marketing : "SEO & Strategie de contenu", "Marketing de performance", "Analytics & Reporting", "Growth Hacking"

## 11. Liens — Tout vers millenniumcapitalinvest.com

**Fichiers** : `Footer.tsx`, `Navigation.tsx`, tous les composants avec des liens

- S'assurer qu'aucun lien ne pointe vers lovable.app
- Les liens internes en `/route` sont OK (SPA)
- Le lien LinkedIn dans le footer pointe vers `https://linkedin.com` generique — le laisser ou le retirer

## 12. SEO et meta

**Fichier** : `index.html`

- Mettre le title en francais : "Millennium Capital Invest | Construisez Plus Intelligemment. Croissez Plus Vite. Avec l'IA."
- Meta description en francais
- Canonical reste sur `https://millenniumcapitalinvest.com/`

---

## Fichiers a modifier (15+)

| Fichier | Actions |
|---------|---------|
| `public/favicon.png` | Copie du nouveau logo |
| `index.html` | Meta FR, favicon |
| `src/index.css` | Nouvelles animations tech, effets, separateurs |
| `tailwind.config.ts` | Nouveaux keyframes (orbit, circuit, matrix) |
| `src/components/sections/HeroSection.tsx` | Supprimer video, ajouter fond tech anime |
| `src/components/sections/DivisionsSection.tsx` | Supprimer videos, SVG circuit |
| `src/components/sections/FeaturesSection.tsx` | Supprimer video, grid dots |
| `src/components/sections/ProcessSection.tsx` | Supprimer video, lignes animees |
| `src/components/sections/PortfolioSection.tsx` | 6 projets reels en FR |
| `src/components/sections/TeamSection.tsx` | Dominiqk + Zineb, sans photo |
| `src/components/sections/ServicesSection.tsx` | Features en FR |
| `src/components/sections/PricingSection.tsx` | Tout en FR |
| `src/components/sections/ContactSection.tsx` | Textes en FR |
| `src/components/sections/WhyUsSection.tsx` | Labels en FR |
| `src/components/sections/TrustSection.tsx` | Effet holographique |
| `src/hooks/useLanguage.ts` | Nouvelles cles FR, corriger hero lines |
| `src/pages/Index.tsx` | Title FR |

