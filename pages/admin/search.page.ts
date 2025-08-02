import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from '../base.page';

export class SearchPage extends BasePage {
  constructor(readonly driver: WebDriver) {
    super(driver);
  }

  async selectItem(row: number) {
    await this.click(By.xpath(`//*[@data-testid="results-grid"]/div/div[${row}]/div`));
  }
  

}
