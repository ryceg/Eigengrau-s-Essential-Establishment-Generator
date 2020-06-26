import { fm } from '../src/dice'
import { Faction } from './_common'

export function setFactionReputation (faction: Faction) {
  console.log('assigning a reputation...')

  const ageModifier = getAgeModifier(faction.age)

  faction.roll.reputation += fm(faction.roll.reputation, ageModifier)

  faction.reputation = getFactionReputation(faction.roll.reputation)
}

function getAgeModifier (age: string): number {
  switch (age) {
    case 'ancient':
      return 30
    case 'extremely old':
      return 25
    case 'very old':
      return 20
    case 'quite old':
      return 15
    case 'well established':
      return 10
    case 'somewhat old':
      return 5
    case 'relatively new':
      return -5
    case 'recently established':
      return -10
    case 'new':
      return -15
    case 'quite new':
      return -20
    case 'very new':
      return -25
    case 'brand new':
      return -25
    case 'unknown':
      return 15
  }
  return 0
}

function getFactionReputation (roll: number) {
  if (roll > 95) return 'excellent'
  if (roll > 90) return 'very good'
  if (roll > 80) return 'quite good'
  if (roll > 70) return 'good'
  if (roll > 60) return 'above average'
  if (roll > 55) return 'slightly above average'
  if (roll > 50) return 'average'
  if (roll > 45) return 'slightly below average'
  if (roll > 40) return 'poor'
  if (roll > 30) return 'quite poor'
  if (roll > 20) return 'very poor'
  if (roll > 10) return 'extremely poor'
  return 'abysmal'
}
