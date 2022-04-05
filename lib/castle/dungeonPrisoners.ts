import { NPC } from '../npc-generation/_common'
import jsonData from './dungeonPrisoners.data.json'

interface DungeonPrisoner {
  reasonForPunishment?: string
  base?: Partial<NPC>
}

export const dungeonPrisoners = jsonData as DungeonPrisoner[]
