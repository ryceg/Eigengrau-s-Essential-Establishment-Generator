
import { townData } from '..'
import { Building } from '../buildings/_common'
import { createName } from '../npc-generation/createName'
import { fetchRace } from '../npc-generation/fetchRace'
import { RaceName } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { Town } from './_common'

export interface RoadData {
  name: RoadType
  wordNoun: RoadType | 'cul-de-sac'
  probability: number
  width?(): number
  hasTraffic?: boolean
  isDeadEnd?: boolean
  material?: string
  exclusions?(town: Town): boolean
  features?: string[]
}

export interface Road {
  name: string
  wordNoun: string
  namesake?: Namesake
  type: RoadType
  hasTraffic: boolean
  isDeadEnd: boolean
  feature: string
  rolls: {
    width: number
  }
}

interface Namesake {
    firstName: string,
    lastName: string,
    race: RaceName
}

interface RoadOwnership extends ProperNoun {
  name: string
  roadNameType: RoadNameType
  canBePossessive: boolean
  isUnique: boolean
  isBuilding: string
}

interface ProperNoun {
  name: string
  canBePossessive?: boolean
  isUnique?: boolean
  isBuilding?: string
  namesake?: Namesake
}

type RoadNameType =
'properNoun' |
'firstName' |
'lastName'

export type RoadType =
'street' |
'lane' |
'road' |
'square' |
'way' |
'crescent' |
'close' |
'wynd' |
'row' |
'dyke' |
'avenue' |
'alley' |
'drive' |
'boulevard' |
'plaza' |
'track' |
'trail'

