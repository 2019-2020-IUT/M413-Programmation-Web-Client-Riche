console.log("JavaScript is linked"); /**Cette méthode permet de vérifier que Javascript est bien activé **/

function init() {
    sayHello();
    document.body.addEventListener("click", selection); //vérification que le listener est ok
    ajoutDiv();
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

function ajoutDiv() {
    var div = document.createElement("div");
    div.setAttribute("id", "divAinserer");
    document.body.insertBefore(div, document.body.firstChild);
    document.getElementById("divAinserer").innerHTML = "" +
        "<input type=\"button\" value=\"DIV\" onclick=\"insertB('div')\"/>" +
        "<input type=\"button\" value=\"P\" onclick=\"insertB('p')\"/>" +
        "<input type=\"button\" value=\"H2\" onclick=\"insertB('h2')\"/>" +
        "<input type=\"text\" id=\"toInsert\"/>";
}