/**
 * ATTENTION : Un fichier JavaScript est lu par votre navigateur TOUJOURS de haut en bas !!!!
 */
/* Retenez qu'on utilise presque tout le temps le mot clé let */
/* Elle ne peut pas commencer par un nombre ni de caractère special et pas d'accent */
/* Une variable on met ce qu'on veut dedans un nombre element HTML... */
/* Une variable ne peut etre declarer q'une seule fois */
/* let sert uniquement a declarer la variable donc pour une variable vous n'utilisez que le mot clé qu'une seule fois */
/* Une variable ne peut contenir qu'une seule chose */

/* Déclarer une variable = utiliser let nom de la variable */
/* Si on ne met rien dans la variable, elle est undefined (rien dedans ) */
/* En gros une variable = un seul let */
let testDeclaration;
console.log(testDeclaration);


/* De préférence un nom de variablle pas trop long */
/* Un nom de variable doit être explicite !!! On doit comprendre ce a quoi elle se rapporte */

/**
 * Exemple d'initialisation d'une variable  Exemple 1.
 * Déclarartion, et initialisation un peu plus loin.
 */
let testInitialisationUn;
console.log(testInitialisationUn); // J'affiche ce qu'il y a dedans dans ma console (uniquement pour vous ne le laissez pas !!!)

//Ici , j'INITIALISE ma variable = Mettre quelque chos dedans pour la TOUTE PREMIERE FOIS !!!
testInitialisationUn = "Ma variable est initialisée !";
// Voyez le resultat de l'initialisation dans votre console de developpeur !
console.log(testInitialisationUn);

/**
 * Exemple d' initialisation d'une variable - Exemple 2.
 * Forme utilisée le plus souvent !!!
 */
let testInitialisationDeux = 52; // Forme la plus utilisée (90%)
console.log("Déclarartion et initialisation en une seul ligne: " + testInitialisationDeux);

/**
 * Le contenu d'une variable peut changer à n'importe quel moment !!!! C'est vous décidez !!!
 */
//Si maintenant je change le contenu de testInitialisationDeux et que j'affiche le resutat...
//A partir du moment ou on utilise = suivi d'une valeur on vient ecraser l'ancienne valeur
testInitialisationDeux = "Ma nouvelle valeur pour tesInitialisationDeux";
console.log(testInitialisationDeux);

/**
 * Les constantes s'ecrivent en majuscule
 * Une constance ne change JAMAIS de valeur
 */
const PI = 3.14;

console.log(PI);
parseInt(PI);



