
//Importation du module MSSQL => comunication avec le serveur
const sql=require('mssql');

// Importation de la configuration de la base de donnée
const sqlConfig=require('../database');


// Définition de mon objet orderServices contenant mes différente méthodes
const orderService={

    // Méthode asynchrone pour récupérer toutes les commands
    getAll: async ()=> {
        try{
            //connection a la db
            await sql.connect(sqlConfig);

            // execution de la requete SQL
            const Result = await sql.query('SELECT * FROM orders')

            //vérification du retoure de résultat
            if(result){
                return result.recordset;
            }
            // gestion des erreur
        }catch(err){
            console.error(err)
            res.sendStatus(500);
        }
    },
    create:async()=>{
        try{

        }catch (err){
            console.error(err)
            res.sendstatus(500);
        }
    },
    getOrderById:async()=>{
        try{

        }catch (err){
            console.error(err)
            res.sendstatus(500);
        }
    }
}

module.exports =  orderService;