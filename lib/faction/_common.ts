import type { FactionType } from './factionData'
import { NPC } from '../npc-generation/_common'

export interface Faction {
  type: FactionType
  name: string
  roll: {
    age: number
    size: number
    influence: number
    stability: number
    resources: number
    reputation: number
    meetingAccessibility?: number
    meetingRegularity?: number
  }
  age: string
  size: string
  influence: string
  stability: string
  reputation: string
  joiningFee: string
  leader?: NPC
  leadershipType: 'individual' | 'group'
  leaderGroupTitle: string
  leaderGroupSize: number
  meetingRegularity: string
  meetingAccessibility: string
  alliesDescription: string
  allies: string[]
  rivalsDescription: string
  rivals: string[]
  resourcesDescription: string
  resources: string[]
  isPolicing: boolean
  misc: string
}
