import { Building, Deity, Faction, NPC } from '@lib'

interface Container {
  [key: string]: Record<string, Data> | string
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
    buildings: outputFromArray(State.variables.town.buildings),
    factions: outputFromObject(State.variables.town.factions),
    NPCs: outputFromObject(State.variables.npcs),
    pantheon: outputFromArray(lib.getPantheon(State.variables.town, State.metadata.get('pantheon')).gods)
  }
  return output
}

const constructObject = (
  object: NPC | Faction | Building | Deity,
  output: string | Data = setup.exportAsHtml(object.passageName, object),
  name: string = object.name || object.passageName,
  key: string = object.key || lib.getUUID()): Data => {
  return {
    name,
    key,
    output
  }
}

const outputFromObject = (group: Record<string, NPC | Faction>) => {
  const obj: Record<string, Data> = {}
  for (const instance of Object.values(group)) {
    obj[instance.key] = constructObject(instance)
  }
  return obj
}

const outputFromArray = (group: Building[] | Deity[]) => {
  const obj: Record<string, Data> = {}
  for (const instance of group) {
    obj[instance.key] = constructObject(instance)
  }
  return obj
}
