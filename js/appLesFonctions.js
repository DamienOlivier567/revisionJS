/**
 *
 * @param idElement
 * @param couleur
 * @param couleurText
 * @param tailleToutCourt
 * @param largeur
 */
//Le but ca va etre de modifier des trucs sur les paragraphes
//Tous nos changement seront identiques, d'ou la raison d'une fonction
function colorElement(idElement, couleur, couleurText, tailleToutCourt, largeur) {
    let element = document.getElementById(idElement);
    element.style.backgroundColor = couleur;
    element.style.border = "1px solid black";
    element.style.color = couleurText;
    element.style.fontSize = (tailleToutCourt * 2)  + "px";
    element.style.width = (largeur * 2) + "rem";
    console.log(element);
}


colorElement('p1', "darkgrey", "white", "16", "200");
colorElement('p2', "yellow", "black", "5", "200");
colorElement('p3', "blue", "yellow", "12", "170");
colorElement('p4', "coral", "blue", "18", "300");
colorElement('p5', "coral", "blue");

/**
 *
 * @param nombre1
 * @returns {*}
 */
function calcul(nombre1){
    return nombre1 + 10;
}

let result = calcul(5);
console.log(result);
console.log(calcul(6));

let result2 = calcul(10) + calcul(20);

//Je veux une fonction qui prend deux parametre, le premier parametre devra etre multiplie par le second parametre, puis etre affiche dans #p1
function multiplication (nombreA, nombreB){
    return nombreA * nombreB;
}

multiplication(5, 10);

let result3 = multiplication(5, 10) + calcul(5);
console.log("Mon resultat: " + result3);

//
//
//
//

//On recupere une valeur a partir d'un paragraphe dont l'id sera donne en parametre
function getParagraph(id){
    let valeur = document.getElementById(id).innerHTML
    valeur = parseInt(valeur);

    if (!isNaN(valeur)){//Si la valeur n'est pas numerique (chaine de caractere qui contient un nombre
        valeur = 0;
    }

    return valeur;
}

getParagraph('p1');

// On va cree une fonction simple qui soustrait nombre1 de nombre2 , on veut recuperer le resultat pour le stocker en variable
function soustraction(nombre1, nombre2){
    return nombre1 - nombre2;
}

let result4 = soustraction('60', '10');
console.log("Resultat: " + result4);