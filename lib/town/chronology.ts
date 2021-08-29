import { Building, Deity, Faction, Family, NPC, Town } from '@lib'
import { Location } from 'src/World/locations'

export interface TownHistory {
  events: Record<string, TownEvent>
}

export interface TownEvent {
  /* Does the event have a special title? */
  title?: string
  /* Description of what happened */
  description: string
  about?: {
    /* Who instigated the event? */
    instigator?: string | NPC | Family | Faction | Deity
    /* What did the event involve? */
    target?: string | NPC | Family | Faction | Deity | Building
    /* Where did the event take place? */
    location?: string | Building | Location
  }
  time: {
    /** Time in days that has elapsed since the event. */
    since?: number
    /** Total duration of the event. */
    duration: number
  }
  /** Was this event a good thing? */
  sentiment?: {
    /** Is it just generally considered to be a good thing for the town? */
    isGood?: boolean
    /** Was this event a good thing from an NPC's perspective? */
    npcTest?(NPC: NPC): boolean
  },
  effects?: {
    /** What happens to the town when this event happens? */
    town: (town: Town) => void
    impact: string
  }
}

interface TownEventMeta {
  key: string
  /* Does this event have a passage? */
  passageName?: string
  name: string
  probability: number
  excludes(town: Town): boolean[]
  event(town: Town): TownEvent
  data: Record<string, any>
}
interface TownEventsData {
  data: {
    [key: string]: TownEventMeta
  }
}

export const townEvents: TownEventsData = {
  data: {
    fire: {
      key: 'fire',
      name: 'fire',
      probability: 1,
      excludes (town: Town) {
        return [
          town.location !== 'ice sheet'
        ]
      },
      event (town: Town) {
        const event = {} as TownEvent
        const names = townEvents.data.fire.data.names(town)
        const selectedName: string | unknown = names[Math.floor(Math.random() * names.length)]
        if (typeof selectedName === 'string') {
          event.title = selectedName
        } else {
          Object.assign(event, selectedName)
        }
        Object.assign({
          description: `A massive fire broke out in ${town.name}.`,
          about: {
            location: town.location
          },
          time: {
            duration: lib.random([0, 1, 1, 2, 3, 5, 7])
          },
          sentiment: {
            isGood: false
          }
        }, event)
        return event
      },
      data: {
        names (town: Town) {
          return [
            'The Great Black Death',
            'Mournsday',
            'The Weeping Clouds',
            'The Devil\'s Revenge',
            'The Charring',
            'The Great Fire',
            'Conflagration',
            {
              title: 'The Sacking of the Shire',
              description: `A district of ${town.name} was sacked by gangsters, with a pub setting off a chain reaction of fires.`,
              about: {
                instigator: 'gangsters',
                location: town.location
              },
              effects: {
                impact: `Buildings in ${town.name} are built further apart than usual.`
              }
            },
            {
              title: 'The Razing of the Library',
              description: `A beautiful library in ${town.name} caught fire, and burnt to the ground.`,
              about: {
                location: 'a library'
              },
              effects: {
                impact: 'People are unusually literate here.'
              }
            }
          ]
        }
      }
    },
    flood: {
      name: 'flood',
      key: 'flood',
      probability: 2,
      excludes (town: Town) {
        return [
          !['desert'].includes(town.location),
          town.terrain !== 'arid'
        ]
      },
      event (town: Town) {
        const names = [
          'The Flood',
          `${lib.createNamesake(town).lastName}'s Folly`,
          'The Great Flood',
          'The Flood of the Ages',
          'The Day the Banks Broke'
        ]
        const event = {} as TownEvent
        const selectedName: string | unknown = names[Math.floor(Math.random() * names.length)]
        if (typeof selectedName === 'string') {
          event.title = selectedName
        }
        Object.assign({
          description: `A flood swept through ${town.name}.`,
          about: {
            location: town.location
          },
          time: {
            duration: lib.random([0, 1, 1, 2, 3, 5, 7])
          },
          sentiment: {
            isGood: false
          }
        }, event)
        return event
      },
      data: {}
    },
    locusts: {
      name: 'locusts',
      key: 'locusts',
      probability: 2,
      excludes (town: Town) {
        return [
          !['ice sheet'].includes(town.location),
          town.terrain !== 'polar',
          town.currentSeason !== 'winter'
        ]
      },
      event (town: Town) {
        const direction = lib.random(['north', 'south', 'east', 'west']).toUpperFirst()
        const names = [
          'The Locusts',
          `The Locusts of the ${direction}`,
          'The Flying Plague',
          'The Hunger'
        ]
        const event = {} as TownEvent
        const selectedName: string | unknown = lib.random(names)
        if (typeof selectedName === 'string') {
          event.title = selectedName
        }
        Object.assign({
          description: `A swarm of locusts swept through ${town.name}.`,
          about: {
            location: town.location
          },
          time: {
            duration: lib.random([4, 8, 12, 20, 30, 80, 160])
          },
          sentiment: {
            isGood: false
          }
        }, event)
        return event
      },
      data: {}
    }

    // fire
    // flood
    // terrible war
    // plague
    // great earthquake
    // volcanic eruption
    // meteor shower
    // monster attack
    // act of terrorism
    // act of heroism
    // political assassination
    // religious miracle
    // economic collapse
  }
}
