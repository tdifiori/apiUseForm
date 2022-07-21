const express = require('express');
const router = express.Router();
/* const isAuth = require('../../../middlware/isAuth');
const Utility = require('../../../middlware/utility');
const isUpdate = require('../../../middlware/isUpdate'); */
const { body } = require('express-validator');



//controller
const formConfigController = require('../../../controllers/v0/formConfig/formConfig');



    //router.get('/config', formConfigController.getFormConfig);

    router.post('/create', [
        body('config')
        .exists().withMessage('Dato obligatorio')
        .isObject().withMessage('Deve essere un oggetto!')
    ],
    formConfigController.createFormConfig);




module.exports = router;