const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (userObj) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  const { password, confirmPassword, ...user } = userObj;

  const token = jwt.sign({ user }, SECRET, jwtConfig);
  return token
}
