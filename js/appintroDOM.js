/**
 * Recuperer un element sur base de son ID HTML
 */

/*Recuperation par getElementById() */
// On recupere <p id="p1">Paragraphe 1</p>
let paragraphe1 = document.getElementById('p1'); // Pas besoin de mettre le diese !!! C'est meme interdit

/***Manipulation du contenu d'un element HTML ***/
paragraphe1.innerHTML = "Changer tout son contenu !"; //On change tout le contenu.
//On peut ajouter du texte / du HTML a la suite du contenu deja en place dans l'element !
paragraphe1.innerHTML += "Mon texte ajoute avec par exemple une balise <spann>span en plus !</spann>";

/***Manipulation du style d'un element HTML lorsque le style n'existe pas ! ***/
// On peut eventuellement changer le style CSS d'un element !
paragraphe1.style.backgroundColor = "darkgrey";
paragraphe1.style.fontWeight = 'bold'; // Tout sous forme de chaine de caractere, double ou simple guillemets.
// Astuce pour les tailles.
paragraphe1.style.fontSize = '16px';
paragraphe1.style.fontSize = (16*2) + 'px';

//Admettons je veux deux fois la taille de texte actuelle !
paragraphe1.style.fontSize = (parseInt(paragraphe1.style.fontSize) * 2) + 'px';
//On peut utiliser une propriete tout comme on utiliserait une variable !!! Important ca vous falicitera la vie

/**** Recuperation du deuxieme paragraphe ****/
// Jusqu'a prèsent on créait des valeursqui venaient s'ajouter dans l'attribut style, c'est valable si la regle + valeur n'existe pas cote fichier CSS
/* Admettons qu'on ait pas encore entré de valeur avec style.quelquechose */
//Ici je recupere le PREMIER élément qui dispose de la classe .classTest. querySelector renvoie TOUJOURS un seul élément!!!!! Peu importe votre selecteur !
let paragraphe3 = document.querySelector('.classTest'); //Avec toutes les fonctions querySelector....utilisez les selecteurs CSS
paragraphe3.style.fontSize = '100px';
//paragraphe3.style.left = "100px"; // Dans certains casca ne fonctionnera pas !
//Solutions
let cssStyle = window.getComputedStyle(paragraphe3);
let left = cssStyle.getPropertyValue('left'); //Ici on recupere une valeur calculée par le navigateur
console.log(left);
cssStyle.setProperty('left', '4000px'); //On remplace la valeur calculée par le navigateur par notre propre valeur !
console.log(cssStyle.getPropertyValue('left'));//On doit à nouveau récuperer a valeur recalculée


/**
 * Recuperer plusieurs elemnts
 */
