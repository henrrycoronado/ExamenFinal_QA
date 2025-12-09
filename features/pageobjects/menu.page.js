import { $ } from "@wdio/globals";

class MenuPage {
    get logoutButton() {
        return $('android=new UiSelector().text("CERRAR SESION")');
    }
}

export default new MenuPage();