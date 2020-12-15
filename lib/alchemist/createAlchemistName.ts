import { random } from '../src/random'
import { toTitleCase } from '../src/toTitleCase'
import { alchemistData } from './alchemistData'

export function createAlchemistName (chemistFirstName: string) {
  const { name } = alchemistData

  return toTitleCase(random([
    `The ${random(name.adjective)} ${random(name.noun)}`,
    `${chemistFirstName} and ${random(name.adjective)}`,
    `The ${random(name.noun)} and ${random(name.adjective)}`,
    `The ${random(name.adjective)} ${random(name.rider)}`,
    `${random(name.adjective)} ${random(name.noun)}`,
    `The ${random(name.adjective)} Alchemist`
  ]))
}
