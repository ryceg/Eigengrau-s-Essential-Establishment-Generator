import { logger } from '../logger'
import { random } from '../src/random'
import { backgroundTraits } from './backgroundTraits'
import { NPC } from './_common'

export function createBackground (npc: NPC) {
  logger.info(`Assigning background traits to ${npc.name}...`)

  let backgroundOrigin: string
  let bond: string
  let ideal: string

  const currentBackgroundTraits = backgroundTraits[npc.background]
  const defaultBackgroundTraits = backgroundTraits.commoner

  if (typeof currentBackgroundTraits !== 'undefined') {
    backgroundOrigin = currentBackgroundTraits.backgroundOrigin?.length
      ? random(currentBackgroundTraits.backgroundOrigin)
      : random(defaultBackgroundTraits.backgroundOrigin)

    bond = currentBackgroundTraits.bond?.length
      ? random(currentBackgroundTraits.bond)
      : random(defaultBackgroundTraits.bond)

    ideal = currentBackgroundTraits.ideal?.length
      ? random(currentBackgroundTraits.ideal)
      : random(defaultBackgroundTraits.ideal)
  } else {
    logger.error(`${npc.name}'s background of ${npc.background} was not valid.`)
    npc.background = 'commoner'

    backgroundOrigin = random(backgroundTraits.commoner.backgroundOrigin)
    bond = random(backgroundTraits.commoner.bond)
    ideal = random(backgroundTraits.commoner.ideal)
  }

  npc.backgroundOrigin ||= backgroundOrigin
  npc.bond ||= bond
  npc.ideal ||= ideal
}
