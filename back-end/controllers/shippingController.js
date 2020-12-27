const Boom = require('boom');
const axios = require('axios');
const FormData = require('form-data');
const rescue = require('express-rescue');
const { shippingService, usersService } = require('../services/index');

const getShippingMethods = rescue(async (req, res, next) => {

});

const melhorEnvioAuthorization = rescue(async (req, res, next) => {
  const { code } = req.body;
  const { _id } = req.user;

  const {
    SANDBOX_MELHOR_ENVIO_CLIENT_ID,
    SANDBOX_MELHOR_ENVIO_SECRET,
    SANDBOX_MELHOR_ENVIO_URL,
  } = process.env;
  const data = new FormData();
  data.append('grant_type', 'authorization_code');
  data.append('client_id', SANDBOX_MELHOR_ENVIO_CLIENT_ID);
  data.append('client_secret', SANDBOX_MELHOR_ENVIO_SECRET);
  data.append('redirect_uri', 'https://afb66f75ea16.ngrok.io/settings/shippings');
  data.append('code', code);

  const config = {
    method: 'post',
    url: `${SANDBOX_MELHOR_ENVIO_URL}/oauth/token`,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Cayama (jafetguerra6@gmail.com)',
      ...data.getHeaders(),
    },
    data,
  };

  const { data: melhorEnvioTokenData } = await axios(config);

  await usersService.insertNewObjectData(_id, next, melhorEnvioTokenData);

  return res.status(200).json({ response: {
    updated: true, message: 'ME token inserido no cadastro do usuário.',
  } });
});

module.exports = {
  getShippingMethods,
  melhorEnvioAuthorization,
};
