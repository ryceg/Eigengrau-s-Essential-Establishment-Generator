import { logger } from '../logger'
import { Town } from '../town/_common'
import { socialClass, SocialClassName } from './socialClass'
import { keys } from '../src/utils'
import { findProfession } from '../src/findProfession'
import { dice } from '../src/dice'
import { NPC } from './_common'

export function createSocialClass (town: Town, npc: NPC): void {
  logger.info('Creating social class...')
  if (npc.socialClass) {
    return
  }

  const profession = findProfession(town, npc)

  npc.roll = npc.roll || {}
  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll() || 40 + dice(8, 6)

  logger.info(`Social class not predefined. Searching for the social class of a ${npc.profession}...`)

  // If .socialClass is defined in the professions.js, then that's all dandy.
  if (profession.socialClass) {
    npc.socialClass = profession.socialClass
    return
  }

  // Otherwise, just roll some dice.
  logger.warn(`Unidentified profession- ${npc.profession} does not exist in townData.professions!`)

  const classArray = keys(socialClass)
  const newArray = []

  for (const item of classArray) {
    newArray.push([socialClass[item].socialClassRollThreshold, item])
  }

  const array = newArray.find(([threshold]) => {
    return threshold <= npc.roll.socialClass
  })

  if (array) {
    const newSocialClass = array[1]
    npc.socialClass = newSocialClass as SocialClassName
    return
  }

  logger.info(`Failed to set a social class that matched the roll of ${npc.roll.socialClass} for ${npc.name}.`)
}
