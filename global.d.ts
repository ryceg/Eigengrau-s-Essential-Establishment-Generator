/* eslint-disable no-unused-vars */

/**
 * Namespace for all things exported from the "lib" folder.
 */
declare const lib: typeof import('./lib/index')

/*
 * Plugins & global functions.
 */

function tippy(selector: string | NodeList, options?: any): any

/*
 * NodeJS
 */

declare const global: NodeJS.Global & Record<string, any>
