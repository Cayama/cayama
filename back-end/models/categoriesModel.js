const connection = require('./connection');

const getCategories = async (cart) => {
  const db = await connection();
  const category = await db.collection('plataformCategories').findAll();

  return category.ops[0];
};

module.exports = {
  getCategories,
};
