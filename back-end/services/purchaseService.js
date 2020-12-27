const { purchaseModel } = require('../models/index');

const purchase = async (purchaseObject) => {
  const purchase = await purchaseModel.purchase(purchaseObject);
  return purchase;
};

const deliveryCheck = async (purchaseId) => {
  const status = await purchaseModel.deliveryCheck(purchaseId);
  return status;
};

const userApproveOfProduct = async (purchaseId) => {
  const approve = await purchaseModel.userApproveOfProduct(purchaseId);
  return approve;
};

const getPurchaseByField = async (fieldToSearch, userId) => {
  const purchaseList = await purchaseModel.getPurchaseByField(fieldToSearch, userId);
  return purchaseList;
};

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
  getPurchaseByField,
};
