const { defineConfig } = require('cypress')

module.exports = defineConfig({
  username: 'test.test@test.be',
  password: 'test1234',
  pageLoadTimeout: 60000,
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
      mochaFile: 'cypress/reports/junit-test-results.xml',
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
    specPattern: 'cypress/e2e/*/*',
  },
})
