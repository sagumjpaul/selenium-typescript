import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from '../base.page';

export class ItemPage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  async selectheight(height: number) {
    await this.click(By.xpath(`//span[starts-with(@data-testid,'pdgf-div-Height')]/span/span/span[contains(text(),'${height}')]`));
  }

  async selectheighttext(height: number) {
    return await this.text(By.xpath(`//span[starts-with(@data-testid,'pdgf-div-Height')]/span/span/span[contains(text(),'${height}')]`));
  }

  async clickAddToCart() {
    await this.click(By.xpath('//*[@id="product-variant-selector"]/div/div[2]/div[3]/div[2]/div[3]//button[text()="Add to Cart"]'));
  }

  async clickViewCart() {
    await this.click(By.xpath('//button[text()="View Cart"]'));
  }

  async getProductPagePrice() {
    return await this.text(By.xpath("//span[starts-with(@class, 'productPrice_new-price')]/span"));

  }


}
