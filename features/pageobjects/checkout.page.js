import { $ } from "@wdio/globals";

class CheckoutPage {
    get firstNameInput() {
        return $('android=new UiSelector().description("test-Nombre")');
    }

    get lastNameInput() {
        return $('android=new UiSelector().description("test-Apellido")');
    }

    get postalCodeInput() {
        return $('android=new UiSelector().description("test-Código postal")');
    }

    get continueButton() {
        return $('android=new UiSelector().text("CONTINUAR")');
    }

    get checkoutButton() {
        return $('android=new UiSelector().text("CHECKOUT")');
    }

    get finishButton() {
        return $('android=new UiSelector().text("TERMINAR")');
    }

    get thankYouHeader() {
        return $('android=new UiSelector().text("GRACIAS POR SU ORDEN")');
    }

    get backHomeButton() {
        return $('android=new UiSelector().text("REGRESO A MENU")');
    }
}

export default new CheckoutPage();