const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService, addressesService } = require('../services/index');
const { addressesSchema } = require('../validationSchemas/usersSchemas/index');
const { validateSchemas } = require('../services/schemasService');

const updateUsersAddresses = rescue(async (req, res, next) => {
  const { addresses } = req.body;
  const { _id } = req.user;

  const { error } = addressesSchema.validate(addresses);

  if (error) return next(Boom.badData(error));

  const {
    password, confirmPassword, ...updatedUser
  } = await addressesService.updateUserAddressesById(_id, addresses);

  return res.status(201).json(updatedUser);
});

const getAllAddresses = rescue(async (req, res, next) => {
  const { _id } = req.user;

  const { addresses } = await usersService.getUserById(_id);

  if (!addresses.length) return next(Boom.notFound('Endereços não encontrados'));

  return res.status(200).json({ addresses });
});

module.exports = {
  updateUsersAddresses,
  getAllAddresses,
};
