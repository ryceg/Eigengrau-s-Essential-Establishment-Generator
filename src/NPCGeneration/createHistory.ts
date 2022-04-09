/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town, NPC, Marriage, ThresholdTable, LifestyleStandardName } from '@lib'
import { createNPC } from './createNPC'
import { profile } from '../Tools/profile'
import { createRelationship } from './Relationships/createRelationship'
import { getFatherMother } from './Relationships/getFatherMother'

type FamilyUnit = {
  probability: number
  exclusions (town: Town, obj: FamilyUnitObj): boolean
  descriptor: string
}

type FamilyUnitObj = {
  npc: NPC
  // I'm reasonably sure that these are meant to be strings.
  father: string
  mother: string
}

const birthplaceTable: ThresholdTable = [
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
 * @warn Uses State.variables.npcs, getMarriages
 */
const familyUnits: Record<string, FamilyUnit> = {
  bothParents: {
    probability: 25,
    exclusions: (_town, familyUnitObj) => familyUnitObj.npc.knewParents,
    descriptor: 'my mother and father'
  },
  singleStepmother: {
    probability: 6,
    exclusions: (town, familyUnitObj) => lib.getMarriages(town, State.variables.npcs[familyUnitObj.father]),
    descriptor: 'my single stepmother'
  },
  singleMother: {
    probability: 14,
    exclusions: (_town, familyUnitObj) => familyUnitObj.npc.knewParents && !familyUnitObj.father,
    descriptor: 'my single mother'
  },
  singleStepfather: {
    probability: 6,
    exclusions: (town, familyUnitObj) => lib.getMarriages(town, State.variables.npcs[familyUnitObj.mother]),
    descriptor: 'my single stepfather'
  },
  singleFather: {
    probability: 14,
    exclusions: (_town, familyUnitObj) => familyUnitObj.npc.knewParents && !familyUnitObj.mother,
    descriptor: 'my single father'
  },
  adoptiveFamily: {
    probability: 10,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents,
    descriptor: 'my adoptive family'
  },
  maternalGrandparents: {
    probability: 6,
    exclusions: (town, familyUnitObj) => lib.knewParents(town, State.variables.npcs[familyUnitObj.mother]),
    descriptor: 'my maternal grandparents'
  },
  paternalGrandparents: {
    probability: 4,
    exclusions: (town, familyUnitObj) => lib.knewParents(town, State.variables.npcs[familyUnitObj.father]),
    descriptor: 'my paternal grandparents'
  },
  extendedFamily: {
    probability: 8,
    exclusions: (_town, familyUnitObj) => familyUnitObj.npc.knewParents,
    descriptor: 'my extended family'
  },
  guardian: {
    probability: 2,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents,
    descriptor: 'my guardian'
  },
  orphanage: {
    probability: 2,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents,
    descriptor: 'the orphanage'
  },
  temple: {
    probability: 1,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents,
    descriptor: 'the temple'
  },
  institution: {
    probability: 1,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents,
    descriptor: 'the institution'
  },
  streets: {
    probability: 1,
    exclusions: (_town, familyUnitObj) => !familyUnitObj.npc.knewParents && !['aristocracy', 'nobility'].includes(familyUnitObj.npc.socialClass),
    descriptor: 'the streets'
  }
}

export const createHistory = (town: Town, npc: NPC) => {
  lib.logger.info(`Creating history for ${npc.name}...`)
  npc.knewParents = lib.knewParents(town, npc)
  if (!npc.birthplace) npc.birthplace = lib.rollFromTable(birthplaceTable, 100)

  const parentMarriage = town.families[npc.family].members[npc.key].parentMarriage

  npc.siblingNumber = parentMarriage
    ? parentMarriage.children.length - 1
    : 0

  if (!npc.familyUnit) {
    if (parentMarriage && parentMarriage.familyUnit) {
      npc.familyUnit = parentMarriage.familyUnit
    } else {
      const { father, mother } = getFatherMother(town, npc)
      const familyUnitObj = { npc, father, mother }
      npc.familyUnit = lib.weightedRandomFetcher(town, familyUnits, familyUnitObj, undefined, 'descriptor') as string
      if (parentMarriage) {
        lib.assign(parentMarriage, { familyUnit: npc.familyUnit })
      }
    }
  }

  if (parentMarriage) {
    if (!parentMarriage.lifestyle) {
      lib.createFamilyLifestyle(parentMarriage)
    }
    // createFamilyLifestyle ensures that they are defined.
    npc.familyLifestyle = parentMarriage.lifestyle as LifestyleStandardName
    npc.familyHome = parentMarriage.home as string
  } else {
    // Create a temporary marriage for this orphan.
    const marriage: Marriage = {
      socialClass: npc.socialClass,
      parents: [],
      children: []
    }

    lib.createFamilyLifestyle(marriage)
    // createFamilyLifestyle ensures that they are defined.
    npc.familyLifestyle = marriage.lifestyle as LifestyleStandardName
    npc.familyHome = marriage.home as string
  }

  npc.childhoodMemories = createChildhoodMemories(town, npc)
}

function createChildhoodMemories (town: Town, npc: NPC) {
  if (npc.childhoodMemories) {
    return npc.childhoodMemories
  }

  if (npc.roll.gregariousness >= 18) {
    const friend = createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    const bestFriend = createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    createRelationship(town, npc, friend, { relationship: 'best friend', reciprocalRelationship: 'best friend' })
    createRelationship(town, npc, bestFriend, { relationship: 'childhood friend', reciprocalRelationship: 'childhood friend' })
    return 'Everyone knew who I was, and I had friends everywhere I went'
  }

  if (npc.roll.gregariousness >= 16) {
    const friend = createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    createRelationship(town, npc, friend, { relationship: 'childhood friend', reciprocalRelationship: 'childhood friend' })
    return 'I always found it easy to make friends, and I loved being around people'
  }

  if (npc.roll.gregariousness >= 13) {
    const friend = createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(-3, 3)
    })
    createRelationship(town, npc, friend, { relationship: 'childhood friend', reciprocalRelationship: 'childhood friend' })
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
    const friend = createNPC(town, {
      isShallow: true,
      ageYears: npc.ageYears += random(1, 3),
      childhoodMemories: `I remember that we used to beat the shit out of that annoying ${npc.boygirl}, ${profile(npc, npc.firstName)}`
    })
    createRelationship(town, npc, friend, { relationship: 'bully', reciprocalRelationship: 'victim of bullying' })
    return 'I am still haunted by my childhood, where I was treated badly by my peers'
  }
  return 'I had a few close friends, and my childhood was a relatively normal one'
}
