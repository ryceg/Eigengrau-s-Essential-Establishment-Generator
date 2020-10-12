import { Town } from '../town/_common'
import { random } from '../src/random'
import { articles } from '../src/articles'

interface BuildingsToCreate {
  buildingType: string
  opts?: {
    npc: {
      profession: string
    }
  }
}

export function cullBuildings (town: Town, buildingsToCreate: BuildingsToCreate[]): void {
  const buildingsTally: Record<string, unknown> = {
  }
  for (const building of buildingsToCreate) {
    if (!buildingsTally[building.buildingType]) {
      buildingsTally[building.buildingType] = 1
    } else {
      buildingsTally[building.buildingType]++
    }
  }
  for (const building of buildingsToCreate) {
    const randomRoll = random(100)
    const numberToBeat = 80
    // the idea here is that since the arrays are in order of rarest to most common,
    // if an archbishop DOES spawn, it'll be guaranteed
    // TODO: make the number to beat slightly lower, but increment with each addition
    if (buildingsTally[building.buildingType] < 2) {
      console.log(`Creating ${articles.output(building.buildingType)}...`)
      setup.createNewBuilding(town, building.buildingType, building.opts)
    } else if (randomRoll > numberToBeat) {
      console.log(`Creating ${articles.output(building.buildingType)}...`)
      setup.createNewBuilding(town, building.buildingType, building.opts)
    } else {
      console.log(`Too many ${building.buildingType}s! Chucking one out...`)
    }
  }
}
