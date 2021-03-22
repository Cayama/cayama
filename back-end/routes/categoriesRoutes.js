const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { categoriesPaths: {
  getCategories,
} } = require('./paths/index');

const categoriesRoutes = Router();

module.exports = (io) => {
  categoriesRoutes
    .get(getCategories, jwtMiddleware, controllers.categoriesController.getCategories);

  return categoriesRoutes;
};
