module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'tsconfig.json',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'gs-rules'
  ],
  'rules': {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ],
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        'overrides': {
          'constructors': 'off',
          'accessors': 'off'
        }
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single'
    ],
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'camelcase': ['error', {
      'properties': 'never'
    }],
    'comma-dangle': 'off',
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': 'error',
    'id-match': 'error',
    'max-len': [
      'error',
      {
        'code': 140
      }
    ],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'dirxml',
          'warn',
          'error',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupCollapsed',
          'groupEnd',
          'table',
          'Console',
          'markTimeline',
          'profile',
          'profileEnd',
          'timeline',
          'timelineEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-shadow': [
      'error',
      {
        'hoist': 'all'
      }
    ],
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'radix': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        'markers': [
          '/'
        ]
      }
    ],
    'gs-rules/copyright-check': [
      'error',
      '/* Copyright © %%% Ganchrow Scientific, SA all rights reserved */',
      2015
    ]
  }};

