const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const storesRoutes = Router();

storesRoutes
  .post('/register', controllers.storesController.registerStore);

module.exports = storesRoutes;
