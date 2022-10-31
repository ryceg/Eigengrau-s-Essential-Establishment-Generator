import { setRandomFloat } from '../src/randomFloat'
import { getAgeInYears } from './getAgeInYears'

// Set random to be deterministic
setRandomFloat(() => 0.5)

describe(getAgeInYears.name, () => {
  it('returns a numerical age', () => {
    expect(typeof getAgeInYears('dragonborn', 'child')).toBe('number')
    expect(typeof getAgeInYears('half-elf', 'elderly')).toBe('number')
    expect(typeof getAgeInYears('human', 'settled adult')).toBe('number')
    expect(typeof getAgeInYears('tiefling', 'young adult')).toBe('number')
    expect(typeof getAgeInYears('ratfolk', 'child')).toBe('number')
    expect(typeof getAgeInYears('kitsune', 'settled adult')).toBe('number')
  })
})
