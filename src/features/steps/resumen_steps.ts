import { When } from '@cucumber/cucumber';
import { ResumenPage } from '../pages/ResumenPage';
import { World } from '../support/world';

When('hago click al boton Finish en el resumen de la compra', async function (this: World) {
    const resumenPage = new ResumenPage(this.page);
    await resumenPage.aparecePaginaResumen()
    await resumenPage.clickBotonFinish()
});