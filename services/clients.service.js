//Importation du module MSSQL => comunication avec le serveur
const sql=require('mssql');
// Importation de la configuration de la base de donnée
const sqlConfig=require('../database');



// Définition de mon objet clientServices contenant mes différente méthodes
const clientService={
    getProfil: async (email)=> {
        try{
            await sql.connect(sqlConfig);
            const request=new sql.Request();
            // Ajout d'un paramètre à la requête pour l'email
            request.input('email',sql.NVarChar,email)

            const result=await request.query('SELECT * FROM clients WHERE email=@email')

            if(result.recordset.length > 0){
                // Retourne le premier enregistrement trouvé (le profil du client)
                return result.recordset[0];
            }
        }catch(err){
            console.error(err)
            res.sendStatus(500);
        }
    },
    login:async(data)=>{
        try{
            await sql.connect(sqlConfig);

            const {token,id}=data;
            const result =await sql.query `UPDATE clients SET jwt = ${token} WHERE id = ${id}`

            if (result.rowsAffected[0] > 0){
                return  result
            }

        }catch (err){
            console.error(err)

        }
    },
    register:async(data)=>{
        try{
            await sql.connect(sqlConfig);
            const {nom,prenom,email,adresseLivraison,hashedPassword}=data;
            const request=new sql.Request();
            request
                .input('nom',sql.NVarChar,nom)
                .input('prenom',sql.NVarChar,prenom)
                .input('email',sql.NVarChar,email)
                .input('adresseLivraison',sql.NVarChar,adresseLivraison)
                .input('hashedPassword',sql.NVarChar,hashedPassword)
            const result = await request.query(`INSERT INTO clients (nom,prenom,email,adresseLivraison,password) VALUES(@nom,@prenom,@email,@adresseLivraison,@hashedPassword)`)

            if(result.rowsAffected[0] > 0){
                return result
            }

        }catch (err){
            console.error(err)
        }
    }
}

module.exports =clientService;