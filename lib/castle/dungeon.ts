import jsonData from './dungeon.data.json'

interface DungeonData {
  knownFor: string[]
    secret: string[]
    location: {
      castle: string[]
      standalone: string[]
    }
    age: string[]
    format: string[]
    cells: {
      prisoners: {
        treatment: string[]
      }
      condition: string[]
      format: string[]
    }
    rooms: {
      type: string[]
      feature: string[]
    }
}

export const dungeon: DungeonData = jsonData
