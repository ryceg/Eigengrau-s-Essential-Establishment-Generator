/*
 * Pluins & global functions.
 */

interface Math {
  fm(a: number, b:number): number
  fairmath(a: number, b:number): number
}

function dice(a: string): number
function dice(a: number, b: number): number

function tippy(selector: string | NodeList, options?: any): any

/*
 * NodeJS
 */

declare const global: NodeJS.Global & Record<string, any>