const sql=require('mssql');
const sqlConfig=require('../database');

const clientService={
    getProfil: async ()=> {
        try{
            await sql.connect(sqlConfig);
            const Result = await sql.query('SELECT * FROM clients')
            if(result){
                return result.recordset;
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
            const result = await request.query(`INSERT INTO clients (nom,prenom,email,adresseLivraison,password)VALUES(@nom,@prenom,@email,@adresseLivraison,@hashedPassword)`)

            if(result.rowsAffected[0] > 0){
                return result
            }

        }catch (err){
            console.error(err)
        }
    }
}

module.exports =clientService;