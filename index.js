const express=require('express');
const router = require('./router/router');

const PORT = 3001;
const app=express();

app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Le serveur est a l'ecoute sur le port :${PORT} 🐶🙀💻`)
})