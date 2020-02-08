const { cosmiconfigSync } = require("cosmiconfig");
const normalizeConfig = require("./normalizeConfig");

const explorerSync = cosmiconfigSync("jest-runner-stylelint");

const getCliOptions = ({ rootDir }) => {
  const result = explorerSync.search(rootDir);
  const config = result === null ? {} : result.config;

  return normalizeConfig(config);
};

module.exports = getCliOptions;
