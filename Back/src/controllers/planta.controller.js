import { response } from "express";
import { prisma } from "../database/db.js";

export const createPlanta = async (reques, response) => {
    try {
        const {nombre, cantidad, precio} = reques.body;
        const Newplant = await prisma.planta.create({
            data:{
                nombre,
                cantidad,
                precio
            }
        })
        response.status(201).json({message:'planta creada'})
    } 
    catch (error) {
        return response.status(500).json({message:'planta existente'})    
    }
}
export const getPlantaByID = async (reques, response) => {
    try {
        const {nombre} = reques.body;
        const plantaID = await prisma.planta.findMany({
            where: 
            {
                nombre:{
                   contains: nombre ||''
                }
            } ,
        }
        )
        console.log(plantaID)
        response.status(201).json({plantaID})
    } 
    catch (error) {
        console.log(error)
        return response.status(500).json({message:'planta no encontrada'})
    }
}
export const getPlanta = async (reques, response) => {
    try {
        const plantas = await prisma.planta.findMany();
        response.status(201).json({plantas})
    } 
    catch (error) {
        console.error(error);
        return response.status(500).json({message:'error en plantas'})
    }
}
export const updatePlanta = async (reques, response) => {
    try {
        const {id} = reques.params;
        const {nombre, precio, cantidad} = reques.body;
        const UpdateP = await prisma.planta.update({
            where:{
                id: Number(id)
            },
            data:{
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            },
        })
        response.status(200).json(UpdateP)
    } catch (error) {
        return response.status(500).json({message:'error al actalizar'})
    }
}


