import { logger } from '../logger'
import { GenderName } from '../npc-generation/genderData'
import { random } from '../src/random'
import { capitalizeFirstLetter } from '../src/utils'
import { RaceName, raceTraits } from './raceTraits'
import { getGenderTrait } from './setRace'

interface Params {
  race?: RaceName
  gender?: GenderName
  firstOrLast?: 'lastName' | 'firstName'
}

export function createName (parameters: Params = {}) {
  logger.info('Returning a name!')

  const { race = 'human', gender = 'woman', firstOrLast = 'firstName' } = parameters

  if (firstOrLast === 'lastName') {
    const raceTrait = raceTraits[race]
    return capitalizeFirstLetter(random(raceTrait.lastName))
  }

  const firstNames = getGenderTrait({ race, gender }, 'firstName')
  return capitalizeFirstLetter(random(firstNames))
}
