const axios = require('axios');
const FormData = require('form-data');

const {
  SANDBOX_MELHOR_ENVIO_SECRET,
  SANDBOX_MELHOR_ENVIO_CLIENT_ID,
  SANDBOX_MELHOR_ENVIO_URL,
} = process.env;
const data = new FormData();
data.append('grant_type', 'authorization_code');
data.append('client_id', SANDBOX_MELHOR_ENVIO_CLIENT_ID);
data.append('client_secret', SANDBOX_MELHOR_ENVIO_SECRET);
data.append('redirect_uri', '{{callback}}');
data.append('code', '{{code}}');

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

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
