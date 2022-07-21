const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

//const formTitleSchema = require('./form_title')


    const formSchema = new Schema(
        {
            title: {type : String, required : true},
            description: {type : String, required : true},
            lastModified: {type : Date, required : true}
          }
    );



/*     userId: { type: String, required: true },
    username: { type: String, required: true },
    
    comments: { type: [{ postedBy: String, comment: String }] },
    createdAt: {
      type: Date,
      default: Date.now,


      /////////////////////

https://stackoverflow.com/questions/32995928/mongoose-insert-data-into-an-array-of-nested-objects
      var Doctor = new Schema({
    email : String,
    password : String,
    Dname : String,
    blockAppoint:[{
        day:String,
        sslot:[Number],
        eslot:[Number],
        address:String,
        status1:String
    }]
    }, */




module.exports = mongoose.model('Form', formSchema);

