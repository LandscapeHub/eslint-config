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
    "class-methods-use-this": "off", // it does not require the use of this keyword on react components
    "dot-notation": "off", // confirm if we'll change brackets for dot notation
    "eol-last": ["off"],
    "default-case": "off", // no default case required
    "eqeqeq": ["off"],
    "func-names": ["error", "never"], // allow anonymous functions when using map
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": "off",
    "import/first": [0],
    "import/extensions": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/href-no-hash": "off", // allow hash on href
    "jsx-a11y/heading-has-content": "off", //allow JSX heading shortcut
    "max-len": ["error", 120],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 6 }],
    "no-unused-vars": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-nested-ternary": "off",
    "no-mixed-operators": "off",
    "no-console": ["error", { allow: ["info", "error"] }],
    "no-alert": "off",
    "new-cap": ["error", { "newIsCap": false, "capIsNew": false } ],
    "no-undef": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off", // allow assignments on return
    "no-var": 0,
    "no-else-return": 0,
    "no-lonely-if": "off",
    "no-case-declarations": "off",
    "no-shadow": ["off"],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
    "one-var": ["off", "never"],
    "one-var-declaration-per-line": 0,
    "prefer-const": "off",
    "prefer-spread": "off", // allow .apply()
    "radix": ["error", "as-needed"]
};

module.exports = {
  env: env,
  parserOptions: parserOptions,
  rules: rules
};
