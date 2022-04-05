import { Tavern } from './_common'

export function tavernTypeFix (tavern: Tavern): void {
  if (tavern.type !== 'tavern' && !tavern.tavernType) {
    tavern.tavernType = tavern.type
    tavern.type = 'tavern'
  }
}
