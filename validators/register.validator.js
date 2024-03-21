const yup =require('yup');
const {object}= require('yup');


const registerValidator=object({
    nom:yup.string().min(2).max(50).required(),
    prenom:yup.string().min(2).max(50).required(),
    email:yup.string().min(5).max(100).required(),
    adressLivraison:yup.string().min(5).max(150).required(),
    Password:yup.string().min(5).max(100).required(),
})
module.exports = registerValidator