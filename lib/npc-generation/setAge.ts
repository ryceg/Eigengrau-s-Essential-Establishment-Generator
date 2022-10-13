import { logger } from '../logger'
import { getRolledFromTable } from '../src/rollFromTable'
import { raceTraits, AgeName, RaceName } from './raceTraits'
import { NPC } from './_common'

export function setAge (npc: NPC): void {
  logger.info(`Ageing ${npc.name}...`)

  const ageDescriptors = raceTraits[npc.race].ageTraits.ageDescriptors

  if (typeof ageDescriptors !== 'undefined') {
    const age = getRolledFromTable(ageDescriptors, npc.ageYears)

    if (typeof age !== 'undefined') {
      npc.age = age
    }
  } else {
    logger.warn('Called age descriptor without a valid array.')
  }

  if (npc.ageStage === 'child') {
    npc.hasClass = false
    npc.profession = npc.age
    npc.background = 'child'
  }
}

export function isOfAge (ageStage: AgeName, race: RaceName, ageYears: number): boolean {
  return ageYears >= raceTraits[race].ageTraits[ageStage].baseAge
}
