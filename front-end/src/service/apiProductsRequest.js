import axios from 'axios';

const URL = 'http://localhost:3001/products';

const apiProductsRequest = () => axios
  .get(URL, { headers: { Authorization: localStorage.getItem('token') } })
  .then(({ data }) => data || Promise.reject('Sem Conexção'))
  .catch(console.log('Algo deu errado'));

export default apiProductsRequest;
