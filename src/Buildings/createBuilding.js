// TODO: convert
setup.createBuilding = (town, type, base = {}) => {
  let roadName
  let roadType

  // Tables used later
  if (random(100) < lib.townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // Roads are currently only supported with two words
    const randRoad = Object.keys(town.roads).random()
    const roads = town.roads[randRoad].split(' ')
    roadName = roads[0] || lib.townData.roads.name.random()
    roadType = roads[1] || lib.townData.roads.type.random()
  } else {
    roadName = lib.townData.roads.name.random()
    roadType = lib.townData.roads.type.random()
  }

  const lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].random()
  const outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '<<print lib.newspaper.random()>>'"
  ].random()
  const building = Object.assign({
    key: lib.getUUID(),
    childKeys: [],
    objectType: 'building',
    roadName,
    roadType,
    get road () {
      return `${this.roadName} ${this.roadType}`
    },
    set road (road) {
      const roads = road.toString().split(' ')
      this.roadName = roads[0] || ''
      this.roadType = roads[1] || ''
    },
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

  town.roads[building.key] = building.road

  if (base.parentKey) {
    console.log('Has a parent!')
    building.isChild = true
    building.road = town.roads[base.parentKey]
    // const parentIndex = lib.findBuildingIndex(town, base.parentKey)
    // town.buildings[parentIndex].childKeys.push(building.key)
    // console.log(`Linking together ${building.key} and ${town.buildings[parentIndex].key}`)
  }
  // building.priceModifier += town.taxes.economics
  building.priceModifier = Math.clamp(building.priceModifier, -10, 10)

  lib.clampRolls(building.roll)

  building.material = generateBuildingMaterial(town, town.townMaterial, building.roll.wealth)

  return building
}

function generateBuildingMaterial (town, mainMaterial, buildingWealth) {
  // Set probability for other buildings depending on the building 'tier'
  const buildingTier = getBuildingTier(town.roll.wealth, buildingWealth)
  const objectKeys = Object.keys(town.materialProbability)
  objectKeys.forEach((material) => {
    const tier = [...town.materialProbability[material].tier]
    if (tier.indexOf(buildingTier) !== -1) {
      town.materialProbability[material].probability = 5
    }
  })
  town.materialProbability[mainMaterial].probability = 80
  let tempMaterial = lib.weightedRandomFetcher(town, town.materialProbability, null, null, 'object')
  if (Object.keys(tempMaterial).includes('variations')) {
    console.log('Building material has variations. ')
    tempMaterial = lib.weightedRandomFetcher(town, tempMaterial.variations, null, null, 'object')
  }
  return tempMaterial
}

/**
 * @param {number} townWealth
 * @param {number} buildingWealth
 * @returns {number}
 */
function getBuildingTier (townWealth, buildingWealth) {
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
