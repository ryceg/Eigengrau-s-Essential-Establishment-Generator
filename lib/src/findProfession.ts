import { Town } from '../town/_common'
import { NPC } from '../npc-generation/_common'
import { professions } from '../npc-generation/professions'
import { fetchProfessionChance } from '../npc-generation/fetchProfessionChance'

import { logger } from '../logger'
import { findInContainer } from './findInContainer'

export function findProfession (town: Town, npc: NPC, professionName?: string) {
  if (typeof professionName === 'undefined') {
    professionName = npc.profession || npc.dndClass
  }

  if (!professionName && npc.socialClass) {
    professionName = fetchProfessionChance(town, npc)
  }

  if (!professionName) {
    throw new Error('Could not find a profession name.')
  }

  const profession = professions[professionName]

  if (profession) {
    return profession
  }

  logger.info(`Could not find ${professionName}. Looking for synonyms...`)
  const found = findInContainer(professions)('synonyms', professionName)

  if (typeof found === 'undefined') {
    logger.error(`${professionName} not found!`)
    return professions.peasant
  }

  logger.info('Found a synonym:', found)
  return found
}
