// TypeScript Version: 3.0

import * as React from 'react';
import { OrderedSet, Record, List, Map } from 'immutable';

export interface DraftInlineStyle extends OrderedSet<string> {}

export interface DraftBlockType {
    'header-one': string;
    'header-two': string;
    'header-three': string;
    'header-four': string;
    'header-five': string;
    'header-six': string;
    'unordered-list-item': string;
    'ordered-list-item': string;
    blockquote: string;
    'code-block': string;
    atomic: string;
    unstyled: string;
}

export interface EditorProps {
    editorState: EditorState;
    onChange: (editorState: EditorState) => void;
    placeholder?: string;
    readOnly?: boolean;
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    tabIndex?: number;
    autoCapitalize?: string;
    autoComplete?: string;
    autoCorrect?: string;
    ariaActiveDescendantID?: string;
    ariaAutoComplete?: string;
    ariaControls?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaMultiline?: boolean;
    role?: string;
    handleKeyCommand?: (command: string, editorState: EditorState) => 'handled' | 'not-handled';
    keyBindingFn?: (e: React.KeyboardEvent) => string | null;
    handleBeforeInput?: (chars: string, editorState: EditorState) => 'handled' | 'not-handled';
    handlePastedText?: (text: string, html?: string, editorState?: EditorState) => 'handled' | 'not-handled';
    handleReturn?: (e: React.KeyboardEvent, editorState: EditorState) => 'handled' | 'not-handled';
    onEscape?: (e: React.KeyboardEvent) => void;
    onTab?: (e: React.KeyboardEvent) => void;
    onUpArrow?: (e: React.KeyboardEvent) => void;
    onDownArrow?: (e: React.KeyboardEvent) => void;
    onRightArrow?: (e: React.KeyboardEvent) => void;
    onLeftArrow?: (e: React.KeyboardEvent) => void;
    onBlur?: (e: React.SyntheticEvent) => void;
    onFocus?: (e: React.SyntheticEvent) => void;
    blockRendererFn?: (block: ContentBlock) => any;
    blockRenderMap?: any;
    blockStyleFn?: (block: ContentBlock) => string;
    customStyleMap?: any;
    customStyleFn?: (style: DraftInlineStyle, block: ContentBlock) => React.CSSProperties | undefined;
    entityDisplayURLMap?: any;
    preserveSelectionOnBlur?: boolean;
    decorators?: any[];
}

export class Editor extends React.Component<EditorProps> {}

export class EditorState {
    static createEmpty(decorator?: CompositeDraftDecorator): EditorState;
    static createWithContent(contentState: ContentState, decorator?: CompositeDraftDecorator): EditorState;
    static create(config?: any): EditorState;
    static push(editorState: EditorState, contentState: ContentState, changeType: string): EditorState;
    static undo(editorState: EditorState): EditorState;
    static redo(editorState: EditorState): EditorState;
    static acceptSelection(editorState: EditorState, selectionState: SelectionState): EditorState;
    static forceSelection(editorState: EditorState, selectionState: SelectionState): EditorState;
    static moveSelectionToEnd(editorState: EditorState): EditorState;
    static moveFocusToEnd(editorState: EditorState): EditorState;
    static set(editorState: EditorState, options: any): EditorState;

    getCurrentContent(): ContentState;
    getSelection(): SelectionState;
    getBlockTree(blockKey: string): List<any>;
    isCollapsed(): boolean;
    getDirectionMap(): OrderedMap<any, any>;
    getAllowUndo(): boolean;
    getCurrentInlineStyle(): DraftInlineStyle;
    getLastChangeType(): string;
    mustForceSelection(): boolean;
    getNativelyRenderedContent(): ContentState | null;
    getRedoStack(): any;
    getUndoStack(): any;
    isInCompositionMode(): boolean;
    isSelectionAtStartOfContent(): boolean;
    isSelectionAtEndOfContent(): boolean;
}

export class ContentState {
    static createFromText(text: string, delimiter?: string | RegExp): ContentState;
    static createFromBlockArray(blocks: ContentBlock[], entityMap?: any): ContentState;

    getEntityMap(): any;
    getBlockMap(): OrderedMap<string, ContentBlock>;
    getSelectionBefore(): SelectionState;
    getSelectionAfter(): SelectionState;
    getBlockForKey(key: string): ContentBlock;
    getKeyBefore(key: string): string;
    getKeyAfter(key: string): string;
    getBlockBefore(key: string): ContentBlock | undefined;
    getBlockAfter(key: string): ContentBlock | undefined;
    getBlocksAsArray(): ContentBlock[];
    getFirstBlock(): ContentBlock;
    getLastBlock(): ContentBlock;
    getPlainText(delimiter?: string): string;
    getLastCreatedEntityKey(): string;
    hasText(): boolean;
    createEntity(type: string, mutability: string, data?: any): ContentState;
    getEntity(key: string): DraftEntityInstance;
    mergeEntityData(key: string, toMerge: any): ContentState;
    replaceEntityData(key: string, newData: any): ContentState;
    addEntity(instance: DraftEntityInstance): ContentState;
}

