/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @oncall draft_js
 */

'use strict';

const seenKeys: {[string]: boolean} = {};
const MULTIPLIER = Math.pow(2, 24);

function generateRandomKey(): string {
  let key;

  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;

  return key;
}

function clearGenerateRandomKeySeenKeys() {
  Object.getOwnPropertyNames(seenKeys).forEach(function deleteKeys(key) {
    delete seenKeys[key];
  });
}

module.exports = generateRandomKey;
module.exports.clearGenerateRandomKeySeenKeys = clearGenerateRandomKeySeenKeys;
