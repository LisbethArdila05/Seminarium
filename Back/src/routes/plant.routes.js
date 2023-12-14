import { Router } from "express"
import {createPlanta, getPlanta, getPlantaBynombre, updatePlanta, deletePlanta} from'../controllers/planta.controller.js'
import { validaPlanta } from "../validator/planta.validator.js"
import { CheckAut } from "../middelware/autenticacion.js"


const routes = Router()

routes
.get('/', validaPlanta, CheckAut, getPlanta)  //obtener
.get('/nombre',validaPlanta, CheckAut, getPlantaBynombre)
.post('/', validaPlanta, CheckAut, createPlanta) //crear
.patch('/:nombre', validaPlanta, CheckAut, updatePlanta) //actualizar
.delete('/:nombre', validaPlanta, CheckAut, deletePlanta) //eliminar


export default routes;