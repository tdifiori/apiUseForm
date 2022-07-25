const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbInit = require('./utils/mongoDb');
//const mongoConnect = require('./utils/mongoDb')
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());


app.use(helmet({ hidePoweredBy: { setTo: 'UseForm - xxxxxxxx' } }));



const env = process.env.NODE_ENV;

app.use(express.static('public'));


app.use('/', router);


require('./routes')(app);


// ***************  NIENTE..! SI CONNETTE SOLO IN LOCALE PER ORA !!!! ********************************
//************************************************************************************************ 
 
// meglio usare i driver direttamente di mongo.. seguire le guide di \Gianluca Scocozza\ 
//  https://www.youtube.com/watch?v=FKo5fPV2Dgg
//https://www.youtube.com/watch?v=iWCFdJMACas&t=312s
//-----------------------------------------------------------------------------------------


/* async function run() {
    await mongoConnect();
        app.listen(process.env.PORT, function() {
            console.log('Server in ascolto su porta: ' + process.env.PORT);             
        })
}  
run().catch(err => console.log('errorr connection mongo: '+ err));
 */


/* dbInit().then(  () => {
     app.listen(process.env.PORT, function() {
        console.log('Server in ascolto su porta: ' + process.env.PORT);             
    });
}); */
 dbInit()

    app.listen(process.env.PORT, function() {
       console.log('Server in ascolto su porta: ' + process.env.PORT);             
   });









