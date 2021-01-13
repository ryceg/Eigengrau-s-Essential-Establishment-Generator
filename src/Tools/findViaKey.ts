import type { Building, Faction, NPC } from '@lib'

export const findViaKey = (key: string): Faction | Building | NPC => {
  if (State.variables.npcs[key]) return State.variables.npcs[key]
  if (State.variables.town.factions[key]) return State.variables.town.factions[key]
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
  return State.variables.town.buildings.find(building => {
    return building.key === key
  })
}
