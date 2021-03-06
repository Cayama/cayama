const Boom = require('boom');
const rescue = require('express-rescue');
const { cartService } = require('../services/index');
const { createCartSchema } = require('../validationSchemas/cartSchema/index');
const { validateSchemas } = require('../services/schemasService');

const createShoppingCart = rescue(async (req, res, next) => {
  const { totalPrice, purchases } = req.body;
  const { _id: userId } = req.user;

  validateSchemas(next, createCartSchema, {
    totalPrice,
    purchases,
  });

  await cartService.createShoppingCart({
    userId,
    totalPrice,
    purchases,
  });

  return res.status(201).json({ response: 'Carrinho registrado com sucesso' });
});

const getShoppingCart = rescue(async (req, res, _next) => {
  const { _id: userId } = req.user;

  const cartList = await cartService.getShoppingCart(userId);

  return res.status(200).json({ cartList });
});

const updateShoppingCart = rescue(async (req, res, next) => {
  const { totalPrice, purchases } = req.body;
  const { _id: userId } = req.user;

  validateSchemas(next, createCartSchema, {
    totalPrice,
    purchases,
  });

  const newCart = await cartService.updateShoppingCart(userId, totalPrice, purchases);

  return res.status(201).json({ newCart });
});

const deleteShoppingCart = rescue(async (req, res, _next) => {
  const { _id: userId } = req.user;

  await cartService.deleteShoppingCart(userId);

  return res.status(201).json({ newCart: [] });
});

module.exports = {
  createShoppingCart,
  getShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
};
