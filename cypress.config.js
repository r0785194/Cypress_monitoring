const { defineConfig } = require('cypress')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  username: 'test.test@test.be',
  password: 'test1234',
  pageLoadTimeout: 60000,
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
      mochaFile: 'cypress/reports/junit-test-results-[hash].xml',
     toConsole: true,
    "includePending": true,
    "testsuitesTitle": "Feature",
    "testCaseSwitchClassnameAndName": true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
})
