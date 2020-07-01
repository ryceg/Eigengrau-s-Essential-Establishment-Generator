/* eslint-disable @typescript-eslint/no-explicit-any */
/***********************************************************************************************************************

  sugarcube.d.ts — SugarCube v2 Ambient Module (last updated: 2020-03-29)

  Copyright © 2020 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
  Use of this source code is governed by a BSD 2-clause "Simplified" License.

***********************************************************************************************************************/

/*******************************************************************************
    ECMAScript Native Type Extensions.
*******************************************************************************/

interface Array<T> {
  concatUnique(...items: ConcatArray<T>[]): T[];
  concatUnique(...items: (T | ConcatArray<T>)[]): T[];
  count(searchElement: T, fromIndex?: number): number;
  delete(...items: T[]): T[];
  deleteAt(...items: number[]): T[];
  deleteWith<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S[];
  deleteWith(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T[];
  first(): T | undefined;
  includesAll(...items: T[]): boolean;
  includesAny(...items: T[]): boolean;
  last(): T | undefined;
  pluck(): T | undefined;
  pluckMany(want: number): T[];
  pushUnique(...items: T[]): number;
  random(): T | undefined;
  randomMany(want: number): T[];
  shuffle(): this;
  unshiftUnique(...items: T[]): number;
}
interface JSON {
  reviveWrapper(codeString: string, reviveData?: any): string;
}
interface Math {
  clamp(value: number, min: number, max: number): number;
}
interface Number {
  clamp(min: number, max: number): number;
}
interface RegExp {
  escape(text: string): string;
}
interface String {
  count(searchString: string, fromIndex?: number): number;
  first(): string;
  format(format: string, ...args: any[]): string;
  last(): string;
  toLocaleUpperFirst(): string;
  toUpperFirst(): string;
}

/*******************************************************************************
  jQuery Extensions.
*******************************************************************************/

interface jQuery {
  ariaClick(handler: (...args: any[]) => unknown): this;
  ariaClick(options: Record<string, any>, handler: (...args: any[]) => unknown): this;
  ariaDisabled(state: boolean): this;
  ariaIsDisabled(): boolean;
  wiki(...sources: string[]): this;
}
interface JQueryStatic {
  wiki(...sources: string[]): void;
}

/*******************************************************************************
  SugarCube Helper Functions.
*******************************************************************************/

declare function clone(original: any): any;
declare function convertBreaks(source: HTMLElement | DocumentFragment): void;
declare function safeActiveElement(): HTMLElement | null;
// declare function setDisplayTitle(title: string): void;
declare function setPageElement(idOrElement: string | HTMLElement, titles: string | string[], defaultText?: string): void;
declare function throwError(place: HTMLElement | DocumentFragment, message: string, source: string): false;
declare function toStringOrDefault(value: any, defaultValue: any): string;

/*******************************************************************************
  SugarCube User Functions.
*******************************************************************************/

declare function either(...args: any[]): any;
declare function forget(key: string): void;
declare function hasVisited(passageNames: string | string[]): boolean;
declare function lastVisited(passageNames: string | string[]): number;
declare function importScripts(...args: (string | string[])[]): Promise<any>;
declare function importStyles(...args: (string | string[])[]): Promise<any>;
declare function memorize(key: string, value: any): void;
declare function passage(): string;
declare function previous(): string;
declare function random(max: number): number;
declare function random(min: number, max: number): number;
declare function randomFloat(max: number): number;
declare function randomFloat(min: number, max: number): number;
declare function recall(key: string, defaultValue?: any): any;
declare function tags(): string[];
declare function tags(...passageNames: (string | string[])[]): string[];
declare function temporary(): any;
declare function time(): number;
declare function turns(): number;
declare function variables(): any;
declare function visited(): number;
declare function visited(...passageNames: (string | string[])[]): number;
declare function visitedTags(tagsNames: string | string[]): number;

/*******************************************************************************
  SugarCube Modules.
*******************************************************************************/

// NOTE: Ideally, these should each have a proper interface definition,
// but I've put too much effort into this already and this will appease
// TypeScript.

interface ConfigInterface {
  audio: {
      pauseOnFadeToZero: boolean;
      preloadMetadata: boolean;
  };
  history: {
      controls: boolean;
      maxStates: number;
  };
  macros: {
      ifAssignmentError: boolean;
      maxLoopIterations: number;
  };
  navigation: {
      override?: (passageTitle: string) => boolean;
  };
  passages: {
      descriptions: true | Record<string, any> | ((this: PassageInterface) => void);
      displayTitles: boolean;
      nobr: boolean;
      onProcess: (p: Pick<PassageInterface, 'tags' | 'text' | 'title'>) => void;
      start: string;
      transitionOut?: string | number;
  };
  saves: {
      autoload: boolean | 'prompt' | (() => boolean);
      autosave: boolean | string[] | (() => boolean);
      id: string;
      isAllowed?: () => boolean;
      onLoad?: (save: SaveObject) => void;
      onSave?: (save: SaveObject) => void;
      slots: number;
      version?: any;
  };
  ui: {
      stowBarInitially: boolean | number;
      updateStoryElements: boolean;
  };
  addVisitedLinkClass: boolean;
  cleanupWikifierOutput: boolean;
  debug: boolean;
  loadDelay: number;
}

interface LoadScreenInterface {
  lock: () => number;
  unlock: (lockId: number) => void;
}

interface StoryInterface {
  domId: string;
  ifId: string;
  title: string;
  get: (title: string) => PassageInterface;
  has: (title: string) => boolean;
  lookup: (propertyName: keyof PassageInterface, searchValue: any, sortProperty?: keyof PassageInterface) => PassageInterface[];
  lookupWith: (predicate: (p: PassageInterface) => boolean) => PassageInterface[];
}

interface PassageInterface {
  domId: string;
  tags: string[];
  text: string;
  title: string;
  description: () => string;
  processText: () => string;
}

interface MacroArgs extends Array<any> {
  full: string;
  raw: string;
}

interface MacroPayload {
  name: string;
  contents: string;
  args: MacroArgs;
}

interface MacroContext {
  args: MacroArgs;
  error: (message: string) => false;
  output: HTMLElement | DocumentFragment;
  name: string;
  parent: null | Record<string, any>;
  parser: Record<string, any>;
  payload: null | MacroPayload[];
  self: MacroDefinition;
  contextHas: (filter: (ctx: MacroContext) => boolean) => boolean;
  contextSelect: (filter: (ctx: MacroContext) => boolean) => null | MacroContext;
  contextSelectAll: (filter: (ctx: MacroContext) => boolean) => MacroContext[];
  createShadowWrapper(callback: (ev: Event) => void, doneCallback?: (ev: Event) => void, startCallback?: (ev: Event) => void);
}

interface MacroDefinition {
  skipArgs?: boolean;
  tags?: string[] | null;
  handler: (this: MacroContext) => void;
}

interface MacroInterface {
  add: (name: string, definition: MacroDefinition, deep?: boolean) => void;
  delete: (name: string) => void;
  get: (name: string) => MacroDefinition;
  has: (name: string) => boolean;
}

interface SaveObject {
  id: string;
  state: SaveState;
  title: string;
  date: number;
  metadata?: any;
  version?: any;
}

interface SaveState {
  history: HistoryMoment[];
  index: number;
  expired?: string[];
  seed?: string;
}

interface HistoryMoment {
  title: string;
  variables: Record<string, any>;
  pull?: number;
}

interface SaveInterface {
  clear: () => void;
  get: () => SaveObject[];
  ok: () => boolean;

