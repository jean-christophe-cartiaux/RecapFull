// Importation de la bibliothèque Yup pour la validation des schémas
const yup =require('yup');

// Importation de la méthode "object" de Yup pour définir un schéma d'objet
const {object}= require('yup');

// définition d'un schéma de validation pour register le Cliente
const registerValidator=object({
    nom:yup.string().min(2).max(50).required(),
    prenom:yup.string().min(2).max(50).required(),
    email:yup.string().min(5).max(100).required(),
    adressLivraison:yup.string().min(5).max(150).required(),
    Password:yup.string().min(5).max(100).required(),
})
module.exports = registerValidator