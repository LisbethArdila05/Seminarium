import Router from "express";
import {CreateUser, LoginUser} from'../controllers/user.controller.js'

import { validaUser, LUser } from '../validator/user.validator.js'

const routes = Router()

routes

.post('/', validaUser, CreateUser) //crear
.post('/login', LUser, LoginUser) //inicia sesion



export default routes;

