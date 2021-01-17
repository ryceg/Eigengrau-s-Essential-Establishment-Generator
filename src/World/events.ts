/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
import { Encounter, encounters } from './encounters'
import { BiomeName, Location, locations } from './locations'

export const getLocation = (biome: BiomeName): Location => {
  return lib.random(locations.filter(location => {
    return location.available.includes(biome)
  }))
}

export const getEncounter = (biome: BiomeName): Encounter => {
  return lib.random(encounters.filter(encounter => {
    return encounter.available?.includes(biome)
  }))
}

export const getEventDescription = (event: Location | Encounter, town: Town, biome: BiomeName): string => {
  if (event.function) {
    return event.function(town, biome)
  }
  return event.summary
}
