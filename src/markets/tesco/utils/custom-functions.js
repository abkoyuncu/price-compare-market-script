const  productObjects = require('../page-objects/product-page');
const  get =  require('lodash/get');
const  {buildUrl} = require('./url-builder');
const puppeteer = require('puppeteer');

module.exports= {

  returnTextAsData: async function(type) {

    let object = get(productObjects, type);
    const obj = (await page.$x(object))[0];
    const data = await page.evaluate(el => {
      return el.textContent;
    }, obj);

    return data;
  },

  goToUrl: async function(page, category, product) {
    let urlToGo = await buildUrl(product, category);
    await page.goto(urlToGo);
  },
}

