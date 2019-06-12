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
    const roll = random(1, 5)
    let siblingNumber
    switch (roll) {
      case 1:
        siblingNumber = 0
        break
      case 2:
        siblingNumber = random(1, 3)
        break
      case 3:
        siblingNumber = random(2, 5)
        break
      case 4:
        siblingNumber = random(3, 8)
        break
      case 5:
        siblingNumber = random(4, 11)
        break
    }
    return siblingNumber
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
