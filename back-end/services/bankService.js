const { bankModel } = require('../models/index');

const createBankAccount = async (bankAccount, id) => {
  const bankInfo = await bankModel.createBankAccount(bankAccount, id);
  return bankInfo;
};

module.exports = {
  createBankAccount,
};
