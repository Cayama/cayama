const connection = require('./connection');

const purchase = async (purchase) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases').insertOne(purchase);

  return newPurchase.ops[0];
};

module.exports = {
  purchase,
};
