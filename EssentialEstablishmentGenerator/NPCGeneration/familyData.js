setup.familyData = {
  // Specific names when traversing the family tree
  // (the bracketed ones should never occur)
  relationshipNouns: {
    'parent-man': 'father',
    'parent-woman': 'mother',
    'child-man': 'son',
    'child-woman': 'daughter',
    'sibling-man': 'brother',
    'sibling-woman': 'sister',
    'partner-man': 'husband',
    'partner-woman': 'wife',
    'parent-parent-man': 'grandfather',
    'parent-parent-woman': 'grandmother',
    'parent-child-man': 'half-brother',
    'parent-child-woman': 'half-sister',
    'parent-sibling-man': 'uncle',
    'parent-sibling-woman': 'aunt',
    'parent-partner-man': 'stepfather',
    'parent-partner-woman': 'stepmother',
    'child-parent-man': '(self/partner)',
    'child-parent-woman': '(self/partner)',
    'child-child-man': 'grandson',
    'child-child-woman': 'granddaughter',
    'child-sibling-man': '(son)',
    'child-sibling-woman': '(daughter)',
    'child-partner-man': 'son-in-law',
    'child-partner-woman': 'daughter-in-law',
    'sibling-parent-man': '(father)',
    'sibling-parent-woman': '(mother)',
    'sibling-child-man': 'nephew',
    'sibling-child-woman': 'niece',
    'sibling-sibling-man': '(brother)',
    'sibling-sibling-woman': '(sister)',
    'sibling-partner-man': 'brother-in-law',
    'sibling-partner-woman': 'sister-in-law',
    'partner-parent-man': 'father-in-law',
    'partner-parent-woman': 'mother-in-law',
    'partner-child-man': 'stepson',
    'partner-child-woman': 'stepdaughter',
    'partner-sibling-man': 'brother-in-law',
    'partner-sibling-woman': 'sister-in-law',
    'partner-partner-man': 'co-husband',
    'partner-partner-woman': 'co-wife'
  },
  // These numbers are all made up, feel free to change them
  absencePercent: 40,
  oldAbsencePercent: 40,
  veryOldAbsencePercent: 80,

  marriagePercent: 90,
  remarriagePercent: 3,

  childAgePercentiles: [
    [65, 'young adult'],
    [97, 'settled adult'],
    [100, 'elderly']
  ],

  parentStage: () => {
    const roll = random(1, 100)
    for (let i = 0; i < setup.familyData.childAgePercentiles.length; i++) {
      const [percentile, stage] = setup.familyData.childAgePercentiles[i]
      if (roll <= percentile) return stage
    }

    return 'young adult'
  },

  parentAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const { baseAge, ageModifier } = setup.npcData.raceTraits[race].ageTraits[setup.familyData.parentStage()]
    return baseAge + ageModifier()
  },
  childAgeDelta: (npc) => (-setup.familyData.parentAgeDelta(npc)),

  siblingAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
    return random(-baseAge, baseAge)
  },

  partnerAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
    return random(-baseAge, baseAge)
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
  siblingGender: () => (random(1, 2) === 1 ? 'man' : 'woman'),

  marriageAgeMin: (npc) => {
    const race = npc.race || 'human'
    return setup.npcData.raceTraits[race].ageTraits['young adult'].baseAge
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
