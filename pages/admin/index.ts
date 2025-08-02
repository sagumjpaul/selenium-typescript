import { WebDriver } from 'selenium-webdriver';
import { HomePage } from './home.page';

import { SearchPage } from './search.page';
import { ItemPage } from './item.page';
import { CartPage } from './cart.page';

export class Pages {
  public home: HomePage;
  public search: SearchPage;
  public item: ItemPage;
  public cart: CartPage;

  constructor(public browser: WebDriver) {
    this.home = new HomePage(browser);
    this.search = new SearchPage(browser);
    this.item = new ItemPage(browser);
    this.cart = new CartPage(browser);
  }

  async dispose() {
    await this.cleanup();
    await this.close();
  }

  async quit() {
    if (this.browser != null) {
      await this.browser.quit();
    }
  }

  async cleanup() {
    await this.browser.manage().deleteAllCookies();
  }

  async close() {
    await this.browser.close();
  }
}
