import { $ } from "@wdio/globals";


class MainPage {

    get clipboardButton() {
        return $('android=new UiSelector().text("Clipboard Demo")')
    }


}


export default new MainPage()