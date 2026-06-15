import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';


export class InformacionContactoPage {
  readonly page: Page;
  readonly txtTituloInformacionContacto: Locator;
  readonly inputTextNombres: Locator;
  readonly inputTextApellidos: Locator;
  readonly inputTextCodigoPostal: Locator;
  readonly btnContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtTituloInformacionContacto = page.locator('.title:has-text("Checkout: Your Information")');
    this.inputTextNombres = page.locator('[data-test="firstName"]');
    this.inputTextApellidos = page.locator('[data-test="lastName"]');
    this.inputTextCodigoPostal = page.locator('[data-test="postalCode"]');
    this.btnContinue = page.locator('[data-test="continue"]');
  }

  async aparecePaginaInformacionContacto() {
    await expect(this.txtTituloInformacionContacto).toBeVisible();
  }  
  
  async ingresarDatosFormularioTuInformacion(nombres: string, apellidos: string, codigoPostal: string) {
    await this.inputTextNombres.fill(nombres);
    await this.inputTextApellidos.fill(apellidos);
    await this.inputTextCodigoPostal.fill(codigoPostal);
  }

  async clickBotoncontinue() {
    await this.btnContinue.click();
  } 
}