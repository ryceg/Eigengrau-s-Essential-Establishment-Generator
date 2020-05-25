interface Setup {
  factionData: FactionData
}

interface FactionData {
  type: Record<string, FactionType>
}

interface FactionType {
  leaderTraits: LeaderTraits,
  wordNoun: string,
  leaderQualification: string[]
  alliesList: string[]
  rivalsList: string[]
  joiningRequirement: string[]
  joiningInitiation: string[]
  membersTrait: string[]
  main: string[]
  adjective: string[]
  group: string[]
  unique: string[]
  motivation: string[]
  resources: string[]
}

interface LeaderTraits {
  title?: string,
  hasClass: boolean,
  dndClass?: string[]
  profession?: string,
  background?: string | string[]
}
