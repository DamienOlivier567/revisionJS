/**
 * Les differents types de données que vous pouvez utiliser en JS sont
 * En fonction du type de donnée vous pourre ou ne pourrez pas effectuer certaines choses !
 * String --> chaine de caractere
 * Number --> un nombre qu'il soit entier (sans virgules) positif ou negatif ou encore à virgule (decimal)
 * Boolean --> Vrai ou Faux --> Utiliseé pour les conditions et les bouces ne prend que deux valeurs et rien d'autre !
 * Nul --> ne contient rien du tout !
 * Underfined --> Etat d'une variable non initialisée !
 */

/**
 * Le type de donner String
 */
//String --> Chaine de caractere toujours entourée de guillemets !!!!!
// Tout ce qui est entourée de guillemets simples ou doubles est une chaine de caracters !!
    // TOUTE donnée que vous recuperez de votre fichier HTML avec JS est une chaine de caracteres.
let stingTest = "Ma chaine de caractere qui est TOUJOURS entourée de guillemets ici des doubles";

//Une chaine de caracteres peut aussi s'écrire comme ça:
let stringTest2 = 'Ma chaine de caractere qui est TOUJOURS entourée de guillemets ici des simple'

//Si vous devez utiliser le simple ou le double guillemet à l'interieure d'une chaine alors vous devez l'echaper
let stringTest3 = "Une chaine de caractere avec \" inside";

//Pareil pour les simple guillemets !!!
let stringTest4 = 'Une autre chaine de caractere avec un simple \' dedans !!!'

//Utiliser un simple ou un double ne pose pas de problemes dans le cas ou vous utilisez les doubles vous pourez utiliser des simples dans votre chaine
let stringTest5 = "Une chaine avec un' dedans";
let stringTest6 = 'Une chaine avec un" dedans';

console.log(stringTest3); //avec le double guillemet
console.log(stringTest4); //avec le simple guillemet
console.log(stringTest5); //guillemet simple dans une chaine initialisée avec un double guillemets
console.log(stringTest6); // guillemet double dans une chaine initialisée avec de simple guillemets

/**
 * Le type de Number
 */

//Number
// Un number est un nombre il est defini sans guillemts
let numberTest = 24; // Ceci est une variable qui contient une donnée de type number (un nombre quoi ! )
let numberTest2 = '24'; //Ca c'est pas un nombre c'est une chaine de caracter
let numberTest3 = "24"; // Ca non plus, guillemet donc pas un nombre mais bel et bien une chaine de caractere !!!
//Si vous separez par une virgules dans une console.log, alors vous aurez le contenu des variables precise en une seul ligne !
// Le typeof vous donne le Type de données contenu dans une variable !! Trés pratique dans certains cas ( lorsq'on debute surtout )
console.log(typeof numberTest, typeof numberTest2, typeof  numberTest3);
//un nombre negatif
let numberTest4 = -45;
//un nombre à virgule en JS il n'y a pas de virgule c'est la notation anglophone , on utilise des points
let numberTest5 = 5.45;
//un nombre negatif à virgule
let numberTest6 = -6.54455

/**
 * Boolean
 */
let testBoolean = true; // Soit vrai
let testBoolean2 = false // Soit faux


/**
 * Nul
 */
let testNul = null; // Uniquement nul, POINT

/**
 * Underfined
 * Signifie qu'il n'y a eu aucune initialisation de la variable
 * Ou que la variable n'existe pas
 * Ou que l'element HTML que vous tentez de récupérer n'existe tout simplement pas ( généralement probleme d'écriture de l'id ou de la classe )
 */
let testUnderfined; // Celui la est identique a celui d'ens bas
let testUndefined2 = undefined;
