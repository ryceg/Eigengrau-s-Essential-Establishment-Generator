// TODO: finish fixing TypeScript issues

import { logger } from '../logger'
import { Town } from '../town/_common'
import { RaceName } from './raceTraits'
import { NPC } from './_common'
import { random } from '../src/random'
import { randomFloat } from '../src/randomFloat'

// Given a NPC to be married, determine the partner race
export const marriagePools: Record<RaceName, RaceName[]> = {
  'dragonborn': ['dragonborn'],
  'dwarf': ['dwarf'],
  'gnome': ['gnome'],
  'goblin': ['goblin'],
  'halfling': ['halfling'],
  'orc': ['human', 'orc', 'half-orc'],
  'human': ['human', 'elf', 'orc', 'half-elf', 'half-orc', 'tiefling'],
  'elf': ['human', 'elf', 'half-elf'],
  'half-elf': ['human', 'elf', 'half-elf', 'half-orc'],
  'half-orc': ['human', 'orc', 'half-elf', 'half-orc'],
  'tiefling': ['human', 'tiefling'],
  'lizardfolk': ['lizardfolk'],
  'ratfolk': ['ratfolk', 'goblin', 'halfling', 'gnome'],
  'kitsune': ['human', 'kitsune', 'elf', 'tiefling', 'dragonborn', 'lizardfolk', 'dwarf', 'gnome', 'halfling', 'ratfolk']
}

export function findParentRaces (npc: NPC) {
  const parentalLineageRoll = random(1, 8)

  let lineage: string | undefined
  let fatherRace!: RaceName | 'devil'
  let motherRace!: RaceName | 'devil'

  switch (npc.race) {
    case 'half-orc':
      if (parentalLineageRoll === 8) {
        lineage = 'Both parents were half-orcs'
        fatherRace = 'half-orc'
        motherRace = 'half-orc'
      } else if (parentalLineageRoll >= 6) {
        lineage = 'One parent was a human, the other was a half orc'
        motherRace = 'human'
        fatherRace = 'half-orc'
      } else if (parentalLineageRoll >= 4) {
        lineage = 'One parent was a half-orc, the other was an orc'
        motherRace = 'half-orc'
        fatherRace = 'orc'
      } else if (parentalLineageRoll < 4) {
        lineage = 'One parent was a human, the other was an orc'
        motherRace = 'human'
        fatherRace = 'orc'
      }
      break
    case 'half-elf':
      if (parentalLineageRoll === 8) {
        lineage = 'Both parents were half-elves'
        motherRace = 'half-elf'
        fatherRace = 'half-elf'
      } else if (parentalLineageRoll === 7) {
        lineage = 'One parent was a human, the other was a half elf'
        fatherRace = 'half-elf'
        motherRace = 'human'
      } else if (parentalLineageRoll === 6) {
        lineage = 'One parent was a half-elf, the other was an elf'
        fatherRace = 'half-elf'
        motherRace = 'elf'
      } else if (parentalLineageRoll < 6) {
        lineage = 'One parent was a human, the other was an elf'
        fatherRace = 'elf'
        motherRace = 'human'
      }
      break
    case 'tiefling':
      if (parentalLineageRoll === 8) {
        lineage = 'One parent was a human, the other was a devil'
        motherRace = 'human'
        fatherRace = 'devil'
      } else if (parentalLineageRoll === 7) {
        lineage = 'One parent was a tiefling, the other was a devil'
        motherRace = 'tiefling'
        fatherRace = 'devil'
      } else if (parentalLineageRoll >= 4) {
        lineage = 'One parent was a human, the other was a tiefling'
        motherRace = 'human'
        fatherRace = 'tiefling'
      } else if (parentalLineageRoll < 4) {
        lineage = 'Both parents were human, with their infernal ancestry manifesting in me later in life'
        motherRace = 'human'
        fatherRace = 'human'
      }
      break
    default:
      lineage = undefined
      motherRace = npc.race
      fatherRace = npc.race
  }

  // For the sake of symmetry
  if (random(1, 2) === 2) {
    [motherRace, fatherRace] = [fatherRace, motherRace]
  }
  return { motherRace, fatherRace, lineage }
}

export function findChildRace (town: Town, motherRace: RaceName, fatherRace: RaceName): RaceName {
  logger.info(`Handling ${motherRace}+${fatherRace} marriage!`)

  const races = [motherRace, fatherRace]

  if (motherRace === fatherRace) {
    return motherRace
  }

  if (races.includes('human')) {
    if (races.includes('elf')) {
      return 'half-elf'
    }
    if (races.includes('orc')) {
      return 'half-orc'
    }

    const halfbreeds = ['half-orc', 'half-elf', 'tiefling', 'dragonborn']
    if (races.find(race => halfbreeds.includes(race))) {
      const otherRace = races.find(race => race !== 'human')
      if (random(100) > 70) {
        return otherRace as RaceName
      }
      return 'human'
    }
  } else {
    return motherRace
  }
  return motherRace
}

export function findPartnerRace (town: Town, npc: NPC): RaceName {
  lib.logger.info('Finding partner race...')
  if (!(npc.race in marriagePools)) return npc.race

  const pool = marriagePools[npc.race]
    .filter((race) => typeof town.baseDemographics[race] === 'number')
  const poolSum = pool.map((race) => town.baseDemographics[race])
    .reduce((a, b) => a + b, 0)

  let roll = randomFloat(0, 1) * poolSum
  for (const raceName of pool) {
    roll -= town.baseDemographics[raceName]
    if (roll <= 0) return raceName
  }

  return npc.race
}
