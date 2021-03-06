const { storesModel } = require('../models/index');
const { validateSchemas } = require('../services/schemasService');
const { updateRegisterInfoSchema } = require('../validationSchemas/usersSchemas/index');
const { validateMongoIdSchema } = require('../validationSchemas/inputSchemas');

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
};

const updateFieldInStoreData = async (userId, fieldToUpdate, newValue, next) => {
  validateSchemas(next, updateRegisterInfoSchema, {
    fieldToUpdate: { field: 'fieldToUpdate', value: fieldToUpdate },
    newValueObject: { newValue, fieldToUpdate },
  });
  
  const updatedStore = await storesModel.updateFieldInStoreData(userId, fieldToUpdate, newValue);
  return updatedStore;
};

const updateStoreDataLogoImage = async (userId, logoImage) => {
  const updatedLogoImage = await storesModel.updateStoreDataLogoImage(userId, logoImage);
  return updatedLogoImage;
}

const getStorePageDataById = async (storeName, next) => {
  // validateSchemas(next, validateMongoIdSchema, storeId);
  const storeNameLowerCase = storeName.toLowerCase();
  const storeData = await storesModel.getStorePageDataById(storeNameLowerCase);
  return storeData
}

const updateCategoriesInStoreData = async (userId, categories, storeData, next) => {
  validateSchemas(next, updateRegisterInfoSchema, {
    fieldToUpdate: { field: 'fieldToUpdate', value: 'storeCategoriesData' },
    newValueObject: { newValue: categories , fieldToUpdate: 'storeCategoriesData' },
  });

  const categoriesWithPath = categories.map((category) => {
    return { 
      'linkText': category,
      'path': `/store/${storeData.storePersonalData.storeName.trim().toLowerCase()}/${category.trim().toLowerCase()}`,
    };
  })

  const storeWithUpdatedCategories = await storesModel.updateCategoriesInStoreData(userId, categoriesWithPath);

  return storeWithUpdatedCategories;
} 

module.exports = {
  getStoreByCnpj,
  registerStore,
  // addNewProduct,
  updatedProducts,
  updateStoreDataCarrosselImages,
  updateFieldInStoreData,
  updateStoreDataLogoImage,
  getStorePageDataById,
  updateCategoriesInStoreData,
};
