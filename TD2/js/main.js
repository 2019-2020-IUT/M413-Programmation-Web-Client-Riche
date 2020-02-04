console.log("JavaScript is linked"); /**Cette méthode permet de vérifier que Javascript est bien activé **/

function init() {
    //sayHello();
    document.body.addEventListener("click", sayHello); //vérification que le listener est ok
}

function sayHello() { /**Cette méthode permet de vérifier que la console de log est activée. **/
    console.log("Hello Everypony !");
}

function initSelection() {
    sayHello();
}