import { Construct, ConstructUtils } from '../constructs/_common'
import { getUUID } from './utils'

/**
 * The function that should be used most of the time.
 */
export const createTippyFull = (readout: string, word: string) => {
  const id = getUUID()
  return `<span class="tip dotted" data-id="${id}" id="${id}" role="tooltip" tabindex="0" data-tippy-content=${JSON.stringify(readout)}>${word}<<done>><<run tippy(document.getElementById('${id}'))>><</done>></span>`
}

export function createAutoTippy<C extends Construct> (utils: ConstructUtils<C>, ...args: Parameters<ConstructUtils<C>['create']>) {
  return function autoTippy (word?: string) {
    const construct = utils.create(...args)
    return createTippyFull(utils.readout(construct), word || construct.$type)
  }
}

export function addTippyAccessibility () {
  document.querySelectorAll('.tip').forEach(tip => {
    tip.setAttribute('role', 'tooltip')
    tip.setAttribute('tabindex', '0')
  })
}
