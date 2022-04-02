import { NPC } from '@lib'
import jsonData from './dungeonPrisoners.data.json'

export const dungeonPrisoners: {
  reasonForPunishment?: string
  base?: Partial<NPC>
} = jsonData
