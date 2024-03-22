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
    },
    getById:async (req,res)=>{
        try{
            const{order_id}=req.params;
            const result =await orderService.getOrderById(order_id)
            if(result){
                return res.status(200).json(result)
            }else{
                return res.status(404).json({message:`La commande avec le numero de commande :${order_id} est ntrouvable (┬┬﹏┬┬)`})
            }
        }catch (err){
            console.error(err)
            res.sendStatus(500)
        }
    }
}
module.exports = ordersController;