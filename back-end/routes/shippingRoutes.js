const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { shippingPaths: { getShippingsMethods, melhorEnvioAuth } } = require('./paths/index');

const shippingRoutes = Router();

module.exports = (io) => {
  shippingRoutes
    .get(getShippingsMethods, jwtMiddleware, controllers.shippingController.getShippingMethods)
    .post(melhorEnvioAuth, jwtMiddleware, controllers.shippingController.melhorEnvioAuthorization);
  return shippingRoutes;
};
