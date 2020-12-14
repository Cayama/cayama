import axios from 'axios';
import { catchRequestErr, NO_CONNECTIO } from './catchRequest';

const URL = 'http://localhost:3001/products';

const apiProductsRequest = () => axios
  .get(URL, { headers: { Authorization: localStorage.getItem('token') } })
  .then(({ data }) => data || Promise.reject(NO_CONNECTIO))
  .catch(catchRequestErr);

export default apiProductsRequest;
