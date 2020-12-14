const Boom = require('boom');
const rescue = require('express-rescue');
const { plataformService } = require('../services/index');
const {  } = require('../validationSchemas/plataformSchemas/index');

const subscriptionPlan = rescue(async (req, res, next) => {

})

const updateSubscriptionPlan = rescue(async (req, res, next) => {

})

const getSubscriptionPlan = rescue(async (req, res, next) => {

})

module.exports = {
  subscriptionPlan,
  updateSubscriptionPlan,
  getSubscriptionPlan,
};
