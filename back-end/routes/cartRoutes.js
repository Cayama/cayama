const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { cartPaths: {
  getShoppingCart,
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
} } = require('./paths/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .get(getShoppingCart, jwtMiddleware, controllers.cartController.getShoppingCart)
    .post(createShoppingCart, jwtMiddleware, controllers.cartController.createShoppingCart)
    .put(updateShoppingCart, jwtMiddleware, controllers.cartController.updateShoppingCart)
    .delete(deleteShoppingCart, jwtMiddleware, controllers.cartController.deleteShoppingCart);
  return sellRoutes;
};
