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
  ariaClick(options: object, handler: (...args: any[]) => unknown): this;
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

declare const Browser: any;
declare const Config: any;
declare const Dialog: any;
declare const Engine: any;
declare const Fullscreen: any;
declare const Has: any;
declare const LoadScreen: any;
declare const Macro: any;
declare const Passage: any;
declare const Save: any;
declare const Setting: any;
declare const SimpleAudio: any;
declare const State: any;
declare const Story: any;
declare const Template: any;
declare const UI: any;
declare const UIBar: any;


/*******************************************************************************
  SugarCube Variables.
*******************************************************************************/

// Deprecated: declare const postdisplay: any;
// Deprecated: declare const postrender: any;
// Deprecated: declare const predisplay: any;
// Deprecated: declare const prehistory: any;
// Deprecated: declare const prerender: any;
declare const session: any;
declare const settings: any;
declare const setup: Setup;
declare const storage: any;
declare const version: any;
