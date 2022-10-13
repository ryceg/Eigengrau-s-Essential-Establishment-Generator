import { GenderName } from './genderData'
import { AgeName, RaceName, raceTraits } from './raceTraits'
import { random } from '../src/random'

export const randomiseNPC = () => {
  return {
    gender: random(['man', 'woman']),
    race: random(Object.keys(raceTraits)),
    ageStage: random(['young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'])
  } as {
    gender: GenderName,
    race: RaceName,
    ageStage: AgeName
  }
}
