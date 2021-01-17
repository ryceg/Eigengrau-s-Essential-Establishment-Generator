/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { BiomeName, LocationObject, locations } from './locations'

interface Encounter {
  summary: string
  available?: BiomeName[]
  function?(town: Town, biome: BiomeName): string
}

export const getLocation = (biome: BiomeName): LocationObject => {
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

export const getEventDescription = (event: LocationObject | Encounter, town: Town, biome: BiomeName): string => {
  if (event.function) {
    return event.function(town, biome)
  }
  return event.summary
}
