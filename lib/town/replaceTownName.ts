import { Town } from './_common'

export function replaceTownName (town: Town, driftName = town.name): void {
  if (town.buildings) replaceBuildingNames(town, driftName)
  if (town.factions) replaceFactionNames(town, driftName)
}

/**
 * Replace existing names of buildings if they reference town name.
 */
function replaceBuildingNames (town: Town, driftName: string) {
  for (const building of town.buildings) {
    if (building.name) {
      building.name = building.name.replace(town.name, driftName)
    }
    if (building.tippyDescription) {
      building.tippyDescription = building.tippyDescription.replace(town.name, driftName)
    }
  }
}

/**
 * Replace existing names of factions if they reference town name.
 */
function replaceFactionNames (town: Town, driftName: string) {
  for (const faction of Object.values(town.factions)) {
    if (faction.name) {
      faction.name = faction.name.replace(town.name, driftName)
    }
    if (faction.tippyDescription) {
      faction.tippyDescription = faction.tippyDescription.replace(town.name, driftName)
    }
  }
}
