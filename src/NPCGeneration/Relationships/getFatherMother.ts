import type { NPC, Town } from '@lib'

interface Parents {
  father?: string
  mother?: string
}

/**
 * @warn Uses State.variables.npcs
 */
export const getFatherMother = (town: Town, npc: NPC): Parents => {
  let father: string | undefined
  let mother: string | undefined

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
