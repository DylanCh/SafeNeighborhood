# Node.js Cloudant

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/IBM-Bluemix/nodejs-cloudant)

## Overview
SafeNeighborhood is an application for searching for and viewing the data of sex criminals in your neighborhood. The application is built with Node.js and AngularJS, with Text-to-Speech functions powered by IBM Watson.

## Run the app locally

1. [Install Node.js][]
+ cd into this project's root directory
+ Copy the value for the VCAP_SERVICES envirionment variable from the application running in Bluemix and paste it in a `vcap-local.json` file
+ Run `npm install` to install the app's dependencies
+ Run `npm start` to start the app
+ Access the running app in a browser at <http://localhost:6001>

[Install Node.js]: https://nodejs.org/en/download/

