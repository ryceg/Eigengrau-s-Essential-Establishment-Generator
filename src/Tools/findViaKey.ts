import type { Building, Deity, Faction, NPC, Road } from '@lib'

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
  if (lib.getPantheon(State.variables.town).gods[key]) return lib.getPantheon(State.variables.town).gods
  return State.variables.town.buildings.find(building => {
    return building.key === key
  })
}
