# Hand of God

Site officiel vitrine de l'ONG Hand of God, construit avec Next.js App Router, TypeScript, Tailwind CSS, Framer Motion et Sanity CMS.

## Commandes

```bash
npm install
npm run dev
npm run build
npm run lint
```

Studio Sanity local :

```bash
npm run sanity
```

## Variables d'environnement

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Le site fonctionne avec des donnees locales placeholder tant que Sanity n'est pas configure.

## Structure

- `src/app` : routes App Router et metadata par page
- `src/components/ui` : design system reutilisable
- `src/components/sections` : sections de pages, formulaires, galerie
- `src/components/layout` : navbar, footer, bouton de don flottant
- `src/data` : donnees placeholder bilingues
- `src/lib` : i18n, types, helper Sanity
- `src/sanity/schemas` : schemas CMS

## A remplacer avant mise en production

- Logo final
- Vraies photos et videos
- Liens Orange Money, Wave, PayPal et carte bancaire
- Textes definitifs
- Informations de contact officielles
