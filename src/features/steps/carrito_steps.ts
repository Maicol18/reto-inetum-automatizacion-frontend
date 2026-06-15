import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CarritoPage } from '../pages/CarritoPage';
import { World } from '../support/world';

Then('se muestran los productos agregados en el carrito de compras', async function (this: World) {
  const carritoPage = new CarritoPage(this.page);
  await carritoPage.aparecePaginaCarrito();
  const nombresProductosApp = await carritoPage.obtenerNombresProductoDeCarrito()

  expect(nombresProductosApp).toEqual(this.productosAgregados);
});

Then('hago click en el boton Checkout en tu cartera', async function (this: World) {
    const carritoPage = new CarritoPage(this.page);
    await carritoPage.clickBotonCheckout()
});

