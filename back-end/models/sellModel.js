const connection = require('./connection');

const purchase = async (purchase) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases').insertOne(purchase)

  return newPurchase.ops[0];
}

const deliveryCheck = async (purchaseId) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases')
    .findOneAndUpdate(
      { _id: ObjectId(purchaseId)},
      { $set: { status: "entregue" } },
      { returnOriginal: false },
    );

  return newPurchase.ops[0];
}

const userApproveOfProduct = async (purchaseId) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases')
    .findOneAndUpdate(
      { _id: ObjectId(purchaseId)},
      { $set: { status: "finalizado" } },
      { returnOriginal: false },
    );

  return newPurchase.ops[0];
}

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
