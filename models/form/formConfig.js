const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


    const FormConfigSchema = new Schema({
            config : {
                type : Object,
                required : true
            }
        });




module.exports = mongoose.model('FormConfig', FormConfigSchema);

