'use strict';

module.exports = {
  'parserOptions': {
    'ecmaVersion': 11
  },
  'rules': {
    'indent': ['error', 2],
    'quotes': [
      2,
      'single',
      {'allowTemplateLiterals': false}
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'semi': [
      2,
      'always'
    ],
    'brace-style': [
      2, '1tbs', { 'allowSingleLine': false }
    ],
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'eqeqeq': 2,
    'curly': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': 'error',
    'no-irregular-whitespace': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-infix-ops': 'error'
  },
  'env': {
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended'
};
