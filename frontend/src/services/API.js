const axios = require('axios');

export const login = async (email, password) => {
  const data = await axios.post('http://localhost:3001/user/login', { email, password })
    .then((response) => {
    //   localStorage.setItem('user', JSON.stringify(response));
      return response;
    })
    .catch((err) => {
      const errorMessage = { error: true, err };
      return errorMessage;
    });
  return data;
};

export { login as getUser };