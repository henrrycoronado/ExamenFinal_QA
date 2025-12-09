import { $ } from "@wdio/globals";

class ClipboardPage {

    get messageInput() {
        return $('android=new UiSelector().resourceId("messageInput")');
    }

    get setClipboardButton() {
        return $('android=new UiSelector().text("Set Clipboard Text")');
    }

    get refreshClipboardButton() {
        return $('android=new UiSelector().text("Refresh Clipboard Text")')
    }

    get clipboarText() {
        return $('android=new UiSelector().resourceId("clipboardText")');
    }
}


export default new ClipboardPage()