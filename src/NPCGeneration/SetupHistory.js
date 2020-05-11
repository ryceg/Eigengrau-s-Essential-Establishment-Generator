
setup.birthplaceTable = [
  [50, 'at home'],
  [5, 'in the home of a friend'],
  [9, 'in the home of a midwife'],
  [1, 'on a wagon'],
  [1, 'in a cart'],
  [1, 'in a shed'],
  [1, 'in a barn'],
  [2, 'in a cave'],
  [2, 'in a field'],
  [2, 'in a forest'],
  [3, 'in a temple'],
  [1, 'on a battlefield'],
  [1, 'in a street'],
  [1, 'in an alley'],
  [1, 'in a tavern'],
  [1, 'in a brothel'],
  [1, 'in a tower'],
  [1, 'in a castle'],
  [1, 'in a rubbish heap'],
  [3, 'among people of a different race'],
  [2, 'on a boat'],
  [1, 'on a ship'],
  [1, 'in a prison'],
  [1, 'in the headquarters of a secret organisation'],
  [1, 'in a sage\'s laboratory'],
  [1, 'on the Ethereal Plane'],
  [1, 'in the Feywild'],
  [1, 'in the Shadowfell'],
  [1, 'on the Astral Plane'],
  [1, 'on an Inner Plane'],
  [1, 'on an Outer Plane']
]

setup.familyUnits = {
  bothParents: {
    probability: 25,
    exclusions: (town, obj) => obj.npc.knewParents,
    descriptor: 'my mother and father'
  },
  singleStepmother: {
    probability: 6,
    exclusions: (town, obj) =>
      setup.getMarriages(town, State.variables.npcs[obj.father]).length > 1,
    descriptor: 'my single stepmother'
  },
  singleMother: {
    probability: 14,
    exclusions: (town, obj) => obj.npc.knewParents && (!obj.father),
    descriptor: 'my single mother'
  },
  singleStepfather: {
    probability: 6,
    exclusions: (town, obj) =>
      setup.getMarriages(town, State.variables.npcs[obj.mother]).length > 1,
    descriptor: 'my single stepfather'
  },
  singleFather: {
    probability: 14,
    exclusions: (town, obj) => obj.npc.knewParents && (!obj.mother),
    descriptor: 'my single father'
  },
  adoptiveFamily: {
    probability: 10,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'my adoptive family'
  },
  maternalGrandparents: {
    probability: 6,
    exclusions: (town, obj) => obj.mother && setup.knewParents(obj.mother),
    descriptor: 'my maternal grandparents'
  },
  paternalGrandparents: {
    probability: 4,
    exclusions: (town, obj) => obj.father && setup.knewParents(obj.father),
    descriptor: 'my paternal grandparents'
  },
  extendedFamily: {
    probability: 8,
    exclusions: (town, obj) => obj.npc.knewParents,
    descriptor: 'my extended family'
  },
  guardian: {
    probability: 2,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'my guardian'
  },
  orphanage: {
    probability: 2,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'the orphanage'
  },
  temple: {
    probability: 1,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'the temple'
  },
  institution: {
    probability: 1,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'the institution'
  },
  streets: {
    probability: 1,
    exclusions: (town, obj) => !obj.npc.knewParents &&
      !(['aristocracy', 'nobility'].includes(obj.npc.socialClass)),
    descriptor: 'the streets'
  }
}

setup.createHistory = function (town, npc) {
  console.log('creating history for ' + npc.name + '...')
  // let wealthModifier

  if (!npc.birthplace) npc.birthplace = setup.rollFromTable(setup.birthplaceTable, 100)

  let parentMarriage = town.families[npc.family].members[npc.key].parentMarriage
  console.log(parentMarriage)

  npc.knewParents = setup.knewParents(town, npc)
  npc.siblingNumber = parentMarriage
    ? parentMarriage.children.length - 1
    : 0

  if (!npc.familyUnit) {
    if (parentMarriage && parentMarriage.familyUnit) {
      npc.familyUnit = parentMarriage.familyUnit
    } else {
      const { father, mother } = setup.getFatherMother(town, npc)
      const obj = { npc, father, mother }
      npc.familyUnit = setup.weightedRandomFetcher(town, setup.familyUnits, obj, undefined, 'descriptor')
      if (parentMarriage) { parentMarriage = Object.assign(parentMarriage, { familyUnit: npc.familyUnit }) }
    }
    /* const parentRoll = random(1, 100)
    if (parentRoll >= 76) {
      npc.familyUnit = 'my mother and father'
    } else if (parentRoll >= 70) {
      npc.familyUnit = 'my single stepmother'
    } else if (parentRoll >= 56) {
      npc.familyUnit = 'my single mother'
    } else if (parentRoll >= 50) {
      npc.familyUnit = 'my single stepfather'
    } else if (parentRoll >= 36) {
      npc.familyUnit = 'my single father'
    } else if (parentRoll >= 26) {
      npc.familyUnit = 'my adoptive family'
    } else if (parentRoll >= 20) {
      npc.familyUnit = 'my maternal grandparents'
    } else if (parentRoll >= 16) {
      npc.familyUnit = 'my paternal grandparents'
    } else if (parentRoll >= 8) {
      npc.familyUnit = 'my extended family'
    } else if (parentRoll >= 6) {
      npc.familyUnit = 'my guardian'
    } else if (parentRoll >= 4) {
      npc.familyUnit = 'the orphanage'
    } else if (parentRoll >= 3) {
      npc.familyUnit = 'the temple'
    } else if (parentRoll >= 2) {
      npc.familyUnit = 'the institution'
    } else if (parentRoll < 2) {
      npc.familyUnit = 'the streets'
    } */
  }

  if (parentMarriage) {
    if (!parentMarriage.lifestyle) {
      setup.createFamilyLifestyle(parentMarriage)
    }

    npc.familyLifestyle = parentMarriage.lifestyle
    npc.familyHome = parentMarriage.home
  } else {
    // create a temporary marriage for this orphan
    const marriage = {
      socialClass: npc.socialClass || 'peasantry'
    }

    setup.createFamilyLifestyle(marriage)
    npc.familyLifestyle = marriage.lifestyle
    npc.familyHome = marriage.home
  }

  if (!npc.childhoodMemories) {
    const childhoodMemoriesRoll = dice(3, 6)
    if (childhoodMemoriesRoll >= 18) {
      npc.childhoodMemories = 'Everyone knew who I was, and I had friends everywhere I went'
      // eslint-disable-next-line no-var
      var friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
      const anotherFriend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, anotherFriend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 16) {
      npc.childhoodMemories = 'I always found it easy to make friends, and I loved being around people'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 13) {
      npc.childhoodMemories = 'I had several friends, and my childhood was generally a happy one'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 9) {
      npc.childhoodMemories = 'I had a few close friends, and my childhood was a relatively normal one'
    } else if (childhoodMemoriesRoll >= 6) {
      npc.childhoodMemories = 'Others saw me as different, or strange, and so I had few companions'
    } else if (childhoodMemoriesRoll >= 4) {
      npc.childhoodMemories = 'I spent most of my childhood alone, and had no close friends'
    } else if (childhoodMemoriesRoll < 4) {
      npc.childhoodMemories = 'I am still haunted by my childhood, where I was treated badly by my peers'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(1, 3),
        childhoodMemories: 'I remember that we used to beat the shit out of that annoying ' + npc.boygirl + ', ' + setup.profile(npc, npc.firstName)
      })
      setup.createRelationship(town, npc, friend, 'bully', 'victim of bullying')
    }
  }
  return npc
}
