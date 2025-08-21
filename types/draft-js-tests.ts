import {
  Editor,
  EditorState,
  ContentState,
  ContentBlock,
  CharacterMetadata,
  SelectionState,
  CompositeDraftDecorator,
  RichUtils,
  Modifier,
  AtomicBlockUtils,
  convertFromRaw,
  convertToRaw,
  getDefaultKeyBinding,
  getVisibleSelectionRect,
  cleanup,
  clearGenerateRandomKeySeenKeys,
} from './index';

import * as React from 'react';

// Test EditorState
const editorState = EditorState.createEmpty();
const contentState = ContentState.createFromText('Hello world');
const editorStateWithContent = EditorState.createWithContent(contentState);

// Test Editor
const editorProps = {
  editorState,
  onChange: (newEditorState: EditorState) => {
    // Handle change
  },
};

React.createElement(Editor, editorProps);

// Test CharacterMetadata
CharacterMetadata.clearCharacterMetadataPool();

// Test cleanup functions
cleanup();
clearGenerateRandomKeySeenKeys();
