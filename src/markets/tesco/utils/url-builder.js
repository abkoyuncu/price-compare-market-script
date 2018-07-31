const urls = require('../constants/urls');

module.exports = {
  buildUrl: async function (productId){
    let url = `${urls.basic_url}${productId}`;
    return url;
  }
};