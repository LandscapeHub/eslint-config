var env = {
  es6: true,
  node: true
};

var parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};

var rules = {
  "array-bracket-spacing": ["error", "always", { "arraysInArrays": false }],
  "arrow-body-style": ["off", "as-needed"],
  "arrow-parens": ["off"],
  "computed-property-spacing": ["error", "always"],
  "comma-dangle": 0,
  "consistent-return": "off",
  "eol-last": ["off"],
  "eqeqeq": ["off"],
  "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 5 }],
  "max-len": ["error", 120],
  "object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
  "radix": ["error", "as-needed"],
  "no-var": 0,
  "no-lonely-if": "off",
  "one-var": ["off", "never"],
  "no-else-return": 0,
  "one-var-declaration-per-line": 0,
  "no-unused-vars": 0,
  "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
  "no-mixed-operators": "off",
  "new-cap": ["error", { "newIsCap": false } ],
  "no-undef": "off",
  "no-underscore-dangle": "off",
  "import/prefer-default-export": [0],
  "import/first": [0]
};

module.exports = {
  env: env,
  parserOptions: parserOptions,
  rules: rules
};