  slots: {
      length: number;
      count: () => number;
      delete: (slot: number) => void;
      get: (slot: number) => SaveObject;
      has: (slot: number) => boolean;
      isEmpty: () => boolean;
      load: (slot: number) => void;
      ok: () => boolean;
      save: (slot: number, title?: string, metadata?: any) => void;
  };

  autosave: {
      delete: () => void;
      get: () => SaveObject | null;
      has: () => boolean;
      load: () => void;
      ok: () => boolean;
      save: (title?: string, metadata?: any) => void;
  };

  export: (fileName?: string, metadata?: any) => void;
  import: (event: InputEvent) => void;

  serialize: (metadata?: any) => void;
  deserialize: (saveStr: string) => any | null;
}

interface StateInterface {
  active: HistoryMoment;
  bottom: HistoryMoment;
  current: HistoryMoment;
  length: number;
  passage: string;
  size: number;
  temporary: Record<string, any>;
  top: HistoryMoment;
  turns: number;
  variables: Record<string, any>;
  getVar: (varName: string) => any;
  has: (passageTitle: string) => boolean;
  hasPlayed: (passageTitle: string) => boolean;
  index: (index: number) => HistoryMoment;
  isEmpty: () => boolean;
  peek: (offset?: number) => HistoryMoment;

  metadata: {
      size: number;
      clear: () => void;
      delete: (key: string) => void;
      get: (key: string) => any;
      has: (key: string) => boolean;
      set: (key: string, value: any) => void;
  };

  prng: {
      init: (seed?: string, useEntropy?: boolean) => void;
      isEnabled: () => boolean;
      pull: number;
      seed: string | null;
  };
  random: () => number;
  setVar: (varName: string, value: any) => boolean;

  /**
   * @deprecated
   */
  initPRNG: (seed?: string, useEntropy?: boolean) => void;
}

declare let Browser: any
declare let Config: ConfigInterface
declare let Dialog: any
declare let Engine: any
declare let Fullscreen: any
declare let Has: any
declare let LoadScreen: LoadScreenInterface
declare let Macro: MacroInterface
declare let Passage: PassageInterface
declare let Save: SaveInterface
declare let Setting: any
declare let SimpleAudio: any
declare let State: StateInterface
declare let Story: StoryInterface
declare let Template: any
declare let UI: any
declare let UIBar: any

/*******************************************************************************
  SugarCube Variables.
*******************************************************************************/

/** @deprecated */
declare let postdisplay: any
/** @deprecated */
declare let postrender: any
/** @deprecated */
declare let predisplay: any
/** @deprecated */
declare let prehistory: any
/** @deprecated */
declare let prerender: any
/** @deprecated */
declare let session: any
declare let settings: any
declare let setup: Setup
declare let storage: any
declare let version: any
