const router=require('express').Router();
const clientsController=require('../controllers/clients.controller');
const jwtVerification=require('../middleware/jwtVerification');

router.route('/')
    .get(jwtVerification,clientsController.profile)
    .post(clientsController.register)

router.route('/login')
    .post(clientsController.login)

module.exports = router;