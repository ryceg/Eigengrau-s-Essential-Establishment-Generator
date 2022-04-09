import { logger } from '../logger'
import { createRing } from './createRing'
import { magicData, MagicType } from './magicData'
import { random } from './random'
import { assign } from './utils'

export function createMagic <T extends MagicType> (type: T | 'ring'): MagicItem {
  logger.info(`Type: ${type}`)

  if (type === 'ring') {
    const magic = createRing()
    logger.info('Ring:', magic)
    return magic
  }

  const data = magicData[type]

  const prefixRoll = random(data.property.length - 1)
  const suffixRoll = random(data.property.length - 1)

  const magic = {
    type: random(data.type),
    prefix: data.property[prefixRoll].prefix,
    suffix: data.property[suffixRoll].suffix,
    prefixProperty: data.property[prefixRoll].effect,
    suffixProperty: data.property[suffixRoll].effect
  }

  assign(magic, {
    description: `${magic.prefixProperty} ${magic.suffixProperty}`,
    name: `${magic.prefix} ${magic.type} ${magic.suffix}`
  })

  logger.info(magic)
  return magic
}

export interface MagicItem {
  type: string
  description: string
  name: string
  prefix?: string
  suffix?: string
  prefixProperty?: string
  suffixProperty?: string
}
