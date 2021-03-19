import { getToken } from './index';
import jwt from 'jsonwebtoken';

const verifyExpiredToken = () => {
  const token = getToken();
  if (token) {
    const { payload: { exp } } = jwt.decode(token, { complete: true });
    const now = Date.now();

    if (exp * 1000 <= now) return true;

    return false;
  }
  return false;
}

export default verifyExpiredToken;
