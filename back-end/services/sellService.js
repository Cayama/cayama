const { sellModel } = require('../models/index');

const purchase = async (purchaseObject) => {
  const purchase = await sellModel.purchase(purchaseObject);
  return purchase;
}

const deliveryCheck = async (purchaseId) => {
  const purchase = await sellModel.deliveryCheck(purchaseId);
  return purchase;
}

const userApproveOfProduct = async (purchaseId) => {
  const purchase = await sellModel.userApproveOfProduct(purchaseId);
  return purchase;
}

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
