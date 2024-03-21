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
    login:async()=>{
        try{

        }catch (err){
            console.error(err)
            res.sendstatus(500);
        }
    },
    register:async()=>{
        try{

        }catch (err){
            console.error(err)
            res.sendstatus(500);
        }
    }
}

module.exports =clientService;