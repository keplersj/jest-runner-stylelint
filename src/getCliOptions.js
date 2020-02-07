const { cosmiconfigSync } = require("cosmiconfig");
const normalizeConfig = require("./normalizeConfig");

const explorerSync = cosmiconfigSync("jest-runner-stylelint");

const getCliOptions = config => {
  const result = explorerSync.search(config.rootDir);

  if (result) {
    return normalizeConfig(result.config);
  }

  return normalizeConfig({});
};

module.exports = getCliOptions;
