
//Importation du module MSSQL => comunication avec le serveur
const sql=require('mssql');

// Importation de la configuration de la base de donnée
const sqlConfig=require('../database');


// Définition de mon objet orderServices contenant mes différente méthodes
const orderService={

    // Méthode asynchrone pour récupérer toutes les commands
    getAll: async (req,res)=> {
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
    create:async(data)=>{
        try{
            await sql.connect(sqlConfig);
            const {clients_id,order_date,detailLivraison}=data;
            const request=new sql.Request();
            request
                .input('clients_id',sql.Int,clients_id)
                .input('order_date',sql.DateTime,order_date)
                .input('detailLivraison',sql.NVarChar,detailLivraison);
            const result=await request.query`INSERT INTO orders (clients_id,order_date,detailLivraison) VALUES(@clients_id,@order_date,@detailLivraison)`

            if(result.rowsAffected[0] >0){
                return  result
            }

        }catch (err){
            throw new Error(err)
        }
    },
    getOrderById:async(id)=>{
        try{
            await sql.connect(sqlConfig)
            const result =await sql.query` SELECT * FROM orders WHERE id=${id} `

            if(result.recordset.length > 0){
                return result.recordset[0];
            }

        }catch (err){
            console.error(err)

        }
    }
}

module.exports =  orderService;