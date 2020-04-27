[![Build Status](https://travis-ci.org/keplersj/jest-runner-stylelint.svg?branch=master)](https://travis-ci.org/keplersj/jest-runner-stylelint)
[![npm version](https://badge.fury.io/js/jest-runner-stylelint.svg)](https://badge.fury.io/js/jest-runner-stylelint)
[![codecov](https://codecov.io/gh/keplersj/jest-runner-stylelint/branch/master/graph/badge.svg)](https://codecov.io/gh/keplersj/jest-runner-stylelint)
[![Mentioned in Awesome Jest](https://awesome.re/mentioned-badge.svg)](https://github.com/jest-community/awesome-jest)

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://stylelint.io/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/stylelint.svg">
  </a>
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
  </a>
  <h1>jest-runner-stylelint</h1>
  <p>Stylelint runner for Jest</p>
</div>

<div align="center">
  <!--<img src="https://user-images.githubusercontent.com/574806/30197438-9681385c-941c-11e7-80a8-2b11f15bd412.gif">-->
  <!-- TODO: Create GIF showing off runner -->
</div>

## Usage

### Install

Install `jest`, `jest-runner-stylelint`, and `stylelint`

```bash
npm install --save-dev jest jest-runner-stylelint stylelint

# or with yarn

yarn add --dev jest jest-runner-stylelint stylelint
```

### Configure stylelint

You must have stylelint configured before it'll lint any of your files. Please follow the [stylelint documentation on configuration](https://stylelint.io/user-guide/configuration) to create your config.

### Add it to your Jest config

#### Using Built-in Preset

This package includes a [Jest preset](https://jestjs.io/docs/en/configuration#preset-string) which configures Jest to run stylelint on all files supported by styleint. To use it set the following in your package.json:

```json
{
  "jest": {
    "preset": "jest-runner-stylelint"
  }
}
```

or jest.config.js:

```js
module.exports = {
  preset: "jest-runner-stylelint",
};
```

#### Manually

In your `package.json`

```json
{
  "jest": {
    "runner": "stylelint",
    "moduleFileExtensions": [
      "css",
      "sass",
      "scss",
      "less",
      "sss",
      "htm",
      "html",
      "md",
      "markdown",
      "mdx",
      "js",
      "jsx",
      "ts",
      "tsx",
      "vue"
    ],
    "testMatch": [
      "**/*.css",
      "**/*.sass",
      "**/*.scss",
      "**/*.less",
      "**/*.sss",
      "**/*.htm",
      "**/*.html",
      "**/*.md",
      "**/*.markdown",
      "**/*.mdx",
      "**/*.js",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx",
      "**/*.vue"
    ]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  runner: "stylelint",
  moduleFileExtensions: [
    "css",
    "sass",
    "scss",
    "less",
    "sss",
    "htm",
    "html",
    "md",
    "markdown",
    "mdx",
    "js",
    "jsx",
    "ts",
    "tsx",
    "vue",
  ],
  testMatch: [
    "**/*.css",
    "**/*.sass",
    "**/*.scss",
    "**/*.less",
    "**/*.sss",
    "**/*.htm",
    "**/*.html",
    "**/*.md",
    "**/*.markdown",
    "**/*.mdx",
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.vue",
  ],
};
```

### Run Jest

```bash
npx jest

# or with yarn

yarn jest
```

## Toggle `--fix` in watch mode

`jest-stylelint-runner` comes with a watch plugin that allows you to toggle the `--fix` value while in watch mode without having to update your configuration.

To use this watch plugin simply add this to your Jest configuration.

```js
{
  watchPlugins: ['jest-runner-stylelint/watch-fix'],
}
```

After this run Jest in watch mode and you will see the following line in your watch usage menu.

```
 › Press F to override Stylelint --fix.
```

## Options

This project uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig), so you can provide config via:

- a `jest-runner-stylelint` property in your `package.json`
- a `jest-runner-stylelint.config.js` JS file
- a `.jest-runner-stylelintrc` JSON file

In `package.json`

```json
{
  "jest-runner-stylelint": {
    "cliOptions": {
      // Options here
    }
  }
}
```

or in `jest-runner-stylelint.config.js`

```js
module.exports = {
  cliOptions: {
    // Options here
  },
};
```

### cliOptions

Follow the [stylelint documentation on configuration](https://stylelint.io/user-guide/cli#options) to create your cli options.
