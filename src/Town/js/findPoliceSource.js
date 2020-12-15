// uses setup.createFaction
setup.findPoliceSource = (town) => {
  for (const factionKey of Object.keys(town.factions)) {
    const faction = town.factions[factionKey]
    const motivations = ['power', 'politics', 'influence']
    if (motivations.some(r => faction.motivation.includes(r))) {
      if (faction.roll.influence > 80) {
        setup.makePolice(town, faction)
        return
      } else if (faction.roll.influence > 50 && faction.roll.size > 70) {
        setup.makePolice(town, faction)
        return
      } else if (faction.roll.influence > 50 && faction.roll.reputation > 90 && faction.roll.size > 60) {
        setup.makePolice(town, faction)
        return
      } else if (faction.roll.influence > 70 && faction.roll.size > 50 && faction.roll.reputation > 90) {
        setup.makePolice(town, faction)
        return
      } else {
        const guards = setup.createFaction(town, {
          type: 'guards',
          isPolicing: true
        })
        town.factions[guards.key] = guards
        setup.makePolice(town, guards)
        return
      }
    }
  }
  const guards = setup.createFaction(town, {
    type: 'guards',
    isPolicing: true
  })
  town.factions[guards.key] = guards
  setup.makePolice(town, guards)
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 */
setup.findPolice = (town) => {
  for (const faction in town.factions) {
    if (town.factions[faction].isPolicing) {
      return faction
    }
  }
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @param {import("../../../lib/faction/_common").Faction} faction
 */
setup.makePolice = (town, faction) => {
  town.guard = faction
  faction.isPolicing = true
  lib.townRender(town)
}
