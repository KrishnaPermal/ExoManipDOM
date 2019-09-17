/*let ranger = 25;
let colonne = 10;

//Sélectionne la div avec l'id colums box
let box = document.querySelector("#box");

let nom;
for(i=0; i<colonne; i++){
    nom += "<p>"; 
    //création d'une boucle for dans une autre boucle for
    for(l=0; l<ranger; l++){
        nom += " <input type=\"checkbox\">";
    }
    nom += "<\p>";

box.innerHTML = nom
}


/*********************************************************************************************************************************/

//Récupérer le bouton ajouter
let button = document.querySelector("#ajouter");

//Récupérer les inputs dans le HTML
let col = document.querySelector("#Colonne");
let rang = document.querySelector("#Ranger");

//Quand ont clique sur le boutton ajouter : exécute la fonction "maFonction"
button.onclick = function() {
    maFonction()
}

//Création d'une fonction qui permet d'intéragir dans la zone
function maFonction() {
    let zone = document.querySelector("#box");
    let tableau = document.createElement("table");
    let tableauBody = document.createElement("tbody");

    //Permet d'ajouter le nombre de ranger et de colonne qu'ont a choisi
    for (i = 0; i < col.value; i++) {
        let ligne = document.createElement('tr'); // création de la balise 'tr'
        for (j = 0; j < rang.value; j++){
            let Td = document.createElement('td'); // création de la balise 'td'
            let check = document.createElement('input'); // création de la balise 'input'
            check.type = "checkbox"; // changer le type de l'input en checkbox
            Td.appendChild(check);  // Ajoute l'input à la balise td
            ligne.appendChild(Td); // Ajoute la balise td à la balise tr
        }
            tableauBody.appendChild(ligne); // Ajoute la balise tr(variable ligne) à la balise tbody(variable tableauBody)
    }

            tableau.appendChild(tableauBody) //Récupérer la balise tbody et l'ajouter à la balise table
            zone.appendChild(tableau) //Récupérer la balise table et l'ajouter dans la div avec l'id box
}
/*********************************************************************************************************************************/
