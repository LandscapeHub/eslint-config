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
    "react/no-did-mount-set-state": "off",
    "react/no-unescaped-entities": "off",
    "react/no-string-refs": "off",
    "react/jsx-no-bind": [0],
    "react/jsx-space-before-closing": [0],
    "react/jsx-boolean-value": [0],
    "react/jsx-tag-spacing": [0],
    "react/no-unused-prop-types": "off", // disable error for unused proptypes
    "react/forbid-prop-types": [0],
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-multi-comp": "off", // allows creation of more than one react component per file
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": "off", // allow stateless function upon component creation
    "react/sort-comp": "off" // Disable enforcement of component methods order
});

module.exports = {
  plugins: plugins,
  env: env,
  parserOptions: parserOptions,
  rules: rules
};
