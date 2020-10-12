import { Faction } from '../faction/_common'
import { first } from '../src/utils'

export function getPolice (factions: Record<string, Faction>) {
  return first(getPoliceFactions(factions))
}

function getPoliceFactions (factions: Record<string, Faction>): Faction[] {
  return Object.values(factions).filter(faction => faction.isPolicing)
}
