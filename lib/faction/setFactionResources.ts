import { dice, fm } from '../src/dice'
import { random } from '../src/random'
import { ThresholdTable } from '../src/rollFromTable'
import { repeat, sumWeights } from '../src/utils'
import { validateWeight, weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { factionData } from './factionData'
import { Faction } from './_common'

export function setFactionResources (faction: Faction): void {
  console.log('assigning resources...')

  const defaultWeightedResources: WeightRecord<string> = {
    'artifacts': 1,
    'bits of blackmail material': 1,
    'chests of gold': 1,
    'contacts': 1,
    'debtors': 1,
    'gems': 1,
    'magic scrolls': 1,
    'magic trinkets': 1,
    'magic weapons': 1,
    'old favours': 1,
    'shinies': 1,
    'trade goods': 1
  }

  const groupSizeModifier = (faction.roll.resources - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50)) / 2
  const resources: string[] = []

  // this is where weighting different groups happens. Needs updating with each new faction.
  const weightedResources = sumWeights(defaultWeightedResources, factionData.types[faction.type].resources)

  const ageModifier = getAgeModifier(faction.roll.age)

  faction.roll.resources += fm(faction.roll.resources, ageModifier)

  if (faction.roll.resources > 95) {
    faction.resourcesDescription = 'limitless'
    repeat(() => getResources(random(-10, 15)), 5)
  } else if (faction.roll.resources > 90) {
    faction.resourcesDescription = 'near limitless'
    repeat(() => getResources(random(-10, 10)), 4)
  } else if (faction.roll.resources > 80) {
    faction.resourcesDescription = 'extensive'
    repeat(() => getResources(random(-15, 5)), 4)
  } else if (faction.roll.resources > 70) {
    faction.resourcesDescription = 'significant'
    repeat(() => getResources(random(-20, 5)), 4)
  } else if (faction.roll.resources > 60) {
    faction.resourcesDescription = 'many'
    repeat(() => getResources(random(-10, 5)), 3)
  } else if (faction.roll.resources > 55) {
    faction.resourcesDescription = 'decent'
    repeat(() => getResources(random(-15, 5)), 3)
  } else if (faction.roll.resources > 50) {
    faction.resourcesDescription = 'average'
    repeat(() => getResources(random(-20, 5)), 3)
  } else if (faction.roll.resources > 45) {
    faction.resourcesDescription = 'slightly below average'
    getResources(random(10, 15))
    getResources(random(-20, 5))
    getResources(random(-20, -5))
  } else if (faction.roll.resources > 40) {
    faction.resourcesDescription = 'somewhat limited'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 30) {
    faction.resourcesDescription = 'limited'
    getResources(random(5, 10))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 20) {
    faction.resourcesDescription = 'quite poor'
    getResources(random(5, 15))
    getResources(random(-20, 0))
  } else if (faction.roll.resources > 10) {
    faction.resourcesDescription = 'extremely poor'
    getResources(random(-15, 5))
    getResources(random(-20, 0))
  } else if (faction.roll.resources <= 5) {
    faction.resourcesDescription = 'destitute'
    getResources(random(-20, -10))
    getResources(random(-30, -10))
  } else {
    faction.resourcesDescription = 'average'
  }

  function getResources (bonus: number) {
    const groupSizeRoll = dice(2, 50) + (groupSizeModifier + bonus)
    const tempGroupSize = getTempGroupSize(groupSizeRoll)

    const tempGroup = weightRandom(weightedResources)

    weightedResources[tempGroup] = validateWeight(weightedResources[tempGroup]) - 1

    resources.push(tempGroupSize + tempGroup)
  }

  faction.resources = resources
}

function getAgeModifier (roll: number): number {
  if (roll > 95) return 15
  if (roll > 90) return 10
  if (roll > 80) return 8
  if (roll > 70) return 6
  if (roll > 60) return 4
  if (roll > 55) return 2
  if (roll > 50) return 1
  if (roll > 45) return -1
  if (roll > 40) return -2
  if (roll > 30) return -4
  if (roll > 20) return -6
  if (roll > 10) return -8
  return -10
}

function getTempGroupSize (roll: number): string {
  const resourceSize: ThresholdTable = [
    [90, 'an enormous amount of '],
    [80, 'more than enough '],
    [70, 'a large number of '],
    [60, 'quite a few '],
    [50, 'more than a couple '],
    [40, 'a couple '],
    [30, 'some '],
    [20, 'a few '],
    [10, 'a handful of ']
  ]
  let result
  for (const [num, description] of resourceSize) {
    if (roll > num) {
      result = description
    }
  }
  return result || 'some '
}
