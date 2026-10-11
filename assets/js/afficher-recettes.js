// 1. Lire la catégorie dans l'URL (ex: recettes.html?categorie=desserts)
const params = new URLSearchParams(window.location.search);
const categorie = params.get('categorie');

// 2. Filtrer : si une catégorie est demandée, on garde celles qui correspondent,
//    sinon on affiche toutes les recettes
const resultat = categorie
    ? recettes.filter(r => r.categorie === categorie)
    : recettes;

// 3. Récupérer le conteneur vide de recettes.html
const conteneur = document.getElementById('liste-recettes');

// 4. Aucune recette dans cette catégorie
if (resultat.length === 0) {
    conteneur.innerHTML = '<p>Pas encore de recette ici 🐻</p>';
}

// 5. Créer une carte par recette
resultat.forEach(r => {
    conteneur.innerHTML += `
        <div class="carte-recette">
            <img src="${r.image}" alt="${r.titre}" class="carte-img">
            <h3>${r.titre}</h3>
            <div class="carte-info">
                <img src="assets/img/timer.png" alt="timer">
                <p>${r.temps}</p>
                <img src="assets/img/chapeau-chef.png" alt="chapeau-chef">
                <p>${r.difficulte}</p>
            </div>
            <a href="detail-recettes.html?id=${r.id}" class="btn-recette">Découvrir la recette</a>
        </div>`;
});