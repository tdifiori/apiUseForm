
const { validationResult } = require('express-validator');
const  FormModelConfig  = require('../../../models/form/formsConfig'); 

/* exports.getFormConfig = async(req, res) => {

    try {
        console.log("response!");
        return res.status(200).json({
            status: true,
            message: 'Success Dato recuperato correttamente',
        });
      
        
    } catch (error) {
        return res.status(422).json({
            status: false,
            messageError: error
        });
    }


} */


exports.createFormConfig = async(req, res) => {


     const configCreate = new FormModelConfig({
        config: req.body.config
    }); 


     const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Errore formato dato',
            customcode: '4222',
            error: errors.array()
        });
    } 


    try {
        configCreate.save().then((response => {
            return res.status(201).json({
                status: true,
                message: 'Success Dato creato correttamente',
                response
            });

        })).catch( error => {
            return res.status(422).json({
                status: false,
                messageError: error
            });
        })

        
    } catch (error) {
        return res.status(422).json({
            status: false,
            messageError: error
        });
    }


}

