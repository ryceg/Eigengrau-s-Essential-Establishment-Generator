setup.createBuilding = function (base) {
  // Tables used later
  var index = State.variables.buildings.size
  var isThrowaway

  var road1 = ['Castle', 'Keep', 'Kings', 'Queens', 'Prince', 'Princess', 'Lords', 'Ladies', 'Noble', 'Duke', 'Duchess', 'Rogue', 'Priest', 'Abbott', 'Pope', 'Spring', 'Winter', 'Summer', 'Autumn', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'North', 'South', 'West', 'East'].random()
  var road2 = ['Street', 'Street', 'Street', 'Street', 'Lane', 'Lane', 'Lane', 'Road', 'Road', 'Road', 'Road', 'Square', 'Square', 'Market', 'Way', 'Crescent', 'Close', 'Wynd', 'Row'].random()
  var road = road1 + ' ' + road2

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

  var magic
  var priceModifier
  var size
  var diversity
  var wealth
  var population
  var reputation
  var sin
  var roughness
  var cleanliness
  var bedcleanliness
  var expertise
  var activity
  var building = Object.assign({
    index: index,
    isThrowaway: isThrowaway,
    road: road,
    lighting: lighting,
    outside: outside,
    material: material,
    magic: magic,
    size: size,
    diversity: diversity,
    wealth: wealth,
    population: population,
    reputation: reputation,
    sin: sin,
    roughness: roughness,
    cleanliness: cleanliness,
    bedcleanliness: bedcleanliness,
    expertise: expertise,
    activity: activity,
    magicRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
    priceModifier: random(-10, 10),
    sizeRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
    diversityRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
    wealthRoll: random(1, 100).clamp(1, 100),
    populationRoll: random(1, 100).clamp(1, 100),
    reputationRoll: random(1, 100).clamp(1, 100),
    sinRoll: random(1, 100).clamp(1, 100),
    roughnessRoll: random(1, 100).clamp(1, 100),
    cleanlinessRoll: random(1, 100).clamp(1, 100),
    expertiseRoll: random(1, 100).clamp(1, 100),
    activityRoll: random(1, 100).clamp(1, 100)
  }, base)

  building.sinRoll.clamp(1, 100)
  building.wealthRoll.clamp(1, 100)
  building.reputationRoll.clamp(1, 100)
  building.cleanlinessRoll.clamp(1, 100)
  building.populationRoll.clamp(1, 100)
  building.roughnessRoll.clamp(1, 100)
  building.diversityRoll.clamp(1, 100)
  building.sizeRoll.clamp(1, 100)
  building.magicRoll.clamp(1, 100)

  if (!building.size) {
    if (building.sizeRoll > 80) {
      building.size = 'huge'
    } else if (building.sizeRoll > 70) {
      building.size = 'quite large'
    } else if (building.sizeRoll > 60) {
      building.size = 'large'
    } else if (building.sizeRoll > 50) {
      building.size = 'spacious'
    } else if (building.sizeRoll > 40) {
      building.size = 'medium'
    } else if (building.sizeRoll > 30) {
      building.size = 'slightly cramped'
    } else if (building.sizeRoll > 20) {
      building.size = 'small'
    } else if (building.sizeRoll <= 20) {
      building.size = 'tiny'
    }
  }
  if (!building.wealth) {
    if (building.wealthRoll > 95) {
      building.wealth = 'kingly'
    } else if (building.wealthRoll > 80) {
      building.wealth = 'aristocratic'
    } else if (building.wealthRoll > 70) {
      building.wealth = 'wealthy'
    } else if (building.wealthRoll > 60) {
      building.wealth = 'comfortable'
    } else if (building.wealthRoll > 50) {
      building.wealth = 'modest'
    } else if (building.wealthRoll > 25) {
      building.wealth = 'poor'
    } else if (building.wealthRoll <= 25) {
      building.wealth = 'squalid'
    }
  }

  if (!building.cleanliness || !building.bedcleanliness) {
    if (building.cleanlinessRoll > 80) {
      building.cleanliness = 'absolutely spotless'
      building.bedcleanliness = 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'
    } else if (building.cleanlinessRoll > 70) {
      building.cleanliness = 'spotless'
      building.bedcleanliness = 'freshly cleaned and neat'
    } else if (building.cleanlinessRoll > 60) {
      building.cleanliness = 'hygienic'
      building.bedcleanliness = 'tidy and neat'
    } else if (building.cleanlinessRoll > 50) {
      building.cleanliness = 'decently hygienic'
      building.bedcleanliness = 'reasonably clean'
    } else if (building.cleanlinessRoll > 40) {
      building.cleanliness = 'slightly grubby'
      building.bedcleanliness = 'somewhat tidy'
    } else if (building.cleanlinessRoll > 30) {
      building.cleanliness = 'quite dirty'
      building.bedcleanliness = 'disgusting'
    } else if (building.cleanlinessRoll > 20) {
      building.cleanliness = 'rather filthy'
      building.bedcleanliness = 'teeming with rats'
    } else if (building.cleanlinessRoll <= 20) {
      building.cleanliness = 'absolutely putrid'
      building.bedcleanliness = 'festering with bugs'
    }
  }
  if (!building.sin) {
    if (building.sinRoll > 80) {
      building.sin = 'corrupt'
    } else if (building.sinRoll > 70) {
      building.sin = 'venal'
    } else if (building.sinRoll > 60) {
      building.sin = 'sleazy'
    } else if (building.sinRoll > 50) {
      building.sin = 'seedy'
    } else if (building.sinRoll > 40 && building.roughnessRoll > 60) {
      building.sin = 'surprisingly trustworthy'
    } else if (building.sinRoll > 40) {
      building.sin = 'trustworthy'
    } else if (building.sinRoll > 30 && building.roughnessRoll > 60) {
      building.sin = 'surprisingly reliable'
    } else if (building.sinRoll > 30) {
      building.sin = 'reliable'
    } else if (building.sinRoll > 20 && building.roughnessRoll > 60) {
      building.sin = 'surprisingly honest'
    } else if (building.sinRoll > 20) {
      building.sin = 'honest'
    } else if (building.sinRoll <= 20) {
      building.sin = 'saintly'
    }
  }

  if (!building.roughness) {
    if (building.roughnessRoll > 80) {
      building.roughness = 'bloodthirsty'
    } else if (building.roughnessRoll > 70) {
      building.roughness = 'quite rough'
    } else if (building.roughnessRoll > 60) {
      building.roughness = 'rough'
    } else if (building.roughnessRoll > 50) {
      building.roughness = 'alright'
    } else if (building.roughnessRoll > 40) {
      building.roughness = 'placid'
    } else if (building.roughnessRoll > 30) {
      building.roughness = 'calm'
    } else if (building.roughnessRoll > 20) {
      building.roughness = 'tranquil'
    } else if (building.roughnessRoll <= 20) {
      building.roughness = 'serene'
    }
  }

  if (building.isThrowaway === undefined) {
    State.variables.buildings.set(++index, building)
  }

  return building
}
