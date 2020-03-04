console.log("Chargement...");

function init() {
    console.log("Initialisation...");
}

function selectionRSS(site) {
    document.getElementById("retour").innerHTML = "";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("retour").innerHTML = this.responseText;
            }
        };
        console.log(site);
        xhttp.open("GET", site, true);
        xhttp.send();
}
