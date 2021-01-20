/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Faction, Town } from '@lib'

/**
 * @warn Uses setup.createFaction
 */
export const findPoliceSource = (town: Town) => {
  for (const faction of Object.values(town.factions)) {
    const motivations = ['power', 'politics', 'influence']
    if (motivations.some(r => faction.motivation.includes(r))) {
      if (faction.roll.influence > 80) {
        makePolice(town, faction)
        return
      }
      if (faction.roll.influence > 50 && faction.roll.size > 70) {
        makePolice(town, faction)
        return
      }
      if (faction.roll.influence > 50 && faction.roll.size > 60 && faction.roll.reputation > 90) {
        makePolice(town, faction)
        return
      }
      if (faction.roll.influence > 70 && faction.roll.size > 50 && faction.roll.reputation > 90) {
        makePolice(town, faction)
        return
      }
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
  // @ts-ignore
  const guards = setup.createFaction(town, {
    type: 'guards',
    isPolicing: true
  })
  town.factions[guards.key] = guards
  makePolice(town, guards)
}

export const findPolice = (town: Town) => {
  return Object.values(town.factions).find(faction => faction.isPolicing)
}

const makePolice = (town: Town, faction: Faction) => {
  town.guard = faction
  faction.isPolicing = true
  lib.townRender(town)
}
