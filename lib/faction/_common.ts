import type { FactionType } from './factionData'
import { NPC } from '../npc-generation/_common'

export interface Faction {
  type: FactionType
  key: string
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
  motivation: string
  leader?: NPC
  leadershipType: 'individual' | 'group'
  leaderGroupTitle: string
  leaderGroupSize: number
  leaderBribes: string
  leaderCompetence: string
  leaderQualification: string
  stabilityCause?: string
  meetingRegularity: string
  meetingAccessibility: string
  alliesDescription: string
  allies: string[]
  rivalsDescription: string
  rivals: string[]
  resourcesDescription: string
  resources: string[]
  isPoliticalPower: boolean
  isPolicing: boolean
  misc: string
}
