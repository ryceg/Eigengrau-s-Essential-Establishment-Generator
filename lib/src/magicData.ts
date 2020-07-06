import jsonData from './magicData.data.json'

export type MagicType = keyof typeof jsonData

interface MagicData {
  type: string[]
  prefix: string[]
  suffix: string[]
  property: string[]
}

export const magicData: Record<MagicType, MagicData> = jsonData
