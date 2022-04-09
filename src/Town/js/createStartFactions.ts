// uses setup.createFaction

import { Town } from '@lib'
import { createFaction } from '../../Factions/createFaction'

// already has a definition
export const createStartFactions = (town: Town) => {
  lib.logger.info('Creating starting factions...')
  // const factions = ['merchants', 'merchants', 'merchants', 'thieves', 'nobles', 'wizards']
  const factionsNumber = getFactionsNumber(town)

  for (let i = 0; i <= factionsNumber; i++) {
    const tempFaction = createFaction(town)
    town.factions[tempFaction.key] = tempFaction
  }
}

function getFactionsNumber (town: Town) {
  const factionsNumber = lib.townData.type[town.type].startFactionsNumber()
  return factionsNumber + getFactionNumberWealthModifier(town.roll.wealth)
}

function getFactionNumberWealthModifier (wealthRoll: number) {
  if (wealthRoll > 90) return 2
  if (wealthRoll > 70) return 1
  return 0
}
