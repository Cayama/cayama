const { sellModel } = require('../models/index');

const purchase = async (purchaseObject) => {
  const purchase = await sellModel.purchase(purchaseObject);
  return purchase;
}

module.exports = {
  purchase,
};
