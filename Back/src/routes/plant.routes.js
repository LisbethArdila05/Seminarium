import { Router } from "express"
import {createPlanta, getPlanta, updatePlanta, deletePlanta, getPlantaByID} from'../controllers/planta.controller.js'
import { validaPlanta } from "../validator/planta.validator.js"
import { CheckAut } from "../middelware/autenticacion.js"


const routes = Router()

routes
.get('/', getPlanta)  //obtener
.get('/:id', getPlantaByID)
.post('/', validaPlanta, createPlanta) //crear
.patch('/:id', validaPlanta, updatePlanta) //actualizar
.delete('/:id', validaPlanta, deletePlanta) //eliminar


export default routes;