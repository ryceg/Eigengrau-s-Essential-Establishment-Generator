import { logger } from '../logger'
import { Town } from '../town/_common'
import { Dungeon } from '../../src/Castle/createDungeon'
import { getPronoun } from '../npc-generation/gender/getPronoun'
import { random } from '../src/random'
import { createNamesake } from '../npc-generation/createNamesake'
import { dungeonName } from './dungeonName'
import { assign } from '../src/utils'
import { createReciprocalRelationship } from '../buildings/createReciprocalRelationship'
import { toTitleCase } from '../src/toTitleCase'

export function createDungeonName (town: Town, dungeon: Dungeon, namesakeData = {}) {
  logger.info('Creating dungeon name...')
  const namesake = createNamesake(town, namesakeData)
  const {
    adjectives,
    nouns,
    unique,
    verbs,
    wordNoun
  } = dungeonName

  const uniqueName = random(unique)
  const adjective = random(adjectives)
  const noun = random(nouns)
  const verb = random(verbs)
  const wordNounChoice = random([random(wordNoun), dungeon.wordNoun])
  const choiceName = random([
    `${namesake.firstName}'s ${wordNounChoice}`,
    `${namesake.lastName}'s ${wordNounChoice}`,
    `The ${wordNounChoice} of ${namesake.lastName}`,
    `The ${noun} of ${adjective}`,
    `${noun}'s ${verb}`,
    `The ${adjective}'s ${noun}`,
    `${town.name} ${wordNounChoice}`,
    uniqueName
  ])

  if (choiceName.includes(namesake.firstName) || choiceName.includes(namesake.lastName)) {
    // Have to remove the dead NPC, since that requires setup.
    // dungeon.namesake = setup.createDeadNPC(town, namesake)
    assign(dungeon, { namesake })
    createReciprocalRelationship(town, dungeon, dungeon.namesake, {
      relationship: 'namesake',
      reciprocalRelationship: `Dungeon named after ${getPronoun(namesake.gender, 'himher')}`
    }
    )
  }
  return toTitleCase(choiceName)
}
