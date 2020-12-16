const { cartModel } = require('../models/index');

const createShoppingCart = async (cartObject) => {
  const purchase = await cartModel.createShoppingCart(cartObject);
  return purchase;
}

const updateShoppingCart = async (userId, totalPrice, purchases) => {
  const purchase = await cartModel.updateShoppingCart(userId, totalPrice, purchases);
  return purchase;
}

const deleteShoppingCart = async (userId) => {
  const purchase = await cartModel.deleteShoppingCart(userId);
  return purchase;
}

module.exports = {
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
};
