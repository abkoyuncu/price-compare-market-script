
'use strict';

const puppeteer = require('puppeteer');
const products = require('../constants/products');
const {buildUrl} =require('../utils/url-builder');
const productObjects = require('../page-objects/product-page');
const get = require('lodash/get');
(async() => {

  for(let category in products) {
    products[category].forEach(async function(product) {
      const browser = await puppeteer.launch();
      let page = await browser.newPage();

      let urlToGo = await buildUrl(product, category);
      await page.goto(urlToGo);

      let priceObj = get(productObjects, 'price');

      const priceElement = (await page.$x(priceObj))[0];
      const price = await page.evaluate( x => {
        return x.textContent;
      }, priceElement);


      let unitObj = get(productObjects, 'unit');

      const unitElement = (await page.$x(unitObj))[0];
      const unit = await page.evaluate( x => {
        return x.textContent;
      }, unitElement);


      console.log(`category:${category} , product:${product}, price:${price}, unit:${unit}`);
      await browser.close();

    })
  }

})();


