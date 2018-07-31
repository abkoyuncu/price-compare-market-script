module.exports = {
  price: (productName)=> `//div[@class="c4-product-card-name" and contains(.,"${productName}")]//following-sibling::div[contains(@class,"c4-product-card-price")]//span`,
  unit: (productName)=> `//div[@class="c4-product-card-name" and contains(.,"${productName}")]//following-sibling::div[contains(@class,"c4-product-card-grammage")]`,
  promotion: (productName)=> `//div[@class="c4-product-card-name" and contains(.,"${productName}")]//following-sibling::div[contains(@class,"c4-product-card-old-price")]`,
}