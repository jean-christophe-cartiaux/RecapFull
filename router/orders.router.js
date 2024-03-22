const router=require('express').Router();
const ordersController=require('../controllers/orders.controller');

router.route('/order')
    .get(ordersController.getAll)


//router.route('/order')


module.exports = router;