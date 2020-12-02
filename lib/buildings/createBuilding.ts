import { getUUID, clampRolls, weightedRandomFetcher } from '..'
import { Town } from '../town/_common'
import { MaterialType } from './structureData'
import { Building } from './_common'
import { random } from '../src/random'
import { randomFloat } from '../src/randomFloat'
import { roads } from '../town/roads'

export function createBuilding (town: Town, type: string, base = {}) {
  console.log('Creating base building...')

  const lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].random()
  const outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '<<print newspaper.random()>>'"
  ].random()
  const building: Building = Object.assign({
    key: getUUID(),
    childKeys: [],
    objectType: 'building',
    type,
    lighting,
    outside,
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
    priceModifier: Math.floor(randomFloat(1) * 8) - [0, 10].random()
  }, base)

  const road = roads.assign(town, building)
  building.road = road.key

  if (building.parentKey) {
    console.log('Has a parent!')
    building.isChild = true
    building.road = town.roads[building.parentKey]
    // const parentIndex = findBuildingIndex(town, base.parentKey)
    // town.buildings[parentIndex].childKeys.push(building.key)
    // console.log(`Linking together ${building.key} and ${town.buildings[parentIndex].key}`)
  }
  // building.priceModifier += town.taxes.economics
  building.priceModifier = Math.clamp(building.priceModifier, -10, 10)

  clampRolls(building.roll)

  building.material = generateBuildingMaterial(town, town.townMaterial, building.roll.wealth)

  return building
}

export function generateBuildingMaterial (town: Town, mainMaterial: string, buildingWealth: number): MaterialType {
  // Set probability for other buildings depending on the building 'tier'
  const buildingTier = getBuildingTier(town.roll.wealth, buildingWealth)
  for (const material of Object.keys(town.materialProbability)) {
    console.log(material)
    if (town.materialProbability[material].tier.indexOf(buildingTier) !== -1) {
      town.materialProbability[material].probability = 5
    }
  }
  town.materialProbability[mainMaterial].probability = 80
  const tempMaterial = weightedRandomFetcher(town, town.materialProbability, undefined, undefined, 'object') as MaterialType
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
