/* Copyright © 2020 Ganchrow Scientific, SA all rights reserved */
/**
 * @fileoverview Check if the copyright is on top of the file.
 * @author Ganchrow Scientific
 */
'use strict';

function hasPotentialRangeAndIsCopyright(template, copyright, possibleYearRanges) {
  return possibleYearRanges.some(yearRange => {
    return copyright === template.replace(/%%%/, yearRange);
  });
}

function generateFailureString(copyright, yearRanges) {
  return 'Invalid copyright string. Copyright should start at first character of file and be:\n' +
    `${copyright.replace(/%%%/, '[YEAR RANGE]')} where [YEAR RANGE] is one of:\n${JSON.stringify(yearRanges)}`;
}

module.exports = {
  meta: {
    docs: {
      description: 'Check if the copyright is on top of the file.',
      category: 'Fill me in',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      { type: 'string' }, { type: 'number' }
    ]
  },

  create: function(context) {
    let error;
    let code = context.getSourceCode();
    let copyrightInFile = code.text.split('\n')[0];
    let endYear = new Date().getFullYear();
    let possibleYears = [];

    let [template, startYear] = context.options;
    let copyrightString = template;
    for (let year = startYear; year <= endYear; year++) {
      possibleYears.push(year);
    }
    let possibleYearPotentialRanges = possibleYears.map(y => y.toString());
    possibleYears.forEach((year, idx) => {
      possibleYears.forEach((nextYear, nextIdx) => {
        if (nextIdx !== idx) {
          possibleYearPotentialRanges.push(`${Math.min(year, nextYear)}-${Math.max(year, nextYear)}`);
        }
      });
    });
    if (!hasPotentialRangeAndIsCopyright(copyrightString, copyrightInFile, possibleYearPotentialRanges)) {
      error = generateFailureString(copyrightString, possibleYearPotentialRanges);
    }

    return {
      Program(node) {
        if (error) {
          context.report({
            node,
            message: error,
            data: {
              name: 'foo'
            }
          });
        }
      }
    };
  }
};
