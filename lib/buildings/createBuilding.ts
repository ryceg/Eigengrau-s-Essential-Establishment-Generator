import { logger } from '../logger'
import { assign, getUUID, keys } from '../src/utils'
import { random } from '../src/random'
import { clampRolls } from '../src/clampRolls'
import { randomFloat } from '../src/randomFloat'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { Town } from '../town/_common'
import { Road, roads } from '../roads/roads'
import { assignRoad } from '../roads/assignRoad'

import { Building, BuildingRollsDefault, BuildingTypeName } from './_common'
import { MaterialType, MaterialTypes } from './structureMaterialData'
import { findBuilding } from './findBuilding'

export function createBuilding (town: Town, type: BuildingTypeName, base: Partial<Building> = {}): Building {
  logger.info('Creating base building...', base)

  const building = {
    key: getUUID(),
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
    },
    ...base
  } as Building

  clampRolls(building.roll)

  if (base.road) {
    roads.addBuilding(town, town.roads[base.road], building)
  }

  if (!building.road) {
    building.road = getBuildingRoad(building, town).key
  }

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
    const parentBuilding: Building | undefined = findBuilding(town, building.parentKey)
    if (parentBuilding) return town.roads[parentBuilding.road]
  }
  return assignRoad(town, building)
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

  return weightedRandomFetcher(town, town.materialProbability, undefined, undefined, 'object') as MaterialType
}

export function getBuildingTier (townWealth: number, buildingWealth: number): number {
  const wealth = townWealth + (buildingWealth * 0.2)

  if (wealth >= 70) return 3
  if (wealth >= 50) return 2
  return 1
}
