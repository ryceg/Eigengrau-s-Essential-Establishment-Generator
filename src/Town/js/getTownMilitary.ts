import { getRolledFromTable, ThresholdTable } from '../../../lib/src/rollFromTable'
import { assert } from '../../../lib/src/utils'
import { getPolice } from '../../../lib/town/getPolice'
import { Town } from '../../../lib/town/_common'

export function getTownMilitary (town: Town): string {
  const police = getPolice(town.factions)
  const roll = town.roll.military
  const normalTable: ThresholdTable = [
    [90, `The policing carried out by ${police.name} is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. ${setup.profile(police)} control the $town.type, and are extremely well armed, with brutality being commonplace.`],
    [80, `${police.name} are very strict, with citizens being forced to carry licenses and travel permits. The law is enforced by ${setup.profile(police)}, who are well armed, and brutality is common.'`],
    [70, `There is a strong guard presence enacted by ${police.name}, with citizens seeking to live in the city being forced to undergo background checks. ${setup.profile(police)} are well armed, and brutality is not unheard of.'`],
    [60, `There's a decent guard presence, and citizens know better than to step out of line, as ${setup.profile(police)} are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear.`],
    [50, `There is a guard presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from ${setup.profile(police)}, who take care of policing matters.`],
    [40, `The guard presence in ${town.name} is somewhat smaller than one would expect for its size, perhaps due in part because law enforcement is carried out by ${setup.profile(police)}, who are seen as friends and drinking buddies, rather than horrible tyrants.`],
    [30, `The guard presence in ${town.name} is small, and policing is carried out by ${setup.profile(police)}. There is usually little need for the use of force outside of intruders.`],
    [20, `The guard presence in ${town.name} is a militia; policing is carried out by ${setup.profile(police)}, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`],
    [0, `The guard presence in ${town.name} is a militia; policing is carried out by ${setup.profile(police)}, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`]
  ]
  const policeTable: ThresholdTable = [
    [90, `The guard is extremely strict, with citizens being forced to carry licenses, identification papers, and travel permits. The local guard, ${setup.profile(police)}, is extremely well armed, and brutality is commonplace.`],
    [80, `The guards are very strict, with citizens being forced to carry licenses and travel permits. The local guard, ${setup.profile(police)}, is well armed, and brutality is common.`],
    [70, `There is a strong policing presence, with citizens seeking to live in the city being forced to undergo background checks. The local guard, ${setup.profile(police)}, is well armed, and brutality is not unheard of.`],
    [60, `There's a decent policing presence, and citizens know better than to step out of line, as ${setup.profile(police)} are armed. Despite this, brutality is rare, and citizens with nothing to hide have nothing to fear.`],
    [50, `There is a policing presence in ${town.name}, but it is more for outside intruders rather than the population inside. Citizens are expected to follow the laws, and those that do have nothing to fear from ${setup.profile(police)}.`],
    [30, `The policing presence in ${town.name} is more of a militia; some of the members of ${setup.profile(police)} are part time, and there is little need for the use of force outside of intruders.`],
    [20, `The policing presence in ${town.name} is a militia; most of the guards of ${setup.profile(police)} are part time, and there is little need for the use of force. Citizens act with honesty, and have no need for 24/7 guards.`],
    [0, `The policing presence in ${town.name} is a militia; the guards of ${setup.profile(police)} are part time, and there is rarely any need for the use of force. Law breakers are judged by community tribunals.`]
  ]
  const result = getRolledFromTable(police.type === 'guards' ? policeTable : normalTable, roll)
  assert(typeof result === 'string')
  return result
}
