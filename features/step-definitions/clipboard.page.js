import { Given, When, Then } from "@wdio/cucumber-framework";
import mainPage from "../pageobjects/main.page";
import clipboardPage from "../pageobjects/clipboard.page";

Given('The user is on the clipboard section', async function() {
    await mainPage.clipboardButton.click()
})


When('Writes {string} in the input message', async function (message) {
    await clipboardPage.messageInput.setValue(message)
    await clipboardPage.setClipboardButton.click()
});


When('Refresh the clipboard', async function() {
    await clipboardPage.refreshClipboardButton.click()
})


Then('The content should be {string}', async function(expectedMessage) {
    await clipboardPage.clipboarText.waitForDisplayed()
    await expect(clipboardPage.clipboarText).toHaveText(expectedMessage);
})