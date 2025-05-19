/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall draft_js
 */

'use strict';

const CharacterMetadata = require('CharacterMetadata');

/**
 * Cleans up all internal caches in draft-js.
 * This is useful when you want to reset the internal state of draft-js.
 */
function cleanup() {
  CharacterMetadata.clearCharacterMetadataPool();
}

module.exports = cleanup;
