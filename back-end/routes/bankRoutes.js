const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { bankPaths: { createBankAccount } } = require('./paths/index');

const bankRoutes = Router();

module.exports = (io) => {
  bankRoutes
    .put(createBankAccount, jwtMiddleware, controllers.bankController.createBankAccount);

  return bankRoutes;
};
