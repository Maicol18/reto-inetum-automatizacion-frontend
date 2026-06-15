import { When } from '@cucumber/cucumber';
import { InformacionContactoPage } from '../pages/InformacionContactoPage';
import { World } from '../support/world';


When('ingreso el nombre {string} apellido {string} y codigo postal {string}', async function (this: World, nombres: string, apellidos: string, codigoPostal: string) {
    const informacionContactoPage = new InformacionContactoPage(this.page);
    this.informacionContactoPage = informacionContactoPage;
    await this.informacionContactoPage.aparecePaginaInformacionContacto()
    await this.informacionContactoPage.ingresarDatosFormularioTuInformacion(nombres, apellidos, codigoPostal)
});

When('hago click en el boton Continue en tu informacion', async function (this: World) {
    await this.informacionContactoPage.clickBotoncontinue()
});