export const buildingTypes = {
  'Alchemist': 'alchemist',
  'Bakery': 'bakery',
  'Barber': 'barber',
  'Brothel': 'brothel',
  'Butcher': 'butcher',
  'Castle': 'castle',
  'Cobbler': 'cobbler',
  'Confectionery': 'confectionery',
  'Docks': 'docks',
  'Dungeon': 'dungeon',
  'Fletcher': 'fletcher',
  'Florist': 'florist',
  'General Store': 'generalStore',
  'Graveyard': 'graveyard',
  'Guardhouse': 'guardhouse',
  'Jeweller': 'jeweller',
  'Market': 'market',
  'Smithy': 'smithy',
  'Tailor': 'tailor',
  'Tavern': 'tavern',
  'Temple': 'temple',
  'Town Square': 'townSquare'
}
export type BuildingTypes = keyof typeof buildingTypes

// export const createNewBuilding = (town: Town, type: BuildingTypes, opts: any) => {
//   // this is necessary to point the function towards where the building creation function is kept.
//   // unfortunately, it currently needs to be updated manually with each new building.

//   const newBuilding = setup.createBuildingKeys[lib.toTitleCase(type) as BuildingTypes](town, { ...opts, isHighlighted: true }) as Building
//   console.log(town)
//   if (Array.isArray(town.buildings)) town.buildings.push(newBuilding)
//   return newBuilding
// }
