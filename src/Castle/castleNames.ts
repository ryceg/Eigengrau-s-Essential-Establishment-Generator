
import jsonData from './castleNames.data.json'

export const castleNames: {
  unique: string[]
  wordNouns: string[]
  nouns: string[]
  adjectives: string[]
  morphemes: {
    prefix: string[]
    suffix: string[]
  }
} = jsonData
