let ranger = 8;
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
}

box.innerHTML = nom;