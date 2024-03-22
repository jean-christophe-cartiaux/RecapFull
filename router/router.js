const router = require('express').Router();
const clientsRouter=require('./clients.router');
//const ordersRouter=require('./orders.router');

router.use('/client',clientsRouter);

module.exports = router;