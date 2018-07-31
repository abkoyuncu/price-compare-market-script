
'use strict';

const puppeteer = require('puppeteer');
const products = require('../products/fruits');
const {buildUrl} =require('../utils/url-builder');
const {buildXpath} = require('../utils/xpath-builder');
const searchResultObjects = require('../page-objects/search-result-page');
const entryPageObjects = require('../page-objects/entry-page');
(async() => {

  for(let fruit in products) {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();


    let urlToGo = await buildUrl(products[fruit]);
    await page.goto(urlToGo);

    if (!!(await page.$(entryPageObjects.cookieDialogCloseButton))) {
      await page.click(entryPageObjects.cookieDialogCloseButton);
    }

    let priceObj =  await buildXpath(searchResultObjects,'price',products[fruit]);


    const priceElement = (await page.$x(priceObj))[0];
    const price = await page.evaluate( x => {
      return x.textContent;
    }, priceElement);


    let unitObj = await buildXpath(searchResultObjects,'unit',products[fruit]);

    const unitElement = (await page.$x(unitObj))[0];
    const unit = await page.evaluate( x => {
      return x.textContent;
    }, unitElement);



    let promotionObj = await buildXpath(searchResultObjects,'promotion',products[fruit]);
    let promotionFlag = false;
    const promotionElement = (await page.$x(promotionObj))[0];
    if(promotionElement !== undefined) {
      promotionFlag = true;
    }


    console.log(`category:'Fruits' , product:${fruit}, price:${price}, unit:${unit}, promotion:${promotionFlag}`);
    await browser.close();
  }

})();


