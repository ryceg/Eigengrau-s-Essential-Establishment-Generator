import { Town, TownBasics, townData } from '@lib'

export const createTownName = function (town: TownBasics | Town) {
  const prefix = townData.name.prefix
  const suffix = townData.name.suffix
  let name: string
  if (lib.random(100) > 90) {
    console.log('Named a founder!')
    if (town) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const npc = lib.createNamesake(town, { note: 'The namesake of the town.' })

      name = lib.random([npc.firstName, npc.lastName]) + lib.random(suffix)
    } else {
      name = lib.random(lib.raceTraits.human.lastName) + lib.random(suffix)
    }
  } else {
    name = lib.random(prefix) + lib.random(suffix)
  }

  // linguisticDrift runs some RegEx on the names.
  const driftName = lib.linguisticDrift(name)

  // casting as Town because replaceTownName tests for Town properties.
  replaceTownName(town as Town, driftName)

  return driftName
}

const replaceTownName = (town: Town, driftName: string) => {
  if (town.buildings) replaceBuildingNames(town, driftName)
  if (town.factions) replaceFactionNames(town, driftName)
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
