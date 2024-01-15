import { response } from "express";
import { prisma } from "../database/db.js";

export const createPlanta = async (reques, response) => {
    try {
        const {nombre, cantidad, precioU, PrecioM} = reques.body;
        const Newplant = await prisma.plantas.create({
            data:{
                nombre,
                cantidad,
                precioU,
                PrecioM
            }
        })
        response.status(201).json({message:'Registro exitoso'})
    } 
    catch (error) {
        console.log(error)
        return response.status(500).json({message:'planta existente'})    
    }
}
export const getPlantaByID = async (reques, response) => {
    try {
        const {nombre} = reques.body;
        const plantaID = await prisma.plantas.findMany({
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
        const plantas = await prisma.plantas.findMany();
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
        const {nombre, precioU, PrecioM} = reques.body;
        const UpdateP = await prisma.plantas.update({
            where:{
                id: Number(id)
            },
            data:{
                nombre: nombre,
                precioU: precioU,
                PrecioM: PrecioM,
            },
        })
        response.status(200).json(UpdateP)
    } catch (error) {
        return response.status(500).json({message:'Accion invalida'})
    }
}
export const updateStock = async (request, response) =>{
    try {
        const {id} = request.params;
        const {CantidadNueva} = request.body;
        //obtengo el registro cantidad de la base de datos
       const registroC = await prisma.plantas.findUnique({
            where: {id: parseInt(id)}
        });
        if (!registroC) {
            return response.status(404).json({ message: 'Registro no encontrado' });
        }
        const StockNuevo = registroC.cantidad + CantidadNueva;
            const registroCNuevo = await prisma.plantas.update({
                where: {id: Number(id)},
                data: {cantidad : StockNuevo}
            })
                response.json(registroCNuevo)
    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'cantidad no valida'})
    }
}


