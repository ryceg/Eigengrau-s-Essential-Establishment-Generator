import { Town } from '@lib'

export const replaceTownName = (town: Town, driftName = town.name) => {
  if (town?.buildings) replaceBuildingNames(town, driftName)
  if (town?.factions) replaceFactionNames(town, driftName)
}

const replaceFactionNames = (town: Town, driftName: string) => {
  console.log(town.name, driftName)
  // Replace existing names of factions if they reference town name
  for (const faction of Object.values(town.factions)) {
    town.factions[faction.key].name = town.factions[
      faction.key
    ].name.replace(town.name, driftName)
    town.factions[faction.key].tippyDescription = town.factions[
      faction.key
    ].tippyDescription.replace(town.name, driftName)
  }
}

const replaceBuildingNames = (town: Town, driftName: string) => {
  console.log(town.name, driftName)
  // Replace existing names of buildings if they reference town name
  town.buildings.forEach((building) => {
    if (building.name) { building.name = building.name.replace(town.name, driftName) }
    if (building.tippyDescription) {
      building.tippyDescription = building.tippyDescription.replace(
        town.name,
        driftName
      )
    }
  })
}
