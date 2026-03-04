

# Plan : Hero Premium + Divisions Fix + Design Futuriste

## Problemes identifies

1. **Hero** : fond noir plat, peu de profondeur visuelle — les orbs sont trop subtiles (opacity 8%), la tech-grid trop discrete (opacity 40%), et les circuit lines quasi invisibles (opacity 6-8%)
2. **DivisionsSection** : `min-h-[300vh]` avec sticky scroll — bloque le defilement sur mobile et tablette car le scroll-snap est trop agressif. Sur mobile, la colonne droite est `hidden` donc 300vh de scroll pour 3 cartes cliquables est excessif
3. **Design general** : manque de couleur et d'effets visuels impactants

---

## 1. Hero Section — Fond immersif et vivant

**Fichier** : `src/components/sections/HeroSection.tsx`

- Augmenter l'intensite des gradient orbs : `bg-brand-orange/8` → `bg-brand-orange/15`, `bg-brand-blue/8` → `bg-brand-blue/12`, `bg-brand-teal/6` → `bg-brand-teal/10`
- Augmenter la taille des orbs (600-700px) pour plus de couverture
- Ajouter un gradient mesh en fond : `bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(210,20%,6%)] to-[hsl(220,30%,4%)]` au lieu du noir pur
- Augmenter l'opacite des floating code elements : `text-primary/15` → `text-primary/25`
- Augmenter la visibilite des circuit lines SVG (stroke opacity 0.12-0.15 au lieu de 0.06-0.08)
- Ajouter un 4e orb couleur coral pour plus de richesse
- Ajouter des hexagones geometriques decoratifs animes en SVG (inspires du logo M)
- Reduire l'overlay gradient : `from-background/90` → `from-background/70` et `via-background/50` → `via-background/30`

## 2. Divisions Section — Correction scroll + responsive

**Fichier** : `src/components/sections/DivisionsSection.tsx`

**Probleme principal** : `min-h-[300vh]` + sticky sur mobile = scroll interminable et bloquant.

**Solution** :
- **Mobile/tablette** (< lg) : supprimer le sticky scroll, afficher les 3 divisions comme des cartes empilees classiques avec animations `whileInView`. Utiliser un layout vertical simple, pas de `min-h-[300vh]`
- **Desktop** (>= lg) : garder le sticky scroll mais reduire a `min-h-[200vh]` pour un defilement plus naturel
- Implementer avec un state `isMobile` via le hook `use-mobile` deja present dans le projet
- Sur mobile : 3 glass-cards empilees avec icone, numero, titre, description, et un glow colore au hover
- Ajouter des effets visuels enrichis : border gradient anime au hover, icone avec glow colore par division

## 3. Effets et couleurs premium sur tout le site

**Fichier** : `src/index.css`

- Ajouter une classe `.gradient-mesh-bg` : fond avec gradient radial multi-couleurs subtil (remplace le noir plat)
- Ajouter `.neon-glow-orange`, `.neon-glow-blue`, `.neon-glow-teal` : lueurs neon pour les elements interactifs
- Ajouter `.animated-border` : bordure gradient animee qui tourne sur les cartes premium
- Ameliorer `.glass-card` : augmenter le blur, ajouter une lueur interne plus visible
- Ajouter `.text-glow` : text-shadow colore subtil pour les titres de section

**Fichier** : `src/components/sections/TrustSection.tsx`
- Augmenter l'intensite du holographic background
- Ajouter des particules decoratives flottantes

**Fichiers** : `FeaturesSection.tsx`, `ProcessSection.tsx`, `WhyUsSection.tsx`
- Ajouter des gradient mesh backgrounds au lieu du noir pur
- Augmenter l'intensite des effets existants (tech-grid, glows)

---

## Fichiers a modifier (6)

| Fichier | Actions |
|---------|---------|
| `src/components/sections/HeroSection.tsx` | Fond immersif, orbs intensifies, hexagones SVG, overlays reduits |
| `src/components/sections/DivisionsSection.tsx` | Fix scroll mobile (cartes empilees), reduce desktop 200vh, effets visuels |
| `src/index.css` | Nouvelles classes (gradient-mesh, neon-glow, animated-border, text-glow) |
| `src/components/sections/TrustSection.tsx` | Holographic intensifie, particules |
| `src/components/sections/FeaturesSection.tsx` | Gradient mesh background |
| `src/components/sections/ProcessSection.tsx` | Gradient mesh background |

