var _ = require('underscore');
var base = require('./index');
var plugins = [ 'react' ];
var env = _.extend({}, base.env, { browser: true });
var parserOptions = _.extend({}, base.parserOptions, {
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true
  }
});

var rules = _.extend({}, base.rules, {
  "react/jsx-filename-extension": "off",
  "react/jsx-space-before-closing": [0],
  "react/jsx-tag-spacing": [0],
  "react/forbid-prop-types": [0],
  "react/require-default-props": "off", //double check
  "react/prop-types": "off", //double check
  "react/no-array-index-key": "off", //double check file tourneyTable
  "dot-notation": "off" // confirm if we'll change brackets for dot notation
});

module.exports = {
  plugins: plugins,
  env: env,
  parserOptions: parserOptions,
  rules: rules
};
