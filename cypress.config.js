// cypress.config.js
import { defineConfig } from "cypress";
import cypressReplay from "@replayio/cypress";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adds replay-firefox (macOS, linux) and replay-chromium (linux)
      // browsers and hooks into Cypress lifecycle methods to capture test
      // metadata and results
      cypressReplay(on, config);
      return config;
    },
  },
});