/* Copyright © 2020 Ganchrow Scientific, SA all rights reserved */

/**
 * @fileoverview Check if the copyright is on top of the file.
 * @author Ganchrow Scientific
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/copyright-check'),

  RuleTester = require('eslint').RuleTester;


// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

let ruleTester = new RuleTester();
Date.prototype.getFullYear = () => 2020;
ruleTester.run('copyright-check', rule, {

  valid: [
    {
      code: [
        '/* Copyright © 2015-2020 Ganchrow Scientific, SA all rights reserved */',
        'var zero = 0',
        'console.log(zero)'
      ].join('\n'),
      options: [
        '/* Copyright © %%% Ganchrow Scientific, SA all rights reserved */',
        2015
      ]
    }
  ],

  invalid: [
    {
      code: [
        '/* Copyrightrow Scientific, SA all rights reserved */',
        'var zero = 0',
        'console.log(zero)'
      ].join('\n'),
      options: [
        '/* Copyright © %%% Ganchrow Scientific, SA all rights reserved */',
        2015
      ],
      errors: [{
        message: [
          'Invalid copyright string. Copyright should start at first character of file and be:\n',
          '/* Copyright © [YEAR RANGE] Ganchrow Scientific, SA all rights reserved */ where [YEAR RANGE] is one of:\n',
          '["2015","2016","2017","2018","2019","2020","2015-2016","2015-2017","2015-2018","2015-2019","2015-2020",',
          '"2015-2016","2016-2017","2016-2018","2016-2019","2016-2020","2015-2017","2016-2017","2017-2018","2017-2019",',
          '"2017-2020","2015-2018","2016-2018","2017-2018","2018-2019","2018-2020","2015-2019","2016-2019","2017-2019",',
          '"2018-2019","2019-2020","2015-2020","2016-2020","2017-2020","2018-2020","2019-2020"]'].join(''),
        type: 'Program'
      }]
    }
  ]
});
