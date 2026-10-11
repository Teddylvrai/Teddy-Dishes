// 1. Récupérer l'ID de la recette dans l'URL (ex: ?id=pancakes)
const params = new URLSearchParams(window.location.search);
const idRecette = params.get('id');

// 2. Trouver la bonne recette dans notre tableau `recettes` de recettes.js
const recetteTrouvee = recettes.find(r => r.id === idRecette);

if (recetteTrouvee) {
    // 3. Remplir le HTML dynamiquement
    document.getElementById('titre-recette').textContent = recetteTrouvee.titre;
    document.getElementById('img-recette').src = recetteTrouvee.image;
    document.getElementById('temps-recette').textContent = recetteTrouvee.temps;
    document.getElementById('diff-recette').textContent = recetteTrouvee.difficulte;
    document.getElementById('pers-recette').textContent = recetteTrouvee.personne;

    // Remplir les ingrédients
    const ulIngredients = document.getElementById('liste-ingredients');
    recetteTrouvee.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        ulIngredients.appendChild(li);
    });

    // Remplir les étapes
    const olEtapes = document.getElementById('liste-etapes');
    recetteTrouvee.etapes.forEach(etape => {
        const li = document.createElement('li');
        li.textContent = etape;
        olEtapes.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Oups ! Recette introuvable 🐻</h1>";
}