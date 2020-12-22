const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const shippingRoutes = Router();

module.exports = (io) => {
  shippingRoutes
    .get('/', jwtMiddleware, controllers.shippingController.getShippingMethods);
  return shippingRoutes;
};
