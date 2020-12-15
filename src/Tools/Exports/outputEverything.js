setup.outputEverything = () => {
  const output = {
    start: setup.exportAsHtml('Start'),
    town: setup.exportAsHtml('TownOutput'),
    buildings: {},
    factions: {},
    NPCs: {}
  }
  setup.outputBuildings(State.variables.town.buildings, output.buildings)
  setup.outputFromObject(State.variables.npcs, output.NPCs)
  setup.outputFromObject(State.variables.town.factions, output.factions)

  return output
}

/**
 * Handles both NPCs and Factions.
 * @param {Record<string, import("../../../lib/npc-generation/_common").NPC>} npcs
 */
setup.outputFromObject = (npcs, container) => {
  for (const npc of Object.values(npcs)) {
    container[npc.key] = {
      name: npc.name,
      key: npc.key,
      output: setup.exportAsHtml(npc.passageName, npc)
    }
  }
  return container
}

setup.outputBuildings = (buildings, container) => {
  for (const building of buildings) {
    container[building.key] = {
      name: building.name,
      key: building.key,
      output: setup.exportAsHtml(building.passageName, building)
    }
  }
  return container
}
