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
    console.log(buildingType)
    for (const profession of professions[buildingType]) {
      console.log(professions[buildingType])
      if (town.professions[profession] && town.professions[profession].population > 0) {
        console.log(profession, 'exists')
        buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
      }
    }
  }
  lib.cullBuildings(town, buildingsToCreate)
}
