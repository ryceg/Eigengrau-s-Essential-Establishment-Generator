import { random } from '../src/random'
import { Faction } from './_common'
import { factionData } from './factionData'
import { toTitleCase } from '../src/toTitleCase'

interface Town {
  name: string
}

export function setFactionName (town: Town, faction: Faction): string {
  console.log(`Naming the ${faction.type} faction`)
  const data = factionData.types[faction.type]

  const name = toTitleCase(random([
    `The ${random(data.names.group)} of ${random(data.names.adjective)} ${random(data.names.main)}`,
    `The ${random(data.names.group)} of ${random(data.names.main)}`,
    `The ${random(data.names.adjective)} ${random(data.names.group)}`,
    `The ${random(data.names.main)} of ${town.name}`,
    `The ${town.name} ${random(data.names.main)}`,
    random(data.names.unique)
  ]))

  console.log(`Named the ${faction.type} ${name}`)
  return name
}
