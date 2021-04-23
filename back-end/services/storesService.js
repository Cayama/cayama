const { storesModel } = require('../models/index');

const getStoreByCnpj = async (cnpj) => {
  const store = await storesModel.getStoreByCnpj(cnpj);
  return store;
};

const registerStore = async (storeObj) => {
  const store = await storesModel.registerStore(storeObj);
  return store;
};

// const addNewProduct = async (productObj) => {
//   const newProduct = await storesModel.addNewProduct(productObj);
//   return newProduct;
// };

const updatedProducts = async (userId, newProductsArray) => {
  const newProducts = await storesModel.updatedProducts(userId, newProductsArray);
  return newProducts;
};

const updateStoreDataCarrosselImages = async (userId, carrosselImages) => {
  const updatedCarrosselImages = await storesModel.updateStoreDataCarrosselImages(userId, carrosselImages);
  return updatedCarrosselImages;
}

module.exports = {
  getStoreByCnpj,
  registerStore,
  // addNewProduct,
  updatedProducts,
  updateStoreDataCarrosselImages,
};
