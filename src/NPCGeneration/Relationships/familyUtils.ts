import type { AgeName, Marriage, NPC } from '@lib'

const parentStageTable: [number, AgeName][] = [
  [55, 'young adult'],
  [35, 'settled adult'],
  [10, 'elderly']
]

export const getParentAge = (npc: NPC): number => {
  const race = npc.race || 'human'
  const parentStage = lib.rollFromTable(parentStageTable, 100)
  const { baseAge, ageModifier } = lib.raceTraits[race].ageTraits[parentStage]
  return npc.ageYears + baseAge + ageModifier()
}

export const getSiblingAge = (npc: NPC): number => {
  const race = npc.race || 'human'
  const { baseAge } = lib.raceTraits[race].ageTraits['young adult']
  return npc.ageYears + random(-baseAge, baseAge)
}

/**
 * @warn Uses State.variables.npcs
 */
export const getChildAge = (marriage: Marriage): number => {
  if (marriage.parents.length > 0) {
    // find the youngest parent
    const youngest = marriage.parents
      .map(key => State.variables.npcs[key])
      .reduce((npcA, npcB) => npcA.ageYears <= npcB.ageYears ? npcA : npcB)
    return 2 * youngest.ageYears - getParentAge(youngest)
  }
  if (marriage.children.length > 0) {
    const sibling = State.variables.npcs[marriage.children[0]]
    return getSiblingAge(sibling)
  }
  return 0
}

export const getPartnerAge = (npc: NPC): number => {
  const race = npc.race || 'human'
  const { baseAge } = lib.raceTraits[race].ageTraits['young adult']
  return npc.ageYears + random(-baseAge, baseAge)
}

export const siblingRoll = () => {
  switch (random(1, 5)) {
    case 1:
      return 0
    case 2:
      return random(1, 3)
    case 3:
      return random(2, 5)
    case 4:
      return random(3, 8)
    case 5:
      return random(4, 11)
  }
  return 0
}

export const getRelativeBase = (npc: NPC): Partial<NPC> => ({
  race: npc.race,
  family: npc.family,
  canBeCustom: false,
  isShallow: true,
  hasHistory: false
})
