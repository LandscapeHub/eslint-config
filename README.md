# eslint-config

> Shareable ESLint configuration used at LandscapeHub.


## Installation

```
yarn add eslint babel-eslint eslint-config-landscapehub eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y
```


## Usage

To use this preset, simply extend it in the project `.eslintrc` file. See [Configuring ESLint][Configuring ESLint] for details. Any rules can still be overridden.


```json
{
  "extends": "landscapehub"
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
  "extends": "landscapehub/react"
}
```
