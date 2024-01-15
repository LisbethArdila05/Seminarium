import { Router } from "express"
import {createPlanta, getPlanta, updatePlanta, getPlantaByID, updateStock} from'../controllers/planta.controller.js'
import { validaPlanta, validaCantidad } from "../validator/planta.validator.js"
import { CheckAut } from "../middelware/autenticacion.js"


const routes = Router()

routes
.get('/', getPlanta)  //obtener
.post('/byname', getPlantaByID)//obtener una
.post('/', validaPlanta, createPlanta) //crear
.patch('/:id', validaPlanta, updatePlanta) //actualizar
.put('/updateCantidad/:id', validaCantidad, updateStock)



export default routes;