const express = require('express');
const router = express.Router();
/* const isAuth = require('../../../middlware/isAuth');
const Utility = require('../../../middlware/utility');
const isUpdate = require('../../../middlware/isUpdate'); */
const { body } = require('express-validator');



//controller
const loginController = require('../../../controllers/v0/auth/login');


    router.post('/login', [
        body('user')
        .exists().withMessage('Dato obligatorio')
        .isString().withMessage('Deve essere una stringa!'),

        body('email')
        .exists().withMessage('Dato obligatorio')
        .isEmail().withMessage('Deve essere una mail valida!'),

        body('password')
        .exists().withMessage('Dato obligatorio')
        .isStrongPassword().withMessage('Deve contenere una regola password!')
    ],
    loginController.getlogin);




module.exports = router;