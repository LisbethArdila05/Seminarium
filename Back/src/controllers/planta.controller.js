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
        response.status(201).json({message:'crear planta'})
    } 
    catch (error) {
        return response.status(500).json({message:'planta existente'})    
    }
}
export const getPlantaBynombre = async (reques, response) => {
    try {
        const {nombre} = reques.body;
        const plantaNombre = await prisma.planta.findUnique({
            where: 
            {
                nombre: nombre
            } ,
        })

        response.status(201).json({message:'planta encontrada'})

    } 
    catch (error) {
        return response.status(500).json({message:'planta no encontrada'})
    }
}

export const getPlanta = async (reques, response) => {
    try {
        const plantas = await prisma.planta.findMany();
        response.status(201).json({message: 'plantas'})
    } 
    catch (error) {
        return response.status(500).json({message:'error en plantas'})
    }
}
export const deletePlanta = async (reques, response) => {
    try {
        const {nombre} = reques.body;
        const Delplanta = await prisma.planta.delete({
            where:{
                nombre: nombre
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
        const {nombre, precio} = reques.body;
        const UpdateP = await prisma.planta.update({
            where:{
                nombre: nombre
            },
            data:{
                nombre: nombre,
                precio: precio
            },
        })
        response.status(201).json({message:'planta actualizada'})
    } catch (error) {
        return response.status(500).json({message:'error al actalizar'})
    }
}


