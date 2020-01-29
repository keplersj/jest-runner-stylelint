const { pass, fail } = require("create-jest-runner");
const stylelint = require("stylelint");
const configOverrides = require("./configOverrides");

module.exports = ({ testPath }) => {
  const start = new Date();

  return stylelint
    .lint({
      files: testPath,
      formatter: "string",
      fix: configOverrides.getFix()
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
    .catch(error => {
      throw error;
    });
};
