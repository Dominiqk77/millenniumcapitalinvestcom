# Plan : Corrections build + Vidéo Hero + Footer + Section AI Tools + Navbar + Liens

## Erreurs de build à corriger

### 1. `PortfolioSection.tsx` ligne 9

Le texte `d'une` contient une apostrophe typographique (`'`) au lieu d'une apostrophe droite, ce qui casse le parsing JS. Il faut échapper ou remplacer par `\'` ou réécrire la string.

### 2. `PricingSection.tsx` ligne 10

Double virgule `,,` dans l'objet enterprise : `{ id: 'enterprise', nameKey: 'pricing.enterprise', , description:` — supprimer la virgule en trop.

---

## Modifications

### 3. Vidéo Hero

- Copier `user-uploads://MILLENNIUM_CAPITAL_INVEST_2_1.mp4` vers `public/videos/hero-bg.mp4`
- La vidéo est déjà référencée dans HeroSection.tsx avec `autoPlay muted loop playsInline` — OK
- Renforcer l'overlay sombre dégradé pour garantir la lisibilité du texte : utiliser un multi-layer gradient (top-to-bottom + radial center dark) avec des opacités fortes (0.7-0.85)

### 4. Footer — Nouveau texte

- Ligne 43 : remplacer `"Plateformes AI, FinTech et GovTech..."` par le texte fourni : `"Millennium Capital Invest est une entreprise technologique spécialisée dans la conception de plateformes de nouvelle génération, axée sur l'intelligence artificielle (IA), la FinTech et la GovTech. Forte de plus de 18 ans d'expérience, elle propose des solutions stratégiques et des services numériques sur mesure pour optimiser les performances des entreprises."`

### 5. Section logos outils IA

- Créer un nouveau composant `AIToolsSection.tsx` avec l'image uploadée (`user-uploads://image-22.webp`) copiée vers `src/assets/ai-tools-logos.webp`
- Section avec titre "Nos Outils & Technologies IA", description courte, et l'image centrée dans un glass-card
- Ajouter dans `Index.tsx` après la section Features ou Services

### 6. Navbar — Bouton Accueil + Logo → home

- Ajouter `{ href: '/', label: 'Accueil' }` en premier dans `navLinks`
- Changer le logo `href="#"` → `href="/"`
- Vérifier que tous les liens nav utilisent les bons chemins :
  - `/` — Accueil
  - `/solutions` — Solutions (page complète)
  - `#divisions` — Divisions (section homepage)
  - `/partnerships` — Partenariats (page complète)
  - `#portfolio` — Portfolio (section homepage)
  - `#pricing` — Tarifs (section homepage)
  - `#contact` — Contact (section homepage)

### 7. Liens Portfolio → projets réels

- Vérifier que les `url` dans chaque case study sont correctes :
  - `https://sene-pay.com` ✓
  - `https://mafactureprosn.com` ✓
  - `https://senservicessenegal.com` ✓
  - `https://senadmin.com` ✓
  - `https://mydcardio.com` ✓
  - `https://senstock.com` ✓
  - `https://dominiqkmendy.com` ✓
- S'assurer que les liens ouvrent en `target="_blank" rel="noopener noreferrer"`
- `sur la homepag au dessus du header ou navbar il ya du texte satoshi qui s'affiche et que tu dois supprimer toutes les pages doivent etre parfaite sans erreur corrige tout ce qu'il faudra sans rien casser`

---

## Fichiers à modifier (7)


| Fichier                                        | Action                           |
| ---------------------------------------------- | -------------------------------- |
| `public/videos/hero-bg.mp4`                    | Copie nouvelle vidéo             |
| `src/assets/ai-tools-logos.webp`               | Copie image logos IA             |
| `src/components/sections/PortfolioSection.tsx` | Fix apostrophe ligne 9           |
| `src/components/sections/PricingSection.tsx`   | Fix double virgule ligne 10      |
| `src/components/sections/HeroSection.tsx`      | Overlay renforcé multi-layer     |
| `src/components/layout/Footer.tsx`             | Nouveau texte description        |
| `src/components/layout/Navigation.tsx`         | Ajout Accueil + logo → `/`       |
| `src/components/sections/AIToolsSection.tsx`   | Nouvelle section logos outils IA |
| `src/pages/Index.tsx`                          | Ajouter AIToolsSection           |
