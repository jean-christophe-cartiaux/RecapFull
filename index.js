
// importation de la Module Express
const express=require('express');

// Importation du router depuis le fichier spécifié
const router = require('./router/router');


// definition du port + initialisation de l'application express
const PORT = 3001;
const app=express();

// middlewar pour permettre à l'application Express de comprendre les requêtes au format JSON
app.use(express.json());
// Utilisation du router pour géré les chemin d'acces vers les routes spécifiée sous '/api'
app.use('/api',router);

//Démarrage du serveur Express et écoute des requete sur le port spécifier ( 3001 )
app.listen(PORT,()=>{
    console.log(`Le serveur est a l'ecoute sur le port :${PORT} 🐶🙀💻`)
})