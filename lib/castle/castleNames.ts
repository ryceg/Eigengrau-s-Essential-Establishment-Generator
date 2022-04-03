
import jsonData from './castleNames.data.json'

export interface CastleNameData {
  unique: string[]
  wordNouns: string[]
  nouns: string[]
  adjectives: string[]
  morphemes: {
    prefix: string[]
    suffix: string[]
  }
}

export const castleNames: CastleNameData = jsonData
