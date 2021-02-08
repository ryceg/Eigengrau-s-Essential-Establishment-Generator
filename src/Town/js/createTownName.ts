import { Town, townData } from '@lib'
import { random } from '../../../lib/src/random'

export const createTownName = function (town: Town) {
  const prefix = townData.name.prefix
  const suffix = townData.name.suffix
  let name: string
  if (random(100) > 90) {
    console.log('Named a founder!')
    if (town) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const npc = setup.createDeadNPC(town, { note: 'The namesake of the town.' })
      town.founder = npc.key
      name = npc + random(suffix)
    } else {
      name = lib.raceTraits.human.lastName.random() + random(suffix)
    }
  } else {
    name = random(prefix) + random(suffix)
  }

  // linguisticDrift runs some RegEx on the names.
  const driftName = lib.linguisticDrift(name)

  replaceTownName(town, driftName)

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
