// eslint-disable-next-line jest/no-jest-import
const { getVersion: getJestVersion } = require("jest");
const configOverrides = require("./configOverrides");

const majorJestVersion = parseInt(getJestVersion().split(".")[0], 10);

/* istanbul ignore if */
if (majorJestVersion < 23) {
  throw new Error(`Insufficient Jest version for jest-runner-stylelint watch plugin

  Watch plugins are only available in Jest 23.0.0 and above.
  Upgrade your version of Jest in order to use it.
`);
}

function getPrompt() {
  const fix = configOverrides.getFix();
  if (fix === undefined) {
    return "override Stylelint --fix";
  }
  if (!fix) {
    return "toggle Stylelint --fix (disabled)";
  }
  return "toggle Stylelint --fix (enabled)";
}

class StylelintWatchFixPlugin {
  constructor({ stdout, config }) {
    this._stdout = stdout;
    this._key = config.key || "F";
  }

  async run() {
    const fix = configOverrides.getFix();
    configOverrides.setFix(!fix);
    return true;
  }

  getUsageInfo() {
    return {
      key: this._key,
      prompt: getPrompt(),
    };
  }
}

module.exports = StylelintWatchFixPlugin;
