
import { MaterialType } from './structureData'
import { Building } from './_common'
import { random } from '../src/random'
import { randomFloat } from '../src/randomFloat'

import { assign } from '../src/utils'
import { Town } from '@lib'
import { Road, roads } from '../town/roads'

export function createBuilding (town: Town, type: string, base: Partial<Building> = {}): Building {
  console.log('Creating base building...')
  console.log(base)

  const building = Object.assign({
    key: lib.getUUID(),
    objectType: 'building',
    road: '',
    type,
    roll: {
      magic: Math.floor(randomFloat(1) * 80) + 20,
      size: Math.floor(randomFloat(1) * 80) + 20,
      diversity: Math.floor(randomFloat(1) * 80) + 20,
      wealth: random(1, 100),
      population: random(1, 100),
      reputation: random(1, 100),
      sin: random(1, 100),
      roughness: random(1, 100),
      cleanliness: random(1, 100),
      expertise: random(1, 100),
      activity: random(1, 100)
    },
    priceModifier: getPriceModifier(),
    material: {
      noun: '',
      probability: 0
    }
  },
  base
  )

  // Not sure why we need to typecast this.
  lib.clampRolls(building.roll as unknown as Record<string, number>)
  if (base.road) {
    console.log('Road defined!')
    roads.addBuilding(town, town.roads[base.road], building as Building)
  }
  if (!building.road) building.road = getBuildingRoad(building as Building, town).key
  assign(building, {
    material: generateBuildingMaterial(town, town.townMaterial, building.roll.wealth)
  })

  return building
}

export function getBuildingRoad (building: Building, town: Town): Road {
  if (building.parentKey) {
    console.log('Has a parent!')
    const parentBuilding: Building | undefined = lib.findBuilding(town, building.parentKey)
    if (parentBuilding) return town.roads[parentBuilding.road]
  }
  return roads.assign(town, building)
}

function getPriceModifier (): number {
  return Math.clamp(Math.floor(randomFloat(1) * 8) - random([0, 10]), -10, 10)
}

export function generateBuildingMaterial (town: Town, mainMaterial: string, buildingWealth: number): MaterialType {
  // Set probability for other buildings depending on the building 'tier'
  const buildingTier = getBuildingTier(town.roll.wealth, buildingWealth)
  for (const material of Object.keys(town.materialProbability)) {
    if (town.materialProbability[material].tier.indexOf(buildingTier) !== -1) {
      town.materialProbability[material].probability = 5
    }
  }
  town.materialProbability[mainMaterial].probability = 80
  const tempMaterial = lib.weightedRandomFetcher(town, town.materialProbability, undefined, undefined, 'object') as MaterialType
  return tempMaterial
}

export function getBuildingTier (townWealth: number, buildingWealth: number): number {
  const wealth = townWealth + (buildingWealth * 0.2)
  if (wealth >= 70) {
    return 3
  }
  if (wealth >= 50 && wealth < 70) {
    return 2
  }
  if (wealth < 50) {
    return 1
  }
  return 0
}
