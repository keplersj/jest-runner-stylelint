const path = require("path");
const run = require("./run");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value, serialize) => {
    delete value.perfStats;
    delete value.testFilePath;
    value.testResults.forEach((result) => {
      delete result.duration;
    });
    return serialize(value);
  },
  test: (value) =>
    value && value.perfStats && value.testFilePath && value.testResults,
});

describe("jest-runner-stylelint", () => {
  describe("failing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(__dirname, "__fixtures__", "bad.css"),
        config: {},
        globalConfig: {},
      }).then((result) => expect(result).toMatchSnapshot()));
  });

  describe("passing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(__dirname, "__fixtures__", "good.css"),
        config: {},
        globalConfig: {},
      }).then((result) => expect(result).toMatchSnapshot()));
  });
});
