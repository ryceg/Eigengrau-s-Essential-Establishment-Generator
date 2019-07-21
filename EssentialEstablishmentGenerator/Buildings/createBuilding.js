setup.createBuilding = function (town, type, base) {
  let roadName
  let roadType
  // Tables used later
  if (random(100) < setup.townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // roads are currently only supported with two words
    const randRoad = Object.keys(town.roads).seededrandom()
    const roads = town.roads[randRoad].split(' ')
    roadName = roads[0] || setup.townData.roads.name.seededrandom()
    roadType = roads[1] || setup.townData.roads.type.seededrandom()
  } else {
    roadName = setup.townData.roads.name.seededrandom()
    roadType = setup.townData.roads.type.seededrandom()
  }

  const lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].seededrandom()
  const outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '$newspaperheadline'"
  ].seededrandom()
  const material = ['wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'marble'].seededrandom()
  const building = Object.assign({
    // index: State.variables.buildings.length - 1,
    // index: Math.floor(randomFloat(1) * 0x10000),
    key: randomFloat(1).toString(16),
    roadName,
    roadType,
    get road () {
      return this.roadName + ' ' + this.roadType
    },
    set road (road) {
      const roads = road.toString().split(' ')
      this.roadName = roads[0] || ''
      this.roadType = roads[1] || ''
    },
    // get descriptor () {
    //   return this.descriptors.seededrandom()
    // },
    // set descriptorsAdd (description) {
    //   if (typeof description === 'string') {
    //     console.log(this.descriptors)
    //     if (this.descriptors.includes(description)) {
    //       console.log('Throwing out duplicate description...')
    //     } else {
    //       this.descriptors.push(description)
    //     }
    //   } else {
    //     console.log('Expected a string operand and received ' + description)
    //   }
    // },
    associatedTown: town.name,
    type,
    lighting,
    outside,
    material,
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
    // magicRoll: (Math.floor(randomFloat(1) * 80) + 20),
    priceModifier: (Math.floor(randomFloat(1) * 10) - [0, 10].seededrandom())
    // sizeRoll: (Math.floor(randomFloat(1) * 80) + 20),
    // diversityRoll: (Math.floor(randomFloat(1) * 80) + 20),
    // wealthRoll: random(1, 100),
    // populationRoll: random(1, 100),
    // reputationRoll: random(1, 100),
    // sinRoll: random(1, 100),
    // roughnessRoll: random(1, 100),
    // cleanlinessRoll: random(1, 100),
    // expertiseRoll: random(1, 100),
    // activityRoll: random(1, 100)
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

  // if (building.roll.size > 80) {
  //   building.size = 'huge'
  //   // building.floorPlan = dice(3, 6)
  // } else if (building.roll.size > 70) {
  //   building.size = 'quite large'
  //   // building.floorPlan = dice(3, 3)
  // } else if (building.roll.size > 60) {
  //   building.size = 'large'
  //   // building.floorPlan = dice(2, 3)
  // } else if (building.roll.size > 50) {
  //   building.size = 'spacious'
  //   // building.floorPlan = dice(2, 2)
  // } else if (building.roll.size > 40) {
  //   building.size = 'medium'
  //   // building.floorPlan = dice(1, 3)
  // } else if (building.roll.size > 30) {
  //   building.size = 'slightly cramped'
  //   // building.floorPlan = dice(1, 2)
  // } else if (building.roll.size > 20) {
  //   building.size = 'small'
  //   // building.floorPlan = dice(1, 2)
  // } else if (building.roll.size <= 20) {
  //   building.size = 'tiny'
  //   // building.floorPlan = 1
  // }

  // building.rooms = setup.createRooms(building)

  // if (building.roll.wealth > 95) {
  //   building.wealth = 'kingly'
  // } else if (building.roll.wealth > 80) {
  //   building.wealth = 'aristocratic'
  // } else if (building.roll.wealth > 70) {
  //   building.wealth = 'wealthy'
  // } else if (building.roll.wealth > 60) {
  //   building.wealth = 'comfortable'
  // } else if (building.roll.wealth > 50) {
  //   building.wealth = 'modest'
  // } else if (building.roll.wealth > 25) {
  //   building.wealth = 'poor'
  // } else if (building.roll.wealth <= 25) {
  //   building.wealth = 'squalid'
  // }

  // if (building.roll.cleanliness > 80) {
  //   building.cleanliness = 'absolutely spotless'
  //   building.bedCleanliness = 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'
  // } else if (building.roll.cleanliness > 70) {
  //   building.cleanliness = 'spotless'
  //   building.bedCleanliness = 'freshly cleaned and neat'
  // } else if (building.roll.cleanliness > 60) {
  //   building.cleanliness = 'hygienic'
  //   building.bedCleanliness = 'tidy and neat'
  // } else if (building.roll.cleanliness > 50) {
  //   building.cleanliness = 'decently hygienic'
  //   building.bedCleanliness = 'reasonably clean'
  // } else if (building.roll.cleanliness > 40) {
  //   building.cleanliness = 'slightly grubby'
  //   building.bedCleanliness = 'somewhat tidy'
  // } else if (building.roll.cleanliness > 30) {
  //   building.cleanliness = 'quite dirty'
  //   building.bedCleanliness = 'disgusting'
  // } else if (building.roll.cleanliness > 20) {
  //   building.cleanliness = 'rather filthy'
  //   building.bedCleanliness = 'teeming with rats'
  // } else if (building.roll.cleanliness <= 20) {
  //   building.cleanliness = 'absolutely putrid'
  //   building.bedCleanliness = 'festering with bugs'
  // }
  //
  // if (building.roll.sin > 80) {
  //   building.sin = 'corrupt'
  // } else if (building.roll.sin > 70) {
  //   building.sin = 'venal'
  // } else if (building.roll.sin > 60) {
  //   building.sin = 'sleazy'
  // } else if (building.roll.sin > 50) {
  //   building.sin = 'seedy'
  // } else if (building.roll.sin > 40 && building.roll.roughness > 60) {
  //   building.sin = 'surprisingly trustworthy'
  // } else if (building.roll.sin > 40) {
  //   building.sin = 'trustworthy'
  // } else if (building.roll.sin > 30 && building.roll.roughness > 60) {
  //   building.sin = 'surprisingly reliable'
  // } else if (building.roll.sin > 30) {
  //   building.sin = 'reliable'
  // } else if (building.roll.sin > 20 && building.roll.roughness > 60) {
  //   building.sin = 'surprisingly honest'
  // } else if (building.roll.sin > 20) {
  //   building.sin = 'honest'
  // } else if (building.roll.sin <= 20) {
  //   building.sin = 'saintly'
  // }
  //
  // if (building.roll.roughness > 80) {
  //   building.roughness = 'bloodthirsty'
  // } else if (building.roll.roughness > 70) {
  //   building.roughness = 'quite rough'
  // } else if (building.roll.roughness > 60) {
  //   building.roughness = 'rough'
  // } else if (building.roll.roughness > 50) {
  //   building.roughness = 'alright'
  // } else if (building.roll.roughness > 40) {
  //   building.roughness = 'placid'
  // } else if (building.roll.roughness > 30) {
  //   building.roughness = 'calm'
  // } else if (building.roll.roughness > 20) {
  //   building.roughness = 'tranquil'
  // } else if (building.roll.roughness <= 20) {
  //   building.roughness = 'serene'
  // }
  //
  // if (building.roll.expertise > 80) {
  //   building.expertise = 'masterful'
  // } else if (building.roll.expertise > 70) {
  //   building.expertise = 'exceptional'
  // } else if (building.roll.expertise > 60) {
  //   building.expertise = 'superior quality'
  // } else if (building.roll.expertise > 50) {
  //   building.expertise = 'finely-crafted'
  // } else if (building.roll.expertise > 40) {
  //   building.expertise = 'well-crafted'
  // } else if (building.roll.expertise > 30) {
  //   building.expertise = 'somewhat well made'
  // } else if (building.roll.expertise > 20) {
  //   building.expertise = 'somewhat amateur'
  // } else if (building.roll.expertise <= 20) {
  //   building.expertise = 'blatantly amateur'
  // }
  //
  // if (building.roll.activity > 80) {
  //   building.activity = 'extremely busy'
  // } else if (building.roll.activity > 70) {
  //   building.activity = 'very busy'
  // } else if (building.roll.activity > 60) {
  //   building.activity = 'rather busy'
  // } else if (building.roll.activity > 50) {
  //   building.activity = 'reasonably busy'
  // } else if (building.roll.activity > 40) {
  //   building.activity = 'not terribly busy'
  // } else if (building.roll.activity > 30) {
  //   building.activity = 'not busy'
  // } else if (building.roll.activity > 20) {
  //   building.activity = 'rather quiet'
  // } else if (building.roll.activity <= 20) {
  //   building.activity = 'very quiet'
  // }
  // console.log(building)
  if (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    town.buildings[type][building.key] = building
  }
  if (!building.isThrowaway) {
    State.variables.buildings.push(building)
    // setup.townBinder(town, building, type)
  }
  building.material = generateBuildingMaterial(town, town.townMaterial, building.roll.wealth, town.roll.wealth)

  // building.id = State.variables.buildings[State.variables.buildings.length - 1]
  // console.log(building)
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
  let tempMaterial = setup.weightedRandomFetcher(town, town.materialProbability, '', '', 'object')
  if (Object.keys(tempMaterial).includes('variations')) {
    console.log('Building material has variations. ')
    tempMaterial = setup.weightedRandomFetcher(town, tempMaterial.variations, '', '', 'object')
  }
  return tempMaterial
}
