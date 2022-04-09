import { logger } from '../logger'
import { getPronoun } from '../npc-generation/gender/getPronoun'
import { Castle } from '../../src/Castle/createCastle'
import { Town } from '../town/_common'
import { Namesake } from '../npc-generation/_common'
import { createNamesake } from '../npc-generation/createNamesake'
import { castleNames } from './castleNames'
import { random } from '../src/random'
import { assign } from '../src/utils'
import { createReciprocalRelationship } from '../buildings/createReciprocalRelationship'
import { toTitleCase } from '../src/toTitleCase'

export function createCastleName (town: Town, castle: Castle, namesake?: Namesake) {
  logger.info('Creating castle name...')

  namesake = createNamesake(town, namesake)
  const {
    unique,
    wordNouns,
    nouns,
    adjectives,
    morphemes
  } = castleNames

  const uniqueName = random(unique)
  const wordNoun = random([random(wordNouns), castle.wordNoun])
  const noun = random(nouns)
  const adjective = random(adjectives)
  const prefix = random(morphemes.prefix)
  const suffix = random(morphemes.suffix)
  const choiceName = random([
    `${namesake.firstName}'s ${wordNoun}`,
    `${namesake.lastName}'s ${wordNoun}`,
    `The ${wordNoun} of ${namesake.lastName}`,
    `${noun}${suffix}`,
    `${prefix}${noun}${suffix}`,
    `${prefix}${noun}`,
    `${adjective}${suffix}`,
    `${town.name} ${wordNoun}`,
    uniqueName
  ])
  if (choiceName.includes(namesake.firstName) || choiceName.includes(namesake.lastName)) {
    // Have to remove the dead NPC, since that requires setup.
    // assign(castle, setup.createDeadNPC(town, namesake))
    assign(castle, { namesake })
    createReciprocalRelationship(town, castle, castle.namesake, {
      relationship: 'namesake',
      reciprocalRelationship: `Castle named after ${getPronoun(namesake.gender, 'himher')}`
    })
  }
  return toTitleCase(choiceName)
}
