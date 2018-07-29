const urls = require('../constants/urls');
const ids = require('../constants/product-id');
const  get =require('lodash/get');

module.exports = {
  buildUrl: async function (productName,mainCategory){
    let cat = get(ids,mainCategory);
    let id = get(cat,productName);
    let url = `${urls.basic_url}${id}`;
    return url;
  }

};