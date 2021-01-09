/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ProfessionNames, Town } from '@lib'

// uses setup.createNewBuilding
export const createStartBuildings = (town: Town) => {
  console.log('Creating starting buildings...', town)

  const buildingsToCreate = [
    { buildingType: 'Town Square' },
    { buildingType: 'Market' },
    { buildingType: 'Tavern' }
  ]

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingsToCreate.push({ buildingType: 'Docks' })
  }

  const professions: Record<string, ProfessionNames[]> = {
    'Tavern': ['bartender'],
    'Alchemist': ['alchemist', 'wizard'],
    'Bakery': ['pastry chef', 'baker'],
    'General Store': ['shopkeep'],
    'Graveyard': ['gravedigger', 'sexton'],
    'Dungeon': ['jailer', 'bailiff'],
    'Castle': ['castellan', 'king'],
    'Guardhouse': ['city watch', 'captain', 'bailiff', 'guard'],
    'Smithy': ['weaponsmith', 'blacksmith', 'farrier', 'armorer'],
    'Florist': ['florist', 'botanist'],
    'Jeweller': ['lapidary', 'goldsmith', 'silversmith', 'jeweller'],
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
        // @ts-ignore
        buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
        if (town.professions[profession].population > 5) {
          // there's a LOT of this profession = a second
          // @ts-ignore
          buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
        }
      }
    }
  }

  for (const building of lib.cullBuildings(buildingsToCreate)) {
    console.log(`Creating ${lib.articles.output(building.buildingType)}...`)
    // @ts-ignore
    setup.createNewBuilding(town, building.buildingType, building.opts)
  }
}
