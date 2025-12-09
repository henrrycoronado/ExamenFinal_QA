import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import productsPage from "../pageobjects/products.page";
import menuPage from "../pageobjects/menu.page";

Given('que el usuario abre la aplicación y está en la pantalla de login', async function () {
    await loginPage.loginButton.waitForDisplayed();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (usuario, contrasena) {
    await loginPage.usernameInput.setValue(usuario);
    await loginPage.passwordInput.setValue(contrasena);
});

When('presiona el botón de LOGIN', async function () {
    await loginPage.loginButton.click();
});

Then('debería ver la pantalla principal de PRODUCTOS', async function () {
    await driver.pause(2000)
    await expect(productsPage.productsTitle).toBeDisplayed();
});

When('abre el menú lateral', async function () {
    await productsPage.menuButton.click();
});

When('presiona la opción de CERRAR SESION', async function () {
    await driver.pause(2000)
    await menuPage.logoutButton.click();
});

Then('debería volver a la pantalla de login inicial', async function () {
    await loginPage.loginButton.waitForDisplayed();
    await expect(loginPage.loginButton).toBeDisplayed();
});