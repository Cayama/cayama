// const Boom = require('boom');
const rescue = require('express-rescue');
const { categoriesService } = require('../services/index');
// const { } = require('../validationSchemas/cartSchema/index');
const { validateSchemas } = require('../services/schemasService');

const getCategories = rescue(async (req, res, next) => {

});

module.exports = {
  getCategories,
};
