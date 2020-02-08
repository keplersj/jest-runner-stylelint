const normalizeConfig = require("../normalizeConfig");

describe("normalizeConfig", () => {
  it("check cliOptions", () => {
    const config = normalizeConfig({ cliOptions: { arg: "test arg" } });
    expect(config).toEqual({ cliOptions: { arg: "test arg" } });
  });

  it("check default cliOptions", () => {
    const config = normalizeConfig({});

    expect(config).toEqual({ cliOptions: {} });
  });
});
