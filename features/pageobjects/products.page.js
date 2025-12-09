import { $ } from "@wdio/globals";

class ProductsPage {
    get productsTitle() {
        return $('android=new UiSelector().text("PRODUCTOS")');
    }

    get menuButton() {
        return $('android=new UiSelector().description("test-Menu")');
    }

    get addToCartBoltButton() {
        return $('android=new UiSelector().text("AÑADIR A CARRITO").instance(0)');
    }

    get addToCartRedShirtButton() {
        return $('android=new UiSelector().text("AÑADIR A CARRITO").instance(1)');
    }

    get cartIcon() {
        return $('android=new UiSelector().description("test-Carrito")');
    }
}

export default new ProductsPage();