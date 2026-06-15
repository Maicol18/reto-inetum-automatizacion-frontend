import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { World } from './world';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function (this: World) { 
  context = await browser.newContext();
  this.page = await context.newPage();
});


After(async function (this: World) {
  await this.page.close();
  await context.close();
});


AfterAll(async function () {
  await browser.close();
});