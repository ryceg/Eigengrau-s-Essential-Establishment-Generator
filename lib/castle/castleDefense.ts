import jsonData from './castleDefense.data.json'

interface CastleDefenseData {
  reason: string[]
  innerWalls: string[]
  outerWalls: string[]
}

export const castleDefense: CastleDefenseData = jsonData
