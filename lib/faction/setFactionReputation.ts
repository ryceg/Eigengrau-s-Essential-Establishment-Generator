import { fm } from '../src/dice'
import { factionData } from './factionData'
import { Faction } from './_common'

export function setFactionReputation (faction: Faction): void {
  console.log('assigning a reputation...')

  const ageModifier = getAgeModifier(faction)

  faction.roll.reputation += fm(faction.roll.reputation, ageModifier)

  faction.reputation = getFactionReputation(faction.roll.reputation)
}

function getAgeModifier (faction: Faction): number {
  /**
   * @description [age, result]
   */
  const ages = [
    [95, 30],
    [90, 28],
    [80, 25],
    [70, 20],
    [60, 10],
    [55, 5],
    [50, 1],
    [45, -5],
    [40, -10],
    [30, -15],
    [20, -20],
    [10, -25],
    [5, -30],
    [0, -30]
  ]
  for (const [num, description] of ages) {
    if (faction.roll.age > num) {
      return description
    }
  }
  return 0
}

function getFactionReputation (roll: number): string {
  for (const [num, description] of factionData.rollData.reputation.rolls) {
    if (roll > num) {
      return description as string
    }
  }
  return 'average'
}
