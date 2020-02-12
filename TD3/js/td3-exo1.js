console.log("Chargement...");


function init() {
    console.log("Initialisation...");
    var div = document.querySelectorAll(".case");

    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener("click", selection);
    }

}

function selection(event) {

    var maCase = event.currentTarget;
    var vide = document.body.querySelector(".case.vide");

    if ((maCase.offsetTop == vide.offsetTop && Math.abs(maCase.offsetLeft - vide.offsetLeft == 102)) ||
        (maCase.offsetLeft == vide.offsetLeft && Math.abs(maCase.offsetTop - vide.offsetTop == 102)) {
            maCase.setAttribute("class", ".case.vide");
            vide.setAttribute("class", ".case");
        }

        console.log(event.currentTarget.innerText);
        var e = event.target;
    }