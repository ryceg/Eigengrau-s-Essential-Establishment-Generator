
import { MaterialType, MaterialTypes } from './structureMaterialData'
import { Building, BuildingRollsDefault, BuildingTypeName } from './_common'
import { random } from '../src/random'
import { randomFloat } from '../src/randomFloat'

import { assign, keys } from '../src/utils'
import { Road, Town } from '@lib'

export function createBuilding (town: Town, type: BuildingTypeName, base: Partial<Building> = {}): Building {
  console.log('Creating base building...')
  console.log(base)

  const building: Building = Object.assign({
    key: lib.getUUID(),
    objectType: 'building',
    buildingType: type,
    name: '',
    road: '',
    passageName: '',
    initPassage: '',
    type,
    roll: populateBuildingRolls(),
    priceModifier: getPriceModifier(),
    material: {
      noun: '',
      probability: 0
    }
  },
  base
  )

  // Not sure why we need to typecast this.
  lib.clampRolls(building.roll)
  if (base.road) {
    console.log('Road defined!')
    lib.roads.addBuilding(town, town.roads[base.road], building as Building)
  }
  if (!building.road) building.road = getBuildingRoad(building as Building, town).key
  assign(building, {
    material: generateBuildingMaterial(town, town.townMaterial, building.roll.wealth)
  })

  return building
}

export function populateBuildingRolls (): BuildingRollsDefault {
  return {
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
  }
}

export function getBuildingRoad (building: Building, town: Town): Road {
  if (building.parentKey) {
    console.log('Has a parent!')
    const parentBuilding: Building | undefined = lib.findBuilding(town, building.parentKey)
    if (parentBuilding) return town.roads[parentBuilding.road]
  }
  return lib.assignRoad(town, building)
}

function getPriceModifier (): number {
  return Math.clamp(Math.floor(randomFloat(1) * 8) - random([0, 10]), -10, 10)
}

export function generateBuildingMaterial (town: Town, mainMaterial: MaterialTypes, buildingWealth: number): MaterialType {
  // Set probability for other buildings depending on the building 'tier'
  const buildingTier = getBuildingTier(town.roll.wealth, buildingWealth)

  for (const material of keys(town.materialProbability)) {
    if (town.materialProbability[material].tier.includes(buildingTier)) {
      town.materialProbability[material] = {
        ...town.materialProbability[material],
        probability: 5
      }
    }
  }

  town.materialProbability[mainMaterial] = {
    ...town.materialProbability[mainMaterial],
    probability: 80
  }

  return lib.weightedRandomFetcher(town, town.materialProbability, undefined, undefined, 'object') as MaterialType
}

export function getBuildingTier (townWealth: number, buildingWealth: number): number {
  const wealth = townWealth + (buildingWealth * 0.2)

  if (wealth >= 70) return 3
  if (wealth >= 50) return 2
  return 1
}
