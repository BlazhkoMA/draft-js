declare module '@blazhkoma/draft-js' {
  interface EditorProps {
    editorState: EditorState;
    onChange: (editorState: EditorState) => void;
    placeholder?: string;
    readOnly?: boolean;
    [key: string]: any;
  }

  class Editor {
    constructor(props: EditorProps);
  }

  class EditorState {
    static createEmpty(): EditorState;
    static createWithContent(content: ContentState): EditorState;
    getCurrentContent(): ContentState;
    getSelection(): SelectionState;
  }

  class ContentState {
    static createFromText(text: string): ContentState;
    getBlockMap(): any;
    getFirstBlock(): ContentBlock;
    getLastBlock(): ContentBlock;
  }

  class ContentBlock {
    getKey(): string;
    getText(): string;
    getType(): string;
  }

  class SelectionState {
    static createEmpty(key: string): SelectionState;
    getAnchorKey(): string;
    getFocusKey(): string;
  }

  class CompositeDecorator {
    constructor(decorators: any[]);
  }

  class Modifier {
    static insertText(
      contentState: ContentState,
      selectionState: SelectionState,
      text: string
    ): ContentState;
  }

  class CharacterMetadata {
    static clearCharacterMetadataPool(): void;
  }

  export function cleanup(): void;
} 