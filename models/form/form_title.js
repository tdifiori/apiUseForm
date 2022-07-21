const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const formSectionSchema = require('./form_section')

    const formTitleSchema = new Schema(
            {
              title: {type : String, required : true},
              description: {type : String, required : true},
              lastModified: {type : Date, required : true},
              //sections: {...formSectionSchema}
            }
    );








module.exports = mongoose.model('FormTitle', formTitleSchema);

