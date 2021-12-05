import { keys } from '../src/utils'
import { townData } from './townData'
import { randomFloat } from '../src/randomFloat'
import { TownType } from '@lib'

type Type = typeof townData.type
type Ideologies = Type[TownType]['ideologies']

export function politicsWeightedRoll <S extends TownType, I extends keyof Ideologies> (size: S, type: I) {
  const townType = townData.type[size]
  const ideologyType = townType.ideologies[type]

  const pool = keys(ideologyType)

  const getValue = (key: keyof typeof ideologyType) => {
    return ideologyType[key] as unknown as number
  }

  const totalWeight = pool.reduce((total, key) => {
    return total + getValue(key)
  }, 0)

  let random = Math.floor(randomFloat(1) * totalWeight)

  for (const key of pool) {
    random -= getValue(key)
    if (random < 0) {
      return key
    }
  }
  return pool[0]
}
