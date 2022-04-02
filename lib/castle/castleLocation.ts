import { Locations } from '@lib'
import jsonData from './castleLocation.data.json'

interface CastleLocation {
  vignette: string[]
  defenseReason: string[]
}

export const castleLocation: Record<Locations, CastleLocation> = jsonData
