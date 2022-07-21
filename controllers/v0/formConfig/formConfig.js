/* const db = require('../../../utils/db_dwh_test');*/
const { validationResult } = require('express-validator'); 

//Model 
const formConfigModel = require('../../../models/form/formConfig');


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

    const configCreate = new formConfigModel({
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
        if(req){

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

        }

      
        
    } catch (error) {
        return res.status(422).json({
            status: false,
            messageError: error
        });
    }


}

