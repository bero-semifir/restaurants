# Appli resaurants

Appli en express qui joue le role d'API pour gérer des restaurants avec MongoDB.

## Install

`npm install`  
`import.bat` ou importer les données `restaurants.json` sur un mongoDB.

## Dockeriser cette appli

Quels services:

- Node
- Express
- MongoDB

Il va donc falloir partir d'une image NodeJS pour lancer l'appli. Cette appli a besoin d'une bdd (MongoDB). Soit on fait un container pour cette db soit on utlise le service mongoDB `docker run mongo`.
