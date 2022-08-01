const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());


app.use(helmet({ hidePoweredBy: { setTo: 'UseForm - xxxxxxxx' } }));



const env = process.env.NODE_ENV;

app.use(express.static('public'));


app.use('/', router);


require('./routes')(app);


mongoose.connect(process.env.MONGO_URL_LOCAL, { useNewUrlParser: true })
.then( () => {
    console.log('MongoDB is running ...');    
        app.listen(process.env.PORT, function() {
            console.log('Server in ascolto su porta : ' + process.env.PORT);             
        }) 
})
.catch(error => console.log(error));  



