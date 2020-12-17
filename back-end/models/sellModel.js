const { ObjectId } = require('mongodb');
const connection = require('./connection');

const purchase = async (purchaseObj) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases').insertOne(purchaseObj);

  return newPurchase.ops[0];
};

const deliveryCheck = async (purchaseId) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases')
    .findOneAndUpdate(
      { _id: ObjectId(purchaseId) },
      { $set: { status: 'entregue' } },
      { returnOriginal: false },
    );

  return newPurchase.value;
};

const userApproveOfProduct = async (purchaseId) => {
  const db = await connection();
  const newPurchase = await db.collection('purchases')
    .findOneAndUpdate(
      { _id: ObjectId(purchaseId) },
      { $set: { status: 'finalizado' } },
      { returnOriginal: false },
    );

  return newPurchase.value;
};

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
