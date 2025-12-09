import { $ } from "@wdio/globals";

class CartPage {
    get cartTitle() {
        return $('android=new UiSelector().text("TU CARRITO")');
    }

    get cartItemName() {
        return $('android=new UiSelector().text("Camisa Sauce Labs Bolt")');
    }

    get removeButton() {
        return $('android=new UiSelector().text("REMOVER")');
    }

    get continueShoppingButton() {
        return $('android=new UiSelector().text("CONTINUAR COMPRANDO")');
    }
}

export default new CartPage();