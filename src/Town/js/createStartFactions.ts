/* eslint-disable @typescript-eslint/ban-ts-comment */
// uses setup.createFaction

import { Town, townData } from '@lib'

// already has a definition
export const createStartFactions = (town: Town) => {
  console.log('Creating starting factions...')
  // const factions = ['merchants', 'merchants', 'merchants', 'thieves', 'nobles', 'wizards']
  const factionsNumber = getFactionsNumber(town)

  for (let i = 0; i <= factionsNumber; i++) {
    // @ts-ignore
    const tempFaction = setup.createFaction(town)
    town.factions[tempFaction.key] = tempFaction
  }

  console.log('Finished creating start factions!')
}

/**
 *
 * @param {Town} town
 */
function getFactionsNumber (town: Town) {
  const factionsNumber = townData.type[town.type].startFactionsNumber()
  return factionsNumber + getFactionNumberWealthModifier(town.roll.wealth)
}

/**
 * @param {number} wealthRoll
 */
function getFactionNumberWealthModifier (wealthRoll: number) {
  if (wealthRoll > 90) return 2
  if (wealthRoll > 70) return 1
  return 0
}
