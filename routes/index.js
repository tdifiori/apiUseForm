// V0
//const authRoutes = require('./segnalazioni/auth');

const formConfigRoutes = require('./v0/formConfig/formConfig')




module.exports = function(app) {

    app.use('/form', formConfigRoutes);

}