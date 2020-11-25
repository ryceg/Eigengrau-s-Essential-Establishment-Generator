/**
 *
 * @param {string} key
 * @returns {import("../../lib/npc-generation/_common").NPC|import("../../lib/faction/_common").Faction|Building}
 */
setup.findViaKey = (key) => {
  if (State.variables.npcs[key]) return State.variables.npcs[key]
  if (State.variables.town.factions[key]) return State.variables.town.factions[key]
  return State.variables.town.buildings.find(building => {
    if (building.key === key) return building
  })
}

setup.findContainerViaKey = (key) => {
  if (State.variables.npcs[key]) return State.variables.npcs
  if (State.variables.town.factions[key]) return State.variables.town.factions
  return State.variables.town.buildings.find(building => {
    if (building.key === key) return State.variables.town.buildings
  })
}
