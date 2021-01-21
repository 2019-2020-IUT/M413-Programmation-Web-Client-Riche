'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
    console.log('In onLoad() function…');
    sayHello();
    defineHeading1();
    //defineHeading2();
    //defineHeading3();    
    //defineHeading4();
    // Your JavaScript code goes here !
}

function sayHello() { /**Cette méthode permet de vérifier que la console de log est activée. **/
    console.log("Hello Everypony !");
}

function defineHeading1() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la balise dont l'id est titre **/
    if (document.title = document.getElementById("title").innerText) {
        console.log("<title> set as : 'Exercice 1' !");
    }
}