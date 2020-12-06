/** @type {import("../../lib/index").ThresholdTable} */
const birthplaceTable = [
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

/**
 * @type {Record<string, import("./createHistory").FamilyUnit>}
 * @warn Uses State.variables.npcs, lib.getMarriages
 */
const familyUnits = {
  bothParents: {
    probability: 25,
    exclusions: (town, obj) => obj.npc.knewParents,
    descriptor: 'my mother and father'
  },
  singleStepmother: {
    probability: 6,
    exclusions: (town, obj) => lib.getMarriages(town, State.variables.npcs[obj.father]).length > 1,
    descriptor: 'my single stepmother'
  },
  singleMother: {
    probability: 14,
    exclusions: (town, obj) => obj.npc.knewParents && !obj.father,
    descriptor: 'my single mother'
  },
  singleStepfather: {
    probability: 6,
    exclusions: (town, obj) => lib.getMarriages(town, State.variables.npcs[obj.mother]).length > 1,
    descriptor: 'my single stepfather'
  },
  singleFather: {
    probability: 14,
    exclusions: (town, obj) => obj.npc.knewParents && !obj.mother,
    descriptor: 'my single father'
  },
  adoptiveFamily: {
    probability: 10,
    exclusions: (town, obj) => !obj.npc.knewParents,
    descriptor: 'my adoptive family'
  },
  maternalGrandparents: {
    probability: 6,
    exclusions: (town, obj) => obj.mother && lib.knewParents(town, obj.mother),
    descriptor: 'my maternal grandparents'
  },
  paternalGrandparents: {
    probability: 4,
    exclusions: (town, obj) => obj.father && lib.knewParents(town, obj.father),
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
    exclusions: (town, obj) => !obj.npc.knewParents && !['aristocracy', 'nobility'].includes(obj.npc.socialClass),
    descriptor: 'the streets'
  }
}

/**
 * @param {import("../../lib/town/_common").Town} town
 * @param {import("../../lib/npc-generation/_common").NPC} npc
 * @warn Uses setup.getFatherMother
 */
setup.createHistory = function (town, npc) {
  console.log(`creating history for ${npc.name}...`)
  // let wealthModifier

  if (!npc.birthplace) npc.birthplace = lib.rollFromTable(birthplaceTable, 100)

  const parentMarriage = town.families[npc.family].members[npc.key].parentMarriage
  console.log(parentMarriage)

  npc.knewParents = lib.knewParents(town, npc)
  npc.siblingNumber = parentMarriage
    ? parentMarriage.children.length - 1
    : 0

  if (!npc.familyUnit) {
    if (parentMarriage && parentMarriage.familyUnit) {
      npc.familyUnit = parentMarriage.familyUnit
    } else {
      const { father, mother } = setup.getFatherMother(town, npc)
      const obj = { npc, father, mother }
      npc.familyUnit = lib.weightedRandomFetcher(town, familyUnits, obj, null, 'descriptor')
      if (parentMarriage) {
        lib.assign(parentMarriage, { familyUnit: npc.familyUnit })
      }
    }
  }

  if (parentMarriage) {
    if (!parentMarriage.lifestyle) {
      lib.createFamilyLifestyle(parentMarriage)
    }

    npc.familyLifestyle = parentMarriage.lifestyle
    npc.familyHome = parentMarriage.home
  } else {
    // create a temporary marriage for this orphan
    const marriage = {
      socialClass: npc.socialClass || 'peasantry'
    }

    /** @param {import("./Relationships/createFamilyMembers").Marriage} marriage */
    lib.createFamilyLifestyle(marriage)
    npc.familyLifestyle = marriage.lifestyle
    npc.familyHome = marriage.home
  }

  npc.childhoodMemories = createChildhoodMemories(town, npc)
}

/**
 * @param {import("../../lib/town/_common").Town} town
 * @param {import("../../lib/npc-generation/_common").NPC} npc
 * @returns {string}
 * @warn Uses setup.createNPC, setup.createRelationship
 */
function createChildhoodMemories (town, npc) {
  if (npc.childhoodMemories) {
    return npc.childhoodMemories
  }

  if (npc.roll.gregariousness >= 18) {
    const friend = setup.createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    const bestFriend = setup.createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    setup.createRelationship(town, npc, friend, 'best friend', 'best friend')
    setup.createRelationship(town, npc, bestFriend, 'childhood friend', 'childhood friend')
    return 'Everyone knew who I was, and I had friends everywhere I went'
  }

  if (npc.roll.gregariousness >= 16) {
    const friend = setup.createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    setup.createRelationship(town, npc, friend, 'childhood friend', 'childhood friend')
    return 'I always found it easy to make friends, and I loved being around people'
  }

  if (npc.roll.gregariousness >= 13) {
    const friend = setup.createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    setup.createRelationship(town, npc, friend, 'childhood friend', 'childhood friend')
    return 'I had several friends, and my childhood was generally a happy one'
  }

  if (npc.roll.gregariousness >= 9) {
    return 'I had a few close friends, and my childhood was a relatively normal one'
  }

  if (npc.roll.gregariousness >= 6) {
    return 'Others saw me as different, or strange, and so I had few companions'
  }

  if (npc.roll.gregariousness >= 4) {
    return 'I spent most of my childhood alone, and had no close friends'
  }

  if (npc.roll.gregariousness < 4) {
    const friend = setup.createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(1, 3),
      childhoodMemories: `I remember that we used to beat the shit out of that annoying ${npc.boygirl}, ${setup.profile(npc, npc.firstName)}`
    })
    setup.createRelationship(town, npc, friend, 'bully', 'victim of bullying')
    return 'I am still haunted by my childhood, where I was treated badly by my peers'
  }
}
