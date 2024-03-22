// importation de la librairie de json web token
const jwt =require('jsonwebtoken')



const jwtVerification=(req,res,next)=>{
    const secret = process.env.JWT_SECRET

    const authHeader=req.headers['autorization'];
    const token =authHeader && authHeader.split(' ')[1];

    if(!token){
        res.sendStatus(401);
    }else {
        jwt.verify(token,secret,(err,payload)=>{
            if(err){
                console.log(err)
                res.sendStatus(403)
            }else{
                req.payload=payload;
                next();
            }
        })
    }

}

module.exports = jwtVerification;