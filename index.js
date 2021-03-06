var env = {
  es6: true,
  node: true,
  jest: true,
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
  'prettier/prettier': 'error',
  'no-undef': 'warn',
  'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
  'react/jsx-uses-vars': 'warn',
  'react/jsx-uses-react': 1,
  'react/jsx-no-undef': ['warn'],
  'react/jsx-no-duplicate-props': ['warn'],
  'react/button-has-type': ['error'],
  'import/no-unresolved': ['error'],
  'import/no-useless-path-segments': ['error'],
  'react/no-access-state-in-setstate': ['error'],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
}

module.exports = {
  env: env,
  plugins: ['prettier', 'react', 'import', 'react-hooks'],
  parserOptions: parserOptions,
  rules: rules,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
