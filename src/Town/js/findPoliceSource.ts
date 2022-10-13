/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Faction, Town } from '@lib'

/**
 * @warn Uses setup.createFaction
 */
export const findPoliceSource = (town: Town) => {
  lib.logger.info('Finding police!')
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

      if (!town.factions) throw new TypeError('Town.factions is undefined!')
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

const makePolice = (town: Town, faction: Faction) => {
  lib.logger.info(`${faction.name} the ${faction.type} are now the police.`)
  town.guard = faction
  faction.isPolicing = true
  lib.townRender(town)
}
