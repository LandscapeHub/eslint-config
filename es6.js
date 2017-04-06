var common = require('./index');

var env = {
  es6: true,
  node: true
};


var parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};


var rules = Object.assign({
  // http://eslint.org/docs/rules/#ecmascript-6
  'arrow-body-style': [
    2,
    'as-needed'
  ],
  'arrow-parens': [
    2,
    'as-needed'
  ],
  'arrow-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  'constructor-super': 0,
  'generator-star-spacing': [
    2,
    {
      before: true,
      after: false
    }
  ],
  'no-class-assign': 2,
  'no-confusing-arrow': 0,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 0,
  'no-new-symbol': 2,
  'no-restricted-imports': 0,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-rename': 2,
  'no-var': 2,
  'object-shorthand': [
    2,
    'always'
  ],
  'prefer-arrow-callback': 2,
  'prefer-const': 2,
  'prefer-numeric-literals': 2,
  'prefer-reflect': 2,
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 0,
  'require-yield': 2,
  'rest-spread-spacing': [
    2,
    'never'
  ],
  'sort-imports': 2,
  'symbol-description': 2,
  'template-curly-spacing': [
    2,
    'never'
  ],
  'yield-star-spacing': [
    2,
    {
      before: true,
      after: false
    }
  ]
}, common.rules);


module.exports = {
  env: env,
  parserOptions: parserOptions,
  rules: rules
};
