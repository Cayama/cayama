const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .post('/purchase', jwtMiddleware(true), controllers.sellController.purchase)
    .put('/purchase/deliver', jwtMiddleware(true), controllers.sellController.deliveryCheck)
    .put('/purchase/confirm', jwtMiddleware(true), controllers.sellController.userApproveOfProduct);
  return sellRoutes
}
