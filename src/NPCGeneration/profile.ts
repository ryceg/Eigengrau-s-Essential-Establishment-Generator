/* eslint-disable @typescript-eslint/ban-ts-comment */
// uses State.variables.npcs, State.variables.town

import type { NPC, Building, Faction, Road } from '@lib'
import { findViaKey } from '../Tools/findViaKey'

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
    result = findViaKey(obj)
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
