import { Town } from '../town/_common'
import { NPC } from '../npc-generation/_common'
import { professions } from '../npc-generation/professions'
import { fetchProfessionChance } from '../npc-generation/fetchProfessionChance'

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

  // console.groupCollapsed(`running findProfession for ${npc.name}; looking for ${articles.output(professionName)}`)
  // console.log({ town, npc, professionName })

  const profession = professions[professionName]

  if (profession) {
    // console.log(`${professionName} is defined!`)
    console.groupEnd()
    return profession
  }

  console.log(`could not find ${professionName}. Looking for synonyms...`)
  const found = findInContainer(professions)('synonyms', professionName)

  if (typeof found === 'undefined') {
    console.error(`${professionName} not found!`)
    console.groupEnd()
    return professions.peasant
  }

  console.log('Found a synonym:', found)
  console.groupEnd()
  return found
}
