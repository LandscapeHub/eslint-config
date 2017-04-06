# fastmodel-eslint-config

> Shareable ESLint configuration used at FastModel.


## Installation

```
yarn add eslint babel-eslint eslint-config-fastmodel eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y
```


## Usage

To use this preset, simply extend it in the project `.eslintrc` file. See [Configuring ESLint][Configuring ESLint] for details. Any rules can still be overridden.


```json
{
  "extends": "fastmodel"
}
```

## React

To install: Run the install described above, and then add the following.

```
yarn add eslint-plugin-react
```


To use this preset with React, extend it like so.

```json
{
  "extends": "fastmodel/react"
}
```