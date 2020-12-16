const crypto = require("crypto");

//function code taken from http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
const randomValueHex = (len) => {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len)
    .toUpperCase(); // return required number of characters
};

module.exports = (stringLength) => {
  const randomString =
    randomValueHex(stringLength) +
    "-" +
    randomValueHex(stringLength) +
    "-" +
    randomValueHex(stringLength);
  return randomString;
};
