# Exercice 1

## La propriété document.title

### defTitre1()

> Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

C'est l'évènnement ``init()`` qui se charge d'appeler ma fonction ``defTitre1()``.

> Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise h1 ?

J'ai utilisé la méthode ``document.getElementById()`` pour récupérer le titre.

> Quelle propriété de l’objet représentant votre balise h1 avez-vous utilisée pour récupérer le texte de celui-ci ?

J'ai utilisé le ``innerText`` de l'objet.

### defTitre2()

> Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant votre balise h2 ?

J'ai utilisé ``document.getElementsByTagName`` que j'ai affecté à une variable nommée ``firstH2``. Puis je l'ai utilisée avec son attribut ``innerText``.

### defTitre3()

> Comment faire pour connaitre le nombre de balise h2 du document ?

On utilise la propriété ``.lenght`` pour connaitre le nombre de balises h2 du document.

### defTitre4()

> Quelle méthode avez-vous utilisée pour récupérer l’objet de votre classe ?

J'ai utilisé ``document.getElementsByClassName`` que j'ai affecté à une variable nommée ``choosenH``. Puis je l'ai utilisée avec son attribut ``innerText``.

> Quant est-il avec Internet Explorer ?

La page ne s'affiche pas

> Comment avez-vous déterminé si un nombre est pair ?

Avec un modulo 2.

## Les propriétés innerHTML, innerText, outerHTML, outerText et textContent

### invertText()

> Quelles différences existe-t-il entre les 5 propriétés de cette section ?

``InnerHTML`` conserve les balises "pures" du HTML alors que ``InnerText`` ne garde que le texte.

> Y a-t-il une différence avec Internet Explore, FireFox et d’autres navigateurs à votre disposition concernant ces
propriétés ?

Oui, chaque navigateur a sa propre méthode de rendu.

## La propriété document.lastModified








