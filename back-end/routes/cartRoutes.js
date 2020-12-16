const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .post('/cart', jwtMiddleware(true), controllers.cartController.createShoppingCart)
    .get('/cart', jwtMiddleware(true), controllers.cartController.getShoppingCart)
    .put('/cart', jwtMiddleware(true), controllers.cartController.updateShoppingCart)
    .delete('/cart', jwtMiddleware(true), controllers.cartController.deleteShoppingCart);
  return sellRoutes
}
