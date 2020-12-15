
//**La boucle while*/

let elements = document.getElementsByTagName('p'); // On recupere tous les elements de type paragraphe. (TOUS) il y en a plusieurs
console.log(elements); //On a bien plusieurs elements.
console.log("Test de la taille de la collection: " + elements.length); //la propriete length contient le nombre d'element que nous avons récupéré.

//Pour acceder a chaque element il faudra boucler sur la collection! Pas d'autre choix !
let i = 0; // On dit souvent q'un passage dans une boucle est une itération.

while(i < elements.length){//ici nous avons 8 elements la propriete lenght contient donc la valeur '8'
    let paragraphe = elements.item(i); // On recupere a chaque fois un element d'index i
    // On aurait aussi pu recuperer l'élément individuel de la maniere suivante.
    let demoCrochetsParagraphe = elements[i];

    console.log("Element: " + paragraphe + "" + i);
    paragraphe.innerHTML = "Je suis le paragphe d'index: " + i;

    i++;//Correspond à i = i + 1 OU ENCORE i += 1
}


//*La boucle do...while */

i = 0;
let spans = document.getElementsByTagName('span');
console.log("Il y a un nombre total de " + spans.length + "spans" )

do {
   // Meme principe que pour la boucle while sauf qu'on passe au moins une fois dans la boucle
    console.log("Je suis passé dans la boucle ! a l'heure actuelle i vaut: " + i);
    i++;
}
while (i < spans.length);



/* La boucle FOR */

let i1 = 0;
while(i1 < 10){
    console.log("i1 vaut :" + i1);
    i1++;
}

//
for (let i1 = 0;i1 < 10; i1++) {
    console.log("i1 vaut :" + i1);
}

let elementsFor = document.getElementsByClassName('maClasse'); //Pas bessoin du point ! (sauf si querySelector ou querySelectorAll.
for(let item = 0; item < elementsFor.length; item++) {
    let pMaClasse = elementsFor[item]; // On aurait pu utiliser aussi elementsfor. item(item);
}

let test = document.getElementsByClassName('p');
for (let item = 0; item < test; item++){
    let testi = test[item];
}

let p = 0;
while (p < 10){
    console.log("p vaut : " + p)
    p++;
}

for (let p = 0;p < 10; p++){
    console.log("p vaut : " + p);
}

