const { defineConfig } = require('cypress')

module.exports = defineConfig({
  username: 'test.test@test.be',
  password: 'test1234',
  pageLoadTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'custom-title',
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.coolblue.be/nl',
    specPattern: 'cypress/e2e/*/*',
  },
})
