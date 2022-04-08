const express = require('express');
const router = express.Router();
/* const isAuth = require('../../../middlware/isAuth');
const Utility = require('../../../middlware/utility');
const isUpdate = require('../../../middlware/isUpdate'); */
//const { body } = require('express-validator');

//controller
const formConfigController = require('../../../controllers/v0/formConfig/formConfig');

    router.get('/formConfig', formConfigController.getFormConfig);






module.exports = router;