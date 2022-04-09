import { fetchProfessionChance } from './fetchProfessionChance'
import { setRandomFloat } from '../src/randomFloat'
import { Town, TownProfessions } from '../town/_common'
import { NPC } from './_common'

beforeAll(() => {
  setRandomFloat(() => 0.5)
})

const getProfession = (args = {}) => ({
  professionType: 'profession',
  professionSector: 'space',
  domSub: 'sub',
  socialClass: 'low',
  population: 1,
  ...args
})

const getProfessions = (args = {}) => ({
  astronaut: { ...getProfession({ population: 5 }) },
  meadarie: { ...getProfession({ sector: 'booze', type: 'bartender', domSub: 'dom', socialClass: 'high' }) },
  ...args
})

const getTownDefaults = (args = {}) => ({
  professions: { ...getProfessions() },
  roll: { equality: 100 },
  dominantGender: 'nonbinary',
  ...args
})

const getTown = (args = {}) => ({ ...getTownDefaults(), ...args } as unknown) as Town
const getNPC = (args = {}) => ({ ...args }) as NPC

describe('fetchProfessionChance tests', () => {
  test('when npc has no properties - correctly returns a profession', () => {
    const profession = fetchProfessionChance(getTown(), getNPC())

    expect(profession).toBe('astronaut')
  })

  test.each([
    { npcProps: { socialClass: 'high' }, expected: 'meadarie' },
    { npcProps: { socialClass: 'low' }, expected: 'astronaut' }
  ])('when npc social class is $npcProps.socialClass - returns profession for that class', ({ npcProps, expected }) => {
    const profession = fetchProfessionChance(getTown(), getNPC(npcProps))

    expect(profession).toBe(expected)
  })

  test('when npc profession type is present - returns profession for that type', () => {
    const profession = fetchProfessionChance(getTown(), getNPC({ professionType: 'bartender' }))

    expect(profession).toBe('meadarie')
  })

  test('when npc profession sector is present - returns profession for that type', () => {
    const profession = fetchProfessionChance(getTown(), getNPC({ professionSector: 'booze' }))

    expect(profession).toBe('meadarie')
  })

  test('when npc profession property is present but no professions match that filter - returns profession still', () => {
    const profession = fetchProfessionChance(getTown(), getNPC({ socialClass: 'medium' }))

    expect(profession).toBe('astronaut')
  })

  test('when town breaks gender norms - does not filter available professions', () => {
    const townProps = { ...getTown(), ignoreGender: true }

    const profession = fetchProfessionChance(townProps, getNPC())

    expect(profession).toBe('astronaut')
  })

  test('when town does not break gender norms - filters professions based on dominant gender', () => {
    const townProps = { ...getTown(), ignoreGender: false }
    const npcProps = { ...getNPC(), gender: 'entity' } as NPC

    const profession = fetchProfessionChance(townProps, npcProps)

    expect(profession).toBe('astronaut')
  })

  test('when town does not break gender norms - filters professions based on dominant gender', () => {
    const townProps = { ...getTown(), ignoreGender: false }
    townProps.roll.equality = 0
    const npcProps = { ...getNPC(), gender: 'nonbinary' } as NPC

    const profession = fetchProfessionChance(townProps, npcProps)

    expect(profession).toBe('meadarie')
  })

  test('when town does not break gender norms and has profession w/o a dominant value - does not crash', () => {
    const townProps = { ...getTown(), ignoreGender: false }
    townProps.roll.equality = 0
    townProps.professions.robot = (getProfession({ domSub: null }) as unknown) as TownProfessions
    townProps.professions.meadarie.population = 300
    const npcProps = { ...getNPC(), gender: 'nonbinary' } as NPC

    const profession = fetchProfessionChance(townProps, npcProps)

    expect(profession).toBe('meadarie')
  })

  test('when population of profession is weighted highly - returns that profession', () => {
    const townProps = getTown()
    townProps.professions.robot = (getProfession({ population: 6000 }) as unknown) as TownProfessions

    const profession = fetchProfessionChance(townProps, getNPC())

    expect(profession).toBe('robot')
  })

  test('when no available professions - returns noble', () => {
    const townProps = getTown()
    townProps.professions = {}

    const profession = fetchProfessionChance(townProps, getNPC())

    expect(profession).toBe('noble')
  })

  test('when selected profession has an exclusion function - calls it', () => {
    const townProps = getTown()
    const mockFn = jest.fn(() => true)
    townProps.professions.astronaut.exclusions = mockFn

    fetchProfessionChance(townProps, getNPC())

    expect(mockFn).toHaveBeenCalled()
  })

  test('when selected profession is a dnd class - sets hasClass to be true', () => {
    const townProps = getTown()
    townProps.professions.robot = (getProfession({ type: 'dndClass', population: 6000 }) as unknown) as TownProfessions
    const npc = getNPC()

    fetchProfessionChance(townProps, npc)

    expect(npc.hasClass).toBe(true)
  })

  test('when selected profession is not a dnd class - sets hasClass to be false', () => {
    const npc = getNPC()

    fetchProfessionChance(getTown(), npc)

    expect(npc.hasClass).toBeFalsy()
  })
})
