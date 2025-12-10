import { $ } from "@wdio/globals";

class LoginPage {
    get usernameInput() {
        return $('~test-Usuario');
    }

    get passwordInput() {
        return $('~test-Contraseña');
    }

    get loginButton() {
        return $('android=new UiSelector().text("LOGIN")');
    }
}

export default new LoginPage();