const sql=require('mssql');
const sqlConfig=require('../database');

const orderService={
    getAll: async ()=> {
        try{
            await sql.connect(sqlConfig);
            const Result = await sql.query('SELECT * FROM orders')
            if(result){
                return result.recordset;
            }
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