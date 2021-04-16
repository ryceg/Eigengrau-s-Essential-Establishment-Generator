import { Town } from '../town/_common'
import { NPC } from './_common'
import { socialClass, SocialClassName } from './socialClass'
import { keys } from '../src/utils'
import { findProfession } from '../src/findProfession'
import { dice } from '../src/dice'

export function createSocialClass (town: Town, npc: NPC): void {
  console.log('Creating social class...')
  if (npc.socialClass) {
    return
  }

  const profession = findProfession(town, npc)

  npc.roll = npc.roll || {}
  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll() || 40 + dice(8, 6)

  console.log({ npc })
  console.log(`Social class not predefined. Searching for the social class of a ${npc.profession}...`)
  // If .socialClass is defined in the professions.js, then that's all dandy.
  if (profession.socialClass) {
    npc.socialClass = profession.socialClass
    return
  }

  // Otherwise, just roll some dice.
  console.log(`Unidentified profession- ${npc.profession} does not exist in townData.professions!`)

  const classArray = keys(socialClass)
  const newArray = []

  for (const item of classArray) {
    newArray.push([socialClass[item].socialClassRollThreshold, item])
  }

  /** @type {[number, string][]} */
  const array = newArray.find(([threshold]) => {
    return threshold <= npc.roll.socialClass
  })

  if (array) {
    const newSocialClass = array[1]
    npc.socialClass = newSocialClass as SocialClassName
    return
  }

  console.log(`Failed to set a social class that matched the roll of ${npc.roll.socialClass} for ${npc.name}.`)
}
