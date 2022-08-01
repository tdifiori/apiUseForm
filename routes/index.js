// V0
//const authRoutes = require('./segnalazioni/auth');

const formConfigRoutes = require('./v0/formConfig/formConfig')
const userRoutes = require('./v0/auth/login')



module.exports = function(app) {

  app.use('/form', formConfigRoutes);

  app.use('/auth', userRoutes);

}