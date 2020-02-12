console.log("Chargement...");


function init() {
    console.log("Initialisation...");
    var div = document.querySelectorAll('.case');

    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener("click", selection);
    }

    //console.log(grille);
}

function selection(event) {
    console.log(event.currentTarget.tagName);
    var e = event.target;
}