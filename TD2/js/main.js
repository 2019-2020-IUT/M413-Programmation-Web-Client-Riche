console.log("JavaScript is linked"); /**Cette méthode permet de vérifier que Javascript est bien activé **/

function init() {
    sayHello();
    document.body.addEventListener("click", selection); //vérification que le listener est ok
}

function sayHello() { /**Cette méthode permet de vérifier que la console de log est activée. **/
    console.log("Bevengutti Nissart ! !");
}

function initSelection() {
    sayHello();
}

function selection(event) {
    console.log(event.target.tagName); //cela indique quel balise est sélectionnée par le click
    var element = event.target;
    element.classList.toggle("red");

}