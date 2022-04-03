import jsonData from './dungeonName.data.json'
export interface DungeonNameData {
  unique: string[]
  adjectives: string[]
  nouns: string[]
  verbs: string[]
  wordNoun: string[]
}
export const dungeonName: DungeonNameData = jsonData
