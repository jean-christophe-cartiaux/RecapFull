const orderService=require('../services/orders.service');


const ordersController={
    getAll:async (req,res)=>{
        try{
            const result =await orderService.getAll();
            if(result){
                res.status(200).json(result)
            }
        }catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    }
}
module.exports = ordersController;