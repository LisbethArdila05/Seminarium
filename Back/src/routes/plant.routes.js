import { Router } from "express"
import {createPlanta, getPlanta, getPlantaBynombre, updatePlanta, deletePlanta} from'../controllers/planta.controller.js'
import { validaPlanta } from "../validator/planta.validator.js"


const routes = Router()

routes
.get('/', validaPlanta, getPlanta)  //obtener

.post('/', validaPlanta, createPlanta) //crear
.patch('/:nombre', validaPlanta, updatePlanta) //actualizar
.delete('/:nombre', validaPlanta, deletePlanta) //eliminar


export default routes;