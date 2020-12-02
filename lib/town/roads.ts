
import { toTitleCase, townData } from '..'
import { getBuildingTier } from '../buildings/createBuilding'
import { MaterialType, MaterialTypes } from '../buildings/structureData'
import { Building } from '../buildings/_common'
import { createName } from '../npc-generation/createName'
import { fetchRace } from '../npc-generation/fetchRace'
import { RaceName } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { getUUID, last } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { Town } from './_common'
import { random } from '../src/random'

export interface RoadData {
  name: RoadType | string
  wordNoun: RoadType | 'cul-de-sac'
  probability: number
  width(): number
  hasTraffic?: boolean
  isDeadEnd?: boolean
  material?: string
  exclusions?(town: Town): boolean
  features?: string[]
}

export interface Road {
  name: string
  prefix: string
  key: string
  description: string
  wordNoun: string
  width: string
  namesake?: Namesake
  materialUsed: string
  materialDescription: string
  constructionMethod: string
  type: RoadType | string
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
  // we're not using 'name' because road.name w
  prefix: string
  roadNameType: RoadNameType
  canBePossessive: boolean
  isUnique: boolean
  isBuilding: string
}

interface ProperNoun {
  roadNameType: string
  prefix: string
  canBePossessive?: boolean
  isUnique?: boolean
  isBuilding?: string
  namesake?: Namesake
}

