# Intro to Ionic Application

This is the project that was constructed and demoed at the [2016 Prairie.Code() Conference](http://prairiecode.amegala.com/) in Des Moines, IA and [2017 Indy.Code() Conference](http://indycode.amegala.com/) in Indianapolis, IN by [Doug Niccum](http://dniccumdesign.com).

This project is open-sourced and available any further development and/or cloning.

## Project dependencies

Regardless of operating system, you will need the following dependencies:

* [NodeJS and NPM](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Gulp](http://gulpjs.com/)
* [Angular-CLI](https://cli.angular.io/)
* [Ionic](http://ionicframework.com/docs/v2/)
* [Cordova](https://cordova.apache.org/)

### iOS

* XCode (with all available updates)
* XCode Command Line Tools.

### Android

* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
* [Android Studio](https://developer.android.com/studio/index.html)
    * Android API
    * Android SDK Build Tools

## To Build This Project

1. Clone this repository and enter the directory with `cd intro-to-ionic-app`
2. Install all of the NodeJS dependencies with `npm install`
3. Add the platform specific Cordova plugins with `ionic platform add ios` and/or `ionic platform add android`
4. Ensure that the correct hooks are in place with `ionic prepare`
5. Build the project with `ionic build ios` or `ionic build android`