import jsonData from './magicData.data.json'

export type MagicType = keyof typeof jsonData

interface MagicProperty {
  prefix: string
  suffix: string
  effect: string
}

interface MagicData {
  type: string[]
  property: MagicProperty[]
}

export const magicData: Record<MagicType, MagicData> = jsonData
