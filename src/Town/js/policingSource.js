setup.policingSource = (town) => {
  for (const factionKey of Object.keys(town.factions)) {
    const faction = town.factions[factionKey]
    const motivations = ['power', 'politics', 'influence']
    if (motivations.some(r => faction.motivation.includes(r))) {
      if (faction.roll.influence > 80) {
        setup.makePolice(town, faction)
      } else if (faction.roll.influence > 50 && faction.roll.size > 70) {
        setup.makePolice(town, faction)
      } else if (faction.roll.influence > 50 && faction.roll.reputation > 90 && faction.roll.size > 60) {
        setup.makePolice(town, faction)
      } else if (faction.roll.influence > 70 && faction.roll.size > 50 && faction.roll.reputation > 90) {
        setup.makePolice(town, faction)
      } else {
        const guards = setup.createFaction(town, {
          type: 'guards',
          isPolicing: true
        })
        town.factions[guards.key] = guards
        setup.makePolice(town, guards)
      }
    } else {
      const guards = setup.createFaction(town, {
        type: 'guards',
        isPolicing: true
      })
      town.factions[guards.key] = guards
      setup.makePolice(town, guards)
    }
  }
}

setup.makePolice = (town, faction) => {
  town.guard = faction
  faction.isPolicing = true
  lib.townRender(town)
}
