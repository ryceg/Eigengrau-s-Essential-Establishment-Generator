
import { townData } from '..'
import { getBuildingTier } from '../buildings/createBuilding'
import { MaterialType, MaterialTypes } from '../buildings/structureData'
import { Building } from '../buildings/_common'
import { createName } from '../npc-generation/createName'
import { fetchRace } from '../npc-generation/fetchRace'
import { RaceName } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { getUUID } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { Town } from './_common'
import { random } from '../src/random'

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
  key: string
  readout: string
  wordNoun: string
  width: string
  namesake?: Namesake
  materialUsed: string
  materialDescription: string
  constructionMethod: string
  type: RoadType
  hasTraffic: boolean
  isDeadEnd: boolean
  feature: string
  tier: number
  rolls: {
    width: number
    wealth: number
  }
  inhabitants: {
    npcs: Record<string, string>
    buildings: Record<string, string>
    factions: Record<string, string>
  }
}

interface Namesake {
    firstName: string
    lastName: string
    race: RaceName
    reason?: string
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
    // ______ is a ${width} ${type}. It is ${material} which ${is named after | road description }.
    const name = roads.name.create(town)
    const type = weightedRandomFetcher(town, roads.name.type, null, undefined, 'object') as RoadData
    let feature
    if (Array.isArray(roads.name.type[type.name].features)) {
      feature = roads.name.type[type.name].features[random(roads.name.type[type.name].features.length - 1)]
    } else {
      feature = roads.features[random(roads.features.length - 1)]
    }
    const road: Road = {
      name,
      key: getUUID(),
      feature,
      namesake: name.namesake || undefined,
      type: type.name,
      wordNoun: type.wordNoun || type.name,
      hasTraffic: type.hasTraffic || true,
      isDeadEnd: type.hasTraffic || false,
      rolls: {
        width: type.width() || random(2, 50),
        wealth: random(1, 100)
      },
      inhabitants: {
        npcs: {
        },
        buildings: {
        },
        factions: {
        }
      }
    }
    if (building) {
      road.inhabitants.buildings[building.key] = building.name
    }

    if (road.namesake && !road.namesake.reason) {
      road.namesake.reason = roads.namesakes.reason(town, road.namesake)
    }

    for (const [num, description] of roads.width.rolls) {
      if (road.rolls.width > num) {
        road.width = description
      }
    }
    const material = roads.material.get(town, road)
    const constructionMethod = material.roadMaterialType[random(material.roadMaterialType.length - 1)]
    road.constructionMethod = roads.material.types[constructionMethod].type
    road.materialUsed = material.noun

    road.readout = `${road.name} is ${articles.output(`${road.width} ${road.constructionMethod}`)} ${road.materialUsed} ${road.wordNoun}. It is ${road.materialDescription} ${road.feature}`
    if (road.namesake?.reason) road.readout += road.namesake.reason

