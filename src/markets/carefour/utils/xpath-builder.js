const  get =require('lodash/get');

module.exports = {
  buildXpath: async function (selectors,type,productName){

    let obj = get(selectors,type);
    return obj(productName);
  }
};