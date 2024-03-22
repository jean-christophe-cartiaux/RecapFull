// extraction des variable d'environement
const {DB_USER,DB_NAME,DB_PSW}=process.env;

/* Config de la connection a la DB */

const sqlConfig={
    user:DB_USER,
    password:DB_PSW,
    database:DB_NAME,
    server:'localhost',
    pool:{
        max:10, // nombre mas de connexion
        min:0, // nombre min de connexion
        idleTimeoutMillis:300000 // délai d'expiration en miliseconde 300.000 => 5 minutes
    },
    options:{
        trustServerCertificate: true // indique si le certificat doit être vérifier ou non lors de la connexion
    }
}
module.exports = sqlConfig;