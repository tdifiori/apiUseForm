const { validationResult } = require('express-validator');
const  userModel  = require('../../../models/auth/user'); 


exports.getlogin = async(req, res) => {

/* const newUtente = new userModel(
    {
        user: "tizio", 
        email: "tizio@hmail.com", 
        password: "123434@!TT"
    }
);
newUtente.save(); */



    return res.status(200).json({
        status: true,
        message: 'Success',
        req: req.body
    });

/* 
     const user = new FormModelConfig({
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
    } */


}
