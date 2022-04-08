/* const db = require('../../../utils/db_dwh_test');
const { validationResult } = require('express-validator'); */


exports.getFormConfig = async(req, res) => {

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


}

