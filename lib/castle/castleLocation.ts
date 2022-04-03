import jsonData from './castleLocation.data.json'

export interface CastleLocation {
  vignette: string[]
  defenseReason: string[]
}

// @TODO: fix Location type so that it's not just a string
export const castleLocation: Record<string, CastleLocation> = jsonData
