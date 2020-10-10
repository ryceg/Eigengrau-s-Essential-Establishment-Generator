import { keys } from '../src/utils'
import { townData } from './townData'
import { randomFloat } from '../src/randomFloat'

type Type = typeof townData.type
type Size = keyof Type
type Ideologies = Type[Size]['ideologies']

export function politicsWeightedRoll <S extends Size, I extends keyof Ideologies> (size: S, type: I) {
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
}
