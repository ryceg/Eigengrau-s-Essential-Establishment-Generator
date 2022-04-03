import jsonData from './siege.data.json'

export interface SiegeData {
  name: {
    prefixes: string[]
    adjectives: string[]
    nouns: string[]
  }
  causedBy: string[]
  length: string[]
  event: string[]
  result: {
    invadersWin: string[]
    castleWin: string[]
    other: string[]
  }
}
export const siege: SiegeData = jsonData
