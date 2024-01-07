import { response } from "express";
import { prisma } from "../database/db.js";

export const createPlanta = async (reques, response) => {
    try {
        const {nombre, cantidad, precio, tamano} = reques.body;
        const Newplant = await prisma.planta.create({
            data:{
                nombre,
                cantidad,
                precio,
                tamano
            }
        })
        response.status(201).json({message:'Registro exitoso'})
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
        return response.status(500).json({message:'Registro no encontrado'})
    }
}
export const getPlanta = async (reques, response) => {
    try {
        const plantas = await prisma.planta.findMany();
        response.status(201).json({plantas})
    } 
    catch (error) {
        console.error(error);
        return response.status(500).json({message:'Registros no encontrados'})
    }
}
export const updatePlanta = async (reques, response) => {
    try {
        const {id} = reques.params;
        const {nombre, precio, cantidad, tamano} = reques.body;
        const UpdateP = await prisma.planta.update({
            where:{
                id: Number(id)
            },
            data:{
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                tamano: tamano
            },
        })
        response.status(200).json(UpdateP)
    } catch (error) {
        return response.status(500).json({message:'Accion invalida'})
    }
}


