import { When, Then } from "@wdio/cucumber-framework";
import productsPage from "../pageobjects/products.page";
import cartPage from "../pageobjects/cart.page";

When('agrega el producto {string} al carrito', async function (nombreProducto) {
    await driver.pause(2000)
    await productsPage.addToCartBoltButton.click();
});

When('presiona el icono del carrito de compras', async function () {
    await productsPage.cartIcon.click();
});

Then('debería ver {string} en la lista del carrito', async function (nombreEsperado) {
    await cartPage.cartTitle.waitForDisplayed();
    await cartPage.cartItemName.waitForDisplayed();
    await expect(cartPage.cartItemName).toHaveText(nombreEsperado);
});

When('presiona el botón de REMOVER', async function () {
    await cartPage.removeButton.click();
});

Then('el producto ya no debería estar en el carrito', async function () {
    await cartPage.cartItemName.waitForDisplayed({ reverse: true });
});

When('presiona el botón CONTINUAR COMPRANDO', async function () {
    await cartPage.continueShoppingButton.click();
});
