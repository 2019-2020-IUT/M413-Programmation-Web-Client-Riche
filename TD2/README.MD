# Programmation Web – client riche - TD2

## Exercice 1

> Comment avez-vous ajouté l’écouteur d’évènement et sur quel objet?

La méthode de base à utiliser est ``document.{object}.addEventListener({action à écouter}, {objet à appeler})`` et je l'ai affecté à mon body pour écrier dans la console pour tester dans un premier temps :``document.body.addEventListener("click", initSelection)``.

> Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?

Ca force la sélection sur l'élément sur lequel on a placé le listener et pas sur chaque balise séparemment.
