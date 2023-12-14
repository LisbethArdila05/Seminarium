import { verifyToken } from "../helpers/token.helpers.js";

export const CheckAut = async (req , res, next) => {
    try {
        const token = req.headers.authorization.split('').pop()
        const tokenData = await verifyToken(token)
        
        console.log(tokenData)

        if(tokenData.user){
            next()
        }else {
            res.status(409).json({message:'Paso restringido'})
        }
    } catch (error) {
        res.status(409).json({message:'Paso restringido'})
    }
}


