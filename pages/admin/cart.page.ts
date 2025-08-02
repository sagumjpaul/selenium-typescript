import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from '../base.page';

export class CartPage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  async quantity() {
    return await this.attribute(By.xpath("//input[@aria-label='Quantity']"),'value');
  }

  async getCartPrice() {
    return await this.text(By.xpath("//span[starts-with(@class, 'cartProductDetailItem_new_price')]/span"));
  }

  async trash() {
    await this.click(By.xpath("//span[starts-with(@class, 'delete cartProductDetailItem_delete-icon')]"));
  }

  async itemRemoved() {
    return await this.text(By.xpath("//div[starts-with(@class, 'cartProductDetailItem_product-name')]/div/a/span"));
  }


}
