//logica de negocio porque no quiero hacer service
import { request, response } from "express";
import {prisma} from "../database/db.js"

import { encrypt, compare } from "../helpers/bcrypt.helpers.js";
import {tokenSign} from "../helpers/token.helpers.js"


export const CreateUser = async (request, res) => {
    try {
        const {mail, user, password} = request.body;
        const passwordHash = await encrypt(password)
        const Newuser = await prisma.users.create({
            data:{
                mail,
                user, 
                password: passwordHash
            } 
        })  
        res.status(201).json({message:'usuario creado'}) 
    } catch (error) {
            return res.status(500).json({message:'usuario existente'})    
    } 
}

export const LoginUser = async (request, response) => {
    try {
        const {user, password} = request.body
        const login = await prisma.users.findUnique({
            where:{
                user,
            }
        })   
        if(!login){ 
            response.status(404).json({message:'No existe, No insista'})
        }
        const checkpassword = await compare(password, login.password)
        const tokensession = await tokenSign(login)

       if(checkpassword){
            response.status(201).json({tokensession, message:'si, funciono'})
        }
        if(!checkpassword){
            response.status(400).json({message:'la contraseña no'})
        }
    } catch (error) {
        console.log(error.message)
        return response.status(500).json({message:'No, pailas'}) 
    }
}

