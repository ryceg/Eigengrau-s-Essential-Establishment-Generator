import { random } from '../src/random'
import { BuildingToCreate } from './BuildingToCreate'

export function * cullBuildings (buildingsToCreate: BuildingToCreate[]) {
  const buildingsTally: Record<string, number> = {}

  for (const building of buildingsToCreate) {
    if (buildingsTally[building.buildingType]) {
      buildingsTally[building.buildingType] += 1
    } else {
      buildingsTally[building.buildingType] = 1
    }
  }

  for (const building of buildingsToCreate) {
    const randomRoll = random(100)
    const numberToBeat = 80

    // the idea here is that since the arrays are in order of rarest to most common,
    // if an archbishop DOES spawn, it'll be guaranteed
    // TODO: make the number to beat slightly lower, but increment with each addition
    if (buildingsTally[building.buildingType] < 2) {
      yield building
      continue
    }

    if (randomRoll > numberToBeat) {
      yield building
      continue
    }
  }
}
