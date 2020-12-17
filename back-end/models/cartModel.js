const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createShoppingCart = async (cart) => {
  const db = await connection();
  const newCart = await db.collection('shoppingCart').insertOne(cart);

  return newCart.ops[0];
};

const updateShoppingCart = async (userId, totalPrice, purchases) => {
  const db = await connection();
  const newCart = await db.collection('shoppingCart')
    .findOneAndUpdate(
      { userId },
      { $set: { totalPrice, purchases } },
      { returnOriginal: false },
    );
  console.log(newCart.value);
  return newCart.value;
};

const deleteShoppingCart = async (userId) => {
  const db = await connection();
  const deletedCart = await db.collection('shoppingCart')
    .deleteOne(
      { userId },
      { returnOriginal: false },
    );

  console.log(deletedCart);
  return deletedCart;
};

const getShoppingCart = async (userId) => {
  const db = await connection();
  const shoppingCart = await db.collection('shoppingCart')
    .findOne({ userId });

  return shoppingCart;
};

module.exports = {
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
  getShoppingCart,
};
