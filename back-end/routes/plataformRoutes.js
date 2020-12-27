const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { plataformPaths: {
  getSubscriptionPlan,
  subscriptionPlan,
  updateSubscriptionPlan,
  suspendSubscriptionPlan,
} } = require('./paths/index');

const plataformRoutes = Router();

module.exports = (io) => {
  plataformRoutes
    .get(getSubscriptionPlan, jwtMiddleware, controllers.plataformController.getSubscriptionPlan)
    .post(subscriptionPlan, jwtMiddleware, controllers.plataformController.subscriptionPlan)
    .put(
      updateSubscriptionPlan,
      jwtMiddleware,
      controllers.plataformController.updateSubscriptionPlan,
    )
    .put(
      suspendSubscriptionPlan,
      jwtMiddleware,
      controllers.plataformController.suspendSubscriptionPlan,
    );
  return plataformRoutes;
};
