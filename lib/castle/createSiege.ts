import { Town } from '../town/_common'
import { siege as siegeData } from './siege'
import { random } from '../src/random'
import { assign, keys } from '../src/utils'
interface Siege {
  name: string
  readout: string
  causedBy: string
  length: string
  event: string
  result: string
}

export function createSiege (town: Town, siege?: Siege): Siege {
  const data = siegeData
  const result = random(keys(data.result))
  assign(siege, {
    causedBy: random(data.causedBy),
    length: random(data.length),
    event: random(data.event),
    result: random(data.result[result])
  })
  const townName = town.name

  const prefix = random(data.name.prefixes)
  const adjective = random(data.name.adjectives)
  const noun = random(data.name.nouns)
  const name = random([
    `${prefix} ${townName}`,
    `The ${adjective} ${noun}`
  ])
  assign(siege.name, name)
  siege.readout = `The siege was ${random(['caused by', 'instigated by', 'eventuated due to'])} ${siege.causedBy}, and lasted ${siege.length}, during which ${siege.event}. Eventually, ${siege.result}.`
  return siege
}
