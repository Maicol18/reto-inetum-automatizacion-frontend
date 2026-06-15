import { When } from '@cucumber/cucumber';
import { ConfirmacionOrdenPage } from '../pages/ConfirmacionOrdenPage';
import { expect } from '@playwright/test';
import { World } from '../support/world';

When('se muestra el mensaje de confirmacion de compra con el titulo {string} y mensaje {string}', async function (this: World, titulo: string, mensaje:string) {
    const confirmacionOrdenPage = new ConfirmacionOrdenPage(this.page);
    await confirmacionOrdenPage.aparecePaginaConfirmacionOrden()
    const datosConfirmacionExitosaApp = await confirmacionOrdenPage.obtenerDatosConfirmacionOrden()

    const datosConfirmacion = [titulo, mensaje]

    expect(datosConfirmacionExitosaApp).toEqual(datosConfirmacion);
});