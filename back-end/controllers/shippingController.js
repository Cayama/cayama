const Boom = require('boom');
const rescue = require('express-rescue');
const { shippingService } = require('../services/index');

const getShippingMethods = rescue(async (req, res, next) => {

});

module.exports = {
  getShippingMethods,
};
