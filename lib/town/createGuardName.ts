import { random } from '../src/random'
import { guardData } from '../src/guardData'

export function createGuardName (townName: string) {
  const { noun, group, adjective, alternateAdjective } = guardData.name

  return random([
    `The ${group.random()} of ${townName}`,
    `The ${townName} ${group.random()}`,
    `The ${group.random()} of ${alternateAdjective.random()}`,
    `The ${adjective.random()} ${group.random()}`,
    `The ${adjective.random()} ${noun.random()}`,
    `The ${adjective.random()} ${noun.random()} of ${alternateAdjective.random()}`,
    `The ${adjective.random()} ${noun.random()} of ${townName}`,
    `The ${group.random()} ${noun.random()} of ${townName}`
  ])
}
