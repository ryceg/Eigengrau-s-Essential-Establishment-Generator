setup.createBuilding = (town, type, base = {}) => {
  let roadName
  let roadType

  // Tables used later
  if (random(100) < setup.townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // Roads are currently only supported with two words
    const randRoad = Object.keys(town.roads).random()
    const roads = town.roads[randRoad].split(' ')
    roadName = roads[0] || setup.townData.roads.name.random()
    roadType = roads[1] || setup.townData.roads.type.random()
  } else {
    roadName = setup.townData.roads.name.random()
    roadType = setup.townData.roads.type.random()
  }

  const lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].random()
  const outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '<<print setup.misc.newspaper.random()>>'"
  ].random()
  const material = ['wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'marble'].random()
  const building = Object.assign({
    key: randomFloat(1).toString(16),
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
    associatedTown: town.name,
    type,
    lighting,
    outside,
    material,
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

  // building.priceModifier += town.taxes.economics
  building.roll.wealth = Math.clamp(building.roll.wealth, 1, 100)
  building.priceModifier = Math.clamp(building.priceModifier, -10, 10)
  building.roll.reputation = Math.clamp(building.roll.reputation, 1, 100)
  building.roll.sin = Math.clamp(building.roll.sin, 1, 100)
  building.roll.diversity = Math.clamp(building.roll.diversity, 1, 100)
  building.roll.magic = Math.clamp(building.roll.magic, 1, 100)
  building.roll.size = Math.clamp(building.roll.size, 1, 100)
  building.roll.population = Math.clamp(building.roll.population, 1, 100)
  building.roll.roughness = Math.clamp(building.roll.roughness, 1, 100)
  building.roll.cleanliness = Math.clamp(building.roll.cleanliness, 1, 100)
  building.roll.expertise = Math.clamp(building.roll.expertise, 1, 100)
  building.roll.activity = Math.clamp(building.roll.activity, 1, 100)

  building.material = generateBuildingMaterial(town, town.townMaterial, building.roll.wealth)

  return building
}

function generateBuildingMaterial (town, mainMaterial, buildingWealth) {
  // Set probability for other buildings depending on the building 'tier'
  let buildingTier = 0
  const wealth = town.roll.wealth + (buildingWealth * 0.2)
  if (wealth >= 70) {
    buildingTier = 3
  } else if (wealth >= 50 && wealth < 70) {
    buildingTier = 2
  } else if (wealth < 50) {
    buildingTier = 1
  }
  const objectKeys = Object.keys(town.materialProbability)
  objectKeys.forEach((material) => {
    const tier = [...town.materialProbability[material].tier]
    if (tier.indexOf(buildingTier) !== -1) {
      town.materialProbability[material].probability = 5
    }
  })
  town.materialProbability[mainMaterial].probability = 80
  let tempMaterial = setup.weightedRandomFetcher(town, town.materialProbability, null, null, 'object')
  if (Object.keys(tempMaterial).includes('variations')) {
    console.log('Building material has variations. ')
    tempMaterial = setup.weightedRandomFetcher(town, tempMaterial.variations, null, null, 'object')
  }
  return tempMaterial
}
