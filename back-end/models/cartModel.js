const connection = require('./connection');

const createShoppingCart = async (cart) => {
  const db = await connection();
  const newCart = await db.collection('shoppingCart').insertOne(cart)

  return newCart.ops[0];
}

const updateShoppingCart = async (userId, totalPrice, purchases) => {
  const db = await connection();
  const newCart = await db.collection('shoppingCart')
    .findOneAndUpdate(
      { userId },
      { $set: { totalPrice, purchases } },
      { returnOriginal: false },
    );

  return newCart.ops[0];
}

const deleteShoppingCart = async (userId) => {
  const db = await connection();
  const newCart = await db.collection('shoppingCart')
    .deleteOne(
      { userId },
      { returnOriginal: false },
    );

  return newCart.ops[0];
}

module.exports = {
  createShoppingCart,
  updateShoppingCart,
  deleteShoppingCart,
};
