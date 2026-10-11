const recettes = [
    {
        id: "pancakes",
        titre: "Pancakes Moelleux",
        categorie: "petit-dejeuner",
        temps: "14 min",
        difficulte: "Très facile",
        personne: "4 pers.",
        image: "assets/img/pancakes.jpg",
        ingredients: [
            "250g de farine",
            "65g de beurre doux",
            "1 sachet de levure traditionnelle",
            "1 pincée de sel",
            "30g de sucre semoule",
            "2 oeufs",
            "30cl de lait"
        ],
        etapes: [
            "On commence par faire fondre le beurre, dans une casserole à feu doux ou dans un bol au micro-ondes.",
            "Dans un grand saldier, mets la farine, la levure et le sucre dans un saladier. Mélanges et creuses un puits. ",
            "Casses les oeufs directemnt dedans et donnes un premier coup de fouet.",
            "Ajoutes le beurre fondu, fouettes puis délayes progressivement le mélange avec le lait afin d'éviter les grumeaux.",
            "Technique de pro : laisses reposer la pâte au minimum 1 heure au réfrigérateur.",
            "Dans une poêle chaude et légèrement huilée, faits cuire comme des crêpes, mais en les faisant plus petites, retournes des que des bulles apparaissent, et se sert bien chaud !"
        ]
    },
    {
        id: "financiers",
        titre: "Financiers aux amandes",
        categorie: "desserts",
        temps: "20min",
        difficulte: "Facile",
        personne:"5 pers.",
        image: "assets/img/financiers.jpg",
        ingredients: [
            "75g de beurre doux",
            "50g de poudre d'amandes",
            "150g de sucre en poudre",
            "50g de farine fluide",
            "1/2 c. à c. d'extrait de vanille liquide",
            "4 blanc d'oeufs montés en neige",
            "1 pincée de sel"
        ],
        etapes: [
            "Commences par préchaufffez le four à 180°C",
            "Fais fondre le beurre à feu très doux dans une casserole",
            "Dans un saladier, mélanges la poudre d'amandes, le sucre, le sel, la farine et l'extrait de vanille. Incorpores petit a petit et délicatement les blancs en neige à l'aide d'une spatule",
            "Verses le beurre fondu et mélangez bien pour que la pâte soit homogène.",
            "Dans le moule a financier beurré, verses la pate puis enfournez 10 minutes."
        ]
    },
    {
        id: "ratatouille",
        titre: "La Ratatouille",
        categorie: "plats",
        temps: "1h20",
        difficulte: "Moyenne",
        personne: "4 pers.",
        image: "assets/img/ratatouille.jpg",
        ingredients: [
            "6 cuillères à soupe d'huile d'olive",
            "sel",
            "poivre",
            "350g d'oignons",
            "1 brin de thym",
            "1 feuille de laurier",
            "350g d'aubergines",
            "350g de courgettes",
            "350g de poivrons de couleur rouge et vert",
            "500g de tomates bien mûres",
            "3 gousse d'ail"
        ],
        etapes: [
            "Commences par peler les tomates puis coupes les en quartiers",
            "Ensuites coupe les aubergines et les courgettes en rondelles",
            "Eminces les poivrons et lamelles (mon ingredient préférée)",
            "Coupes l'oignon en rouelles",
            "Fais chauffer 2 cuillères à soupe d'huile dans une poêle et fais-y fondre les oignons et les poivrons",
            "lorsqu'ils seront tendres tu ajouteras les tomates, l'ail haché, le thym et le laurier",
            "Sale et poivre puis laisses mijouter doucement à couvert durant 45 minutes",
            "Pendant ce temps, prépares les aubergines et les courgettes, Fais les cuire séparemment (ou non) dans l'huile d'olive pendant 15 minutes",
            "Verifies la cuisson des légumes pour qu'ils ne soient plus fermes. Ajoutes les alors au mélange de tomates et prolonge la cuisson sur tout petit feu pendant 10 minutes.",
            "Enfin bonne dégustation"
        ]
    },
    {
        id:"madeleine",
        titre:"Les madeleines de Teddy 🐻",
        categorie: "snacks",
        temps:"25min",
        difficulte:"tres facile",
        personne:"10 pers.",
        image:"assets/img/madeleine.jpg",
        ingredients: [
            "125g de beurre doux",
            "150g de sucre",
            "2 œufs",
            "150g de farine",
            "1 sachet de sucre vanillé",
            "Jus de 1/2 citron"
        ],
        etapes: [
            "Préchauffer le four a 190°C",
            "Dans un bol melanges bien le beurre et le sucre",
            "Ensuite ajoutes le sucre vanillé et le jus d'un demi citron",
            "Ajoutes 1 à 1 les œufs puis la farine",
            "Dans le moule à madeleines beurré, verser la pâte",
            "Enfournes 8 à 10min a 190° à 200°",
            "Laisses refroidir puis degustes les madeleines de Teddy",
            "Le secret pour des madeleines bossues, est de laisser la pâte reposer 2h au frais avant de la verser dans le moule pour les enfourner"
        ]
    },
    {
        id:"mousseChocolat",
        titre:"La Mousse au Chocolat",
        categorie:"desserts",
        temps:"15min",
        difficulte:"Très facile",
        personne:'4 pers.',
        image:"assets/img/moussechocolat.jpg",
        ingredients: [
            "100g de chocolat noir",
            "3 oeufs",
            "1 sachet de sucre vaniller"
        ],
        etapes: [
            "Prends tes oeufs et separes les blancs des jaunes",
            "Faits ramollir le chocolat dans une casserole au bain-marie",
            "Hors du feu, incorpores les jaunes et le sucre",
            "Bats le blancs en neige ferme",
            "Ajoutes délicatement les blancs en neige au mélange à l'aide d'une spatule",
            "Verses ton melange dans une verine puis mets au frais pendant minimum 2h",
            "Bonne dégustation !"
        ]
    },
    {
        id: "cremeBrulee",
        titre: "La crème brulée",
        categorie:"desserts",
        temps:"1h10",
        difficulte:"Moyenne",
        personne:"8 pers.",
        image:"assets/img/cremebrulee.jpg",
        ingredients: [
            "200g de sucre",
            "6 jaunes d'oeuf",
            "40cl de creme liquide",
            "25cl de lait"
        ],
        etapes: [
            "Faites boullire le lait, ajoutes la crème et le sucre hors du feu",
            "Ajoutes les jaunes d'oeuf, faits chauffer tout doucement (ne surtout pas faire boullire)",
            "Verses dans de petits plats individuels",
            "Mets au four a bain marie et laisses cuire doucement a 180°C environ 50 minutes",
            "Laisses refroidir puis mets du sucre roux et le brûler avec un petit chalumeau de cuisine."
        ]
    },
    {
        id:"punchPlanteur",
        titre: "Punch Planteur",
        categorie:"boissons",
        temps:"10 min",
        difficulte:"facile",
        personne:"1 pers.",
        image:"assets/img/punchplanteur.jpg",
        ingredients: [
            "0.3L de rhum ambré",
            "0.3L de jus d'orange",
            "0.3L de jus de pamplemousse",
            "0.3L de jus d'ananas",
            "6.3cL de sirop de sucre de canne",
        ],
        etapes: [
            "Verses dans un récipient le rhum, les jus d’orange, de pamplemousse et d’ananas et le sirop de sucre de canne",
            "Mélanges bien le tout jusqu'à obtenir une couleur homogène à l'aide d'une spatule ou d'une cuillère en bois",
            "Mets le au refregirateur au moins une heures, se sert bien frais"
        ]
    }
]