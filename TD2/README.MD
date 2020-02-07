# Programmation Web – client riche - TD2

## Exercice 1

> Comment avez-vous ajouté l’écouteur d’évènement et sur quel objet?

La méthode de base à utiliser est ``document.{object}.addEventListener({action à écouter}, {objet à appeler})`` et je l'ai affecté à mon body pour écrier dans la console pour tester dans un premier temps :``document.body.addEventListener("click", initSelection)``