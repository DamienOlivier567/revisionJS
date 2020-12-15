// Quand je parle de retourner, je parle de resultat
// Avec les opérateurs de comparaison, ce qui sera retourné est TOUJOURS un booléen --> soit true (vrai) soit false (faux)
// Qui dit retour dit variable ou structure de controle (if, white,ect... qu'on voit ensuite au prochain live !)

/**
 * == test l'egalite entre deux valeurs.
 * Je ne vous recommande pas d'utiliser le double égal maintenant que vous comprenez pourquoi ( voir exemple );
 */
console.log("OPERATEUR ==");
//Test avec des valeurs de types booléens
let result1 = true == true;//retourne true, result1 contient la valeurs true (vrai) car vrai est egal a vrai
let result2 = true == false;// retourne false result2 contient la valeur false (faux) car  vrai est different de faux
let result3 = false == false; // retourne true, result3 contient la valeur true (vrai) car faux est egal a faux
let result4 = true == 1;
let result5 = true == 2;
let result6 = true == "1";
let result7 = true == "true";
let result8 = false == 0;
let result9 = false == "0";
let result10 = false == "false";

console.log("Result 1 vaut: " + result1 + "==> true == true");
console.log("Résult2 vaut: " + result2 + "==> true == false");
console.log("Result3 vaut " + result3 + "==> false == false");
console.log("Result4 vaut: " + result4 + "==> true == 1");
console.log("Result5 vaut " + result5 + "==> true == 2");
console.log("Result6 vaut " + result6 + "==> true == \"1\"");
console.log("Result7 vaut " + result7 + "==> true == \"true\"");
console.log("Result8 vaut " + result8 + "==> false == 0");
console.log("Result9 vaut " + result9 + "==> false == \"0\"");
console.log("Result10 vaut " + result10 + "==> false == \"false\"");

/**
 * === teste l'égalité entre deux valeurs ET prend en compte aussi le type de donnée !!!
 */
console.log("OPERATEUR ===");

//Test avec des valeurs de types booléens
result1 = true === true;//retourne true, result1 contient la valeurs true (vrai) car vrai est egal a vrai
result2 = true === false;// retourne false result2 contient la valeur false (faux) car  vrai est different de faux
result3 = false === false; // retourne true, result3 contient la valeur true (vrai) car faux est egal a faux
result4 = true === 1;
result5 = true === 2;
result6 = true === "1";
result7 = true === "true";
result8 = false === 0;
result9 = false === "0";
result10 = false === "false";

console.log("Result 1 vaut: " + result1 + "==> true === true");
console.log("Résult2 vaut: " + result2 + "==> true === false");
console.log("Result3 vaut " + result3 + "==> false === false");
console.log("Result4 vaut: " + result4 + "==> true === 1");
console.log("Result5 vaut " + result5 + "==> true === 2");
console.log("Result6 vaut " + result6 + "==> true === \"1\"");
console.log("Result7 vaut " + result7 + "==> true === \"true\"");
console.log("Result8 vaut " + result8 + "==> false === 0");
console.log("Result9 vaut " + result9 + "==> false === \"0\"");
console.log("Result10 vaut " + result10 + "==> false === \"false\"");

//Egalité avec differente valeurs ( en utilisant le triple égal ) ===
let result11 = 1 === 1; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE
let result12 = 1 === 0; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE
let result13 = -35 === 52; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE
let result14 = "-35" === -35;//Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE
let result15 = "-35" === "-35";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE
let result16 = "mon texte" === "mon texte 2";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE
let result17 = "mon texte pour tester" === "mon texte pout tester";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE

console.log("Result11 vaut " + result11 + " ==> === 1");
console.log("Result12 vaut: " + result12 + " ==> 1 === 0");
console.log("Result13 vaut: " + result13 + " ==> -35 === 52");
console.log("Result14 vaut: " + result14 + " ==> \"-35\" === 35");
console.log("Result15 vaut: " + result15 + " ==> \"-35\" === \"-35\"");


/**
 * !== teste l'inégalité entre deux valeurs ET prend en compte aussi le type de donnée !!!
 * Je prefère que vous n'utilisiez pas le != (ne teste pas le type) mais utilisez plutot le !==
 */
console.log("OPERATEUR !==");
let result18 = 1 !== 1; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE ( car 1 est stictement egal à 1, et non différent ).
let result19 = 1 !== 0; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE ( car le type est le meme mais pas les données.)
let result20 = -35 !== 52; //Puisqu'on compara à la fois la valeur ET le type, le resultat sera TUE ( car le type de données identique mais valeurs différentes.)
let result21 = "-35" !== -35;//Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE (car la valeur est la meme mais pas le type
let result22 = "-35" !== "-35";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE (car types identique est valeurs identique).
let result23 = "mon texte" !== "mon texte 2";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera TRUE (car le type est le meme mais pas la données).
let result24 = "mon texte pour tester" !== "mon texte pout tester";//Puisqu'on compara à la fois la valeur ET le type, le resultat sera FALSE (car type de valeur est données identique)


console.log("Result19 vaut " + result18 + " ==> !== 1");
console.log("Result18 vaut: " + result19 + " ==> 1 !== 0");
console.log("Result20 vaut: " + result20 + " ==> -35 !== 52");
console.log("Result21 vaut: " + result21 + " ==> \"-35\" !== 35");
console.log("Result22 vaut: " + result22 + " ==> \"-35\" !== \"-35\"");
console.log("Result23 vaut: " + result23 + " ==> 1 !== 1")
console.log("Result24 vaut: " + result24 + " ==> 1 !== 0");

/**
 * > teste que la valeur de gauche est plus grande que la valeur de droite !!!
 * Ici on parle bien de valeur
 */
let chaineDemo = "Hello World"

console.log("OPERATEUR >");
let result25 = 5 > 6; //Pas de surprise le resultat est FALSE car 5 est bien plus petit  que 6
let result26 = 6 > 5; //TRUE car 6 est bel est bien plus grand que 5
let result27 = 6 > 6; //FALSE car les valeurs sont identiques
let result28 = 6 > "Hello"; //FALSE puisque je compare un nombre avec une chaine ça n'as pas de sens!
//length contient la longueur de la chaine de caractere, il ne transforme pas en nombre, mais contient un nombre representant le nombres de caracteres de la chaine.
let result29 = 6 > "Hello".length; // TRUE
let result30 = 6 > chaineDemo.length; // FALSE

console.log("6 est plus grand que Hello: " + result28)
console.log("6 est plus grand que la taille de la chaine de caractere Hello(5): " + result29)
console.log("6 est plus grand que la longueur de la chaine contenue dans la variable chaineDemo(11): " + result30)


/**
 * < teste que la valeur de gauche est plus petite que la valeur de droite !!!
 * Ici on parle bien de valeur
 */
console.log("OPERATEUR <");
let result31 = 5 < 6 ; //TRUE.
let result32 = "HELLO WORLD".length < 10; //Hello World(11) < 10 FALSE !

/**
 * >= teste que la valeur de gauche est plus grande ou egal que la valeur de droite !!!
 * Ici on parle bien de valeur
 */
console.log("OPERATEUR >=");
let result33 = 6 >= 6; // TRUE car 6 est bien plus grand ou egal à 6

/**
 * <= teste que la valeur de gauche est plus petite ou egal que la valeur de droite !!!
 * Ici on parle bien de valeur
 */
console.log("OPERATEUR <=");
let result34 = 5 <= 8; // TRUE
let result35 = 10 <= 3; // FALSE
let result36 = 9 <= 9; //TRUE