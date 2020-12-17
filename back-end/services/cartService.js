const { cartModel } = require('../models/index');

const createShoppingCart = async (cartObject) => {
  const purchase = await cartModel.createShoppingCart(cartObject);
  return purchase;
};

const updateShoppingCart = async (userId, totalPrice, purchases) => {
  const shoppingCart = await cartModel.updateShoppingCart(userId, totalPrice, purchases);
  return shoppingCart;
};

const deleteShoppingCart = async (userId) => {
  const deletedShoppingCart = await cartModel.deleteShoppingCart(userId);
  return deletedShoppingCart;
};

const getShoppingCart = async (userId) => {
  const shoppingCart = await cartModel.getShoppingCart(userId);
  return shoppingCart;
};

module.exports = {
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
  getShoppingCart,
};
