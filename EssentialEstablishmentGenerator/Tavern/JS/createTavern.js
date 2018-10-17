setup.createTavern = function (town, opts) {
  opts = opts || {}
  var tavern = (opts['newBuilding'] || setup.createBuilding)(town.name, 'tavern')
  // // var index = State.variables.buildings.size
  // // var isThrowaway
  // //
  // // var road1 = ['Castle', 'Keep', 'Kings', 'Queens', 'Prince', 'Princess', 'Lords', 'Ladies', 'Noble', 'Duke', 'Duchess', 'Rogue', 'Priest', 'Abbott', 'Pope', 'Spring', 'Winter', 'Summer', 'Autumn', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'Butcher', 'Tailor', 'Smith', 'Potter', 'Baker', 'Farrier', 'Old', 'New', 'Common', 'Main', 'High', 'Low', 'North', 'South', 'West', 'East'].random()
  // // var road2 = ['Street', 'Street', 'Street', 'Street', 'Lane', 'Lane', 'Lane', 'Road', 'Road', 'Road', 'Road', 'Square', 'Square', 'Market', 'Way', 'Crescent', 'Close', 'Wynd', 'Row'].random()
  // // var road = road1 + ' ' + road2
  // //
  // // var lighting = ['poorly lit', 'somewhat dark', 'dimly lit', 'well lit', 'brightly lit', 'well lit', 'brightly lit', 'bright and welcoming', 'fire-lit'].random()
  // // var outside = [
  // //   'a horse grazing on the bushes nearby',
  // //   'a rusted shovel near a somewhat overgrown flowerbed',
  // //   'a well with an old rope, but no bucket to go on the end',
  // //   'a dog panting by the door',
  // //   'a cat lazily lounging in the shade',
  // //   'a muddy pair of boots by the door',
  // //   "a sign from the local paper which reads '$newspaperheadline'"
  // // ].random()
  // // var material = ['wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'wooden', 'wooden', 'wooden', 'wooden', 'wooden', 'stone', 'stone', 'stone', 'stone', 'hewn rock', 'chiseled stone', 'marble'].random()
  // // var tavern = {
  // //   index: index,
  // //   isThrowaway: isThrowaway,
  // //   road: road,
  // //   associatedTown: town,
  // //   lighting: lighting,
  // //   outside: outside,
  // //   material: material,
  // //   magicRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
  // //   priceModifier: (Math.floor(Math.random() * 10) - [0, 10].random()).clamp(-10, 10),
  // //   sizeRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
  // //   diversityRoll: (Math.floor(Math.random() * 80) + 20).clamp(1, 100),
  // //   wealthRoll: dice(1, 100).clamp(1, 100),
  // //   populationRoll: dice(1, 100).clamp(1, 100),
  // //   reputationRoll: dice(1, 100).clamp(1, 100),
  // //   sinRoll: dice(1, 100).clamp(1, 100),
  // //   roughnessRoll: dice(1, 100).clamp(1, 100),
  // //   cleanlinessRoll: dice(1, 100).clamp(1, 100),
  // //   expertiseRoll: dice(1, 100).clamp(1, 100),
  // //   activityRoll: dice(1, 100).clamp(1, 100)
  // // }
  // console.log('tavern test 1')
  // console.log(tavern)
  // // console.log(tavern.sizeRoll + ' is the sizeRoll')
  //
  // // switch (type) {
  // //   case 'tavern':
  // //     tavern.name = setup.createTavernNameGen()
  // // }
  //
  // // tavern.sinRoll.clamp(1, 100)
  // // tavern.wealthRoll.clamp(1, 100)
  // // tavern.reputationRoll.clamp(1, 100)
  // // tavern.cleanlinessRoll.clamp(1, 100)
  // // tavern.populationRoll.clamp(1, 100)
  // // tavern.roughnessRoll.clamp(1, 100)
  // // tavern.diversityRoll.clamp(1, 100)
  // // tavern.sizeRoll.clamp(1, 100)
  // // tavern.magicRoll.clamp(1, 100)
  //
  // if (tavern.sizeRoll > 80) {
  //   tavern.size = 'huge'
  //   // tavern.floorPlan = dice(3, 6)
  // } else if (tavern.sizeRoll > 70) {
  //   tavern.size = 'quite large'
  //   // tavern.floorPlan = dice(3, 3)
  // } else if (tavern.sizeRoll > 60) {
  //   tavern.size = 'large'
  //   // tavern.floorPlan = dice(2, 3)
  // } else if (tavern.sizeRoll > 50) {
  //   tavern.size = 'spacious'
  //   // tavern.floorPlan = dice(2, 2)
  // } else if (tavern.sizeRoll > 40) {
  //   tavern.size = 'medium'
  //   // tavern.floorPlan = dice(1, 3)
  // } else if (tavern.sizeRoll > 30) {
  //   tavern.size = 'slightly cramped'
  //   // tavern.floorPlan = dice(1, 2)
  // } else if (tavern.sizeRoll > 20) {
  //   tavern.size = 'small'
  //   // tavern.floorPlan = dice(1, 2)
  // } else if (tavern.sizeRoll <= 20) {
  //   tavern.size = 'tiny'
  //   // tavern.floorPlan = 1
  // }
  //
  // // tavern.rooms = setup.createRooms(building)
  //
  // if (tavern.wealthRoll > 95) {
  //   tavern.wealth = 'kingly'
  // } else if (tavern.wealthRoll > 80) {
  //   tavern.wealth = 'aristocratic'
  // } else if (tavern.wealthRoll > 70) {
  //   tavern.wealth = 'wealthy'
  // } else if (tavern.wealthRoll > 60) {
  //   tavern.wealth = 'comfortable'
  // } else if (tavern.wealthRoll > 50) {
  //   tavern.wealth = 'modest'
  // } else if (tavern.wealthRoll > 25) {
  //   tavern.wealth = 'poor'
  // } else if (tavern.wealthRoll <= 25) {
  //   tavern.wealth = 'squalid'
  // }
  //
  // if (tavern.cleanlinessRoll > 80) {
  //   tavern.cleanliness = 'absolutely spotless'
  //   tavern.bedCleanliness = 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'
  // } else if (tavern.cleanlinessRoll > 70) {
  //   tavern.cleanliness = 'spotless'
  //   tavern.bedCleanliness = 'freshly cleaned and neat'
  // } else if (tavern.cleanlinessRoll > 60) {
  //   tavern.cleanliness = 'hygienic'
  //   tavern.bedCleanliness = 'tidy and neat'
  // } else if (tavern.cleanlinessRoll > 50) {
  //   tavern.cleanliness = 'decently hygienic'
  //   tavern.bedCleanliness = 'reasonably clean'
  // } else if (tavern.cleanlinessRoll > 40) {
  //   tavern.cleanliness = 'slightly grubby'
  //   tavern.bedCleanliness = 'somewhat tidy'
  // } else if (tavern.cleanlinessRoll > 30) {
  //   tavern.cleanliness = 'quite dirty'
  //   tavern.bedCleanliness = 'disgusting'
  // } else if (tavern.cleanlinessRoll > 20) {
  //   tavern.cleanliness = 'rather filthy'
  //   tavern.bedCleanliness = 'teeming with rats'
  // } else if (tavern.cleanlinessRoll <= 20) {
  //   tavern.cleanliness = 'absolutely putrid'
  //   tavern.bedCleanliness = 'festering with bugs'
  // }
  //
  // if (tavern.sinRoll > 80) {
  //   tavern.sin = 'corrupt'
  // } else if (tavern.sinRoll > 70) {
  //   tavern.sin = 'venal'
  // } else if (tavern.sinRoll > 60) {
  //   tavern.sin = 'sleazy'
  // } else if (tavern.sinRoll > 50) {
  //   tavern.sin = 'seedy'
  // } else if (tavern.sinRoll > 40 && tavern.roughnessRoll > 60) {
  //   tavern.sin = 'surprisingly trustworthy'
  // } else if (tavern.sinRoll > 40) {
  //   tavern.sin = 'trustworthy'
  // } else if (tavern.sinRoll > 30 && tavern.roughnessRoll > 60) {
  //   tavern.sin = 'surprisingly reliable'
  // } else if (tavern.sinRoll > 30) {
  //   tavern.sin = 'reliable'
  // } else if (tavern.sinRoll > 20 && tavern.roughnessRoll > 60) {
  //   tavern.sin = 'surprisingly honest'
  // } else if (tavern.sinRoll > 20) {
  //   tavern.sin = 'honest'
  // } else if (tavern.sinRoll <= 20) {
  //   tavern.sin = 'saintly'
  // }
  //
  // if (tavern.roughnessRoll > 80) {
  //   tavern.roughness = 'bloodthirsty'
  // } else if (tavern.roughnessRoll > 70) {
  //   tavern.roughness = 'quite rough'
  // } else if (tavern.roughnessRoll > 60) {
  //   tavern.roughness = 'rough'
  // } else if (tavern.roughnessRoll > 50) {
  //   tavern.roughness = 'alright'
  // } else if (tavern.roughnessRoll > 40) {
  //   tavern.roughness = 'placid'
  // } else if (tavern.roughnessRoll > 30) {
  //   tavern.roughness = 'calm'
  // } else if (tavern.roughnessRoll > 20) {
  //   tavern.roughness = 'tranquil'
  // } else if (tavern.roughnessRoll <= 20) {
  //   tavern.roughness = 'serene'
  // }
  //
  // if (tavern.expertiseRoll > 80) {
  //   tavern.expertise = 'masterful'
  // } else if (tavern.expertiseRoll > 70) {
  //   tavern.expertise = 'exceptional'
  // } else if (tavern.expertiseRoll > 60) {
  //   tavern.expertise = 'superior quality'
  // } else if (tavern.expertiseRoll > 50) {
  //   tavern.expertise = 'finely-crafted'
  // } else if (tavern.expertiseRoll > 40) {
  //   tavern.expertise = 'well-crafted'
  // } else if (tavern.expertiseRoll > 30) {
  //   tavern.expertise = 'somewhat well made'
  // } else if (tavern.expertiseRoll > 20) {
  //   tavern.expertise = 'somewhat amateur'
  // } else if (tavern.expertiseRoll <= 20) {
  //   tavern.expertise = 'blatantly amateur'
  // }
  //
  // if (tavern.activityRoll > 80) {
  //   tavern.activity = 'extremely busy'
  // } else if (tavern.activityRoll > 70) {
  //   tavern.activity = 'very busy'
  // } else if (tavern.activityRoll > 60) {
  //   tavern.activity = 'rather busy'
  // } else if (tavern.activityRoll > 50) {
  //   tavern.activity = 'reasonably busy'
  // } else if (tavern.activityRoll > 40) {
  //   tavern.activity = 'not terribly busy'
  // } else if (tavern.activityRoll > 30) {
  //   tavern.activity = 'not busy'
  // } else if (tavern.activityRoll > 20) {
  //   tavern.activity = 'rather quiet'
  // } else if (tavern.activityRoll <= 20) {
  //   tavern.activity = 'very quiet'
  // }
  // console.log('tavern test 2')
  // console.log(tavern)
  //
  // if (tavern.isThrowaway === undefined) {
  //   State.variables.buildings.set(++index, tavern)
  // }
  //
  // tavern.id = State.variables.buildings[State.variables.buildings.length - 1]

  tavern.name = setup.createTavernNameGen()
  console.log('tavern test 3')
  console.log(tavern)
  var bartender = (opts['newBartender'] || setup.createBartender)(town.name, tavern.name)
  var barmaid = setup.createNPC({
    gender: 'woman',
    background: 'commoner',
    hasClass: false,
    profession: 'barmaid'
  })
  tavern.barmaid = barmaid
  tavern.bartender = bartender
  var shortages = ['wine', 'booze', 'grog', 'whiskey', 'mutton', 'lamb', 'carrots', 'mugs', 'forks', 'frogs', 'bread', 'mushrooms', 'salt', 'silver pieces', 'chairs', 'eggs', 'potatoes']

  Object.assign(tavern, {
    passageName: 'TavernOutput',
    wordnoun: ['tavern', 'tavern', 'tavern', 'tavern', 'pub', 'pub', 'pub', 'inn', 'inn', 'bar', 'bar', 'bar', 'watering hole', 'drinkery'].random(),
    shortages: shortages,
    fun: setup.tavernFun,
    entertainment: setup.tavernEntertainment,
    patrons: setup.tavernPatrons
  })
  // console.log(tavern)
  Object.assign(tavern, setup.getTavernDraws(town, tavern))
  // tavern.draw = 'the incredible view'
  // tavern.drawFeature = 'the really incredible view'
  console.log('tavern test 4')
  console.log(tavern)
  tavern.type = [
    'quiet and low-key bar',
    'regular',
    'regular',
    'regular',
    'regular',
    'raucous dive',
    'raucous dive',
    'raucous dive',
    'raucous dive',
    "thieves' guild hangout",
    'gathering place for a secret society',
    'high-end dining club',
    'high-end dining club',
    'gambling den',
    'gambling den',
    bartender.race + ' only club',
    "guild-member's only club",
    "guild-member's only club",
    'members-only club',
    'brothel',
    'brothel'
  ].random()

  if (tavern.draw === 'proximity to the church') {
    if (tavern.type.indexOf(['gambling den', 'proximity to the brothel', 'raucous dive']) !== -1) {
      tavern.draw = 'proximity to the brothel'
    } else if (tavern.type === 'brothel') {
      tavern.draw = 'cheap prices for customers'
      tavern.hasBrothel = true
    }
  }
  setup.tavernModifiers(town, tavern)
  setup.tavernRender(tavern)
  return tavern
}
