/* eslint-disable @typescript-eslint/ban-ts-comment */
// uses State.variables.npcs, State.variables.town

import { NPC, Building, Faction, Road, Deity, assert } from '@lib'
/**
 * @description This is a function that returns the profile widget for the provided object.
 * @param obj - The object. It is mandatory.
 * @param readout - The text that you wish to be read out. Defaults to the object name or descriptor.
 * @param type - The type of object it is- it points towards npcs as a default.
 *
 * For buildings, point towards town.buildings.tavern
 * TODO: update documentation here.
 * For factions, point towards `town.factions`
 */
export const profile = (obj: NPC | Building | Faction | Road | Deity | string, readout?: string): string => {
  let result
  if (typeof obj === 'string') {
    lib.logger.warn(`Profile function for ${obj} called with a string.`)
    result = setup.findViaKey(obj)
  } else {
    result = obj
  }
  if (!readout) {
    readout = result.name
  }

  // the user-facing text
  const text = JSON.stringify(readout)

  const key = JSON.stringify(result.key)

  // this is a temporary measure (that will no doubt remain in the codebase for far longer than a 'temporary' measure)
  // it is to get pure text from the profile function instead of having to do a lot of Twine processing and then jquery fuckery to strip HTML.
  // it is only relevant when the `exportToNovelAI` function is called.
  assert(readout !== undefined, 'Profile function called with no readout.')
  if (State.temporary.exportType === 'novelai') return readout
  return `<<profile ${key} ${text}>>`
}

Macro.add('profile', {
  handler () {
    if (!this.args[0]) return this.error('No arguments provided for profile.')
    let obj: Faction | NPC | Deity | Building | Road = this.args[0]
    if (typeof obj === 'string') {
      obj = setup.findViaKey(obj)
    }
    const readout = this.args[1] || obj.name
    const objType = obj.objectType || 'npc'
    const tippyOpts = this.args[2] || { theme: 'descriptive' }
    // @ts-ignore
    const id = Util.slugify(obj.key || obj.name || obj.description || obj.wordNoun || lib.getUUID())
    const tip = $(`<a data-id="${id}" data-object-type=${objType} class="link-internal macro-link ${id}">${readout}</a>`)
      .ariaClick(() => {
        State.variables.currentPassage = obj
        setup.history(obj, obj.passageName, readout)
        Engine.play(obj.passageName)
      })
    /* do any other title addition and stuff here */
    setup.makeTippyTitle($(tip)[0], obj)
    const htmlElement = tip.get(0)
    if (htmlElement) {
      tippy(htmlElement, tippyOpts)
      $(this.output).append(tip)
    }
  }
})
