# Portfolio — Azziz Ange Kevin Diomandé

Portfolio développeur : React 19 + Vite + Tailwind CSS + Framer Motion, déployé sur GitHub Pages.

## Lancer en local
```bash
npm install
npm run dev
```

## Modifier le contenu
Tout le contenu (profil, projets, stack, parcours, services) est dans `src/data.js`.
Pour afficher un bouton « CV », place ton PDF dans `public/` puis renseigne `cv` dans `src/data.js`
(ex. `` cv: `${BASE}cv.pdf` ``).

## Déploiement
Un push sur `main` déclenche le workflow `.github/workflows/deploy.yml`.
