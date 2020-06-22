import { dice, fm } from '../src/dice'
import { random } from '../src/random'
import { factionData } from './factionData'
import { Faction } from './_common'

export function setFactionResources (faction: Faction) {
  console.log('assigning resources...')

  const resourcesList = ['old favours', 'chests of gold', 'gems', 'contacts', 'shinies', 'debtors', 'trade goods', 'artifacts', 'magic trinkets', 'magic weapons', 'magic scrolls', 'bits of blackmail material']
  const groupSizeModifier = (faction.roll.resources - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50)) / 2
  const resources: string[] = []

  // this is where weighting different groups happens. Needs updating with each new faction.
  resourcesList.concat(factionData.type[faction.type].resources)

  const ageModifier = getAgeModifier(faction.roll.age)

  faction.roll.resources += fm(faction.roll.resources, ageModifier)

  if (faction.roll.resources > 95) {
    faction.resourcesDescription = 'limitless'
    for (let i = 1; i <= 5; ++i) { getResources(random(-10, 15)) }
  } else if (faction.roll.resources > 90) {
    faction.resourcesDescription = 'near limitless'
    for (let i = 1; i <= 4; ++i) { getResources(random(-10, 10)) }
  } else if (faction.roll.resources > 80) {
    faction.resourcesDescription = 'extensive'
    for (let i = 1; i <= 4; ++i) { getResources(random(-15, 5)) }
  } else if (faction.roll.resources > 70) {
    faction.resourcesDescription = 'significant'
    for (let i = 1; i <= 4; ++i) { getResources(random(-20, 5)) }
  } else if (faction.roll.resources > 60) {
    faction.resourcesDescription = 'many'
    for (let i = 1; i <= 3; ++i) { getResources(random(-10, 5)) }
  } else if (faction.roll.resources > 55) {
    faction.resourcesDescription = 'decent'
    for (let i = 1; i <= 3; ++i) { getResources(random(-15, 5)) }
  } else if (faction.roll.resources > 50) {
    faction.resourcesDescription = 'average'
    for (let i = 1; i <= 3; ++i) { getResources(random(-20, 5)) }
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
    let tempGroupSize
    const groupSizeRoll = dice(2, 50) + (groupSizeModifier + bonus)
    if (groupSizeRoll >= 90) {
      tempGroupSize = 'an enormous amount of '
    } else if (groupSizeRoll >= 80) {
      tempGroupSize = 'more than enough '
    } else if (groupSizeRoll >= 70) {
      tempGroupSize = 'a large number of '
    } else if (groupSizeRoll >= 60) {
      tempGroupSize = 'quite a few '
    } else if (groupSizeRoll >= 50) {
      tempGroupSize = 'more than a couple '
    } else if (groupSizeRoll >= 40) {
      tempGroupSize = 'a couple '
    } else if (groupSizeRoll >= 30) {
      tempGroupSize = 'some '
    } else if (groupSizeRoll >= 20) {
      tempGroupSize = 'a few '
    } else if (groupSizeRoll >= 10) {
      tempGroupSize = 'a handful of '
    } else {
      tempGroupSize = 'some '
    }

    const tempGroup = random(resourcesList)
    removeFromArray(resourcesList, tempGroup)
    removeFromArray(resourcesList, tempGroup)

    const group = tempGroupSize + tempGroup
    resources.push(group)
    return resources
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

function removeFromArray<T> (array: T[], value: T) {
  array.splice(array.indexOf(value), 1)
}
