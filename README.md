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

```bash
appium -a 127.0.0.1 -p 4723
```

```bash
npx wdio for starting tests
```
