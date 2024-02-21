# Appium Android Testing Practice Project

This project demonstrates my learning of Native Android App Automation with Appium and WebdriverIO.

The goal here is exploring the possibilities....because this combination of frameworks lacks adequate documentation.
(Note: If you notice I have .ts and .js files alongside each other, that's because I tried to migrate the project from js to ts but it turned out to be a bit complicated.)

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

and in the wdio.conf.js we can follow 2 approaches:

#### Running all tests regardless of sequence

A thing to note here is that when you don't specify a sequence, webdrverIO will execute each test in it's own worker. Which means, for each worker, the app will be reinstalled.
If we want to run all the tests regardless of the sequence then we need to add to the capabilities:

```bash
"appium:noReset": "true"
```

Now the thing is, with this approach you will be left with the app not reseting after the tests have executed, the solution here is to add the following in the last test that executes:

```bash
after( async function () {
    await driver.removeApp("com.saucelabs.mydemoapp.rn");
  }),
```

#### Running tests in a sequence

In this approach, your tests will be grouped together, and webdrverIO will execute them in a single worker. This means your app state will remain as is for all the tests and everytime you run the tests, you will have a fresh new state.

This is how you can define a sequence:

```bash
specs: [["./test/spec/loginTests.ts", "./test/spec/cartTests.ts"]],
```

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
