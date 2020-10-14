const storesModel = require('../models/storesModel');

const getStoreByCnpj = async (cnpj) => {
  const store = await storesModel.getStoreByCnpj(cnpj);
  return store;
};

const registerStore = async (storeObj) => {
  const store = await storesModel.registerStore(storeObj);
  return store;
};

const addNewProduct = async (userId, productObj) => {
  const newProduct = await storesModel.addNewProduct(userId, productObj);
  return newProduct;
}

module.exports = {
  getStoreByCnpj,
  registerStore,
  addNewProduct,
};
