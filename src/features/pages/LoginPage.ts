import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly url: string = 'https://www.saucedemo.com/';
  readonly inputTextUsuario: Locator;
  readonly inputTextContrasenia: Locator;
  readonly submitLogin: Locator;
  readonly h3MensajeError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputTextUsuario = page.locator('#user-name');
    this.inputTextContrasenia = page.locator('#password');
    this.submitLogin = page.locator('#login-button');
    this.h3MensajeError = page.locator('[data-test="error"]');
  }

  async irUrl() {
    await this.page.goto(this.url);
  }

  async ingresarCredencialesUsuario(usuario: string, contrasenia: string) {
    await this.inputTextUsuario.fill(usuario);
    await this.inputTextContrasenia.fill(contrasenia);
  }

  async clickBotonLogin() {
    await this.submitLogin.click();
  }  

  async obtenerMensajeError(): Promise<string> {
    await expect(this.h3MensajeError).toBeVisible();
    return this.h3MensajeError.innerText();
  }
}