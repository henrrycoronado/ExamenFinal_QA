para levantar el servidor:
appium

para ver dispositivos:
adb devices

para appiumInspector:
{
  "platformName": "Android",
  "appium:platformVersion": "15",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "MiCelularReal",
  "appium:udid": "114593744C105036",
  "appium:app": "C:\\Users\\HenrryCoronado\\Downloads\\TheApp.apk"
}

comandos:
npx wdio run ./wdio.browserstack.conf.js

npx wdio run ./wdio.conf.js