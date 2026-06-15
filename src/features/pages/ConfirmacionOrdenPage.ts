import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';


export class ConfirmacionOrdenPage {
  readonly page: Page;
  readonly txtTituloPaginaConfirmacion: Locator;
  readonly txtTituloConfirmacion: Locator;
  readonly txtMensajeConfirmacion: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtTituloPaginaConfirmacion = page.locator('.title:has-text("Checkout: Complete!")');
    this.txtTituloConfirmacion = page.locator('[data-test="complete-header"]');
    this.txtMensajeConfirmacion = page.locator('[data-test="complete-text"]');
  }

  async aparecePaginaConfirmacionOrden() {
    await expect(this.txtTituloPaginaConfirmacion).toBeVisible();
  }  
  
  async obtenerDatosConfirmacionOrden(): Promise<string[]> {
    const titulo = await this.txtTituloConfirmacion.innerText();
    const mensaje = await this.txtMensajeConfirmacion.innerText();

    return [titulo, mensaje];
  }

}
