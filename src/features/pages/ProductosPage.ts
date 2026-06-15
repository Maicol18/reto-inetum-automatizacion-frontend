import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';


export class ProductosPage {
  readonly page: Page;
  readonly txtTituloProductos: Locator;
  readonly btnCarrito: Locator;
  readonly txtContadorProductosCarrito: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtTituloProductos = page.locator('.app_logo:has-text("Swag Labs")');
    this.btnCarrito = page.locator('[data-test="shopping-cart-link"]');
    this.txtContadorProductosCarrito = page.locator('[data-test="shopping-cart-badge"]');
  }

  async aparecePaginaProductos() {
    await expect(this.txtTituloProductos).toBeVisible();
  }  

  async clickBotonCarritoCompras() {
    await this.btnCarrito.click();
  } 
  
  async agregarProductoACarrito(nombreProducto: string) {
    const nombreProductoFormateado = nombreProducto.trim();
    const locatorProducto = this.page.locator('.inventory_item', { hasText: nombreProductoFormateado });
    await locatorProducto.getByRole('button', { name: 'Add to cart' }).click();
  }

  async obtenerContadorProductosEnCarrito(): Promise<string> {
    return this.txtContadorProductosCarrito.innerText();
  }
}
