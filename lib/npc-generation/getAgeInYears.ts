import { AgeName, RaceName, raceTraits } from './raceTraits'

/**
 * Gets the age of an NPC, in numerical years.
 */
export function getAgeInYears (race: RaceName, ageStage: AgeName): number {
  const ageTraits = raceTraits[race].ageTraits[ageStage]
  return ageTraits.baseAge + ageTraits.ageModifier()
}
