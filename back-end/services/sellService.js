const { sellModel } = require('../models/index');

const purchase = async (purchaseObject) => {
  const purchase = await sellModel.purchase(purchaseObject);
  return purchase;
};

const deliveryCheck = async (purchaseId) => {
  const status = await sellModel.deliveryCheck(purchaseId);
  return status;
};

const userApproveOfProduct = async (purchaseId) => {
  const approve = await sellModel.userApproveOfProduct(purchaseId);
  return approve;
};

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
