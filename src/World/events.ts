/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { BiomeName, Location, locations } from './locations'

export const getLocation = (biome: BiomeName): Location => {
  return lib.random(locations.filter(location => {
    return location.available.includes(biome)
  }))
}

/**
 * @warn Uses `setup.misc.encounters`
 */
export const getEncounter = (biome: BiomeName): Encounter => {
  // @ts-ignore
  return lib.random(setup.misc.encounters.filter(encounter => {
    return encounter.available && encounter.available.includes(biome)
  }))
}

export const getEventDescription = (event: Location | Encounter, town: Town, biome: BiomeName): string => {
  if (event.function) {
    return event.function(town, biome)
  }
  return event.summary
}
