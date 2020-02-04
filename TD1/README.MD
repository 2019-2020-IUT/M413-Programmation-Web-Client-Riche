# Programmation Web – client riche - TD1

## Exercice 1

### La propriété document.title

#### defTitre1()

> Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

C'est l'évènnement ``init()`` qui se charge d'appeler ma fonction ``defTitre1()``.

> Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise h1 ?

J'ai utilisé la méthode ``document.getElementById()`` pour récupérer le titre.

> Quelle propriété de l’objet représentant votre balise h1 avez-vous utilisée pour récupérer le texte de celui-ci ?

J'ai utilisé le ``innerText`` de l'objet.

#### defTitre2()

> Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant votre balise h2 ?

J'ai utilisé ``document.getElementsByTagName`` que j'ai affecté à une variable nommée ``firstH2``. Puis je l'ai utilisée avec son attribut ``innerText``.

#### defTitre3()

> Comment faire pour connaitre le nombre de balise h2 du document ?

On utilise la propriété ``.lenght`` pour connaitre le nombre de balises h2 du document.

#### defTitre4()

> Quelle méthode avez-vous utilisée pour récupérer l’objet de votre classe ?

J'ai utilisé ``document.getElementsByClassName`` que j'ai affecté à une variable nommée ``choosenH``. Puis je l'ai utilisée avec son attribut ``innerText``.

> Quant est-il avec Internet Explorer ?

La page ne s'affiche pas

> Comment avez-vous déterminé si un nombre est pair ?

Avec un modulo 2.

### Les propriétés innerHTML, innerText, outerHTML, outerText et textContent

#### invertText()

> Quelles différences existe-t-il entre les 5 propriétés de cette section ?

``InnerHTML`` conserve les balises "pures" du HTML alors que ``InnerText`` ne garde que le texte.

> Y a-t-il une différence avec Internet Explore, FireFox et d’autres navigateurs à votre disposition concernant ces
propriétés ?

Oui, chaque navigateur a sa propre méthode de rendu.

### La propriété document.lastModified

> Comment modifier votre code pour qu’il permette de sélectionner le 1 er auteur de la liste ?

J'ai mis la balise auteur en premier.

J'ai fait une méthode qui utilise un switch case pour changer le mois et le jour du numéro par le texte mais j'aurai pu aussi faire un tableau et apperler une méthode ``jour[numeroJour]``.

## Exercice 2 -  L'objet Date :

J'avais commencé à écrire deux petites condition en if/else mais une autre solution me semble plus simple :

```js
    var now = new Date();
    var selectedDay = new Date('2020-7-19');

    var diffD = selectedDay.getDate - now.getDate;
    var diffM = selectedDay.getMonth - now.getMonth;

    if (diffM % 2 == 0) { //on regarde s'il y a un nombre pair de mois
        diffM = (diffM * 30) + (diffM / 2);
    } else { //si nombre impair de mois
        diffM = ((diffM * 30) + (diffM / 2)) + 1;
    }

    if ((now.getMonth == 2) || (selectedDay.getMonth == 2)) { //la on va voir si on passe par févrirer pour faire la comparaison
        diffM = diffM - 2; //si il y a février, on retire deux jours
    }```

