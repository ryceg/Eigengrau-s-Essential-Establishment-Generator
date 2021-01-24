import { Town } from '../town/_common'
import { random } from '../src/random'
import { PantheonTypes } from './religion'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, god: string) => {
  if (!pantheon) pantheon = 'greek'
  if (!god) god = pickDeity(town, pantheon)
}

const pickDeity = (town: Town, pantheon: PantheonTypes): string => {
  return random(lib.religion.pantheon[pantheon].gods).name
}
