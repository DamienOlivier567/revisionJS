/**
 *Operateur aritnmétiques
 */

/**** Addition ****/
// Exemple en decomposé
    // On peut utiliser des variables differentes pour l'affection de chaque calcul...
    // Pas très optimise car dans notre cas on a besoin au final de la variable res.....
let res = 5 + 5; // resultat: 10
let res2 = res + 6; // res2 = res (10) + 6
let res3 = res2 + 4; // res3 = res2 (16) + 4
let res4 = res3 + 2; // res4 = res3(20) + 2
let res5 = res4 + 1; // res5 = res4(22) + 1
let res6 = res5 + 3; // res6 = res5(23) + 3

// Versions un peu plus optimisée
//On calcule TOUJOURS et on affecte APRES le calcul ( pendant le calcul la variable result n'est jamais ecrasée )
let result = 5 + 5; //une addition simple , result contiendra la valeur 10.
result = result + 6; //result = result(10) + 6 on peut realiser la variable result comme on le veux et ce meme pour ecraser sa valeur
result = result + 4; //result = result(16) + 4
result = result + 2; //result = result(20) + 2
result = result + 1; //result = result(22) + 1
result = result + 3; //result = result(23) + 3
console.log(result); //result est affiche contenant 26.
//Bien retenir que l'affectation (=) est la TOUTE derniere etape

//Un peu plus corsé on va utiliser deux variables.
let x = 10;
let y = 1;
let resXY = x + y;
console.log("Le resultat de X + Y est: " + resXY)

//Soustractions
let resSoustraction = 5 - 4; //Resultat 1 resSoustraction vaut 1
resSoustraction = resSoustraction - 1; // resSoustraction = resSoustraction(1) - 1
resSoustraction = resSoustraction - 2; //resSoustraction = resSoustraction(0) - 2
resSoustraction = resSoustraction + 2; //resSoustraction = resSoustraction(-2) + 2 ==> 0

let test = 5 + 5 - 2;// le résultat : 8


//Multiplication
let resMult;
let z = 5, w = 5;

resMult = 5 * (z + w);
console.log( (5 * z) + w);
console.log( 5 * (z + w));

//Division
let resDiv = 5 / (z + x);
console.log(resDiv);

//Expomentielle
let resExpo =  5**2; // Corespond 5*5
let resExpo2 = 5**3; // Corespond 5*5*5
let resExpo3 = 5**4; // Corespond 5*5*5*5

//Modulo
console.log("Resultat de Z / w" + (z / w)); // On teste le resultat d'une division clasique ..... besoin pour la demonstration.
//Quand on fait un modulo on fais en sorte de recupere le reste d'une division entiere, donc recupere ce qui n'a pas pu etre divisé
console.log("Resultat du modulo: " + (z % w) ); // Comme 3 ne peut etre contenu qu'une seule fois dans 5 le modulo nous donne le reste de ce qui n'as pas ete divise
//Pour savoir si un nombre est multiple d'un autre avec Modulo merci la belle vie !
let nombre1 = 6;
let nombre2 = 7;
let multiple = 3;

//Pour nombre 1
if ((nombre1 % multiple) === 0){
    console.log(nombre1 + " est pas multiple de " + multiple + " car aprés division il reste " + (nombre1 % multiple));
}
else{
    console.log(nombre1 + "n'est pas multiple de" + multiple + " car aprés division il reste " + (nombre1 % multiple));
}

//Pour nombre2
if ((nombre1 % multiple) === 0){
    console.log(nombre2 + " est pas multiple de " + multiple + " car aprés division il reste " + (nombre2 % nombre1));
}
else{
    console.log(nombre2 + "n'est pas multiple de" + multiple + " car aprés division il reste " + (nombre2 % nombre1));
}



/**
 *Les opérateurs d'affectation
 * Voyez ça comme des raccourcis
 */

//Exemple addition et affectation
let driveMyCar = 10;
let itBe = 1;
//itBe = itBe + driveMyCar; //itBe vaut 11
itBe += driveMyCar;// genre de raccourci fait exactement le code commenté a la ligne précédente !

console.log(itBe);

//Exemple soustraction et affectation
let comeTougether = 10;
let heyJude = 0;
//heyJude = heyJude - comeTougether; //heyJude vaut -10
heyJude -= comeTougether;// Exactement la meme chose que le code au desus

//Exemple multiplication et affectation
let allMyLoving = 20;
let askMeWhy = 1;
//askMeWhy = askMeWhy * allMyLoving;
askMeWhy *= allMyLoving;

//Exemple division et affectation
let imagine = 5;
let anyTimeAtAll = 2;
//anyTimeAtAll = anyTimeAtAll / imagine
anyTimeAtAll /= imagine;

//Exemple modulo et affectation
let chains = 60;
let dontLetMeDown = dontLetMeDown % chains
// dontLetMeDown = dontLetMeDown % chains
dontLetMeDown %= chains;

/**
 *La concaténation
 * Coller deux chaines ensemble ! on forme une grande chaine de caractere avec de petites chaine de caractere exemple !
 */
// Il n'y a pas d'espace qui se crée lorsqu'on colle deux chaines !
let ch1 = "Hello";
let ch2 = "world";
let ch3 = " how are you ? ";

let concat = "December: " + ch1 + ch2 + ch3;
let concat2 = `December: ${ch1} ${ch2} ${ch3}`; //Date de L'ES6 (Ecmascript version 6 pas du tout obligatoire
console.log(concat);
console.log(concat2)