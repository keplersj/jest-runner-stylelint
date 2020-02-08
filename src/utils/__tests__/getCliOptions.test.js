const getCliOptions = require("../getCliOptions");
const path = require("path");

describe("getCliOptions", () => {
  it("check cli options in jest-runner-stylelint.config", () => {
    const rootDir = path.resolve(__dirname, "../../__fixtures__");
    const config = getCliOptions({ rootDir });

    expect(config).toEqual({ cliOptions: { allowEmptyInput: true } });
  });

  it("check cli options without config", () => {
    const rootDir = path.resolve(__dirname, "./");
    const config = getCliOptions({ rootDir });

    expect(config).toEqual({ cliOptions: {} });
  });
});
