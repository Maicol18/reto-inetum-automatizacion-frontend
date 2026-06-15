import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ProductosPage } from '../pages/ProductosPage';
import { World } from '../support/world';

Then('se muestra la página principal de productos', async function (this: World) {
  const productosPage = new ProductosPage(this.page);
  await productosPage.aparecePaginaProductos();
  this.productosPage = productosPage;
});

When('agrego el producto con nombre {string} al carrito de compras', async function (this: World, nombreProducto: string) {
  await this.productosPage.agregarProductoACarrito(nombreProducto)
  this.productosAgregados.push(nombreProducto);
});

When('se actualiza el numero de productos seleccionados {string} en el contador del carrito de compras', async function (this: World, numeroProductos: string) {
  const numeroProductosApp = await this.productosPage.obtenerContadorProductosEnCarrito();
  expect(numeroProductosApp).toBe(numeroProductos);
});

When('hago click al boton de carrito de compras en productos', async function (this: World) {
  await this.productosPage.clickBotonCarritoCompras()
});

