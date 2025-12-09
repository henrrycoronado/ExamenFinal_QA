import { $ } from "@wdio/globals";

class LoginPage {
    get usernameInput() {
        return $('android=new UiSelector().description("test-Usuario")');
    }

    get passwordInput() {
        return $('android=new UiSelector().description("test-Contraseña")');
    }

    get loginButton() {
        return $('android=new UiSelector().text("LOGIN")');
    }
}

export default new LoginPage();