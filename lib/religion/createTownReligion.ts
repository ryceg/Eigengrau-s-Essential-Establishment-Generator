import { Town } from 'lib/town/_common'
import { PantheonTypes } from './religion'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, god: string) => {
  if (!pantheon) pantheon = 'greek'
  if (!god) god = 'idk'
}

// const pickMajorGod = (town: Town, pantheon: PantheonTypes): string => {
//   return lib.religion
// }
