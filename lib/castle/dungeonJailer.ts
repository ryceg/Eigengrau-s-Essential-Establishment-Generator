
import { NPC } from '../npc-generation/_common'
import jsonData from './dungeonJailer.data.json'

interface DungeonJailer {
  type: string
  base: Partial<NPC>
}

interface DungeonJailerData {
  types: DungeonJailer[]
  base: Partial<NPC>
}

export const dungeonJailer = jsonData as DungeonJailerData
