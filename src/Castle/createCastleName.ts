import { createNamesake, Namesake, Town } from '@lib'
import { getPronoun } from 'lib/npc-generation/gender/getPronoun'
import { castleNames } from './castleNames'
import { Castle } from './createCastle'

export function createCastleName (town: Town, castle: Castle, namesake?: Namesake) {
  console.log('Creating castle name...')

  namesake = createNamesake(town, namesake)
  console.log(namesake)
  const {
    unique,
    wordNouns,
    nouns,
    adjectives,
    morphemes
  } = castleNames

  const uniqueName = lib.random(unique)
  const wordNoun = lib.random([lib.random(wordNouns), castle.wordNoun])
  const noun = lib.random(nouns)
  const adjective = lib.random(adjectives)
  const prefix = lib.random(morphemes.prefix)
  const suffix = lib.random(morphemes.suffix)

  const choiceName = lib.random([
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
    lib.assign(castle, setup.createDeadNPC(town, namesake))
    lib.createReciprocalRelationship(town, castle, castle.namesake, { relationship: 'namesake', reciprocalRelationship: `Castle named after ${getPronoun(castle.namesake.gender, 'himher')}` })
  }

  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
}
