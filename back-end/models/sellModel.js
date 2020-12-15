const connection = require('./connection');

const purchase = async (purchase) => {
  const db = await connection();
  const purchase = await db.collection('purchase').insertOne(purchase)

  return purchase.ops[0];
}

module.exports = {
  purchase,
};
