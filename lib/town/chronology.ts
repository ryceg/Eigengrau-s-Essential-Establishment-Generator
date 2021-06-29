import { Building, Deity, Faction, Family, NPC } from '@lib'
import { Location } from 'src/World/locations'

export interface TownHistory {
  events: TownEvent[]
}

export interface TownEvent {
  key: string
  passageName?: string
  name: string
  description: string
  about?: {
    instigator?: string | NPC | Family | Faction | Deity
    target?: string | NPC | Family | Faction | Deity | Building
    location?: string | Building | Location
  }
  time: {
    /** Time that has elapsed since the event. */
    since: number
    /** Time that the event started. */
    started: number
    /** Total duration of the event. */
    duration: number
  }
  /** Was this event a good thing? */
  isGood: boolean | undefined

}
