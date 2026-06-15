import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';


export class ResumenPage {
  readonly page: Page;
  readonly txtTituloResumen: Locator;
  readonly btnFinish: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtTituloResumen = page.locator('.title:has-text("Checkout: Overview")');
    this.btnFinish = page.locator('[data-test="finish"]');
  }

  async aparecePaginaResumen() {
    await expect(this.txtTituloResumen).toBeVisible();
  }  
  
  async clickBotonFinish() {
    await this.btnFinish.click();
  } 
}