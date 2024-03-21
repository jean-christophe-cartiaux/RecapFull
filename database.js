const {DB_USER,DB_NAME,DB_PSW}=process.env;

/* Config de la connection a la DB */

const sqlConfig={
    user:DB_USER,
    password:DB_PSW,
    database:DB_NAME,
    server:'localhost',
    pool:{
        max10,
        min:0,
        idleTimeoutMillis:300000
    },
    options:{
        trustServerCertificate: true
    }
}
module.exports = sqlConfig;