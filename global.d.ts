/*
 * SugarCube v2
 * https://www.motoslave.net/sugarcube/2/docs
 */

function clone(original: T): T

function either(...list: any[]): any

function forget(key: string): void

function hasVisited(...passages: string[]): boolean

function lastVisited(...passages: string[]): integer

function importScripts(...urls: string[]): Promise<any>

function importStyles(...urls: string[]): Promise<any>

function memorize(key: string, value: any): void

function passage(): string

function previous(): string

function random(max: number): number
function random(min: number, max: number): number

function randomFloat(max: number): number
function randomFloat(min: number, max: number): number

function recall(key: string, defaultValue?: any): any

function setPageElement(idOrElement: string | HTMLElement, passages: string | string[], defaultText?: string): Record<any, any> | null

function tags(...passages?: string[]): string[]

function temporary(): Record<any, any>

function time(): number

function turns(): number

function variables(): Record<any, any>

function visited(): Record<any, any>

function visitedTags(...tags: string[]): number

interface Array<T> {
  concat(...members: T[]): T[]
  concatUnique(...members: T[]): T[]
  count(needle: T, position?: number): number
  delete(...needles: T[]): T[]
  deleteAt(...indices: number[]): T[]
  deleteWith(predicate: (value: T, index?: number, array?: T[]) => boolean, thisArg: any): T[]
  first(): T
  // native: flat
  // native: flatMap
  // native: includes
  includesAll(needle: T, position?: number): boolean
  includesAny(...needles: T[]): boolean
  last(): T
  pluck(): T
  pluckMany(want: number): T[]
  // native: pop
  // native: push
  pushUnique(...members: T[]): number
  random(): T
  randomMany(want: number): T[]
  // native: shift
  shuffle(): T[]
  // native: unshift
  unshiftUnique(...members: T[]): number
}

interface Number {
  clamp(min: number, max: number): number
}

interface RegExpConstructor {
  escape(text: string): string
}

interface StringConstructor {
  format(format: string, ...arguments: any): string 
}

interface String {
  count(needle: string, position?: number): number
  first(): string
  // native: includes
  last(): string
  toLocaleUpperFirst(): string
  toUpperFirst(): string
}

interface Math {
  clamp(num: number, min: number, max: number): number
}

const Config: any

const Dialog: any

const Engine: any

const Macro: any

const Passage: any

const Save: any

const Setting: any

const settings: any

interface Setup {
  [key: string]: any
}

const setup: Setup

const State: any

/*
 * SugarCube jQuery extensions.
 * See https://github.com/tmedwards/sugarcube-2/blob/master/src/lib/jquery-plugins.js
 */
interface JQueryStatic {
  wiki(...sources): JQueryStatic
}

/*
 * Other plugins & global functions
 */

interface Math {
  fm(a: number, b:number): number
  fairmath(a: number, b:number): number
}

interface Array<T> {
  seededrandom(): T
}

function dice(a: string): number
function dice(a: number, b: number): number

function tippy(selector: string): any