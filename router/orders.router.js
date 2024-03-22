const router=require('express').Router();
const ordersController=require('../controllers/orders.controller');

router.route('/order')
    .get(ordersController.getAll)


//router.route('/order')

router.route('/:id')
    .get(ordersController.getById)


module.exports = router;