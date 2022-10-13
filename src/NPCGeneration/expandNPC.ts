import { createFamilyHouse, NPC, Town } from '@lib'
import { createHistory } from './createHistory'
import { createLifeEvents } from './createLifeEvents'
import { createFriends } from './Relationships/createFriends'
import { createRelationship } from './Relationships/createRelationship'
import { getFamily } from './Relationships/getFamily'

export const expandNPC = (town: Town, npc: NPC) => {
  lib.logger.openGroup(`Expanding ${npc.name}...`)
  npc.hasHistory = true
  npc.isShallow = false

  if (npc.family === undefined) lib.createFamily(town, npc)

  // Creating life events first may be counterintuitive,
  // but some life events force us to create new family members
  createLifeEvents(town, npc)

  const relatives = getFamily(town, npc)
  Object.keys(relatives).forEach((key) => {
    const relative = State.variables.npcs[key]
    const relationship = relatives[key]
    const inverse = lib.familyRelationships.inverse(npc, relationship)
    createRelationship(town, npc, relative, {
      relationship: lib.familyRelationships.verbose(relationship),
      reciprocalRelationship: lib.familyRelationships.verbose(inverse)
    })
  })

  createFamilyHouse(town, town.families[npc.family])

  createHistory(town, npc)
  createFriends(town, npc)
  lib.logger.closeGroup()
}
