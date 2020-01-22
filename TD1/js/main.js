console.log("JavaScript is linked");

function init(){
    sayHello();
	defTitre3();
}

function defTitre1() {
    if(document.title = document.getElementById("titre").innerText) {
        console.log("<title> set : Ok Everypony !");
    }
}

function defTitre2() {
    var firstH2 = document.getElementsByTagName("h2");
    if(firstH2 != null) {
        document.title =firstH2[0].innerText;
        console.log("<title> set : Ok Everypony !");

    }
}

function defTitre3() {
    var lastH2 = document.getElementsByTagName("h2");
    if(lastH2 != null) {
        document.title = lastH2[lastH2.length-1].innerText;
        console.log("<title> set : Ok Everypony !");

    } else {
        document.title = "Page par Pauline Célestiale";
        console.warn("There is no H2 tag on this page Everypony ! /:")
    }
}

function sayHello() {
    console.log("Hello Everypony !");
}