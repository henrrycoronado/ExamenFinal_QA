import { When, Then } from "@wdio/cucumber-framework";
import productsPage from "../pageobjects/products.page";
import checkoutPage from "../pageobjects/checkout.page";
import cartPage from "../pageobjects/cart.page";

When('agrega el segundo producto {string} al carrito', async function (nombreProducto) {
    await driver.pause(2000)
    await productsPage.addToCartRedShirtButton.click();
});

Then('debería ver la lista del carrito con los productos seleccionados', async function () {
    await driver.pause(2000)
    await expect(cartPage.cartTitle).toBeDisplayed();
});


When('presiona el botón de CHECKOUT', async function () {
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)');
    await checkoutPage.checkoutButton.waitForDisplayed();
    await checkoutPage.checkoutButton.click();
});

When('completa el formulario con Nombre {string}, Apellido {string} y CP {string}', async function (nombre, apellido, cp) {
    await checkoutPage.firstNameInput.setValue(nombre);
    await checkoutPage.lastNameInput.setValue(apellido);
    await checkoutPage.postalCodeInput.setValue(cp);
});

When('presiona el botón CONTINUAR', async function () {
    await checkoutPage.continueButton.click();
});

Then('debería ver la pantalla de resumen de compra', async function () {
    await checkoutPage.finishButton.waitForDisplayed();
});

When('presiona el botón TERMINAR', async function () {
    await checkoutPage.finishButton.click();
});

Then('debería ver el mensaje {string}', async function (mensajeEsperado) {
    await checkoutPage.thankYouHeader.waitForDisplayed();
    await expect(checkoutPage.thankYouHeader).toHaveText(mensajeEsperado);
});

When('presiona el botón REGRESO A MENU', async function () {
    await checkoutPage.backHomeButton.click();
});