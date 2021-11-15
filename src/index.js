const { createJestRunner } = require("create-jest-runner");
const configOverrides = require("./configOverrides");

module.exports = createJestRunner(require.resolve("./run"), {
  getExtraOptions: () => ({ fix: configOverrides.getFix() }),
});
