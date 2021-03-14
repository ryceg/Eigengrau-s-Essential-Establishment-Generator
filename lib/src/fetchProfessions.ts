import { Town, TownBasics } from '../town/_common'
import { professions, Profession } from '../npc-generation/professions'

import { dice } from './dice'
import { randomFloat } from './randomFloat'

/**
 * This is run on start up.
 * It returns the available town professions, with their support values.
 *
 * Individual professions are returned by the `fetchProfessionChance()`
 * function located in `NPCGeneration/fetchProfessionChance.js`
 */
export function fetchProfessions (town: TownBasics) {
  const allProfessions = Object.entries(professions)
  const townProfessions: Town['professions'] = {}

  for (const [name, profession] of allProfessions) {
    const population = getProfessionPopulation(town.population, profession)

    if (population >= 1) {
      townProfessions[name] = {
        ...profession,
        name,
        population
      }
    }
  }

  return townProfessions
}

function getProfessionPopulation (townPop: number, profession: Profession) {
  const newSv = profession.sv + (dice('4d4-10') * 10)
  const professionRoll = townPop / newSv /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
  const professionRollPercentage = townPop / profession.sv * 100
  const professionRollHundred = randomFloat(1, 100)

  if (professionRoll < 1 && (professionRollPercentage >= professionRollHundred)) {
    return 1
  }

  if (professionRoll < 1 && professionRollPercentage < professionRollHundred) {
    return 0
  }

  return Math.trunc(professionRoll) /* Truncate the number = a whole number */
}
