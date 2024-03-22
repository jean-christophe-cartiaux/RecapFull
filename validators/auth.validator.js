
// Importation de la bibliothèque Yup pour la validation des schémas
const yup =require('yup');

// Importation de la méthode "object" de Yup pour définir un schéma d'objet
const {object}=require('yup');

// définition du schéma de validation pour l'authentification
const authValidator=object({

    // Champ Email et Password / string de minimum 5/1 a maximum 100/50 et le .required() => champs requie
    email:yup.string().min(5).max(100).required(),
    password:yup.string().min(1).max(50).required(),
});

// Exportation du schéma de validation pour l'authentification
module.exports = authValidator