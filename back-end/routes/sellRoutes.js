const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .post('/purchase', jwtMiddleware, controllers.sellController.purchase)
    .put('/purchase/deliver', jwtMiddleware, controllers.sellController.deliveryCheck)
    .put('/purchase/acceptance', jwtMiddleware, controllers.sellController.userApproveOfProduct);
  return sellRoutes;
}
