/*!
 * has-prop <https://github.com/jonschlinkert/has-prop>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var get = require('get-value');

module.exports = hasProp;

function hasProp(obj, prop) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  if (obj.hasOwnProperty(prop)) {
    return true;
  }

  var keys = prop.split('.');
  if (keys.length === 1) {
    return false;
  }

  var last = keys.pop();
  var val = get(obj, keys.join('.'));
  return hasProp(val, last);
}
