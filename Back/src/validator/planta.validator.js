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
    check('precio')
    .exists()
    .isNumeric()
    .notEmpty(),
    (req, res, next) => {
        ValResult(req, res, next)
    }
]