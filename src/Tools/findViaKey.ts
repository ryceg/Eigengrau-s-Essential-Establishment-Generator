import type { Building, Deity, Faction, NPC, Road } from '@lib'

export const findIfExistsViaKey = (key: string): boolean => {
  if (State.variables.npcs[key]) return true
  if (State.variables.town.factions[key]) return true
  if (State.variables.town.roads[key]) return true
  const building = State.variables.town.buildings.find(building => {
    return building.key === key
  })
  if (building) return true
  return false
}

export const findViaKey = (key: string): Faction | Building | NPC | Road | Deity => {
  if (State.variables.npcs[key]) return State.variables.npcs[key]
  if (State.variables.town.factions[key]) return State.variables.town.factions[key]
  if (State.variables.town.roads[key]) return State.variables.town.roads[key]
  const building = State.variables.town.buildings.find(building => {
    return building.key === key
  })
  if (building) return building
  throw new Error(`Could not find an object with the key of ${key}`)
}

export const findContainerViaKey = (key: string) => {
  if (State.variables.npcs[key]) {
    return State.variables.npcs
  }
  if (State.variables.town.factions[key]) {
    return State.variables.town.factions
  }
  if (lib.findInArray(lib.getPantheonDeities(State.variables.town), 'key', key)) return lib.getPantheonDeities(State.variables.town)
  return State.variables.town.buildings.find(building => {
    return building.key === key
  })
}
