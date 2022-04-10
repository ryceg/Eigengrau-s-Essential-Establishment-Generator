import { logger } from '../logger'
import { defineRollDataGetter } from '../src/defineRollDataGetter'
import { dice, fm } from '../src/dice'
import { random } from '../src/random'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { repeat, sumWeights, keys, clamp } from '../src/utils'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { factionData, FactionResource } from './factionData'
import { factionRollData } from './factionRollData'
import { Faction } from './_common'

export function setFactionResources (faction: Faction): void {
  logger.info('Assigning faction resources...')
  defineRollDataGetter(faction, factionRollData.resources.rolls, 'resourcesDescription', 'resources')
  faction.resources.list = []
  const availableResources = {} as WeightRecord<FactionResource>
  for (const resource of keys(factionData.resources.types)) {
    if (factionData.resources.types[resource].isDefault) {
      availableResources[resource] = factionData.resources.types[resource].probability || 10
    }
  }
  sumWeights(availableResources, factionData.types[faction.type].resources)

  const ageModifier = getAgeModifier(faction.roll.age)
  faction.roll.resources += fm(faction.roll.resources, ageModifier)

  if (faction.roll.resources > 95) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 20))
    repeat(() => getResources(faction, availableResources, random(-10, 15)), 3)
  } else if (faction.roll.resources > 90) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 10))
    repeat(() => getResources(faction, availableResources, random(-10, 5)), 2)
  } else if (faction.roll.resources > 80) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 10))
    repeat(() => getResources(faction, availableResources, random(-15, 5)), 2)
  } else if (faction.roll.resources > 70) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 10))
    repeat(() => getResources(faction, availableResources, random(-20, 5)), 2)
  } else if (faction.roll.resources > 60) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 10))
    repeat(() => getResources(faction, availableResources, random(-10, 5)), 1)
  } else if (faction.roll.resources > 55) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(2, 10))
    repeat(() => getResources(faction, availableResources, random(-15, 5)), 1)
  } else if (faction.roll.resources > 50) {
    getResources(faction, availableResources, dice(2, 20))
    getResources(faction, availableResources, dice(1, 10))
    repeat(() => getResources(faction, availableResources, random(-20, 5)), 1)
  } else if (faction.roll.resources > 45) {
    getResources(faction, availableResources, random(10, 15))
    getResources(faction, availableResources, random(-20, 5))
    getResources(faction, availableResources, random(-20, -5))
  } else if (faction.roll.resources > 40) {
    getResources(faction, availableResources, random(5, 15))
    getResources(faction, availableResources, random(-20, 0))
  } else if (faction.roll.resources > 30) {
    getResources(faction, availableResources, random(5, 10))
    getResources(faction, availableResources, random(-20, 0))
  } else if (faction.roll.resources > 20) {
    getResources(faction, availableResources, random(5, 15))
    getResources(faction, availableResources, random(-20, 0))
  } else if (faction.roll.resources > 10) {
    getResources(faction, availableResources, random(-15, 5))
    getResources(faction, availableResources, random(-20, 0))
  } else if (faction.roll.resources <= 5) {
    getResources(faction, availableResources, random(-20, -10))
    getResources(faction, availableResources, random(-30, -10))
  } else {
    getResources(faction, availableResources, random(-20, 0))
  }
}

function getResources (faction: Faction, availableResources: WeightRecord<FactionResource>, bonus: number) {
  const factionSizeModifier = (faction.roll.size - 30) / 2
  const sizeRoll: number = clamp(fm(dice(2, 30), clamp(factionSizeModifier + bonus)))
  const resource: FactionResource = getResourceName(availableResources)
  /** we need to make sure that we don't generate multiple of the same type */
  delete availableResources[resource]
  const form = factionData.resources.types[resource].form
  const resourceSize = getResourceSize(factionData.resources.forms[form].rolls, sizeRoll)
  faction.resources.list.push({
    roll: sizeRoll,
    type: resource,
    amount: resourceSize
  })
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

function getResourceSize (table: ThresholdTable, roll: number): string {
  return getRolledFromTable(table, roll) ?? 'some'
}

function getResourceName (container: WeightRecord<FactionResource>): FactionResource {
  const resource = weightRandom(container)
  return resource
}
