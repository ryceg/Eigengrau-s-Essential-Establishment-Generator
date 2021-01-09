/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Faction, Town, townRender } from '@lib'

// uses setup.createFaction
export const findPoliceSource = (town: Town) => {
  for (const factionKey of Object.keys(town.factions)) {
    const faction = town.factions[factionKey]
    const motivations = ['power', 'politics', 'influence']
    if (motivations.some(r => faction.motivation.includes(r))) {
      if (faction.roll.influence > 80) {
        makePolice(town, faction)
        return
      } else if (faction.roll.influence > 50 && faction.roll.size > 70) {
        makePolice(town, faction)
        return
      } else if (faction.roll.influence > 50 && faction.roll.reputation > 90 && faction.roll.size > 60) {
        makePolice(town, faction)
        return
      } else if (faction.roll.influence > 70 && faction.roll.size > 50 && faction.roll.reputation > 90) {
        makePolice(town, faction)
        return
      } else {
        // @ts-ignore
        const guards = setup.createFaction(town, {
          type: 'guards',
          isPolicing: true
        })
        town.factions[guards.key] = guards
        makePolice(town, guards)
        return
      }
    }
  }
  // @ts-ignore
  const guards = setup.createFaction(town, {
    type: 'guards',
    isPolicing: true
  })
  town.factions[guards.key] = guards
  makePolice(town, guards)
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @returns {import("../../../lib/faction/_common").Faction}
 */
export const findPolice = (town: Town) => {
  for (const faction in town.factions) {
    if (town.factions[faction].isPolicing) {
      return town.factions[faction]
    }
  }
}

export const makePolice = (town: Town, faction: Faction) => {
  // @ts-ignore
  // funding is in townRender
  town.guard = faction
  faction.isPolicing = true
  townRender(town)
}
