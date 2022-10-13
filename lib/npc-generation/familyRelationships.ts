import { Town } from '../town/_common'
import { Family, NPC } from './_common'
import { assign } from '../src/utils'
import { random } from '../src/random'
import { findExistingRoad } from '../roads/findExistingRoad'

export const familyRelationships = {
  /**
   * Specific names for relatives in the family tree. Capital letters stand for the four types of relationship:
   *
   * `B = brother / sister`
   *
   * `C = couple (marriage)`
   *
   * `D = descendant (child)`
   *
   * `E = elder (parent).`
   *
   * Entries in parentheses should never occur.
   */
  nouns: {
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
  } as Record<string, string>,
  verbose: (key: string) => {
    if (key in familyRelationships.nouns) return familyRelationships.nouns[key]
    return 'relative'
  },
  inverse: (npc: NPC, key: string) => {
    let inverse = ''
    for (let i = 0; i < key.length - 1; i++) {
      if (key[i] === 'E') {
        inverse = `${inverse}D`
      } else if (key[i] === 'D') {
        inverse = `${inverse}E`
      } else {
        inverse = inverse + key[i]
      }
    }
    return inverse.split('').reverse().join('') + npc.gender[0]
  }
}

export function knewParents (town: Town, npc: NPC) {
  if (!npc) return false
  const family = town.families[npc.family]
  const node = family.members[npc.key]
  return !!node.parentMarriage
}

export function getMarriages (town: Town, npc: NPC) {
  if (!npc) return false
  const family = town.families[npc.family]
  const node = family.members[npc.key]
  return !!node.parentMarriage
}

export function createFamily (town: Town, npc: NPC) {
  const key = `${npc.lastName || npc.firstName} family`
  const family = {
    key,
    members: {
      [npc.key]: {
        key: npc.key,
        parentMarriage: undefined,
        marriages: undefined,
        canRemarry: true
      }
    },
    home: {
      road: ''
    }
  }
  town.families[key] = family
  npc.family = key
}

export function createFamilyHouse (town: Town, family: Family) {
  const road = town.roads[family.home.road] ||
    findExistingRoad(town) ||
    random(Object.values(town.roads))
  // roads.assign(town)

  for (const member in family.members) {
    if (!road.inhabitants.npcs[family.members[member].key]) {
      road.inhabitants.npcs[family.members[member].key] = 'occupant'
      town.roads[road.key].currentOccupancy++
    }
  }
  assign(family, {
    home: {
      road: road.key
    }
  })
}
