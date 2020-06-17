/* Copyright © 2020 Ganchrow Scientific, SA all rights reserved */
/**
 * @fileoverview Ganchrow Scientific&#39;s custom rules
 * @author Ganchrow Scientific
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const path = require('path');
let requireIndex = require('requireindex');

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, 'rules'));
module.exports.configs = requireIndex(path.join(__dirname, 'configs'));
