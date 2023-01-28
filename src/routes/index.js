const authRoutes = require('./auth.routes');

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
};

module.exports = routerApi;
