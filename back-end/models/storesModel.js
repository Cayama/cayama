const connection = require('./connection');

const getStoreByCnpj = async (cnpj) => {
  const db = await connection();
  const store = await db.collection('stores').findOne({ cnpj });

  return store;
};

const registerStore = async (storeObj) => {
  const db = await connection();
  const newStore = await db.collection('stores').insertOne(storeObj);

  return newStore.ops[0];
};

module.exports = {
  getStoreByCnpj,
  registerStore,
};
