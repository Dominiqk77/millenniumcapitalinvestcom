

# Plan de mise a jour complete — Institutional Lead Machine

---

## Vue d'ensemble

Ce plan couvre 4 priorites : fact-checking/credibilite, creation des pages manquantes (Solutions, Products, Partnerships, Investor Deck), conversion/UX, et SEO. Toutes les pages seront bilingues FR/EN.

---

## PRIORITE 0 — Corrections factuelles

### 1. Supprimer "Registered Agent" du site public
- **Fichiers** : `src/pages/About.tsx` (ligne 126), `src/pages/TermsOfService.tsx` (section 6), `src/components/layout/Footer.tsx` (ligne legal)
- Retirer toute mention de "Wyoming Registered Agent Services" ou "Company Sage Agents LLC"
- Garder uniquement : "Millennium Capital Invest LLC — State of Wyoming, USA — Entity ID: 2025-001724094"

### 2. Reformuler "Global Operations / Hubs"
- **Fichier** : `src/pages/About.tsx` (lignes 7-12, 79-104)
- Remplacer le wording "hubs" par "Regions served" / "Delivery and partnerships focus"
- Retirer les descriptions qui impliquent des bureaux physiques (ex: "Corporate headquarters", "GDPR operations")
- Nouveau wording :
  - Americas : "Corporate registration and US market coverage"
  - Europe : "EU regulatory expertise and GDPR advisory"
  - Africa : "GovTech deployment focus and digital sovereignty initiatives"
  - Middle East : "FinTech expansion and regional partnerships"

### 3. Dates "Last updated"
- **Fichiers** : `src/pages/PrivacyPolicy.tsx` (ligne 28), `src/pages/TermsOfService.tsx`
- Remplacer "February 2026" par "2025" (date de creation de l'entite) ou un format ISO dynamique

---

## PRIORITE 1 — Creation des 4 pages manquantes

### A. `/solutions` — `src/pages/Solutions.tsx`
- Page avec 4 piliers en sections alternees (fond clair/sombre)
- Chaque pilier : icone, titre, description, 3 colonnes glass-card (What we deliver / Typical engagements / Security and compliance)
- Les 4 piliers :
  1. AI Architecture and Automation (couleur orange)
  2. FinTech / RegTech Systems (couleur bleu)
  3. GovTech Platforms (couleur teal)
  4. Digital Transformation (couleur coral)
- CTA en bas : Book a call + Request deck
- Navigation et Footer inclus

### B. `/products` — `src/pages/Products.tsx`
- Page "Ecosystem Overview" avec 3 cartes produits
- **SenAdmin** (senadmin.com) — beta — teal
- **SenePay** (sene-pay.com) — en developpement — bleu
- **SenServices** (senservicesenegal.com) — beta — orange
- Disclaimer visible en haut : "Initiative privee, non officielle, phase beta, partenariats institutionnels recherches"
- Lien externe vers chaque produit
- CTA : Partner with us + Book a call

### C. `/partnerships` — `src/pages/Partnerships.tsx`
- 3 tracks en cartes glass :
  1. Public Sector and Institutions (pilot vers deployment)
  2. Integrators / ESN / Agencies (delivery partners)
  3. FinTech and Infrastructure Partners (rails/KYC/risk/payments)
- Chaque track : Who it's for / What partners get / What a pilot looks like
- Formulaire dedie "Partner with us" : nom, org, email, pays, track d'interet, message
- Confirmation visuelle premium (pas d'alert)

### D. `/investor-deck` — `src/pages/InvestorDeck.tsx`
- Page gated : formulaire de capture (nom, email, organisation, role, pays, secteur d'interet)
- Apres submit : message "Thank you — we'll send it by email"
- Pas de chiffres financiers inventes, pas de faux logos

---

## PRIORITE 1 bis — Routing, Navigation, Footer

### Routes (`src/App.tsx`)
- Ajouter 4 routes : `/solutions`, `/products`, `/partnerships`, `/investor-deck`
- Importer les 4 nouvelles pages

### Navigation (`src/components/layout/Navigation.tsx`)
- Ajouter "Solutions" et "Partnerships" dans les liens principaux du nav
- Le nav utilise actuellement des ancres `#sections` ; les nouvelles pages sont des liens `<Link to="/solutions">` etc.

### Footer (`src/components/layout/Footer.tsx`)
- Mettre a jour les colonnes de liens :
  - Company : About, Divisions, Process, Team
  - Services : Solutions (lien /solutions), Products (/products), Partnerships (/partnerships)
  - Resources : Case Studies, Pricing, Investor Deck (/investor-deck), Contact
- Retirer "Registered Agent: Wyoming Registered Agent Services" du legal footer

---

## PRIORITE 1 ter — Traductions (`src/hooks/useLanguage.ts`)

Ajouter toutes les cles FR/EN pour :
- Solutions page (~30 cles : titres, descriptions, deliverables, engagements, compliance)
- Products page (~15 cles : titres, descriptions, disclaimer, status, CTA)
- Partnerships page (~20 cles : titres, tracks, formulaire)
- Investor Deck page (~15 cles : titre, formulaire, succes)
- Navigation nouvelles entrees (solutions, partnerships)

---

## PRIORITE 2 — Conversion

### Formulaire Contact intelligent (`src/components/sections/ContactSection.tsx`)
- Ajouter les champs de qualification :
  - Type d'organisation (select : Public / Enterprise / Startup / NGO)
  - Pays
  - Besoin (AI / FinTech / GovTech / Other)
  - Timeline (select)
  - Budget range (optionnel, deja present)
- Garder la confirmation visuelle avec CheckCircle (deja en place)

### Sticky CTA (`src/components/layout/StickyCTA.tsx`)
- Ajouter un second bouton "Request Deck" sur desktop a cote de "Book a call"
- Visible uniquement en `lg:` et plus

---

## PRIORITE 3 — SEO

### Sitemap (`public/sitemap.xml`)
- Ajouter les 4 nouvelles URLs :
  - /solutions (priority 0.8, changefreq monthly)
  - /products (priority 0.7, changefreq monthly)
  - /partnerships (priority 0.7, changefreq monthly)
  - /investor-deck (priority 0.6, changefreq monthly)

### Meta par page
- Chaque nouvelle page definit `document.title` dans un `useEffect`
- Les meta OG/Twitter sont gerees dans `index.html` (SPA unique) — pas de changement necessaire sauf si SSR

---

## Fichiers a creer (4)
- `src/pages/Solutions.tsx`
- `src/pages/Products.tsx`
- `src/pages/Partnerships.tsx`
- `src/pages/InvestorDeck.tsx`

## Fichiers a modifier (8)
- `src/App.tsx` — 4 nouvelles routes
- `src/hooks/useLanguage.ts` — ~80 nouvelles cles de traduction FR/EN
- `src/components/layout/Navigation.tsx` — liens Solutions, Partnerships
- `src/components/layout/Footer.tsx` — liens mis a jour + retrait registered agent
- `src/pages/About.tsx` — retrait registered agent + reformulation hubs
- `src/pages/PrivacyPolicy.tsx` — date coherente
- `src/pages/TermsOfService.tsx` — retrait registered agent + date
- `src/components/sections/ContactSection.tsx` — champs qualification
- `src/components/layout/StickyCTA.tsx` — bouton Request Deck desktop
- `public/sitemap.xml` — 4 nouvelles URLs

