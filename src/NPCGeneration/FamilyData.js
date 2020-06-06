setup.familyData = {

  // These numbers are all made up, feel free to change them
  absencePercent: 74,
  oldAbsencePercent: 40,
  veryOldAbsencePercent: 70,

  orphanPercent: 10,
  marriagePercent: 55,
  remarriagePercent: 9,

  parentStageTable: [
    [55, 'young adult'],
    [35, 'settled adult'],
    [10, 'elderly']
  ],

  parentAge: (npc) => {
    const race = npc.race || 'human'
    const parentStage = setup.rollFromTable(setup.familyData.parentStageTable, 100)
    const { baseAge, ageModifier } = setup.npcData.raceTraits[race].ageTraits[parentStage]
    return npc.ageYears + baseAge + ageModifier()
  },

  siblingAge: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
    return npc.ageYears + random(-baseAge, baseAge)
  },

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

  partnerAge: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
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

  relativeBase: (npc) => ({
    // lastName: npc.lastName,
    race: npc.race,
    family: npc.family,
    canBeCustom: false,
    isShallow: true,
    hasHistory: false
  })
}
