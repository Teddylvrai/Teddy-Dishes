# 🐻 Teddy Dishes

> *Le bonheur est dans l'assiette.*

**Teddy Dishes** est un site de recettes de cuisine, conçu et développé de A à Z.
C'est un **projet personnel**, réalisé en parallèle de mes études en développement web, pour mettre en pratique ce que j'apprends en cours (HTML, CSS, JavaScript) sur un projet qui me ressemble.

> 🚧 Le projet est **en cours de développement** : de nouvelles pages et fonctionnalités arrivent régulièrement.
> version actuelle : **V1.0**

---

## ✨ Fonctionnalités

- **Page d'accueil** avec une barre de recherche et des suggestions en direct pendant la saisie
- **Navigation par catégorie** : petit-déjeuner, plats, desserts, snacks, boissons
- **Recettes populaires** et **recette du moment** mises en avant
- **Page « Toutes les recettes »** qui affiche toutes les recettes ou seulement celles d'une catégorie
- **Page de détail** unique pour toutes les recettes : titre, image, temps, difficulté, nombre de personnes, ingrédients et étapes numérotées

## 🧠 Comment ça marche

Pour éviter d'avoir une page HTML par recette, le site fonctionne avec **une seule page de détail** qui lit l'URL :

```
detail-recettes.html?id=pancakes
```

Le script récupère l'`id` dans l'URL, retrouve la recette correspondante dans `recettes.js`, puis remplit la page dynamiquement.

Le même principe sert pour les catégories :

```
recettes.html?categorie=desserts
```

Toutes les données des recettes sont regroupées dans **un seul fichier** (`recettes.js`), utilisé par la recherche, les catégories et les pages de détail.

## 🛠️ Technologies

- **HTML5**
- **CSS3** (Flexbox, Grid, variables CSS)
- **JavaScript** (vanilla, sans framework)
- [Lucide](https://lucide.dev/) pour les icônes
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (Google Fonts) pour la typographie

## 🎨 Direction artistique

| Couleur | Code | Utilisation |
|---|---|---|
| Soft Blossom | `#E9B8C0` | Header, footer |
| Rosy Copper | `#CD4E40` | Petits textes |
| Camel | `#C79364` | Bordures |
| Soft Blush | `#F2DEDD` | Fond du site |
| Raspberry | `#CE4047` | Boutons |
| Raspberry foncé | `#A5231C` | Titres |
| Brun | `#3E1613` | Contours de la recherche |

## 📁 Structure du projet

```
teddy-dishes/
├── index.html
├── recettes.html
├── detail-recettes.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── recettes.js            # données de toutes les recettes
    │   ├── script.js              # recherche (page d'accueil)
    │   ├── afficher-recettes.js   # liste + filtre par catégorie
    │   └── charger-recette.js     # page de détail d'une recette
    └── img/
```

## 🗺️ À venir

- [ ] Page **Favoris**
- [ ] Ajout de recettes pour toutes les catégories
- [ ] Affichage responsive complet (mobile et tablette)
- [ ] Génération automatique des cartes de la page d'accueil depuis `recettes.js`
- [ ] Barre de recherche sur la page « Toutes les recettes »

## 📝 Ce que ce projet m'apprend

- Structurer un site multi-pages et un CSS cohérent avec des variables
- Manipuler le DOM en JavaScript (`createElement`, `innerHTML`, `addEventListener`)
- Lire les paramètres d'une URL (`URLSearchParams`) pour créer des pages dynamiques
- Filtrer et afficher des données avec `filter()`, `find()` et `forEach()`
- Déboguer avec la console du navigateur

## 🌱 Un projet à long terme

- Ce projet sera entretenu avec de nouvelles recettes et de nouvelles fonctionnalités.
- Il sera amélioré grâce aux nouvelles compétences que j'apprendrai.

## 📄 Licence

Distribué sous licence **GNU GPLv3**.

## 👤 Auteur

**Teddy Rouvray** ([@teddylvrai](https://github.com/teddylvrai)) : étudiant en développement web.