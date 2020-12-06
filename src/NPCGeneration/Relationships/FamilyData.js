// types are stored in setup.d.ts
// don't bother creating a FamilyData.d.ts
// you'll waste your time like me
// uses State.variables.npcs

setup.familyData = {
  parentStageTable: [
    [55, 'young adult'],
    [35, 'settled adult'],
    [10, 'elderly']
  ],
  /**
   * @param {import("../../../lib/npc-generation/_common").NPC} npc
   * @returns {number}
   */
  parentAge: (npc) => {
    const race = npc.race || 'human'
    const parentStage = lib.rollFromTable(setup.familyData.parentStageTable, 100)
    const { baseAge, ageModifier } = lib.raceTraits[race].ageTraits[parentStage]
    return npc.ageYears + baseAge + ageModifier()
  },
  /**
   * @param {import("../../../lib/npc-generation/_common").NPC} npc
   * @returns {number}
   */
  siblingAge: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = lib.raceTraits[race].ageTraits['young adult']
    return npc.ageYears + random(-baseAge, baseAge)
  },
  /**
   * @param {import("./createFamilyMembers").Marriage} marriage
   * @returns {number}
   * @warn Uses State.variables.npcs
   */
  childAge: (marriage) => {
    if (marriage.parents.length > 0) {
      // find the youngest parent
      const youngest = marriage.parents
        .map(key => State.variables.npcs[key])
        .reduce((npcA, npcB) =>
          npcA.ageYears <= npcB.ageYears ? npcA : npcB)
      return 2 * youngest.ageYears - setup.familyData.parentAge(youngest)
    } else if (marriage.children.length > 0) {
      const sibling = State.variables.npcs[marriage.children[0]]
      return setup.familyData.siblingAge(sibling)
    } else {
      return 0
    }
  },
  /**
   * @param {import("../../../lib/npc-generation/_common").NPC} npc
   * @returns {number}
   */
  partnerAge: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = lib.raceTraits[race].ageTraits['young adult']
    return npc.ageYears + random(-baseAge, baseAge)
  },

  siblingRoll: () => {
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
  },
  /**
   * @param {import("../../../lib/npc-generation/_common").NPC} npc
   * @returns {Partial<import("../../../lib/npc-generation/_common").NPC>}
   */
  relativeBase: (npc) => ({
    // lastName: npc.lastName,
    race: npc.race,
    family: npc.family,
    canBeCustom: false,
    isShallow: true,
    hasHistory: false
  })
}
