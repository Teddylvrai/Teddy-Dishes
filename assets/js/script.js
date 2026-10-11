const recettes = [
    {nom: 'pancakes', categorie: 'desserts', img: 'assets/img/pancakes.jpg'},
    {nom: 'financier', categorie: 'desserts', img: 'assets/img/financier.jpg'},
    {nom: 'ratatouille', categorie: 'plats', img: 'assets/img/ratatouille.jpg'},
    {nom: 'madeleine', categorie: 'desserts', img: 'assets/img/madeleine.jpg'},
    {nom: 'mousseChocolat', categorie: 'desserts', img: 'assets/img/moussechocolat.jpg'},
    {nom: 'cremeBrulee', categorie: 'desserts', img: 'assets/img/cremebrulee.jpg'},
    {nom: 'punchPlanteur', categorie: 'boissons', img: 'assets/img/punchplanteur.jpg'}
];

const search = document.getElementById('search');

search.addEventListener('keyup', function(){
    const input = search.value.toLowerCase();

       if (input === '') {
       document.getElementById('suggestion').innerHTML = '';
       return;
   }

    const result = recettes.filter(item => item.nom.toLowerCase().includes(input));

    let suggestion = '';

    result.forEach(resultItem =>
           suggestion += `<a href="detail-recettes.html?id=${resultItem.nom}" class="suggestion">${resultItem.nom}</a>`
    )

    document.getElementById("suggestion").innerHTML = suggestion;
})