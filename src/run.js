const { pass, fail } = require("create-jest-runner");
const stylelint = require("stylelint");
const configOverrides = require("./configOverrides");
const getCliOptions = require("./utils/getCliOptions");

module.exports = ({ testPath, config }) => {
  const start = new Date();

  const defaultConfig = {
    files: testPath,
    formatter: "string",
    fix: configOverrides.getFix(),
  };
  const { cliOptions = {} } = getCliOptions(config);

  return stylelint
    .lint(Object.assign({}, cliOptions, defaultConfig))
    .then((data) => {
      if (data.errored) {
        return fail({
          start,
          end: new Date(),
          test: {
            path: testPath,
            errorMessage: data.output,
          },
        });
      }

      return pass({
        start,
        end: new Date(),
        test: { path: testPath },
      });
    })
    .catch((error) => {
      throw error;
    });
};
