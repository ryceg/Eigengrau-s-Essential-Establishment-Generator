import { NPC } from '../../../lib/npc-generation/_common'

interface Setup {
  createFriends(town: Town, npc: NPC): void
}

export type FriendsType = {
  probability?: number
  exclusions?(town: Town, npc: NPC): boolean
  relationship: string
  reciprocalRelationship?: string
  base: Partial<NPC>
}