export const roads = {
  assign: (town: Town, building?: Building): Road => {
    let road
    if (random(100) < townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
      road = Object.values(town.roads).random()
    } else {
      road = roads.create(town, building)
    }
    return road
  },
  create: (town: Town, building?: Building): Road => {
    // ______ is a ${width} ${material} which ${is named after | road description }. ${feature}
    const name = roads.name.create(town, building)
    const type = weightedRandomFetcher(town, roads.name.type, null, '', 'object') as RoadData
    const road = {
      name,
      type: type.name,
      wordNoun: type.wordNoun || type.name,
      hasTraffic: type.hasTraffic || true,
      isDeadEnd: type.hasTraffic || false,
      feature: type.hasTraffic || true,
      rolls: {
        width: type.width() || random(2, 50)
      }

    }
    return road
  },
  name: {
    create (town: Town, building?: Building): RoadOwnership {
      const probabilities = {
        properNoun: 5,
        firstName: 2,
        lastName: 2
      } as WeightRecord<RoadNameType>
      const selected = weightRandom(probabilities)
      let roadOwnershipWord: ProperNoun
      const race = fetchRace(town)
      const namesake = {
        race,
        firstName: createName({ race, firstOrLast: 'firstName' }),
        lastName: createName({ race, firstOrLast: 'lastName' })
      }
      switch (selected) {
        case 'firstName':
          roadOwnershipWord = {
            name: namesake.firstName,
            canBePossessive: true,
            namesake
          }
          if (random(1, 100) > 60) roadOwnershipWord.name += "'s"
          break
        case 'lastName':
          roadOwnershipWord = {
            name: namesake.lastName,
            canBePossessive: true,
            namesake
          }
          if (random(1, 100) > 90) roadOwnershipWord.name += "'s"
          break
        default:
          roadOwnershipWord = weightedRandomFetcher(town, roads.name.properNoun, null, null, 'object') as ProperNoun
      }
      Object.assign({
        roadNameType: selected,
        canBePossessive: false,
        isUnique: false,
        isBuilding: false
      }, roadOwnershipWord) as RoadOwnership

      return roadOwnershipWord as RoadOwnership
    },
    properNoun: {
      main: {
        name: 'main',
        isUnique: true,
        probability: 2
      },
      keep: {
        name: 'keep'
      },
      king: {
        name: 'king',
        canBePossessive: true
      },
      queen: {
        name: 'queen',
        canBePossessive: true
      },
      prince: {
        name: 'prince',
        canBePossessive: true
      },
      princess: {
        name: 'princess',
        canBePossessive: true
      },
      lord: {
        name: 'lord'
      },
      ladies: {
        name: 'ladies'
      },
      noble: {
        name: 'noble',
        canBePossessive: true
      },
      duke: {
        name: 'duke',
        canBePossessive: true
      },
      duchess: {
        name: 'duchess',
        canBePossessive: true
      },
      rogue: {
        name: 'rogue',
        canBePossessive: true
      },
      priest: {
        name: 'priest',
        canBePossessive: true
      },
      abbott: {
        name: 'abbott',
        canBePossessive: true
      },
      pope: {
        name: 'pope'
      },
      spring: {
        name: 'spring',
        canBePossessive: true
      },
      winter: {
        name: 'winter',
        canBePossessive: true
      },
      summer: {
        name: 'summer',
        canBePossessive: true
      },
      autumn: {
        name: 'autumn',
        canBePossessive: true
      },
      castle: {
        name: 'castle',
        isBuilding: 'castle',
        nameReason: [
          'A castle was meant to be built at the end of the road.'
        ]
      },
      butcher: {
        name: 'butcher',
        isBuilding: 'butcher',
        canBePossessive: true,
        probability: 2
      },
      tailor: {
        name: 'tailor',
        isBuilding: 'tailor',
        canBePossessive: true,
        probability: 2
      },
      smith: {
        name: 'smith',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 2
      },
      potter: {
        name: 'potter',
        isBuilding: 'potter',
        canBePossessive: true,
        probability: 2
      },
      baker: {
        name: 'baker',
        isBuilding: 'bakery',
        canBePossessive: true,
        probability: 2
      },
      farrier: {
        name: 'farrier',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 2
      },
      fisher: {
        canBePossessive: true,
        probability: 2
      },
      old: {
        name: 'old',
        probability: 2
      },
      new: {
        name: 'new',
        probability: 2
      },
      common: {
        name: 'common',
        probability: 2
      },
      high: {
        name: 'high',
        probability: 2
      },
      low: {
        name: 'low',
        probability: 2
      },
      north: {
        name: 'north'
      },
      south: {
        name: 'south'
      },
      west: {
        name: 'west'
      },
      east: {
        name: 'east'

      }
    },
    generic: {
      feature: [
        'Helpful sign posts are dotted along the road pointing out the names of other streets.',
        'Grated storm drains at regular intervals grant access to the sewer system.',

        'There are rows of potted plants and herbs, the produce of which people are free to pick at their leisure.',

        'The street is covered with painted footsteps, a coloured trail seemingly leading off to notable buildings.',
        'Deep ditches border the road, carrying waste and refuse down the hill.'
      ]
    },
    type: {
      street: {
        name: 'street',
        probability: 8
      },
      lane: {
        name: 'lane',
        width () { return random(30) },
        features: [
          'Houses lean over into the street on both sides, limiting the amount of sun that is visible. Laundry lines are strung between windows across the road.'
        ],
        probability: 5,
        wordNoun: 'lane'
      },
      road: {
        name: 'road',
        probability: 10,
        wordNoun: 'road'
      },
      square: {
        name: 'square',
        hasTraffic: false,
        wordNoun: 'square',
        probability: 2
      },
      way: {
        name: 'way',
        probability: 2,
        wordNoun: 'road'
      },
      crescent: {
        name: 'crescent',
        probability: 1,
        wordNoun: 'road'
      },
      close: {
        name: 'close',
        isDeadEnd: true,
        probability: 2,
        wordNoun: 'cul-de-sac'
      },
      wynd: {
        name: 'wynd',
        width () { return random(30) },
        hasTraffic: false,
        probability: 1,
        wordNoun: 'road'
      },
      row: {
        name: 'row',
        probability: 1,
        wordNoun: 'road'
      },
      dyke: {
        name: 'dyke',
        features: ['The land on either side is rather soggy and prone to being water-logged.'],
        probability: 1,
        wordNoun: 'road'
      },
      avenue: {
        name: 'avenue',
        features: [
          'A line of trees dots the sides.',
          'Wrought iron oil-burning street lamps illuminate the broad avenue well into the late evening hours.'],
        probability: 1,
        wordNoun: 'road'
      },
      alley: {
        name: 'alley',
        features: ['There is a pile of rotten logs to the side.'],
        hasTraffic: false,
        probability: 1,
        wordNoun: 'alley'
      },
      drive: {
        name: 'drive',
        features: ['There is a nice looking house at the end of the road.'],
        probability: 1,
        wordNoun: 'road'
      },
      boulevard: {
        name: 'boulevard',
        features: ['There is a median through the middle of the road.', 'Trees are planted along the sides.'],
        probability: 1,
        wordNoun: 'road'
      },
      plaza: {
        name: 'plaza',
        probability: 1,
        wordNoun: 'road'
      },
      track: {
        name: 'track',
        probability: 1,
        material: 'dirt',
        exclusions (town: Town) { return town.population < 500 }
      },
      trail: {
        name: 'trail',
        probability: 1,
        material: 'dirt',
        exclusions (town: Town) { return town.population < 400 }
      }
    } as Record<RoadType, RoadData>
  },
  namesakes: {
    reason (town: Town, namesake: Namesake) {
      const fullName = `${namesake.firstName} ${namesake.lastName}`
      const race = namesake.race
      const reasons = [
        `${fullName} was ${articles.output(race)} who`
      ]
      const selected = random(reasons.length - 1)
      return reasons[selected]
    }
  },
  properties: {
    width: {
      rolls: [
        [100, 'wide courtyard'],
        [90, 'wide, multi-lane'],
        [80, 'rather wide'],
        [70, 'wide'],
        [60, 'broad'],
        [50, ''],
        [35, 'narrow'],
        [25, 'very narrow'],
        [10, 'claustrophobic'],
        [0, 'path']
      ] as ThresholdTable
    },
    material: {
      dirt: {
        type: 'dirt'
      },
      gravel: {
        type: 'gravel'
      },
      pavement: {
        type: 'pavement'
      },
      brick: {
        type: 'brick'
      }
    },
    intendedFunction: {
      residential: {
        features: [
          "There's a letterbox at the end of the drive for an impressive looking house."
        ]
      },
      commercial: {

      },
      communal: {

      },
      industrial: {

      }

    }
  }
}
