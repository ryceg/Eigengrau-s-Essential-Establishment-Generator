/* eslint-disable camelcase */

/**
 * Namespace for all things exported from the "lib" folder.
 */
declare const lib: typeof import('./lib/index')

/*
 * Plugins & global functions.
 */

declare function tippy(selector: string | NodeList | HTMLElement, options?: any): any

/*
 * NodeJS
 */

declare function gtag(event: string, action: string, data: {
  event_category?: string,
  event_label?: string,
  event_action?: string,
  value?: string
}): void

declare module 'rita'
