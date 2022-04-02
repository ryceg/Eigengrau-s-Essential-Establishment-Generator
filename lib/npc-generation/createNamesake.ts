import { fetchGender } from '../../lib/npc-generation/genderData'
import { Town } from '../town/_common'
import { createName } from './createName'
import { fetchRace } from './fetchRace'
import { Namesake } from './_common'

export const createNamesake = (town: Town, base?: Partial<Namesake>) => {
  const race = base?.race || fetchRace(town)
  const gender = base?.gender || fetchGender(town)
  const namesake = Object.assign({
    // @TODO Establish a more concrete hierarchy of Namesake > NPC
    key: lib.getUUID(),
    race,
    gender,
    firstName: createName({ race, firstOrLast: 'firstName' }),
    lastName: createName({ race, firstOrLast: 'lastName' })
  }, base)
  return namesake as Namesake
}
