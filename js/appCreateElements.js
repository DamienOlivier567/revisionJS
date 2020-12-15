let div1 = document.getElementById('premier-div');
let div2 = document.getElementById('second-div');


// Le premier objectif sera de créer un nouvel element <span> et de l'ajouter au premier div (#premier div)
let nouveauSpan = document.createElement("span");//Phase 1 ==> Je crée l'element.
nouveauSpan.id = "js-ajout";
nouveauSpan.className = "spanBackground"; //Eventuellement je lui ajoute une classe !
nouveauSpan.classList.add("spanTextColor"); // Ajout une classe CSS (utile si une autre classe a deja ete donnée pour ne pas supprimer celle qui existe deja).
nouveauSpan.classList.remove("blabla"); //Supprime une classe CSS de la liste des classes de l'elemnt
nouveauSpan.innerHTML = "Quelque chose a mettre"

// Phase 2 ==> Je le place dans le bon parent.
// div1.append(nouveauSpan);// Ajoute a la fin du parent
// div1.prepend(nouveauSpan);//Ajoute au debut du parent
let p2 = document.getElementById('p2');
div1.insertBefore(nouveauSpan, p2);


// Je veux une fonction qui crée TOUT le temps un span, on pourra juste donner en parametre l'id qu'on lui donnera
function createSpanElement(id, texte, parente) {
    let element = document.createElement("span");
    element.id = id;
    element.innerHTML = texte;
    parente.append(element);
    return element;
}

let geek = createSpanElement("Les geeks", "Mon nouveau span !", div1);
let students = createSpanElement("Les students", "JS c'est cool", div2);
let studentsV2 = createSpanElement("Les students-v2", "JS c'est cool ! Pour sur", document.body);

//studentsV2.remove(); // Suppresion a partir de lui meme
//students.parentElement.removeChild(students); // Suppression a partir de l element parent, ancienne methode utilisée
document.body.removeChild(studentsV2);
div2.removeChild(students);