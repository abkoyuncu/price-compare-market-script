const urls = require('../constants/urls');

module.exports = {
  buildUrl: async function (productName){
    let url = `${urls.search_url}${productName}`;
    return url;
  }

};