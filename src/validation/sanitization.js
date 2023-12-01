/* eslint-disable eqeqeq */
/* eslint-disable no-return-await */
const validator = require('validator');

const sanitization = async (data) => {
  const obj = {};
  // eslint-disable-next-line no-unused-vars
  return await new Promise((resolve, reject) => {
    Object.entries(data).forEach((element) => {
      const [key, value] = element;
      if (key == 'password') {
        obj[key] = validator.trim(value);
      } else {
        obj[key] = validator.escape(validator.trim(value));
      }
    });
    resolve(obj);
  });
};

const isExists = (variable) => {
  if (typeof variable === 'undefined') {
    return false;
  }
  return true;
};

module.exports = { sanitization, isExists };
