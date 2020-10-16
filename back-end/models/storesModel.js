const connection = require('./connection');
const { ObjectId } = require('mongodb')

const getStoreByCnpj = async (cnpj) => {
  const db = await connection();
  const store = await db.collection('users').findOne({ cnpj });

  return store;
};

const registerStore = async (storeObj) => {
  const db = await connection();
  const newStore = await db.collection('users').insertOne(storeObj);

  return newStore.ops[0];
};

const addNewProduct = async (userId, productObj) => {
  const db = await connection();
  const newProduct = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(userId)},
      { $addToSet: { products: { _id: ObjectId(), ...productObj } } },
      { returnOriginal: false },
    );

  return newProduct.value;
}

const updatedProducts = async (userId, newProductsArray) => {
  const db = await connection();
  const newProducts = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(userId)},
      { $set: { products: newProductsArray } },
      { returnOriginal: false },
    );

  return newProducts.value;
}

module.exports = {
  getStoreByCnpj,
  registerStore,
  addNewProduct,
  updatedProducts,
};
