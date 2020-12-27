const { addressesModel } = require('../models/index')

const updateUserAddressesById = async (id, addresses) => {
  const updatedUser = await addressesModel.updateUserAddressesById(id, addresses);
  return updatedUser;
};

module.exports = {
  updateUserAddressesById,
};
