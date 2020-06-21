import { factionData } from './factionData'
import { random } from '../src/random'
import { Faction } from './_common'

interface Town {
  name: string
}

export function setFactionName (town: Town, faction: Faction) {
  console.log(`Naming the ${faction.type} faction`)
  const data = factionData.type[faction.type]

  const name = random([
    `The ${random(data.group)} of ${random(data.adjective)} ${random(data.main)}`,
    `The ${random(data.group)} of ${random(data.main)}`,
    `The ${random(data.adjective)} ${random(data.group)}`,
    `The ${random(data.main)} of ${town.name}`,
    `The ${town.name} ${random(data.main)}`,
    random(data.unique)
  ])

  console.log(`Named the ${faction.type} ${name}`)
  faction.name = name
}
