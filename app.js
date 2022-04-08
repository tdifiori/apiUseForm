const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());


app.use(helmet({ hidePoweredBy: { setTo: 'UseForm - xxxxxxxx' } }));


const env = process.env.NODE_ENV;

app.use(express.static('public'));

app.use('/', router);

app.use(express.static('apidocs'));

require('./routes')(app);

//Localhost
    // const dbPath = '';
//Cloud
   /* const  dbPath = 'mongodb+srv://useformadmin:IlIFHAD87SeHLLW6@cluster0.mwuyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

 mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true } ).then( resp => {
    console.log('db connect!')
}).catch(err => console.log(err)) */


app.listen(process.env.PORT, function() {
    console.log('server in ascolto su porta ' + process.env.PORT);
});



