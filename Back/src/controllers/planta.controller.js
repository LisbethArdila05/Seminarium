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
        const {id} = reques.params;
        const plantaID = await prisma.planta.findUnique({
            where: 
            {
                id: Number(id)
            } ,
        })
        response.status(201).json({message:'planta encontrada'})
        console.log(plantaID)
    } 
    catch (error) {
        console.log(error)
        return response.status(500).json({message:'planta no encontrada'})
    }
}

export const getPlanta = async (reques, response) => {
    try {
        const plantas = await prisma.planta.findMany();
        console.log(plantas)
        response.status(201).json({message: 'plantas'})
    } 
    catch (error) {
        return response.status(500).json({message:'error en plantas'})
    }
}
export const deletePlanta = async (reques, response) => {
    try {
        const {id} = reques.params;
        const Delplanta = await prisma.planta.delete({
            where:{
                id: Number(id)
            },
        }) 
        response.status(201).json({message:'planta eliminada'})   
    } 
    catch (error) {
        return response.status(500).json({message:'error al eliminar planta'})
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
        response.status(201).json({message:'planta actualizada'})
    } catch (error) {
        return response.status(500).json({message:'error al actalizar'})
    }
}


