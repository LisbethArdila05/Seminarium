import {check} from 'express-validator'
import {ValResult} from '../helpers/Validator.helpers.js'

 export const validaUser = [
    check('user')
    .exists()
    .notEmpty(),
    check('mail')
    .exists()
    .isEmail()
    .notEmpty(),
    check('password')
    .exists()
    .trim() 
    .notEmpty()
    .isLength({min: 6}),
    (req, res, next) => {
        ValResult(req, res, next)
    }
]
export const LUser = [
    check('user')
    .exists()
    .notEmpty(),
    check('password')
    .exists()
    .trim() 
    .notEmpty()
    .isLength({min: 6}),
    (req, res, next) => {
        ValResult(req, res, next)
    }
]
