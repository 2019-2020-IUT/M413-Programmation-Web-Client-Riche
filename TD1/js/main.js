console.log("JavaScript is linked"); /**Cette méthode permet de vérifier que Javascript est bien activé **/



function init() {
    sayHello();
    //defTitre1();
    //defTitre2();
    //defTitre3();    
    defTitre4();

}

function sayHello() { /**Cette méthode permet de vérifier que la console de log est activée. **/
    console.log("Hello Everypony !");
}

function defTitre1() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la balise dont l'id est titre **/
    if (document.title = document.getElementById("titre").innerText) {
        console.log("<title> set : Ok Everypony !");
    }
}

function defTitre2() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la première balise H2 **/
    var firstH2 = document.getElementsByTagName("h2");
    if (firstH2 != null) {
        document.title = firstH2[0].innerText;
        console.log("<title> set : Ok Everypony !");

    }
}

function defTitre3() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la dernière balise H2 ou avec le nom de l'auteur si il n'y a pas de balises H2**/
    var lastH2 = document.getElementsByTagName("h2");
    if (lastH2 != null) {
        document.title = lastH2[lastH2.length - 1].innerText;
        console.log("<title> set : Ok Everypony !");

    } else {
        document.title = "Page par Pauline Célestiale";
        console.warn("There is no H2 tag on this page Everypony ! /:")
    }
}

function defTitre4() { /**Cette méthode permet de forcer letitre de la page avec le contenu de la dernière balise H3 si il y a un nombre impair de H3, avec la première balise H3 si il y en a un nombre pair ou avec le nom de l'auteur si il n'y a pas de balises H2**/
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
    var un = document.getElementById("1");
    var deux = document.getElementById("2");

    buffer = un.innerText;
    un.innerText = deux.innerText;
    deux.innerText = buffer;

}