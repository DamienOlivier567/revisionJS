
let button = document.getElementById('envoyer');

button.addEventListener('click', function (event){
    // Premierement on sait que quand on clique sur le bouton d'un formulaire le formulaire est envoye ver la page PHP
    //Hore nous nous n'avons pas encore etudie PHP
    //Donc on empeche le bouton d'envoyer le formulaire.
    event.preventDefault();

    //On sait qu'on a 3 champs
    let champsNom = document.getElementById('nom');
    let champsPrenon = document.getElementById('prenom');
    let champsPassword = document.getElementById('password');
    //On peut directement prendre la valeur aussi
    let valueMail = document.getElementById('email').value;

    //Maintenant, je veux recuperer la valeur contenu dans chacun des ces champs !
    let value = champsNom.value;
    let valuePrenom = champsPrenon.value;
    let valuePassword = champsPassword.value;


    // Ce console.log
    console.log(valuePrenom, value, valuePassword, valueMail);
    //Est identique a ca
    console.log(champsNom.value, champsPrenon.value, champsPassword.value);
    //Mais ceci est exact est correct aussi
    console.log(
        document.getElementById('nom').value.length,
        document.getElementById('prenom').value,
        document.getElementById('password').value,
        document.getElementById('email').value,
        );


    //On pourrait faire aussi ca...
    let a = 3;
    if (a < document.getElementById('nom').value.length){
        console.log("A est plus petit que les 5 que je vais mettre tout de suite avec mon helle")
    }

    //Pour un select
    let select = document.getElementById('select');
    let selection = select.options[select.selectedIndex].value;
    console.log("Ma selection a partir du select: " + selection);
});

//Maintenant pour un Text area
let textarea = document.getElementById('area');
let span = document.getElementById('max');

textarea.addEventListener('keypress', function (event) {
    if (textarea.value.length < 250){
        span.innerHTML = "Il vous reste " + (250 - textarea.value.length) + "caractere";
    }
})



