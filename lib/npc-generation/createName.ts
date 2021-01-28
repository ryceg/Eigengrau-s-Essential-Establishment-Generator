import { GenderName } from 'lib/src/genderData'
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
  console.log('Returning a name!')
  if (!parameters.race) parameters.race = 'human'
  if (!parameters.gender) parameters.gender = 'woman'
  const raceTrait = raceTraits[parameters.race || 'human']

  if (parameters.firstOrLast === 'lastName') {
    return capitalizeFirstLetter(random(raceTrait.lastName))
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const firstNames = getGenderTrait(parameters, 'firstName') as string[]
  return capitalizeFirstLetter(random(firstNames))
}
