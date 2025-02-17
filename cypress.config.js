const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vyb2np',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
