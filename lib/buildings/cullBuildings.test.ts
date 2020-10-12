import { setRandom } from '../src/random'
import { cullBuildings } from './cullBuildings'

describe('cullBuildings', () => {
  it('returns an iteratable object', () => {
    expect(Array.from(cullBuildings([]))).toHaveLength(0)
  })

  it('returns the correct number of iterations', () => {
    const createResult = () => cullBuildings([
      { buildingType: 'Tavern' },
      { buildingType: 'Smithy' },
      { buildingType: 'Bakery' },
      { buildingType: 'Bakery' },
      { buildingType: 'Bakery' },
      { buildingType: 'Bakery' }
    ])

    setRandom((_, max: number) => max)
    expect(Array.from(createResult())).toHaveLength(6)

    setRandom((min: number) => min)
    expect(Array.from(createResult())).toHaveLength(2)
  })
})
