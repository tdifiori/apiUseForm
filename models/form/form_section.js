const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


    const formSectionSchema = new Schema(
            {
              title: {type : String, required : true},
              rows:  []
            }
    );








module.exports = mongoose.model('FormSection', formSectionSchema);

