// Une conditions set a executer un bout de code lorsqu'un test (operateur logique ) est TRUE ( vrai ).
//Si le test est FALSE (faux) alors le bout de code est ignoré !

//if ==> SI
let age = 19;

// Le code contenu dans cette conditions ne sera executé que si le contenu de la variable age est plus petit que 18 (strictement)
//if .. else ==> SI...SINON
// Si age est plus petit que 18 ==> alors on est mineur !
if(age < 18) {
    //Vous etes libre d'ajouter autant de code que vous le souhaitez ici !
    console.log("Vous êtes mineur");
}
// SINON ce n'est pas le cas alors vous etes majeur
else{
    //.... Si c'est faux, le code reprend ici !
    console.log("Ce n'est pas le cas vous ete majeur !");
}

//Si on a besoin de ne tester qu'une seule valeur alors on peut se passer de else
//Exemple
let day = 24//prompt("Entrez un numero de jour");
day = parseInt(day); //Transforme une chaine de caractere en nombre quand c'est possible
let message = "Hello nous sommes ";

if (day === 24){
    day = "le soir de noel";
}

console.log(message + day);

//Technique pour etre sûr que le
console.log(parseInt("35"))
console.log(parseInt("test")); //Vous obtiendrez NaN --> Not a Number
//Quand vous faites un prompt, vous n'êtes jamais sur que l'utilisateur va entrer un nombre
// De maniere generale NTWUI --> Never Trust What User Input ! Ne croyez jamais ce que l'utilisateur vous dit / entre.
let dataNumber = prompt("Donnez moi un nombre");
dataNumber = parseInt(dataNumber);
if (isNaN(dataNumber)){ //La fonction isNaN() verifie si une variable est différent d'un nombre après un parseInt() ( par exemple )
    console.log("Wesh gros t'as essaye de m'entuber ! Ca n'est pas un nombre");
    dataNumber = 0; // Si c'est pas un nombre alors on peut décider que la variable sera égale à 6.
}

//Du coup maintenant on est certains que dataNumber contient un nombre et pas autre chose !
console.log("La valeur de dataNumber est " + dataNumber)

//Du coup, on aimerait faire quelque chose si les nombres soit 2 - 3 - 4 - 5 - ou 6 autre choses si ce n'est pas le cas.

//Si la variable vaut 2
//SINON SI dataNumber 2
if(dataNumber === 2) {
    console.log("DataNumber vaut actuellement 2");
}
//Si la variable vaut
//SINON SI dataNumber 3
else if (dataNumber === 3){
    console.log("DataNumber vaut actuellement 3");
}
//Si la variable vaut
//SINON SI dataNumber 4
else if (dataNumber === 4){
    console.log("DataNumber vaut actuellement 4");
}
//Si la variable vaut 5
//SINON SI dataNumber 5
else if (dataNumber === 5){
    console.log("DataNumber vaut actuellement 5");
}
//Si la variable vaut 6
    //SINON SI dataNumber 6
else if (dataNumber === 6){
    console.log("DataNumber vaut actuellement 6 ")
}
//Dans tous les autres cas (pas 2, ni 3, ni 4, ni 5, ni 6)
    //SINON dans tous les autres cas
else {
   console.log("DataNumber vaut actuellement autre chos que 2, que 3, que 4, que 5, ou que 6");
}

//On peut faire la meme chose de maniere beaucoup plus propre !!! En utilisant un SWITCH
//Un SWITCH permet de tester diffèrentes valeurs pour une variable donnée
//On sait qu'on a une variable dataNumber et on sait que soit elle vaut 2 soit 3 soit 4 soit 5 soit 6 ou autre chose !
//Uniquement pour tester une suite de cas (dans le cadre d'égalités )
switch (dataNumber){
    case 2:
        console.log("DataNumber vaut actuellement 2 ")
        break;
    case 3:
        console.log("DataNumber vaut actuellement 3 ")
        break;
    case 4:
        console.log("DataNumber vaut actuellement 4 ")
        break;
    case 5:
        console.log("DataNumber vaut actuellement 5 ")
        break;
    case 6:
        console.log("DataNumber vaut actuellement 6 ")
        break;
    default:
        console.log("DataNumber vaut actuellement autre chos que 2, que 3, que 4, que 5, ou que 6");
}
/**
 * Les operateur logique
 * && --> AND --> ET en francais
 * || --> OR --> OU en francais
 * ! --> NOT --> NON en francais
 */

//Quasiment tout le temp utilisés dans des conditions !
//Par exemple je veux tester que a soit plus petit que 5 ET que b soit plus grand que 6
let a = 4;
let b = 7;
//Jusqu'a présent vous ne pouviez tester que sur une seule variable avec les operateur logique il est possible de tester plusieurs variables
//Testons que a < 5 ET que b > 6
//SI a < 5 ET SI b > 6 <-- il va donc falloir que les deux tests soit VRAI (True) sinon on passa pas dedans !!!!!
if (a < 5 && b > 6) {
    console.log("A est plus petit que 5 MAIS pas QUE car b est plus grand que 6 !!! EN meme temps !!!");
    console.log("Si b avait ete plus petit que 6 alors on aurait pas pu entrer ici en discotheque")
}