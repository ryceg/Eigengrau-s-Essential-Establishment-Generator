import type { FactionType } from './factionData'
import { NPC } from '../npc-generation/_common'

export interface Faction {
  type: FactionType
  objectType: 'faction'
  passageName: string
  key: string
  name: string
  wordNoun: string
  roll: {
    age: number
    size: number
    influence: number
    stability: number
    resources: number
    reputation: number
    joiningFee: number
    meetingAccessibility: number
    meetingRegularity: number
    leaderCompetence: number
    leaderBribes: number
  }
  age: string
  size: string
  influence: string
  stability: string
  reputation: string
  motivation: string
  leader?: NPC
  leadershipType: 'individual' | 'group'
  leaderGroupTitle: string
  leaderGroupSize: number
  leaderBribes: string
  leaderCompetence: string
  leaderQualification: string
  stabilityCause?: string
  joiningRequirement: string
  joiningInitiation: string
  joiningFee: string
  meetingRegularity: string
  meetingAccessibility: string
  alliesDescription: string
  allies: string[]
  rivalsDescription: string
  rivals: string[]
  resourcesDescription: string
  resources: {
    description: string
    list: {
      roll: number
      type: string
      amount: string
    }[]
  }
  isPoliticalPower: boolean
  isPolicing: boolean
  misc: string
  tippyDescription: string
}
