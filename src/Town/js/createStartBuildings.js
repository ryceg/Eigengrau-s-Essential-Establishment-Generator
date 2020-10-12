setup.createStartBuildings = town => {
  console.log('Creating starting buildings...', town)

  const buildingsToCreate = [
    {
      buildingType: 'Town Square',
      opts: null
    },
    {
      buildingType: 'Market',
      opts: null
    }
  ]

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingsToCreate.push({ buildingType: 'Docks', opts: null })
  }

  const professions = {
    'Tavern': ['bartender'],
    'Alchemist': ['alchemist', 'wizard'],
    'Bakery': ['pastry chef', 'baker'],
    'General Store': ['shopkeep'],
    'Graveyard': ['gravedigger', 'sexton'],
    'Dungeon': ['jailer', 'bailiff'],
    'Castle': ['castellan', 'king'],
    'Smithy': ['goldsmith', 'weaponsmith', 'silversmith', 'blacksmith', 'farrier', 'armorer'],
    'Florist': ['florist', 'botanist'],
    'Tailor': ['tailor', 'seamstress', 'fashion designer'],
    'Butcher': ['butcher'],
    'Cobbler': ['cobbler', 'shoemaker'],
    'Brothel': ['pimp'],
    'Barber': ['barber', 'surgeon'],
    'Temple': ['high priest', 'archbishop', 'cardinal', 'bishop', 'priest', 'deacon']
  }

  for (const buildingType of lib.keys(professions)) {
    // get the professions
    console.log(buildingType)
    for (const profession of professions[buildingType]) {
      console.log(professions[buildingType])
      if (town.professions[profession] && town.professions[profession].population > 0) {
        // if there's a person with that profession, push it to the "to create" array
        console.log(profession, 'exists')
        buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
      }
    }
  }
  // don't know if it should be called cullBuildings
  // but the general idea is that we don't really want too many of the same type of building
  // but occassionally let one or two through.
  cullBuildings(town, buildingsToCreate)
}

function cullBuildings (town, buildingsToCreate) {
  const buildingsTally = {
  }
  for (const building of buildingsToCreate) {
    if (!buildingsTally[building.buildingType]) {
      buildingsTally[building.buildingType] = 1
    } else {
      buildingsTally[building.buildingType]++
    }
  }
  for (const building of buildingsToCreate) {
    const randomRoll = lib.random(100)
    const numberToBeat = 80
    // if there are less than 2 buildings, then it gets in no matter what
    // if it manages to beat the roll, it gets in
    // otherwise, too bad!
    //
    // the idea here is that since the arrays are in order of rarest to most common,
    // if an archbishop DOES spawn, it'll be guaranteed
    // TODO: make the number to beat slightly lower, and increment with each addition
    if (buildingsTally[building.buildingType] < 2) {
      console.log(`Creating ${lib.articles.output(building.buildingType)}...`)
      setup.createNewBuilding(town, building.buildingType, building.opts)
    } else if (randomRoll > numberToBeat) {
      console.log(`Creating ${lib.articles.output(building.buildingType)}...`)
      setup.createNewBuilding(town, building.buildingType, building.opts)
    } else {
      console.log(`Too many ${building.buildingType}s! Chucking one out...`)
    }
  }
}
