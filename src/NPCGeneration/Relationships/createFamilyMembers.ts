/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Family, Marriage, NPC, RaceName, Town } from '@lib'
import { getChildSurname, getParentSurnames } from './getSurnames'
import { getChildAge, getParentAge, getPartnerAge, getRelativeBase, siblingRoll } from './familyUtils'
import { setAsPartners } from './setAsPartners'
import { createNPC } from '../createNPC'
import { familySocialClass, relativeSocialClass } from '../socialClass'

const ABSENCE_PERCENT = 74
const OLD_ABSENCE_PERCENT = 40
const VERY_OLD_ABSENCE_PERCENT = 70
const ORPHAN_PERCENT = 10

/**
 * General function for inserting individual relatives. Returns the corresponding relative, or undefined
 */
export const createRelative = (town: Town, family: Family, base: Partial<NPC> = {}, force = false): NPC | undefined => {
  if (base.ageYears && base.ageYears <= 0) return
  // @ts-ignore
  if (base.race === 'devil') return
  if (!base.lastName) delete base.lastName

  // Avoid secondary NPC spam
  if (!force) {
    if (random(1, 100) <= ABSENCE_PERCENT) {
      return
    }
    if (base.race && base.ageYears && lib.isOfAge('elderly', base.race, base.ageYears)) {
      if (random(1, 100) <= OLD_ABSENCE_PERCENT) return
      if (base.ageYears >= lib.raceTraits[base.race].ageTraits.ageDescriptors[0][0]) {
        if (random(1, 100) <= VERY_OLD_ABSENCE_PERCENT) return
      }
    }
  }

  const relative = createNPC(town, base)
  family.members[relative.key] = {
    key: relative.key,
    parentMarriage: undefined,
    marriages: undefined,
    canRemarry: true
  }
  lib.createFamilyHouse(town, family)

  return relative
}

export const createParentage = (town: Town, family: Family, npc: NPC, forceFather = false, forceMother = false) => {
  const node = family.members[npc.key]

  if (node.parentMarriage === undefined) {
    if (random(1, 100) <= ORPHAN_PERCENT &&
      !forceFather && !forceMother) {
      delete node.parentMarriage
      return
    }

    const marriage: Marriage = {
      parents: [],
      children: [npc.key]
    }

    const { motherRace, fatherRace, lineage } = lib.findParentRaces(npc)
    npc.parentalLineage = lineage
    const { fatherSurname, motherSurname } = getParentSurnames(marriage)

    const fatherBase = Object.assign(getRelativeBase(npc), {
      gender: 'man',
      ageYears: getParentAge(npc),
      race: fatherRace,
      lastName: fatherSurname,
      socialClass: relativeSocialClass(npc.socialClass)
    })

    const motherBase = Object.assign(getRelativeBase(npc), {
      gender: 'woman',
      ageYears: getParentAge(npc),
      race: motherRace,
      lastName: motherSurname,
      socialClass: relativeSocialClass(npc.socialClass)
    })

    // TODO: finish support for non-heterosexual marriages
    const father = createRelative(town, family, fatherBase, forceFather)
    const mother = createRelative(town, family, motherBase, forceMother)

    if (father) {
      marriage.parents.push(father.key)
      family.members[father.key].marriages = [marriage]
    }

    if (mother) {
      marriage.parents.push(mother.key)
      family.members[mother.key].marriages = [marriage]
    }

    marriage.socialClass = familySocialClass(marriage)
    // FIXME: It's odd that the parent races can be devils, while RaceName doesn't include it.
    // @ts-ignore
    createChildren(town, family, marriage, siblingRoll(), motherRace, fatherRace)

    node.parentMarriage = marriage
    node.siblings = marriage.children
  }
}

export const createMarriage = (town: Town, family: Family, npc: NPC, force = false) => {
  const marriageMin = lib.raceTraits[npc.race].ageTraits['young adult'].baseAge
  const newMarriage: Marriage = {
    parents: [npc.key],
    children: []
  }

  // TODO: finish support for non-heterosexual marriages
  const partnerBase = Object.assign(getRelativeBase(npc), {
    gender: lib.getOppositeGender(npc.gender),
    ageYears: getPartnerAge(npc),
    race: lib.findPartnerRace(town, npc),
    socialClass: relativeSocialClass(relativeSocialClass(npc.socialClass))
  })
  partnerBase.ageYears = Math.max(partnerBase.ageYears, marriageMin)

  const partner = createRelative(town, family, partnerBase, force)

  if (partner) {
    setAsPartners(npc, partner)
    newMarriage.parents.push(partner.key)
    family.members[partner.key].marriages = [newMarriage]
  }

  newMarriage.socialClass = familySocialClass(newMarriage)
  createChildren(town, family, newMarriage, siblingRoll(), npc.race, partnerBase.race)
  lib.createFamilyHouse(town, family)
  return newMarriage
}

const createChildren = (town: Town, family: Family, marriage: Marriage, amount: number, motherRace: RaceName = 'human', fatherRace: RaceName = 'human', force = false) => {
  if (!force) amount -= marriage.children.length

  lib.logger.info(`Creating ${amount} siblings...`)
  lib.logger.info(family)

  const surname = getChildSurname(marriage)
  const siblingClass = marriage.socialClass

  const inserted: string[] = []
  for (let k = 0; k < amount; k++) {
    const siblingBase: Partial<NPC> = {
      race: lib.findChildRace(town, motherRace, fatherRace),
      ageYears: getChildAge(marriage),
      lastName: surname,
      socialClass: siblingClass,
      family: family.key,
      canBeCustom: false,
      isShallow: true,
      hasHistory: false
    }

    if (!siblingBase.race) {
      lib.logger.warn('Could not find sibling race.')
      return
    }

    if (!siblingBase.ageYears) {
      lib.logger.warn('Could not find sibling age.')
      return
    }

    if (siblingClass && lib.isOfAge('young adult', siblingBase.race, siblingBase.ageYears)) {
      siblingBase.socialClass = relativeSocialClass(siblingClass)
    }

    const sibling = createRelative(town, family, siblingBase, force)
    if (sibling) {
      marriage.children.push(sibling.key)
      inserted.push(sibling.key)
      family.members[sibling.key].parentMarriage = marriage
      family.members[sibling.key].siblings = marriage.children
    }
  }

  return inserted
}
