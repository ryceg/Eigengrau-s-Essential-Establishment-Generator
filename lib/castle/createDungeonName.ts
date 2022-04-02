import { Town } from '../town/_common'
import { Dungeon } from '../../src/Castle/createDungeon'
import { getPronoun } from '../npc-generation/gender/getPronoun'

export function createDungeonName (town: Town, dungeon: Dungeon, namesakeData = {}) {
  console.log('Creating dungeon name...')
  const namesake = lib.createNamesake(town, namesakeData)
  const {
    adjectives,
    nouns,
    unique,
    verbs,
    wordNoun
  } = lib.dungeonName

  const uniqueName = lib.random(unique)
  const adjective = lib.random(adjectives)
  const noun = lib.random(nouns)
  const verb = lib.random(verbs)
  const wordNounChoice = lib.random([lib.random(wordNoun), dungeon.wordNoun])
  const choiceName = lib.random([
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
    lib.createReciprocalRelationship(
      town,
      dungeon,
      dungeon.namesake,
      {
        relationship: 'namesake',
        reciprocalRelationship: `Dungeon named after ${getPronoun(dungeon.namesake.gender, 'himher')}`
      }
    )
  }
  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
}
