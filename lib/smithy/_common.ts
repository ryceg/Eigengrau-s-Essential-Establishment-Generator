import { Building } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface Smithy extends Building {
  associatedNPC: NPC
  assistant?: NPC
  wordNoun: string
  passageName: string
  initPassage: string
  weapons: string[]
  mundane: string[]
  expertise: string
  size: string
}
