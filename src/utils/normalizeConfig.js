const normalizeConfig = (config) => {
  return Object.assign({}, config, {
    cliOptions: config.cliOptions || {},
  });
};

module.exports = normalizeConfig;
