const Boom = require('boom');
const rescue = require('express-rescue');
const { sellService } = require('../services/index');
const {  } = require('../validationSchemas/sellSchemas/index');

const createShoppingCart = rescue(async (req, res, next) => {

})

const getShoppingCart = rescue(async (req, res, next) => {

})

const updateShoppingCart = rescue(async (req, res, next) => {

})

const purchase = rescue(async (req, res, next) => {

})

const deliveryCheck = rescue(async (req, res, next) => {

})

const userApproveOfProduct = rescue(async (req, res, next) => {

})


module.exports = {
  createShoppingCart,
  getShoppingCart,
  updateShoppingCart,
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
