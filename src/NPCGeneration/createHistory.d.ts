import { NPC } from '../../lib/npc-generation/_common'
import { Town } from '../../lib/town/_common'

interface Setup {
  createHistory(npc: NPC): void
}

export type FamilyUnit = {
  probability: number
  exclusions (town: Town, obj: FamilyUnitObj): boolean
  descriptor: string
}

export type FamilyUnitObj = {
  npc: NPC
  father: any
  mother: any
}
