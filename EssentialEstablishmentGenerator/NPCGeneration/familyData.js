setup.familyData = {
  // Specific names when traversing the family tree
  // (the bracketed ones should never occur)
  // the capital letters stand for the four types of relationship:
  // B = brother / sister
  // C = couple (marriage)
  // D = descendant (child)
  // E = elder (parent)
  relationshipNouns: {
    Em: 'father',
    Ew: 'mother',
    Dm: 'son',
    Dw: 'daughter',
    Bm: 'brother',
    Bw: 'sister',
    Cm: 'husband',
    Cw: 'wife',
    EEm: 'grandfather',
    EEw: 'grandmother',
    EDm: 'half-brother',
    EDw: 'half-sister',
    EBm: 'uncle',
    EBw: 'aunt',
    ECm: 'stepfather',
    ECw: 'stepmother',
    DEm: '(self/partner)',
    DEw: '(self/partner)',
    DDm: 'grandson',
    DDw: 'granddaughter',
    DBm: '(son)',
    DBw: '(daughter)',
    DCm: 'son-in-law',
    DCw: 'daughter-in-law',
    BEm: '(father)',
    BEw: '(mother)',
    BDm: 'nephew',
    BDw: 'niece',
    BBm: '(brother)',
    BBw: '(sister)',
    BCm: 'brother-in-law',
    BCw: 'sister-in-law',
    CEm: 'father-in-law',
    CEw: 'mother-in-law',
    CDm: 'stepson',
    CDw: 'stepdaughter',
    CBm: 'brother-in-law',
    CBw: 'sister-in-law',
    CCm: 'co-husband',
    CCw: 'co-wife'
  },
  verboseRelationship: (key) => {
    if (key in setup.familyData.relationshipNouns) return setup.familyData.relationshipNouns[key]
    return 'relative'
  },
  relationshipInverseKey: (npc, relationshipKey) => {
    let inverse = ''
    for (let i = 0; i < relationshipKey.length - 1; i++) {
      if (relationshipKey[i] === 'E') {
        inverse = inverse + 'D'
      } else if (relationshipKey[i] === 'D') {
        inverse = inverse + 'E'
      } else {
        inverse = inverse + relationshipKey[i]
      }
    }
    return inverse.split('').reverse().join('') + npc.gender[0]
  },

  // These numbers are all made up, feel free to change them
  absencePercent: 72,
  oldAbsencePercent: 40,
  veryOldAbsencePercent: 70,

  marriagePercent: 50,
  remarriagePercent: 6,

  childAgePercentiles: [
    [55, 'young adult'],
    [90, 'settled adult'],
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