interface RoadMaterial {
  type: string
  /** @example `Main Street is a narrow paved street. It is ________` */
  description: string[]
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
  /** @description Adds checks for road duplication; use this one for assigning to randomly generated buildings. */
  assign: (town: Town, building?: Building): Road => {
    console.groupCollapsed('Assigning a road...')
    let road: Road
    if (random(100) < townData.type[town.type].roadDuplication && Object.values(town.roads).length > 0) {
      road = Object.values(town.roads).random()
    } else {
      road = roads.create(town, building)
      town.roads[road.key] = road
    }

    if (building) {
      road.inhabitants.buildings[building.key] = building.type
      building.road = road.key
    }
    console.log(road)
    console.groupEnd()
    return road
  },
  /** @description Creates the road */
  create: (town: Town, building?: Building): Road => {
    // ______ is a ${width} ${type}. It is ${material} which ${is named after | road description }.
    console.log('Creating a road...')
    const roadPrefix = roads.name.create(town)
    console.log('Finding a type...')
    const type = weightedRandomFetcher(town, roads.name.type, null, undefined, 'object') as RoadData
    const widthRoll = type.width()
    let feature: string
    if (roads.name.type[type.name].features && roads.name.type[type.name].features.length > 0) {
      feature = random(roads.name.type[type.name].features)
    } else {
      feature = random(roads.features)
    }
    const road: Road = {
      prefix: toTitleCase(roadPrefix.prefix),
      key: getUUID(),
      feature,
      namesake: roadPrefix.namesake || undefined,
      type: toTitleCase(type.name),
      wordNoun: type.wordNoun || type.name,
      hasTraffic: type.hasTraffic || true,
      isDeadEnd: type.hasTraffic || false,
      rolls: {
        width: widthRoll,
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
    road.name = `${road.prefix} ${road.type}`

    let width = roads.width.rolls.find(desc => {
      return desc[0] <= widthRoll
    })
    if (!width) width = last(roads.width.rolls)
    road.width = width[1]
    const material = roads.material.get(town, road)
    const constructionMethod = random(material.roadMaterialType)
    road.constructionMethod = roads.material.types[constructionMethod].type
    road.materialUsed = material.noun
    let materialUsedDescriptor
    if (['gravel', 'dirt'].includes(road.constructionMethod)) {
      materialUsedDescriptor = `${road.constructionMethod} and ${road.materialUsed}`
    } else {
      materialUsedDescriptor = `${road.constructionMethod} and ${road.materialUsed}`
    }
    road.materialDescription = random(roads.material.types[constructionMethod].description)
    road.description = `${road.name} is ${articles.output(`${road.width} ${materialUsedDescriptor}`)} ${road.wordNoun}. It is ${road.materialDescription} ${road.feature} `
    if (road.namesake?.reason) road.description += road.namesake.reason

    return road
  },

  name: {
    create (town: Town): RoadOwnership {
      console.log('Creating a road name...')
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
      console.log('selected ', selected)
      switch (selected) {
        case 'firstName':
          road = {
            prefix: namesake.firstName,
            canBePossessive: true,
            isUnique: false,
            isBuilding: undefined,
            namesake
          }
          if (random(1, 100) > 60) road.prefix += "'s"
          break
        case 'lastName':
          road = {
            prefix: namesake.lastName,
            canBePossessive: true,
            isUnique: false,
            isBuilding: undefined,
            namesake
          }
          if (random(1, 100) > 90) road.prefix += "'s"
          break
        default:
          road = weightedRandomFetcher(town, roads.name.properNoun, undefined, undefined, 'object') as ProperNoun
      }
      road.roadNameType = selected
      if (road.namesake && !road.namesake.reason) {
        road.namesake.reason = roads.namesakes.reason(town, road.namesake)
      }
      return road as RoadOwnership
    },
    properNoun: {
      main: {
        prefix: 'main',
        isUnique: true,
        probability: 20,
        isBuilding: false
      },
      keep: {
        prefix: 'keep',
        isUnique: false,
        isBuilding: false
      },
      king: {
        prefix: 'king',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      queen: {
        prefix: 'queen',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      prince: {
        prefix: 'prince',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      princess: {
        prefix: 'princess',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      lord: {
        prefix: 'lord',
        isUnique: false,
        isBuilding: false
      },
      ladies: {
        prefix: 'ladies',
        isUnique: false,
        isBuilding: false
      },
      noble: {
        prefix: 'noble',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      duke: {
        prefix: 'duke',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      duchess: {
        prefix: 'duchess',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      rogue: {
        prefix: 'rogue',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      priest: {
        prefix: 'priest',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      abbott: {
        prefix: 'abbott',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      pope: {
        prefix: 'pope',
        isUnique: false,
        isBuilding: false
      },
      spring: {
        prefix: 'spring',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      winter: {
        prefix: 'winter',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      summer: {
        prefix: 'summer',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      autumn: {
        prefix: 'autumn',
        canBePossessive: true,
        isUnique: false,
        isBuilding: false
      },
      castle: {
        prefix: 'castle',
        isBuilding: 'castle',
        isUnique: false,
        nameReason: [
          'A castle was meant to be built at the end of the road.'
        ]
      },
      butcher: {
        prefix: 'butcher',
        isBuilding: 'butcher',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      tailor: {
        prefix: 'tailor',
        isBuilding: 'tailor',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      smith: {
        prefix: 'smith',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      potter: {
        prefix: 'potter',
        isBuilding: 'potter',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      baker: {
        prefix: 'baker',
        isBuilding: 'bakery',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      farrier: {
        prefix: 'farrier',
        isBuilding: 'smithy',
        canBePossessive: true,
        probability: 20,
        isUnique: false
      },
      fisher: {
        prefix: 'fisher',
        canBePossessive: true,
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      old: {
        prefix: 'old',
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      new: {
        prefix: 'new',
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      common: {
        prefix: 'common',
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      high: {
        prefix: 'high',
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      low: {
        prefix: 'low',
        probability: 20,
        isUnique: false,
        isBuilding: false
      },
      north: {
        prefix: 'north',
        isUnique: false,
        isBuilding: false
      },
      south: {
        prefix: 'south',
        isUnique: false,
        isBuilding: false
      },
      west: {
        prefix: 'west',
        isUnique: false,
        isBuilding: false
      },
      east: {
        prefix: 'east',
        isUnique: false,
        isBuilding: false
      }
    },
    type: {
      street: {
        name: 'street',
        width () { return random(0, 90) },
        probability: 8,
        wordNoun: 'street'
      },
      lane: {
        name: 'lane',
        width () { return random(5, 40) },
        features: [
          'Houses lean over into the street on both sides, limiting the amount of sun that is visible. Laundry lines are strung between windows across the road.'
        ],
        probability: 5,
        wordNoun: 'lane'
      },
      road: {
        name: 'road',
        probability: 10,
        width () { return random(10, 90) },
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
        width () { return random(0, 80) },
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
        width () { return random(40, 80) },
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
        width () { return random(0, 80) },
        wordNoun: 'road'
      },
      dyke: {
        name: 'dyke',
        width () { return random(0, 60) },
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
        width () { return random(40, 80) },
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
        width () { return random(0, 50) },
        probability: 1,
        material: 'dirt',
        exclusions (town: Town) { return town.population < 500 }
      },
      trail: {
        name: 'trail',
        width () { return random(0, 40) },
        probability: 1,
        material: 'dirt',
        exclusions (town: Town) { return town.population < 400 }
      }
    } as Record<RoadType, RoadData>
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
      const selected: string = random(reasons)
      return selected
    }
  },
  width: {
    rolls: [
      [100, 'courtyard-sized'],
      [90, 'wide, multi-lane'],
      [80, 'rather wide'],
      [70, 'wide'],
      [60, 'broad'],
      [50, ''],
      [35, 'narrow'],
      [30, 'rather narrow'],
      [25, 'very narrow'],
      [10, 'path-sized'],
      [0, 'claustrophobically narrow']
    ] as ThresholdTable
  },
  material: {
    get (town: Town, road: Road): MaterialType {
      console.log('Getting road material...')
      road.tier = getBuildingTier(town.roll.wealth, road.rolls.wealth)
      console.log('Maybe Here?')
      const tempMaterials: Record<string, MaterialType> = {}
      Object.keys(town.materialProbability).forEach((key) => {
        tempMaterials[key] = town.materialProbability[key]
      })
      for (const material of Object.keys(tempMaterials)) {
        console.log(material)
        if (!tempMaterials[material].canBeUsedAsRoad) {
          delete tempMaterials[material]
          continue
        }
        if (tempMaterials[material].tier.indexOf(road.tier) !== -1) {
          tempMaterials[material].probability = 5
        }
      }
      if (tempMaterials[town.townMaterial]) tempMaterials[town.townMaterial].probability = 80
      console.log('Here?')
      console.log(tempMaterials)
      console.log('Town materials')
      console.log(town.materialProbability)
      const tempMaterial = weightedRandomFetcher(town, tempMaterials, undefined, roads.material.exclusions(tempMaterials), 'object') as MaterialType
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
          'made of dirt that has been gently packed down.',
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
    } as Record<MaterialTypes, RoadMaterial>
  }
}
