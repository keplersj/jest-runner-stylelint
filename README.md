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

Install `jest`_(it needs Jest 21+)_, `jest-runner-stylelint`, and `stylelint`

```bash
npm install --save-dev jest jest-runner-stylelint stylelint

# or with yarn

yarn add --dev jest jest-runner-stylelint stylelint
```

### Add it to your Jest config

In your `package.json`

```json
{
  "jest": {
    "runner": "jest-runner-stylelint",
    "moduleFileExtensions": ["css"],
    "testMatch": ["**/*.css"]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  runner: "jest-runner-stylelint",
  moduleFileExtensions: ["css"],
  testMatch: ["**/*.css"]
};
```

### Run Jest

```bash
npx jest
```
