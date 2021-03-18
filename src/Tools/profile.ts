/* eslint-disable @typescript-eslint/ban-ts-comment */
// uses State.variables.npcs, State.variables.town

import type { NPC, Building, Faction, Road } from '@lib'
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
export const profile = (obj: NPC | Building | Faction | Road, readout?: string, type = 'npcs'): string => {
  let result
  if (typeof obj === 'string') {
    console.warn(`Profile function for ${obj} called with a string.`)
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

  return `<<profile \`$${type}[${key}]\`${text}>>`
}

Macro.add('profile', {
  handler () {
    if (!this.args[0]) return this.error('No arguments provided for profile.')
    let obj = this.args[0]
    if (typeof obj === 'string') obj = setup.findViaKey(obj)
    const readout = this.args[1] || obj.name
    const tippyOpts = this.args[2] || { theme: 'descriptive' }
    // @ts-ignore
    const id = Util.slugify(obj.key || obj.name || obj.description || obj.wordNoun || 'profile')
    const tip = $(`<a class="link-internal macro-link ${id}">${readout}</a>`)
      .ariaClick(() => {
        State.variables.currentPassage = obj
        setup.history(obj, obj.passageName, readout)

        if (settings.showSliders && obj.initPassage) {
          Engine.play(obj.initPassage)
        } else {
          Engine.play(obj.passageName)
        }
      })
    /* do any other title addition and stuff here */
    setup.makeTippyTitle($(tip)[0], obj)
    tippy(tip.get(0), tippyOpts)
    $(this.output).append(tip)
  }
})
