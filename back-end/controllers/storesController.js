const Boom = require('boom');
const storesService = require('../services/storesService');
const rescue = require('express-rescue');
const createJwtToken = require('../utils/createJwtToken');
const { storeRegisterSchema } = require('../validationSchemas/storesSchemas/index');

const registerStore = rescue(async (req, res, next) => {
  const { storeName, email, password, confirmPassword, cnpj } = req.body;

  if (!storeName || !email || !password || !cnpj) return next(Boom.badData('Faltando informações'));

  const storeExists = await storesService.getStoreByCnpj(cnpj);

  if (storeExists) next(Boom.conflict('Loja já cadastrada'));

  const { error } = storeRegisterSchema.validate({
    storeName, email, password, confirmPassword, cnpj
  })

  if (error) return next(Boom.badData(error));

  const newStore = await storesService.registerStore({ storeName, email, password, cnpj });

  const token = createJwtToken(newStore);

  return res.status(201).json({ token });
});

module.exports = {
  registerStore,
};
