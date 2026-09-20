# Portfolio — Elie Katende

Site portfolio personnel : React + Vite + Tailwind CSS + Framer Motion.

## Démarrer

```bash
npm install
npm run dev     # http://127.0.0.1:5173
npm run build   # build de production dans dist/
```

## Où modifier le contenu

Tout le contenu (identité, bio, réseaux, compétences, projets, parcours, langues) est dans
**`src/data/portfolio.js`**. Aucun texte n'est écrit en dur dans les composants.

Le site est **bilingue français / anglais**. Les champs traduits s'écrivent `{ fr: '…', en: '…' }` ;
les valeurs communes aux deux langues (nom, téléphone, technos, années) restent de simples chaînes.
Les libellés d'interface sont regroupés dans l'objet `ui` en bas du fichier.

La langue est gérée par `src/i18n.jsx` : elle est devinée depuis le navigateur au premier passage,
mémorisée dans `localStorage`, et met à jour l'attribut `lang` du document. Le sélecteur FR/EN est
dans `src/components/LangSwitch.jsx`.

## Structure

- `src/components/Hero.jsx` — hero plein écran, nom sur une ligne, photo détourée devant le nom
- `src/components/Nav.jsx` — barre pilule desktop (masquée sur le hero) + overlay plein écran mobile
- `src/components/About.jsx` — bio, chiffres clés animés, langues, bouton CV
- `src/components/Skills.jsx` — deux marquees en sens opposés + pilules par catégorie
- `src/components/Projects.jsx` — liste éditoriale, aperçu qui suit le curseur, modale de détail
- `src/components/Timeline.jsx` — expériences et certifications
- `src/components/Contact.jsx` — titre géant, liens directs, formulaire (mailto) et footer
- `src/components/Cursor.jsx`, `Preloader.jsx`, `Reveal.jsx`, `MagneticLink.jsx` — interactions

Le formulaire de contact utilise **mailto:** (aucun service tiers, aucune clé à configurer).
Pour passer à Formspree ou EmailJS, remplace `handleSubmit` dans `Contact.jsx`.

Le bouton « Télécharger mon CV » sert `public/CV_Elie_Katende_FR.pdf` en français et
`public/CV_Elie_Katende_EN.pdf` en anglais (voir `profile.cvUrl`).

## Mise en ligne

Le site est publié sur GitHub Pages à l'adresse **https://eliott243.github.io**.
Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml`, qui compile le projet et
redéploie le site. La source Pages du dépôt doit rester sur « GitHub Actions ».

## À compléter

1. `public/projects/*.svg` — remplacer les 5 aperçus placeholder par de vraies captures
2. Liens démo / dépôt des projets autres que FinLearn, dans `src/data/portfolio.js`
3. URL Instagram réelle (placeholder actuellement) dans `socials`
4. `public/og-image.svg` — remplacer par une vraie image de partage (1200×630, PNG ou JPG de préférence)
