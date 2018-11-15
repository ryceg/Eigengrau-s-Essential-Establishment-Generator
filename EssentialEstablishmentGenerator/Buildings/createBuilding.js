/* global setup State random */
setup.createBuilding = function (town, type) {
// Tables used later

  var roadName = setup.townData.roads.name.random()
  var roadType = setup.townData.roads.type.random()

  var lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].random()
  var outside = [
    'a horse grazing on the bushes nearby',
    'a rusted shovel near a somewhat overgrown flowerbed',
    'a well with an old rope, but no bucket to go on the end',
    'a dog panting by the door',
    'a cat lazily lounging in the shade',
    'a muddy pair of boots by the door',
    "a sign from the local paper which reads '$newspaperheadline'"
  ].random()
  var material = ['wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'marble'].random()
  var building = {
    // index: State.variables.buildings.length - 1,
    index: Math.floor(Math.random() * 0x10000),
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
      magic: (Math.floor(Math.random() * 80) + 20),
      size: (Math.floor(Math.random() * 80) + 20),
      diversity: (Math.floor(Math.random() * 80) + 20),
      wealth: random(1, 100),
      population: random(1, 100),
      reputation: random(1, 100),
      sin: random(1, 100),
      roughness: random(1, 100),
      cleanliness: random(1, 100),
      expertise: random(1, 100),
      activity: random(1, 100)
    },
    magicRoll: (Math.floor(Math.random() * 80) + 20),
    priceModifier: (Math.floor(Math.random() * 10) - [0, 10].random()),
    sizeRoll: (Math.floor(Math.random() * 80) + 20),
    diversityRoll: (Math.floor(Math.random() * 80) + 20),
    wealthRoll: random(1, 100),
    populationRoll: random(1, 100),
    reputationRoll: random(1, 100),
    sinRoll: random(1, 100),
    roughnessRoll: random(1, 100),
    cleanlinessRoll: random(1, 100),
    expertiseRoll: random(1, 100),
    activityRoll: random(1, 100)
  }

  building.wealthRoll = Math.clamp(building.wealthRoll, 1, 100)
  building.priceModifier = Math.clamp(building.priceModifier, -10, 10)
  building.reputationRoll = Math.clamp(building.reputationRoll, 1, 100)
  building.sinRoll = Math.clamp(building.sinRoll, 1, 100)
  building.diversityRoll = Math.clamp(building.diversityRoll, 1, 100)
  building.magicRoll = Math.clamp(building.magicRoll, 1, 100)
  building.sizeRoll = Math.clamp(building.sizeRoll, 1, 100)
  building.populationRoll = Math.clamp(building.populationRoll, 1, 100)
  building.roughnessRoll = Math.clamp(building.roughnessRoll, 1, 100)
  building.cleanlinessRoll = Math.clamp(building.cleanlinessRoll, 1, 100)
  building.expertiseRoll = Math.clamp(building.expertiseRoll, 1, 100)
  building.activityRoll = Math.clamp(building.activityRoll, 1, 100)

  // if (building.sizeRoll > 80) {
  //   building.size = 'huge'
  //   // building.floorPlan = dice(3, 6)
  // } else if (building.sizeRoll > 70) {
  //   building.size = 'quite large'
  //   // building.floorPlan = dice(3, 3)
  // } else if (building.sizeRoll > 60) {
  //   building.size = 'large'
  //   // building.floorPlan = dice(2, 3)
  // } else if (building.sizeRoll > 50) {
  //   building.size = 'spacious'
  //   // building.floorPlan = dice(2, 2)
  // } else if (building.sizeRoll > 40) {
  //   building.size = 'medium'
  //   // building.floorPlan = dice(1, 3)
  // } else if (building.sizeRoll > 30) {
  //   building.size = 'slightly cramped'
  //   // building.floorPlan = dice(1, 2)
  // } else if (building.sizeRoll > 20) {
  //   building.size = 'small'
  //   // building.floorPlan = dice(1, 2)
  // } else if (building.sizeRoll <= 20) {
  //   building.size = 'tiny'
  //   // building.floorPlan = 1
  // }

  // building.rooms = setup.createRooms(building)

  // if (building.wealthRoll > 95) {
  //   building.wealth = 'kingly'
  // } else if (building.wealthRoll > 80) {
  //   building.wealth = 'aristocratic'
  // } else if (building.wealthRoll > 70) {
  //   building.wealth = 'wealthy'
  // } else if (building.wealthRoll > 60) {
  //   building.wealth = 'comfortable'
  // } else if (building.wealthRoll > 50) {
  //   building.wealth = 'modest'
  // } else if (building.wealthRoll > 25) {
  //   building.wealth = 'poor'
  // } else if (building.wealthRoll <= 25) {
  //   building.wealth = 'squalid'
  // }

  // if (building.cleanlinessRoll > 80) {
  //   building.cleanliness = 'absolutely spotless'
  //   building.bedCleanliness = 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'
  // } else if (building.cleanlinessRoll > 70) {
  //   building.cleanliness = 'spotless'
  //   building.bedCleanliness = 'freshly cleaned and neat'
  // } else if (building.cleanlinessRoll > 60) {
  //   building.cleanliness = 'hygienic'
  //   building.bedCleanliness = 'tidy and neat'
  // } else if (building.cleanlinessRoll > 50) {
  //   building.cleanliness = 'decently hygienic'
  //   building.bedCleanliness = 'reasonably clean'
  // } else if (building.cleanlinessRoll > 40) {
  //   building.cleanliness = 'slightly grubby'
  //   building.bedCleanliness = 'somewhat tidy'
  // } else if (building.cleanlinessRoll > 30) {
  //   building.cleanliness = 'quite dirty'
  //   building.bedCleanliness = 'disgusting'
  // } else if (building.cleanlinessRoll > 20) {
  //   building.cleanliness = 'rather filthy'
  //   building.bedCleanliness = 'teeming with rats'
  // } else if (building.cleanlinessRoll <= 20) {
  //   building.cleanliness = 'absolutely putrid'
  //   building.bedCleanliness = 'festering with bugs'
  // }
  //
  // if (building.sinRoll > 80) {
  //   building.sin = 'corrupt'
  // } else if (building.sinRoll > 70) {
  //   building.sin = 'venal'
  // } else if (building.sinRoll > 60) {
  //   building.sin = 'sleazy'
  // } else if (building.sinRoll > 50) {
  //   building.sin = 'seedy'
  // } else if (building.sinRoll > 40 && building.roughnessRoll > 60) {
  //   building.sin = 'surprisingly trustworthy'
  // } else if (building.sinRoll > 40) {
  //   building.sin = 'trustworthy'
  // } else if (building.sinRoll > 30 && building.roughnessRoll > 60) {
  //   building.sin = 'surprisingly reliable'
  // } else if (building.sinRoll > 30) {
  //   building.sin = 'reliable'
  // } else if (building.sinRoll > 20 && building.roughnessRoll > 60) {
  //   building.sin = 'surprisingly honest'
  // } else if (building.sinRoll > 20) {
  //   building.sin = 'honest'
  // } else if (building.sinRoll <= 20) {
  //   building.sin = 'saintly'
  // }
  //
  // if (building.roughnessRoll > 80) {
  //   building.roughness = 'bloodthirsty'
  // } else if (building.roughnessRoll > 70) {
  //   building.roughness = 'quite rough'
  // } else if (building.roughnessRoll > 60) {
  //   building.roughness = 'rough'
  // } else if (building.roughnessRoll > 50) {
  //   building.roughness = 'alright'
  // } else if (building.roughnessRoll > 40) {
  //   building.roughness = 'placid'
  // } else if (building.roughnessRoll > 30) {
  //   building.roughness = 'calm'
  // } else if (building.roughnessRoll > 20) {
  //   building.roughness = 'tranquil'
  // } else if (building.roughnessRoll <= 20) {
  //   building.roughness = 'serene'
  // }
  //
  // if (building.expertiseRoll > 80) {
  //   building.expertise = 'masterful'
  // } else if (building.expertiseRoll > 70) {
  //   building.expertise = 'exceptional'
  // } else if (building.expertiseRoll > 60) {
  //   building.expertise = 'superior quality'
  // } else if (building.expertiseRoll > 50) {
  //   building.expertise = 'finely-crafted'
  // } else if (building.expertiseRoll > 40) {
  //   building.expertise = 'well-crafted'
  // } else if (building.expertiseRoll > 30) {
  //   building.expertise = 'somewhat well made'
  // } else if (building.expertiseRoll > 20) {
  //   building.expertise = 'somewhat amateur'
  // } else if (building.expertiseRoll <= 20) {
  //   building.expertise = 'blatantly amateur'
  // }
  //
  // if (building.activityRoll > 80) {
  //   building.activity = 'extremely busy'
  // } else if (building.activityRoll > 70) {
  //   building.activity = 'very busy'
  // } else if (building.activityRoll > 60) {
  //   building.activity = 'rather busy'
  // } else if (building.activityRoll > 50) {
  //   building.activity = 'reasonably busy'
  // } else if (building.activityRoll > 40) {
  //   building.activity = 'not terribly busy'
  // } else if (building.activityRoll > 30) {
  //   building.activity = 'not busy'
  // } else if (building.activityRoll > 20) {
  //   building.activity = 'rather quiet'
  // } else if (building.activityRoll <= 20) {
  //   building.activity = 'very quiet'
  // }
  // console.log(building)
  if (!building.isThrowaway) {
    State.variables.buildings.push(building)
    // setup.townBinder(town, building, type)
  }

  // building.id = State.variables.buildings[State.variables.buildings.length - 1]
  // console.log(building)
  return building
}
