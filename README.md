# Appium Android Testing Practice Project

This project demonstrates my learning of Native Android App Automation with Appium and WebdriverIO.

The goal here is exploring the possibilities....because this combination of frameworks lacks adequate documentation.

## Global Setup for Appium

- Install node
- Download JDK and set JAVA_HOME path
- Download Android studio and set ANDROID_HOME path
- Download and Setup an android emulator
- Download and Setup appium desktop inspector

Then in the terminal execute following commands:

```bash
npm install appium-doctor -g
```

```bash
Set-ExecutionPolicy RemoteSigned
```

```bash
npm install -g appium@next
```

```bash
appium driver install uiautomator2
```

```bash
npm install @types/webdriverio --save-dev
```

## Steps to start appium tests

In a separate terminal:

```bash
appium -a 127.0.0.1 -p 4723
```

In project directory:

```bash
npx wdio
```

## Some issues and how I worked around them

### Relaunching android app without reseting app state

In order to do this we need to call the following methods:

```bash
await driver.terminateApp("com.saucelabs.mydemoapp.rn")
await driver.activateApp("com.saucelabs.mydemoapp.rn")
```

and in the wdio.conf.js we need to add to the capabilities:

```bash
"appium:noReset": "true"
```

Now the thing is, with this approach you will be left with the app not reseting after the tests, so to do that we need the following method:

```bash
await driver.removeApp("com.saucelabs.mydemoapp.rn");
```

This should be added in hook that runs when all tests have executed so when you run the tests again, you have a fresh new state.

### Running tests in more than 1 file

For some reason, when I split my tests into 2 files I ran into following issues:
`An unknown server-side error occurred while processing the command. Original error: 'POST /element' cannot be proxied to UiAutomator2 server because the instrumentation process is not running (probably crashed). Check the server log and/or the logcat output for more details`

`The session identified by ... is not known`

`ERROR webdriver: Request failed with status 404 due to invalid session id: The session identified by ..... is not known`

To resolve this we need to remove the following apps from our test device:
`io.appium.uiautomator2.server`
`io.appium.uiautomator2.server.test`
You can also remove these as part of your teardown since the above provided strings are the app IDs.

and we need to set max instances to 1 in the wdio.conf.js file:
`maxInstances: 1`

### Appium inspector stuck on 'Gathering initial app source…'

So in this one, I launched the appium inspector server but it got stuck on 'Gathering initial app source…'
The fix for this is the same as mentioned above i.e. removing the uiautomator2 apps.
