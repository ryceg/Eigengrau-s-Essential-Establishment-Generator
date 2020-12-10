import { random } from '../src/random'
import { capitalizeFirstLetter } from '../src/utils'
import { GenderName, RaceName, raceTraits } from './raceTraits'

interface Params {
  race?: RaceName
  gender?: GenderName
  firstOrLast?: 'lastName' | 'firstName'
}

export function createName (parameters: Params = {}) {
  console.log('Returning a name!')

  const raceTrait = raceTraits[parameters.race || 'human']

  if (parameters.firstOrLast === 'lastName') {
    return capitalizeFirstLetter(random(raceTrait.lastName))
  }

  const genderTrait = raceTrait.genderTraits[parameters.gender || 'man']
  return capitalizeFirstLetter(random(genderTrait.firstName))
}
