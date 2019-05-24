setup.createBuilding = function (town, type, base) {
// Tables used later
  if (random(100) < setup.townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // roads are currently only supported with two words
    var randRoad = Object.keys(town.roads).seededrandom()
    var roads = town.roads[randRoad].split(' ')
    var roadName = roads[0] || setup.townData.roads.name.seededrandom()
    var roadType = roads[1] || setup.townData.roads.type.seededrandom()
  } else {
    roadName = setup.townData.roads.name.seededrandom()
    roadType = setup.townData.roads.type.seededrandom()
  }

  var lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].seededrandom()
  var outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '$newspaperheadline'"
  ].seededrandom()
  var material = ['wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'marble'].seededrandom()
  var building = Object.assign({
    key: randomFloat(1).toString(16),
    roadName: roadName,
    roadType: roadType,
    get road () {
      return this.roadName + ' ' + this.roadType
    },
    set road (road) {
      var roads = road.toString().split(' ')
      this.roadName = roads[0] || ''
      this.roadType = roads[1] || ''
    },
    associatedTown: town.name,
    type: type,
    lighting: lighting,
    outside: outside,
    material: material,
    roll: {
      magic: (Math.floor(randomFloat(1) * 80) + 20),
      size: (Math.floor(randomFloat(1) * 80) + 20),
      diversity: (Math.floor(randomFloat(1) * 80) + 20),
      wealth: random(1, 100),
      population: random(1, 100),
      reputation: random(1, 100),
      sin: random(1, 100),
      roughness: random(1, 100),
      cleanliness: random(1, 100),
      expertise: random(1, 100),
      activity: random(1, 100)
    },
    priceModifier: (Math.floor(randomFloat(1) * 10) - [0, 10].seededrandom())
  }, base)

  town.roads[building.key] = building.road

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

  if (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    town.buildings[type][building.key] = building
  }
  if (!building.isThrowaway) {
    State.variables.buildings.push(building)
  }

  return building
}
