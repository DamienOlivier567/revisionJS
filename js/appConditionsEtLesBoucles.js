// Premiere chose, dans une conditions le test porte a chaque fois sur des valeurs identiques de preference !!!!!!
// Un nombre doit etre compare avec un nombre une chaine de caractere doit etre compare avec une chaine de caractere.

let monNombre = 4;

// J'aimerais savoir si ma variable est plus grands que 5 si c'est pas le cas j'affiche un message d'erreur "Mon nombre n'est pas plus grand que 5 "
if (monNombre > 5){
    console.log("Je suis plus grand que 5")
}
else{
    console.log("Je ne suis pas plus grand que 5");
}


// J'aimerais faire la meme chose mais avec la valeur 4 inversé
if (monNombre < 4){
    console.log("Je suis plus petit que 4");
}
else {
    console.log("Je ne suis pas plus petit que 4");
}

// si monNombre est plus petit que 4, le dire dans la console, s'il est plus grand que 6, le dire dans la console,
// dans tous les autres cas indiquer sa valeur en console
monNombre = 5;
if (monNombre < 4){
    console.log("Je suis plus petit que 4");
}
else if (monNombre > 6){
    console.log("Je suis plus grand que 6");
}
else {
    console.log("Ma variable vaut " + monNombre);
}

// Je veux savoir si le nombre d'element que je recupere en desous est egal a 6.
let mesParagraphes = document.getElementsByTagName('p');
//MAIS on compare toujours un nombre avec un nombre
if (mesParagraphes.length === 6){//La propriete lenght nous donne le nombre d'elements dans la liste d'elements.
    console.log("Mes paragraphes sont égaux à 6: ")
}
else {
    console.log("Il y a " + mesParagraphes.length + "paragraphes")
}

/**
 * En gros ==> Pour recuperer le nombre de paragraphes, c'est toujours la propriete lenght !!!!
 * Pour recuperer un element de la liste des paragraphes, c'est TOUJOURS item(saPosition) ou [saPosition]
 */
let maChaine = "Hello les amis"; //Il y a 14 caracteres, attention un espace est un caractere !!!
if (maChaine.length === 6){
    console.log("La longueur de ma chaine est de 6 ")
}
else {
    console.log("La longueur de ma chaine est de: " + maChaine.length);
}

//Maintenant si je veux tester que deux chaine de caracteres sont egal (en terme de taille)
let chaine1 = "test";
let chaine2 = "helle";
if (chaine1.length === chaine2.length){
    console.log("Les 2 chaine sont de la meme taille")
}

//Si maintenant je veux verifier si elles sont égales en terme de contenu.
if (chaine1 === chaine2){
    //Compare le contenu
    console.log("Les chaines sont égales");
}

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

if (p1.innerHTML === p2.innerHTML){
    console.log("Mon contenu est strictement identique");
}

/**
 *Les boucles
 */
let i = 0;
while (i < 10){ //Ma variable i ira jusqu'a 9 compris
    console.log(i);
    i++;
}

while (i <= 10){ //Ma variable i ira jusqu'a 10 compris ! ( <= )
    console.log(i);
    i++;
}

for (let b=0; b<10; b++){
    console.log("B vaut " + b);
}

//Afficher pour chaque paragraphe, le contenu texte (innerHTML).
let paras = document.getElementsByTagName('p');
for (let commeTasEnvies=0; commeTasEnvies < paras.length; commeTasEnvies++){
    let unParagraphe = paras.item(commeTasEnvies);
    console.log(unParagraphe.innerHTML);
}

