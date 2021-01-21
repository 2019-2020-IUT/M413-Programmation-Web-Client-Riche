'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() { /* À vous de choisir quel titre définir ici :D */
    console.log('In onLoad() function…');
    sayHello();
    //defineHeading1();
    defineHeading2();
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

function defineHeading2() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la première balise H2 **/
    var firstH2 = document.getElementsByTagName("h2");
    if (firstH2 != null) {
        document.title = firstH2[0].innerText;
        console.log("<title> set : Ok Everypony !");

    }
}

function defineHeading3() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la dernière balise H2 ou avec le nom de l'auteur si il n'y a pas de balises H2**/
    var lastH2 = document.getElementsByTagName("h2");
    if (lastH2 != null) {
        document.title = lastH2[lastH2.length - 1].innerText;
        console.log("<title> set : Ok Everypony !");

    } else {
        document.title = "Page par Pauline Célestiale";
        console.warn("There is no H2 tag on this page Everypony ! /:")
    }
}

function defineHeading4() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la dernière balise H3 si il y a un nombre impair de H3, avec la première balise H3 si il y en a un nombre pair ou avec le nom de l'auteur si il n'y a pas de balises H2**/
    var choosenH = document.getElementsByClassName("firstOrLast");
    if (choosenH != null) {
        if (choosenH.length % 2 == 0) {
            document.title = choosenH[0].innerText;
            console.log("<title> set first H : Ok Everypony !");
        } else {
            document.title = choosenH[choosenH.length - 1].innerText;
            console.log("<title> set last H : Ok Everypony !");
        }
    } else {
        document.title = "Page par Pauline Célestiale";
        console.warn("There is no H2 tag on this page Everypony ! /:")
    }
}

function invertText() { /**Cette fonction inverses deux lignes entre elles **/
    var buffer;
    var un = document.getElementById("1"); //C'est la première ligne que l'on veux inverser
    var deux = document.getElementById("2"); // C'est la deuxième ligne que l'on veut inverser

    buffer = un.innerText; //on garde en mémoire la ligne 1
    un.innerText = deux.innerText; //on affecte le contenu de la ligne 2 à la ligne 1
    deux.innerText = buffer; //on affecte le contenu de la ligne 1 à la ligne 2 via ce que l'on a stocké dans le buffer

}

function datemodif() {
    var now = new Date();

    var dN = now.getDay(); //dN for Day Name
    var d = now.getDate(); //d for Day
    var m = now.getMonth(); //m for Month
    var y = now.getFullYear(); // y for Year
    var laDate = d2S(dN) + " " + d + " " + m2S(m) + " " + y; //on concatène le String au complet.
    var lastauthor = document.getElementsByTagName("meta"); //on va chercher les eta et on gardera que le dernier
    var setModifSentence = ""; //on initialise la variable
    var div2change = document.getElementById("date_modif"); //la balise div vide en fin de page.

    if (lastauthor != null) {
        setModifSentence = setModifSentence + "Document modifié le " + laDate + " par " + lastauthor[0].content; // on botient la phrase finale

    }
    //console.log(setModifSentence);
    div2change.innerText = setModifSentence; //on affiche la date au complet
}

function majNbJours() {
    var now = new Date();
    var selectedDay = new Date(2021, 7, 19);

    var msNow = now.getTime;
    var msSelectedDay = selectedDay.getTime;
    var diff = (msSelectedDay - msNow) / (24 * 1000 * 3600); //24h, 1000 ms = 1 s, 3600s = 1h

    console.log(msNow);
    console.log(msSelectedDay);
    console.log(diff);

    var text2replace = document.getElementById("deadline");
    text2replace.innerHTML = diff;

}



function d2S(d) { //renvoi le nom du jour au lieu du chiffre
    switch (d) {
        case 0:
            return "dimanche";
            break;
        case 1:
            return "lundi";
            break;
        case 2:
            return "mardi"
            break;
        case 3:
            return "mercredi"
            break;
        case 4:
            return "jeudi"
            break;
        case 5:
            return "vendredi"
            break;
        case 6:
            return "samedi"
            break;
        default:
            break;
    }
}

function m2S(m) { //renvoi le nom du mois au lieu du chiffre
    switch (m) {
        case 0:
            return "janvier";
            break;

        case 1:
            return "février";
            break;
        case 2:
            return "mars"

            break;
        case 3:
            return "avril"
            break;

        case 4:
            return "mai"
            break;
        case 5:
            return "juin"
            break;
        case 6:
            return "juillet"
            break;
        case 7:
            return "août"
            break;
        case 8:
            return "septembre"
            break;
        case 9:
            return "octobre"
            break;
        case 10:
            return "novembre"
            break;
        case 11:
            return "décembre"
            break;

        default:
            break;
    }
}