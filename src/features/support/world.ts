import { World as CucumberWorld, setWorldConstructor } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductosPage } from '../pages/ProductosPage';
import { InformacionContactoPage } from '../pages/InformacionContactoPage';

export class World extends CucumberWorld {
  page!: Page;
  browser!: Browser;
  context!: BrowserContext;
  productosAgregados: string[] = [];

  loginPage!: LoginPage;
  productosPage!: ProductosPage;
  informacionContactoPage!: InformacionContactoPage;

  constructor(options: any) {
    super(options);
  }
}

setWorldConstructor(World);