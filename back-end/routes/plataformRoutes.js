const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const plataformRoutes = Router();

module.exports = (io) => {
  plataformRoutes
    .post('/', jwtMiddleware, controllers.plataformController.subscriptionPlan)
    .get('/plan', jwtMiddleware, controllers.plataformController.getSubscriptionPlan)
    .put('/change', jwtMiddleware, controllers.plataformController.updateSubscriptionPlan)
    .put('/suspend', jwtMiddleware, controllers.plataformController.suspendSubscriptionPlan);
  return plataformRoutes;
};
