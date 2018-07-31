
'use strict';

const puppeteer = require('puppeteer');
const products = require('../products/vegetables');
const {buildUrl} =require('../utils/url-builder');
const productObjects = require('../page-objects/product-page');
const get = require('lodash/get');
(async() => {

  for(let vegetable in products) {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();

    let urlToGo = await buildUrl(products[vegetable]);
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



    let promotionObj = get(productObjects, 'promotion');
    let promotionFlag = false;
    const promotionElement = (await page.$x(promotionObj))[0];
    if(promotionElement !== undefined) {
      promotionFlag = true;
    }


    console.log(`category:'Vegetable' , product:${vegetable}, price:${price}, unit:${unit}, promotion:${promotionFlag}`);
    await browser.close();

  }

})();


