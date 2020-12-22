const { SANDBOX_MELHOR_ENVIO_URL, SANDBOX_MELHOR_ENVIO_CLIENT_ID } = process.env;

module.exports = async (req, res, next) => {
  const redirectResponse = await res.redirect(301, `${SANDBOX_MELHOR_ENVIO_URL}/oauth/authorize?client_id={${SANDBOX_MELHOR_ENVIO_CLIENT_ID}}&redirect_uri={${'https://dd20837a317a.ngrok.io/test'}}&response_type=code&scope=cart-read`);
  console.log(redirectResponse)
};

'https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=1119&redirect_uri=https://dd20837a317a.ngrok.io/test&response_type=code&scope=cart-read'
