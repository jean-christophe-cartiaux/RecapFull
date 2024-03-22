// Importation du module Bcrypt pour le hashage de MDP
const bcrypt=require('bcrypt');
// Importation du module jsonwebtoken pour les gestion des token jwt
const jwt = require('jsonwebtoken');
// Import serviceClient
const clientsService =require('../services/clients.service');
//import du validateur d'authentification
const authValidator =require('../validators/auth.validator');
// Importation du  validator d'enregistrement
const registerValidator = require('../validators/register.validator');


const clientsController={
    register:async (req,res)=>{
        try{
            const bodyValidated = await registerValidator.validate(req.body);
            const {nom,prenom,email,adresseLivraison,password}=bodyValidated;
            const hashedPassword = bcrypt.hashSync(password,10);
            const result = await clientsService.register({nom,prenom,email,hashedPassword,adresseLivraison})
            if(result){
                return res.status(200).json({message:"Le Client à bien éter encoder (～￣▽￣)～ "})
            }
        }catch (err){
            console.error(err)
                res.sendStatus(500)
        }
    },
    login:async (req,res)=>{
        try{
          const bodyValidated = await registerValidator.validate(req.body);
          const {email,password}=bodyValidated;
          const client=await clientsService.getProfil(email)

        }catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    },
    profile:async (req,res)=>{
        try{

        }catch (err){
            console.error(err)
        }
    }
}

module.exports = clientsController