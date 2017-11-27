const path = require("path");
const run = require("./run");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (val, serialize) => {
    delete val.perfStats;
    delete val.testFilePath;
    val.testResults.forEach(result => {
      delete result.duration;
    });
    return serialize(val);
  },
  test: val => val && val.perfStats && val.testFilePath && val.testResults
});

describe("jest-runner-stylelint", () => {
  describe("failing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(__dirname, "__fixtures__", "bad.css"),
        config: {},
        globalConfig: {}
      }).then(result => {
        expect(result).toMatchSnapshot();
      }));
  });
  
  describe("passing fixture", () => {
    it("matches snapshot", () =>
      run({
        testPath: path.join(__dirname, "__fixtures__", "good.css"),
        config: {},
        globalConfig: {}
      }).then(result => {
        expect(result).toMatchSnapshot();
      }));
  });
});
