import { Building, Deity, Faction, NPC } from '@lib'

interface Container {
  start: string
  town: string
  buildings: Record<string, Data>
  factions: Record<string, Data>
  NPCs: Record<string, Data>
  pantheon: Record<string, Data>
}

interface Data {
  name: string
  key: string
  output: string | Data
}

export const outputEverything = () => {
  const output: Container = {
    start: setup.exportAsHtml('Start'),
    town: setup.exportAsHtml('TownOutput'),
    buildings: {},
    factions: {},
    NPCs: {},
    pantheon: {}
  }
  outputFromArray(State.variables.town.buildings, output.buildings)
  outputFromObject(State.variables.npcs, output.NPCs)
  outputFromObject(State.variables.town.factions, output.factions)
  outputFromArray(lib.getPantheon(State.variables.town, State.metadata.get('pantheon')).gods, output.pantheon)

  return output
}

const constructObject = (
  object: NPC | Faction | Building | Deity,
  output: string | Data = setup.exportAsHtml(object.passageName, object),
  name: string = object.name || object.passageName,
  key: string = object.key || lib.getUUID()) => {
  return {
    name,
    key,
    output
  }
}

const outputFromObject = (group: Record<string, NPC | Faction>, obj: Record<string, Data>) => {
  for (const instance of Object.values(group)) {
    obj[instance.key] = constructObject(instance)
  }
  return obj
}

const outputFromArray = (group: Building[] | Deity[], obj: Record<string, Data>) => {
  for (const instance of group) {
    obj[instance.key] = constructObject(instance)
  }
  return obj
}