export class ContentBlock {
    getKey(): string;
    getType(): string;
    getText(): string;
    getCharacterList(): List<CharacterMetadata>;
    getLength(): number;
    getDepth(): number;
    getInlineStyleAt(offset: number): DraftInlineStyle;
    getEntityAt(offset: number): string | null;
    getData(): Map<any, any>;
    findStyleRanges(filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void): void;
    findEntityRanges(filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void): void;
}

export class CharacterMetadata {
    static applyStyle(record: CharacterMetadata, style: string): CharacterMetadata;
    static removeStyle(record: CharacterMetadata, style: string): CharacterMetadata;
    static applyEntity(record: CharacterMetadata, entityKey: string | null): CharacterMetadata;
    static create(config?: any): CharacterMetadata;
    static clearCharacterMetadataPool(): void;

    getStyle(): DraftInlineStyle;
    getEntity(): string | null;
    hasStyle(style: string): boolean;
}

export class SelectionState {
    static createEmpty(key: string): SelectionState;

    serialize(): string;
    getAnchorKey(): string;
    getAnchorOffset(): number;
    getFocusKey(): string;
    getFocusOffset(): number;
    getIsBackward(): boolean;
    getHasFocus(): boolean;
    isCollapsed(): boolean;
    hasEdgeWithin(blockKey: string, start: number, end: number): boolean;
    getStartKey(): string;
    getStartOffset(): number;
    getEndKey(): string;
    getEndOffset(): number;
}

export class CompositeDraftDecorator {
    constructor(decorators: any[]);
}

export class DraftEntityInstance {
    getType(): string;
    getMutability(): string;
    getData(): any;
}

export namespace AtomicBlockUtils {
    function insertAtomicBlock(editorState: EditorState, entityKey: string, character: string): EditorState;
    function moveAtomicBlock(editorState: EditorState, atomicBlock: ContentBlock, targetRange: SelectionState, insertionMode?: string): EditorState;
}

export namespace RichUtils {
    function handleKeyCommand(editorState: EditorState, command: string): EditorState | null;
    function insertSoftNewline(editorState: EditorState): EditorState;
    function onBackspace(editorState: EditorState): EditorState | null;
    function onDelete(editorState: EditorState): EditorState | null;
    function onTab(event: React.KeyboardEvent, editorState: EditorState, maxDepth: number): EditorState;
    function toggleBlockType(editorState: EditorState, blockType: string): EditorState;
    function toggleCode(editorState: EditorState): EditorState;
    function toggleInlineStyle(editorState: EditorState, inlineStyle: string): EditorState;
    function toggleLink(editorState: EditorState, targetSelection: SelectionState, entityKey: string | null): EditorState;
    function tryToRemoveBlockStyle(editorState: EditorState): ContentState | null;
    function currentBlockContainsLink(editorState: EditorState): boolean;
    function getCurrentBlockType(editorState: EditorState): string;
}

export namespace Modifier {
    function insertText(contentState: ContentState, targetRange: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string | null): ContentState;
    function moveText(contentState: ContentState, removalRange: SelectionState, targetRange: SelectionState): ContentState;
    function replaceText(contentState: ContentState, targetRange: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string | null): ContentState;
    function removeRange(contentState: ContentState, targetRange: SelectionState, removalDirection: string): ContentState;
    function splitBlock(contentState: ContentState, targetRange: SelectionState): ContentState;
    function applyInlineStyle(contentState: ContentState, targetRange: SelectionState, inlineStyle: string): ContentState;
    function removeInlineStyle(contentState: ContentState, targetRange: SelectionState, inlineStyle: string): ContentState;
    function setBlockType(contentState: ContentState, targetRange: SelectionState, blockType: string): ContentState;
    function setBlockData(contentState: ContentState, targetRange: SelectionState, blockData: Map<any, any>): ContentState;
    function mergeBlockData(contentState: ContentState, targetRange: SelectionState, blockData: Map<any, any>): ContentState;
    function applyEntity(contentState: ContentState, targetRange: SelectionState, entityKey: string | null): ContentState;
}

export function convertFromRaw(rawState: RawDraftContentState): ContentState;
export function convertToRaw(contentState: ContentState): RawDraftContentState;

export interface RawDraftContentState {
    blocks: RawDraftContentBlock[];
    entityMap: {[key: string]: RawDraftEntity};
}

export interface RawDraftContentBlock {
    key: string;
    type: string;
    text: string;
    depth: number;
    inlineStyleRanges: RawDraftInlineStyleRange[];
    entityRanges: RawDraftEntityRange[];
    data?: {[key: string]: any};
}

export interface RawDraftInlineStyleRange {
    style: string;
    offset: number;
    length: number;
}

export interface RawDraftEntityRange {
    key: number;
    offset: number;
    length: number;
}

export interface RawDraftEntity {
    type: string;
    mutability: string;
    data: {[key: string]: any};
}

export function getDefaultKeyBinding(e: React.KeyboardEvent): string | null;
export function getVisibleSelectionRect(globalDoc: Document): {top: number, right: number, bottom: number, left: number} | null;

export function cleanup(): void;
export function clearGenerateRandomKeySeenKeys(): void; 