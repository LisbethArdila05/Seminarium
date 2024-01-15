import {check} from 'express-validator'
import {ValResult} from '../helpers/Validator.helpers.js'

export const validaPlanta = [
    check('nombre')
    .exists()
    .notEmpty(),
    check('cantidad')
    .exists()
    .isNumeric()
    .notEmpty(),
    check('precioU')
    .exists()
    .isNumeric()
    .notEmpty(),
    check('PrecioM')
    .exists()
    .isNumeric()
    .notEmpty(),
    (req, res, next) => {
        ValResult(req, res, next)
    }
]
export const validaCantidad = [
    check('CantidadNueva')
    .exists()
    .isNumeric()
    .notEmpty(),
    (req, res, next) => {
        ValResult(req, res, next)
    }
]