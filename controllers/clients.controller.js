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
            console.log('boulet')
                res.sendStatus(500)
        }
    },
    login:async (req,res)=>{
        try{
          const bodyValidated = await registerValidator.validate(req.body);
          const {email,password}=bodyValidated;
          const client=await clientsService.getProfil(email);

          if (!client){
              return res.status(400).json({message:`Le client avec l'email ${email} n'existe pas `,code:400})
          }
          if(client.jwt){
              return res.status(200).redirect('/api/orders');

          }else if (password){
              const isPasswordValid = bcrypt.compareSync(password,client.password);
              if(!isPasswordValid){
                  return res.status(401).json({message: `Password Invalide 😱`})
              }
              const  id = client.id;
              const payload ={
                  clientId:id,
                  email:client.email
              };
              const options ={
                  expireIn:'2d'
              }
              const secret =process.env.JWT_SECRET;
              const token = jwt.sign(payload,secret,options);
              const clientJwt=await clientsService.login({token,id})
              if(clientJwt){
                  res.setHeader('Autorization',`Bearer ${token}`)
                  res.status(200).json({token});
              }else{
                  res.status(500).json({message:'Erreur lors de l\'ecriture du header \'Autorization\''})
              }
          }

        }catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    },
    profile:async (req,res)=>{
        try{
            //const id =req.params.id;  // pour eviter cela on fait la version du bas ⏬⏬⏬⏬⏬
            const {id}=req.params;
            const result=await clientsService.getProfil(id);
            if(result){
                return res.status(200).json(result)
            }else{
                return res.status(404).json({message:`le profil avec l'id ${id} n'existe pas et ou est introuvable `})
            }

        }catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    }
}

module.exports = clientsController