import { Building, NPC } from '@lib'

export interface Smithy extends Building {
  associatedNPC: NPC
  assistant?: NPC
  weapons: string[]
  mundane: string[]
  expertise: string
  size: string
}
