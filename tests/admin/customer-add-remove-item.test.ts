import { afterEach, beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { Browser } from '../../lib/browser';
import { Pages } from '../../pages/admin';
import { config } from '../../config/index';
import { By } from 'selenium-webdriver';

describe('Verify User can add/remove item to cart', function () {
  let page: Pages;

  beforeEach(async function () {
    const browser = await new Browser('chrome').build();
    page = new Pages(browser);
    await page.home.visit('https://www.balsamhill.com/');
  });

  afterEach(async function () {
    await page.quit();
  });

  const data = {
    title: 'Search | Balsam Hill',
    item: 'christmas tree',
    row: 3,
    height_1: 4.5,
    quantity: '1',
    itemRemovedMessage: ' Tree has been removed.',
    price: '$349'
  };


  it('User can add and remove from cart', async function () {

    //search item: christmas tree
    await page.home.searchItem(data.item);
    await sleep(10000);

    //click the third result that appears form search result
    await page.search.selectItem(data.row);
    await sleep(10000);

    // item customization: select height 6.5'
    await page.item.selectheight(data.height_1);
    await sleep(5000);

    //store product page price for validation later in checkout page
    const productPagePrice = await page.item.getProductPagePrice();
    console.log(`View Price: ${productPagePrice}`);

    // //click add to cart
    await page.item.clickAddToCart();
    await sleep(5000);

    // //click view cart
    await page.item.clickViewCart();
    await sleep(5000);

    // //store cart page price for validation later in checkout page
    const cartPagePrice = await page.cart.getCartPrice();
    console.log(`View Cart Price: ${cartPagePrice}`);

    //Validate that the price displayed on the results page is the same on the product page and the cart page.
    expect(productPagePrice).equal(cartPagePrice);

    //Verify quantity equal to 1
    const quantity = await page.cart.quantity();
    expect(quantity).equal(data.quantity)
    await sleep(5000);

    //Click the trash can icon to remove the item from the cart.
    await page.cart.trash();
    await sleep(5000);

    // //Verify undo button is displayed and tree is removed
    const itemRemoved = await page.cart.itemRemoved()
    expect(itemRemoved).contains(data.itemRemovedMessage);

  });
});
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

