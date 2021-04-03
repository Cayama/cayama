const { ObjectId } = require('mongodb');
const connection = require('./connection');

const registerProduct = async (productObj) => {
  const db = await connection();
  const newProduct = await db.collection('products').insertOne(productObj);

  return newProduct.ops[0];
};

const getProductById = async (productId) => {
  const db = await connection();
  const product = await db.collection('products').findOne({ _id: ObjectId(productId) });

  return product
}

const getProductByField = async (PAGE_SIZE, skip, field, fieldValue) => {
  const db = await connection();
  const products = await db.collection('products').aggregate([
    { $match: { [field]: fieldValue } },
    { $skip: skip },
    { $limit: PAGE_SIZE }
  ]).toArray();

  return  products;
}
  
const updateProduct = async (productId, product) => {
  const db = await connection();
  const newProducts = await db.collection('products')
    .findOneAndReplace(
      { _id: ObjectId(productId) },
      { ...product },
      { returnOriginal: false, }
    );

  return newProducts.value;
};

const deleteProductById = async (productId) => {
  const db = await connection();
  const deletedProduct = await db.collection('products').deleteOne({ _id: ObjectId(productId)});

  return deletedProduct.deletedCount;
}
  
  module.exports = {
    registerProduct,
    updateProduct,
    getProductById,
    deleteProductById,
    getProductByField,
  };