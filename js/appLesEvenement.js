let button = document.getElementById('bouton');
let buttonDelete = document.getElementById('delete-event');
let input = document.getElementById('input1');

// Ajoutd'un evenement ( listener ) de type click sur le bouton
button.addEventListener('click', function() {
    console.log("le texte que je veux");
});

// Ajout d'un evenement de type mouseenter sur l'element input
 input.addEventListener('mouseover', function (){
    //this.previousElementSibling.style.backgroundColor = "yellow";
    //this.previousElementSibling.style.color= "red";
    document.getElementById('mon-label').style.backgroundColor = "yellow";
});

// Ajout d'un evenement lorrs de la sortie de l'input on remet notre background a son etat d'origine
input.addEventListener('mouseleave', function (){
    document.getElementById('mon-label').style.backgroundColor = "initial";
});



function buttonClick(){
    this.style.width = "500px";
}

button.addEventListener('click', buttonClick);


//Ajout d'un evenement sur le bouton delete event pour supprimer l'evenement click + buttonClick() de button
buttonDelete.addEventListener('click', function (){
   button.removeEventListener('click', buttonClick);
});


//BONUS !!!
let elements = document.getElementsByTagName('p');

for (let i = 0; i < elements.length; i++){
    elements.item(i).style.backgroundColor = "black";
    elements[i].style.backgroundColor = "white";
}


for(let paragraphe of elements) {
    paragraphe.style.backgroundColor = "white";
}

for (let i in elements){
    elements.item(i).style.backgroundColor = "ghostwhite";
}


