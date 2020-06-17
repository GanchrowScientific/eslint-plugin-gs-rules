# eslint-plugin-gs-rules

Ganchrow Scientific's Custom Rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-gs-rules`:

```
$ npm install eslint-plugin-gs-rules --save-dev
```


## Usage

Extend the configuration using `gs-rules/base` configuration in your `.eslintrc` configuration file.

```json
 {
  "extends": [
    "plugin:gs-rules/base"
  ]
};
```


Also you can use individual rules without extending a configuration

```json
 'plugins': [
    'gs-rules'
  ],
```

```json
{
    "rules": {
        "gs-rules/rule-name": 2
    }
}
```

## Supported Rules

* [copyright-check](docs/rules/copyright-check.md)





