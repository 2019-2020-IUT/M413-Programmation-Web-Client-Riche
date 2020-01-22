console.log("JavaScript is linked");

function init(){
    sayHello();
    //defTitre1();
	//defTitre2();
	//defTitre3();    
    defTitre4();

}

function sayHello() {
    console.log("Hello Everypony !");
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

function defTitre4() {
    var choosenH = document.getElementsByClassName("firstOrLast");
    if(choosenH != null) {
        if(choosenH.length%2 == 0) {
            document.title =choosenH[0].innerText;
            console.log("<title> set first H : Ok Everypony !");
        } else {
            document.title =choosenH[choosenH.length-1].innerText;
            console.log("<title> set last H : Ok Everypony !");
        }
    } else {
        document.title = "Page par Pauline Célestiale";
        console.warn("There is no H2 tag on this page Everypony ! /:")
    }
}

function invertText() {
    var buffer;
    var pTags = document.getElementsByTagName("p");

    console.log(pTags);

    buffer = pTags[pTags.length-2].innertext;
    pTags[pTags.length-2] = pTags[pTags.length-1].innertext;
    pTags[pTags.length-1] = buffer;

}

