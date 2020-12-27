import type { NPC } from '../../../lib/npc-generation/_common'
import type { Town } from '../../../lib/town/_common'

declare global {
  interface Setup {
    getFatherMother(town: Town, npc: NPC): Parents
  }
}

interface Parents {
  father?: NPC
  mother?: NPC
}

// uses State.variables.npcs
export function getFatherMother (town: Town, npc: NPC) {
  let father: NPC
  let mother: NPC

  const family = town.families[npc.family]
  const node = family.members[npc.key]

  if (node.parentMarriage) {
    father = node.parentMarriage.parents.find(key => {
      return State.variables.npcs[key].gender === 'man'
    })
    mother = node.parentMarriage.parents.find(key => {
      return State.variables.npcs[key].gender === 'woman'
    })
  }

  return { father, mother }
}

setup.getFatherMother = getFatherMother
