import type { NPC } from '../../../lib/npc-generation/_common'
import type { Town } from '../../../lib/town/_common'

interface Parents {
  father?: NPC
  mother?: NPC
}

/**
 * @warn Uses State.variables.npcs
 */
function getFatherMother (town: Town, npc: NPC): Parents {
  let father: NPC | undefined
  let mother: NPC | undefined

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

declare global {
  interface Setup {
    getFatherMother: typeof getFatherMother
  }
}

setup.getFatherMother = getFatherMother
