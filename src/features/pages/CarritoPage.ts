import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';


export class CarritoPage {
  readonly page: Page;
  readonly txtNombresProductos: Locator;
  readonly txtTituloCarrito: Locator;
  readonly btnCheckout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtTituloCarrito = page.locator('.title:has-text("Your Cart")');
    this.txtNombresProductos = page.locator('[data-test="inventory-item-name"]');
    this.btnCheckout = page.locator('#checkout');
  }

  async aparecePaginaCarrito() {
    await expect(this.txtTituloCarrito).toBeVisible();
  }  
  
  async obtenerNombresProductoDeCarrito(): Promise<string[]> {
    return await this.txtNombresProductos.allInnerTexts();
  }

  async clickBotonCheckout() {
    await this.btnCheckout.click();
  } 
}
