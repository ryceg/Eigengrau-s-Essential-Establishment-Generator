import { Construct, ConstructUtils } from '../constructs/_common'

/**
 * To be used when you want to wrap a tippy around
 * something i.e. you know what you're doing
 *
 * **Note the lack of a closing span.**
 */
export const createTippy = (readout: string) => {
  return `<span class="tip" role="tooltip" tabindex="0" data-tippy-content=${JSON.stringify(readout)}><<run tippy(".tip")>>`
}

/**
 * Assumes that the first argument was created
 * using the createTippy function.
 *
 * **Note the two closing spans to accommodate this.**
 */
export const createTippyWord = (tippy: string, word: string) => {
  return `${tippy}<span class="dotted">${word}</span></span>`
}

/**
 * The function that should be used most of the time.
 */
export const createTippyFull = (readout: string, word: string) => {
  return `<span class="tip dotted"  role="tooltip" tabindex="0" data-tippy-content=${JSON.stringify(readout)}>${word}<<timed 0s>><<run tippy('.tip')>><</timed>></span>`
}

export function createAutoTippy<C extends Construct> (utils: ConstructUtils<C>, ...args: Parameters<ConstructUtils<C>['create']>) {
  return function autoTippy (word?: string) {
    const construct = utils.create(...args)
    return createTippyFull(utils.readout(construct), word || construct.$type)
  }
}

export function addTippyAccessibility () {
  $('.tip').attr('role', 'tooltip')
  $('.tip').attr('tabindex', '0')
}
