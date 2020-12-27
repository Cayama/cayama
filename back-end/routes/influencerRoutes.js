const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { influencerPaths: { createLink } } = require('./paths/index');

const influencerRoutes = Router();

module.exports = (io) => {
  influencerRoutes
    .put(createLink, jwtMiddleware, controllers.usersController.createInfluencerLink);

  return influencerRoutes;
};
