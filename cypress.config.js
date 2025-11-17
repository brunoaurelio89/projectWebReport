const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1920,
  // reporter: "cypress-mochawesome-reporter",
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
  },

  env: {
    passwordIncorrect: "incorrectPassword",
    passwordCorrect: "654321",
    signUpName: "BrunoAurelioQA",
    emailExist: "testes-1721608919907@email.com",
  },
});
