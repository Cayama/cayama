const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .post('/cart', jwtMiddleware, controllers.cartController.createShoppingCart)
    .get('/cart', jwtMiddleware, controllers.cartController.getShoppingCart)
    .put('/cart', jwtMiddleware, controllers.cartController.updateShoppingCart)
    .delete('/cart', jwtMiddleware, controllers.cartController.deleteShoppingCart);
  return sellRoutes;
};
