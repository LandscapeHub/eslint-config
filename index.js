var env = {
  es6: true,
  node: true,
}

var parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
}

var rules = {
  'import/prefer-default-export': [0],
  'import/no-extraneous-dependencies': 'off',
  'import/first': [0],
  'import/extensions': 'off',
  'jsx-a11y/label-has-for': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-a11y/href-no-hash': 'off', // allow hash on href
  'jsx-a11y/heading-has-content': 'off', //allow JSX heading shortcut
  'prettier/prettier': 'warn',
}

module.exports = {
  env: env,
  plugins: ['prettier'],
  parserOptions: parserOptions,
  rules: rules,
}
