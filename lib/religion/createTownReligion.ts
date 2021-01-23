import { Town } from 'lib/town/_common'
import { PantheonTypes } from './religion'
import { random } from '../src/random'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, god: string) => {
  if (!pantheon) pantheon = 'greek'
  if (!god) god = pickGod(town, pantheon)
}

const pickGod = (town: Town, pantheon: PantheonTypes): string => {
  return random(lib.religion.pantheon[pantheon].gods).name
}
