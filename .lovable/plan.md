

# Plan : Police Satoshi + Réduction du gras

## Constat

- **trycook.ai** utilise la police **Satoshi** (visible dans les classes CSS `satoshi_76660b73`). C'est une police géométrique moderne, clean, très tech — parfaite pour le positionnement Millennium.
- Le site actuel utilise **Inter** (sans) et **Playfair Display** (serif).
- Il y a **216 occurrences** de `font-bold` / `font-semibold` / `font-extrabold` dans les sections — trop agressif.

## Actions

### 1. Remplacer Inter par Satoshi

**Fichiers** : `src/index.css`, `tailwind.config.ts`

- Remplacer l'import Google Fonts Inter par Satoshi depuis `cdn.fontshare.com` :
  ```
  @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap');
  ```
- Dans `tailwind.config.ts` : `sans: ['Satoshi', 'system-ui', 'sans-serif']`
- Dans `index.css` : `--font-sans: 'Satoshi', system-ui, sans-serif`
- Garder Playfair Display pour les accents serif (italiques décoratifs)

### 2. Réduire le gras partout

**Tous les fichiers sections** (~11 fichiers) :

- **Grands titres** (`text-3xl`+ avec `font-bold`) → `font-medium` (weight 500)
- **Sous-titres** (`text-xl`/`text-2xl` avec `font-semibold`) → `font-medium`
- **Labels/badges** (`text-sm font-semibold uppercase`) → `font-medium`
- **Prix** (`text-4xl font-bold`) → `font-semibold` (garder un peu plus de poids pour les chiffres)
- **Noms d'équipe / titres de cartes** (`font-semibold`) → `font-medium`

Fichiers concernés :
- `HeroSection.tsx` — titres hero
- `DivisionsSection.tsx` — titres divisions
- `ServicesSection.tsx` — titres services
- `FeaturesSection.tsx` — titres features
- `ProcessSection.tsx` — titres étapes
- `PortfolioSection.tsx` — titres projets
- `PricingSection.tsx` — titres plans + prix
- `TeamSection.tsx` — noms
- `ContactSection.tsx` — titres formulaire
- `WhyUsSection.tsx` — titres avantages
- `TrustSection.tsx` — citation
- `Navigation.tsx` — liens nav
- `Footer.tsx` — titres colonnes
- Pages : `Solutions.tsx`, `Products.tsx`, `Partnerships.tsx`, `InvestorDeck.tsx`, `About.tsx`

### Résumé des fichiers à modifier

| Fichier | Action |
|---------|--------|
| `src/index.css` | Import Satoshi, supprimer Inter |
| `tailwind.config.ts` | `sans: ['Satoshi', ...]` |
| ~18 fichiers composants/pages | `font-bold` → `font-medium`, `font-semibold` → `font-medium` |

