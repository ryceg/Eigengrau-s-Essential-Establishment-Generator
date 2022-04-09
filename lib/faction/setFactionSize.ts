import { logger } from '../logger'
import { Faction } from './_common'

interface Town {
  population: number
}

export function setFactionSize (town: Town, faction: Faction): void {
  logger.info('Calculating faction size...')

  faction.roll.size += getAgeModifier(faction.roll.age)
  faction.roll.size += getPopulationModifier(town.population)

  faction.size = getFactionSize(faction.roll.size)
}

function getAgeModifier (roll: number): number {
  if (roll > 95) return 20
  if (roll > 90) return 15
  if (roll > 80) return 12
  if (roll > 70) return 10
  if (roll > 60) return 5
  if (roll > 55) return 2
  if (roll > 50) return 1
  if (roll > 45) return -2
  if (roll > 40) return -5
  if (roll > 30) return -10
  if (roll > 20) return -15
  if (roll > 10) return -20
  return -25
}

function getPopulationModifier (population: number): number {
  if (population > 6000) return 25
  if (population > 5800) return 22
  if (population > 5400) return 20
  if (population > 5000) return 15
  if (population > 4500) return 10
  if (population > 4000) return 5
  if (population > 3500) return 5
  if (population > 3000) return 5
  if (population > 2500) return 5
  if (population > 2000) return -5
  if (population > 1500) return -15
  if (population > 1000) return -25
  return -30
}

function getFactionSize (roll: number): string {
  if (roll > 95) return 'huge'
  if (roll > 90) return 'very large'
  if (roll > 80) return 'quite large'
  if (roll > 70) return 'large'
  if (roll > 60) return 'above average sized'
  if (roll > 55) return 'slightly above average sized'
  if (roll > 50) return 'average sized'
  if (roll > 45) return 'slightly below average sized'
  if (roll > 40) return 'somewhat small'
  if (roll > 30) return 'quite small'
  if (roll > 20) return 'very small'
  if (roll > 10) return 'tiny'
  return 'miniscule'
}
