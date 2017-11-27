const { pass, fail } = require("create-jest-runner");
const stylelint = require("stylelint");

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();

  return stylelint
    .lint({
      files: testPath,
      formatter: "string"
    })
    .then(data => {
      if (data.errored) {
        return fail({
          start,
          end: new Date(),
          test: {
            path: testPath,
            errorMessage: data.output
          }
        });
      }

      return pass({
        start,
        end: new Date(),
        test: { path: testPath }
      });
    })
    .catch(err => {
      throw err;
    });
};
