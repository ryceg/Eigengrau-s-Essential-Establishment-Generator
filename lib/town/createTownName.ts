import { logger } from '../logger'
import { createNamesake } from '../npc-generation/createNamesake'
import { raceTraits } from '../npc-generation/raceTraits'
import { linguisticDrift } from '../src/linguisticDrift'
import { random } from '../src/random'
import { replaceTownName } from './replaceTownName'
import { townData } from './townData'
import { Town, TownBasics } from './_common'

export function createTownName (town?: TownBasics | Town) {
  const prefix = townData.name.prefix
  const suffix = townData.name.suffix
  let name: string

  if (random(100) > 90) {
    logger.info('Naming a founder!')
    if (town?.baseDemographics) {
      const npc = createNamesake(town, { note: 'The namesake of the town.' })
      name = random([npc.firstName, npc.lastName]) + random(suffix)
    } else {
      name = random(raceTraits.human.lastName) + random(suffix)
    }
  } else {
    name = random(prefix) + random(suffix)
  }

  // linguisticDrift runs some RegEx on the names.
  const driftName = linguisticDrift(name)

  // casting as Town because replaceTownName tests for Town properties.
  if (town) {
    replaceTownName(town, driftName)
  }
  return driftName
}
