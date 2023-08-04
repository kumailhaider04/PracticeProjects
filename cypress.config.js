const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  //This project Id is used to connect local with Cypress cloud server
  //We have to use 'npx cypress run --record --key 73e33d7b-a72c-4a94-8b5e-a9ee674ad6c9' or 'npx cypress run --reporter mochawesome --record --key 73e33d7b-a72c-4a94-8b5e-a9ee674ad6c9 --spec cypress/integration/examples/*.js'
  projectId: 'e3fmjm',
  //We can change the timeout default time for 'all the test cases in cypress' to any desireable time we want by changing this number
  //Global timeout command
  defaultCommandTimeout: 4000,

  //We can set enviorment variables here to be used globally e.g setting the URL for whole project and later just changing it from here for QA or Staging servers
  env:
  {

  },

  
  
  
  //Retry to test all the failed tests one more time
  retries: {
    runMode: 1,
  },

  e2e: {

    // implement node event listeners here
    setupNodeEvents,

    // path for BDD "cypress/integration/examples/BDD/*.feature"
    specPattern: 'cypress/integration/examples/*.js'
  },

});
