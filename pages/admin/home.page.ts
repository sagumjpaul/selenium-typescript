import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from '../base.page';

export class HomePage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  async searchItem(item: string) {
    await this.click(By.xpath(`//*[@id="bannerCloseButton"]`));
    await sleep(3000);
    await this.type(By.xpath('//*[@id="constructor-search-input"]'), item);
    await sleep(3000);
    await this.click(By.xpath('//*[@id="constructor-header-search-form"]/button'));
    await sleep(3000);
  }
}
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

