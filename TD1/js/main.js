console.log("JavaScript is linked");

function init(){
    sayHello();
	defTitre2();
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

function sayHello() {
    console.log("Hello Everypony !");
}