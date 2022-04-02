import { Town } from '../town/_common'
import { siege as siegeData } from './siege'

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
  const result = lib.random(lib.keys(data.result))
  lib.assign(siege, {
    causedBy: lib.random(data.causedBy),
    length: lib.random(data.length),
    event: lib.random(data.event),
    result: lib.random(data.result[result])
  })
  const townName = town.name

  const prefix = lib.random(data.name.prefixes)
  const adjective = lib.random(data.name.adjectives)
  const noun = lib.random(data.name.nouns)
  const name = lib.random([
    `${prefix} ${townName}`,
    `The ${adjective} ${noun}`
  ])
  lib.assign(siege.name, name)
  siege.readout = `The siege was ${lib.random(['caused by', 'instigated by', 'eventuated due to'])} ${siege.causedBy}, and lasted ${siege.length}, during which ${siege.event}. Eventually, ${siege.result}.`
  return siege
}
