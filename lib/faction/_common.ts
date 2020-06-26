export interface Faction {
  type: string
  name: string
  roll: {
    age: number
    size: number
    influence: number
    stability: number
    resources: number
    reputation: number
  }
  age: string
  size: string
  influence: string
  stability: string
  reputation: string
  joiningFee: string
  leadershipType: 'individual' | 'group'
  leaderGroupTitle: string
  leaderGroupSizeRoll: number
  meetingRegularity: string
  meetingAccessibility: string
  alliesDescription: string
  allies: string[]
  rivalsDescription: string
  rivals: string[]
  resourcesDescription: string
  resources: string[]
  misc: string
}