    return road
  },
  features: [
    'Helpful sign posts are dotted along the road pointing out the names of other streets.',
    'Grated storm drains at regular intervals grant access to the sewer system.',
    'There are rows of potted plants and herbs, the produce of which people are free to pick at their leisure.',
    "There's a letterbox at the end of the drive for an impressive looking house.",
    "There's a wagon with a cracked wheel by the side of the road.",
    'The street is covered with painted footsteps, a coloured trail seemingly leading off to notable buildings.',
    'Deep ditches border the road, carrying waste and refuse down the hill.'
  ],
  name: {
    create (town: Town): RoadOwnership {
      const probabilities = {
        properNoun: 5,
        firstName: 2,
        lastName: 2
      } as WeightRecord<RoadNameType>
      const selected = weightRandom(probabilities)
      let road: ProperNoun
      const race = fetchRace(town)
      const namesake = {
        race,
        firstName: createName({ race, firstOrLast: 'firstName' }),
        lastName: createName({ race, firstOrLast: 'lastName' })
      }
      switch (selected) {
        case 'firstName':
          road = {
            name: namesake.firstName,
            canBePossessive: true,
            namesake
          }
          if (random(1, 100) > 60) road.name += "'s"
          break
        case 'lastName':
          road = {
            name: namesake.lastName,
            canBePossessive: true,
            namesake
          }
          if (random(1, 100) > 90) road.name += "'s"
          break
        default:
          road = weightedRandomFetcher(town, roads.name.properNoun, undefined, undefined, 'object') as ProperNoun
      }
      Object.assign({
        roadNameType: selected,
        canBePossessive: false,
        isUnique: false,
        isBuilding: false
      }, road) as RoadOwnership

      return road as RoadOwnership
    },
    properNoun: {
      main: {
        name: 'main',
        isUnique: true,
        probability: 20
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
        probability: 20
      },
      tailor: {
        name: 'tailor',
        isBuilding: 'tailor',
        canBePossessive: true,
        probability: 20
      },
      smith: {
        name: 'smith',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 20
      },
      potter: {
        name: 'potter',
        isBuilding: 'potter',
        canBePossessive: true,
        probability: 20
      },
      baker: {
        name: 'baker',
        isBuilding: 'bakery',
        canBePossessive: true,
        probability: 20
      },
      farrier: {
        name: 'farrier',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 20
      },
      fisher: {
        canBePossessive: true,
        probability: 20
      },
      old: {
        name: 'old',
        probability: 20
      },
      new: {
        name: 'new',
        probability: 20
      },
      common: {
        name: 'common',
        probability: 20
      },
      high: {
        name: 'high',
        probability: 20
      },
      low: {
        name: 'low',
        probability: 20
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
        width () { return random(92, 99) },
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
        width () { return random(40, 80) },
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
        width () { return random(40, 80) },
        features: [
          'A line of trees dots the sides.',
          'Wrought iron oil-burning street lamps illuminate the broad avenue well into the late evening hours.'],
        probability: 1,
        wordNoun: 'road'
      },
      alley: {
        name: 'alley',
        width () { return random(0, 40) },
        features: [
          'There is a pile of rotten logs to the side.',
          'Several barrels are stacked haphazardly.',
          'There are some empty alcohol bottles on the ground.'
        ],
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
        width () { return random(50, 90) },
        features: ['There is a median through the middle of the road.', 'Trees are planted along the sides.'],
        probability: 1,
        wordNoun: 'road'
      },
      plaza: {
        name: 'plaza',
        width () { return random(50, 90) },
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
    reason (town: Town, namesake: Namesake): string {
      const fullName = `${namesake.firstName} ${namesake.lastName}`
      const race = namesake.race
      const reasons = [
        `It is named after ${fullName}, who was ${articles.output(race)} who ruled wisely for many years.`,
        `It is named after ${fullName}, who was ${articles.output(race)} who bought the naming rights to the road.`,
        `It is named after ${fullName}, who was ${articles.output(race)} who brought riches to the people of ${town.name}.`,
        `It is named after ${fullName}, who was the person who built the road.`,
        `It is named after ${fullName}, who fought with the council for many years to have the road renamed after them.`,
        `It is named after ${fullName}, who was a well respected local who was killed in war.`,
        `It is named after ${fullName}, who was a much beloved prostitute, one of whose clients bought the road as a thankyou.`,
        `It is named after ${fullName}, who was an adventurer who killed the hags that had stolen some of the children of ${town.name}.`,
        'It is named after somebody who changed the street name as a prank- it stuck, and never got changed back.',
        'It is named after a much loved dog.',
        `It is named after the ${namesake.lastName} family who have lived there for generations.`
      ]
      const selected = random(reasons.length - 1)
      return reasons[selected]
    }
  },
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
    get (town: Town, road: Road): MaterialType {
      console.log('Getting road material...')
      road.tier = getBuildingTier(town.roll.wealth, road.rolls.wealth)
      for (const material of Object.keys(town.materialProbability)) {
        console.log(material)
        if (town.materialProbability[material].tier.indexOf(road.tier) !== -1) {
          town.materialProbability[material].probability = 5
        }
      }
      town.materialProbability[town.townMaterial].probability = 80
      const tempMaterial = weightedRandomFetcher(town, town.materialProbability, undefined, roads.material.exclusions(town.materialProbability), 'object') as MaterialType
      return tempMaterial
    },
    exclusions (arg: Record<MaterialTypes, MaterialType>) {
      return arg.canBeUsedAsRoad
    },
    types: {
      dirt: {
        type: 'dirt',
        description: [
          'two thin lines of dirt road with grass growing around and in between them.',
          'well trodden, though slightly muddy.',
          'a desire path, with the grass just gently trodden down.',
          'made of dirt that has been packed down.',
          'made of dirt that has been packed down. Unfortunately, it was done a long time ago, and is deteriorating slightly.'
        ]
      },
      gravel: {
        type: 'gravel',
        description: [
          'made of noisy and shifting gravel. Better watch your footing.',
          'a loose gravel that was taken from a river bed.',
          'made of colourful rocks and pebbles.',
          'made of poorly packed gravel, which shifts around under foot.'
        ]
      },
      pavement: {
        type: 'paved',
        description: [
          'a misshapen and uneven cobblestone.',
          'made of polished marble, intricately paved to form repeating geometric pattern.',
          'made of broad flagstones, hewn perfectly flat and level.',
          'made of rough, slightly uneven stones previously used as ballast in ships.'
        ]
      },
      brick: {
        type: 'brick',
        description: [
          'paved with moss covered bricks, of all different shapes and sizes.',
          'paved with deep red bricks, some stamped with the town seal.',
          'missing several bricks in places. Grass shoots up in the voids, threatening to take over the road.',
          'freshly laid. You can see where the sand is still settling into the cracks to hold them in place.',
          'an arrangement of baked moss and artichoke coloured bricks, made from compressed Gnomegrass and Eldenoak sap mixture.'
        ]
      }
    }
  },
  intendedFunction: {
    residential: {
      features: [

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
