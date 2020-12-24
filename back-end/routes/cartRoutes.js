const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .post('/create', jwtMiddleware, controllers.cartController.createShoppingCart)
    .get('/', jwtMiddleware, controllers.cartController.getShoppingCart)
    .put('/update', jwtMiddleware, controllers.cartController.updateShoppingCart)
    .delete('/delete', jwtMiddleware, controllers.cartController.deleteShoppingCart);
  return sellRoutes;
};
