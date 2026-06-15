import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { World } from '../support/world';


Given('ingreso a la pagina de inicio de sesion de SauceDemo', async function (this: World) {
    const loginPage = new LoginPage(this.page);
    await loginPage.irUrl();
    this.loginPage = loginPage;
});

When('ingreso el usuario {string} y la contraseña {string}', async function (this: World, usuario: string, contrasenia: string) {
    await this.loginPage.ingresarCredencialesUsuario(usuario, contrasenia)
});

Then('hago click en el boton Login', async function (this: World) {
    await this.loginPage.clickBotonLogin()
});

Then('se muestra el mensaje de error {string} en el login', async function (this: World, mensajeError: string) {
    const mensajeErrorApp = await this.loginPage.obtenerMensajeError();
    expect(mensajeErrorApp).toBe(mensajeError);
});