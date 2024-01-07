import { Router } from "express"
import {createPlanta, getPlanta, updatePlanta, getPlantaByID} from'../controllers/planta.controller.js'
import { validaPlanta } from "../validator/planta.validator.js"
import { CheckAut } from "../middelware/autenticacion.js"


const routes = Router()

routes
.get('/', getPlanta)  //obtener
.post('/byname', getPlantaByID)//obtener una
.post('/', validaPlanta, createPlanta) //crear
.patch('/:id', validaPlanta, updatePlanta) //actualizar



export default routes;