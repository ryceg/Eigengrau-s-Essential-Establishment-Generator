import { createRing } from './createRing'
import { magicData, MagicType } from './magicData'
import { random } from './random'
import { assign } from './utils'

export function createMagic <T extends MagicType> (type: T | 'ring') {
  console.log(`Type: ${type}`)

  if (type === 'ring') {
    const magic = createRing()
    console.log('Ring:', magic)
    return magic
  }

  const data = magicData[type]

  const prefixRoll = random(data.property.length - 1)
  const suffixRoll = random(data.property.length - 1)

  const magic = {
    type: random(data.type),
    prefix: data.prefix[prefixRoll],
    suffix: data.suffix[suffixRoll],
    prefixProperty: data.property[prefixRoll],
    suffixProperty: data.property[suffixRoll]
  }

  assign(magic, {
    description: `${magic.prefixProperty}. ${magic.suffixProperty}`,
    name: `${magic.prefix} ${magic.type} ${magic.suffix}`
  })

  console.log(magic)
  return magic
}
