import { createNamesake, findInArray, toTitleCase } from '..'
import { getBuildingRoad, getBuildingTier } from '../buildings/createBuilding'
import { MaterialType, MaterialTypes, RoadMaterialType } from '../buildings/structureData'
import { Building } from '../buildings/_common'
import { raceTraits } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { assign, capitalizeFirstLetter, getUUID, keys, last } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { random } from '../src/random'
import { Town } from '../town/_common'
import { Namesake } from '../npc-generation/_common'
import { RoadType } from './RoadType'
import { RoadData, roadTypes } from './roadTypes'
import { roadNameProperNouns } from './roadNameProperNouns'

export interface Road {
  /** The full title of the road- "King Street" */
  name: string
  /** The prefix- "King" of "King Street" */
  prefix: string
  passageName: 'RoadProfile'
  key: string
  /** The string that is used as the Tippy. Collates a lot of the other data.
   * @example `${road.name} is ${articles.output(`${road.width} ${materialUsedDescriptor}`)} ${road.wordNoun}. It is ${road.materialDescription} ${road.feature} `
  */
  description: string
  /**
   * Preceding text which overrides the regular text.
   * @example `Along ${road.name} is the smithy Sharpened Hammer.` becomes `____________ is the smithy Sharpened Hammer.`
   */
  precedingText: string
  /**
   * Total number of 'slots'
   */
  capacity: number
  /**
   * Current number of 'slots'
   */
  currentOccupancy: number
  /** This is distinct from the name- "you walk down the crescent" doesn't sound natural. A crescent is a type of road. */
  wordNoun: string
  objectType: 'road'
  width: string
  namesake?: Namesake
  materialUsed: MaterialTypes
  materialDescription: string
  constructionMethod: string
  /** The type of road- a crescent, road, way, etc. */
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

interface RoadOwnership extends ProperNoun {
  // we're not using 'name' because road.name is already being used
  prefix: string
  roadNameType: RoadNameType
  canBePossessive: boolean
  isUnique: boolean
  isBuilding: string | false
}

export interface ProperNoun {
  prefix: string
  canBePossessive?: boolean
  isUnique?: boolean
  isBuilding?: string | false
  namesake?: Namesake
}

interface RoadMaterial {
  type: string
  /** @example `Main Street is a narrow paved street. It is ________` */
  description: string[]
}

type RoadNameType = 'properNoun' | 'firstName' | 'lastName'

export const roads = {
  /** Creates the road */
  create: (town: Town, opts?: Partial<Road>): Road => {
    // ______ is a ${width} ${type}. It is ${material} which ${is named after | road description }.
    console.log('Creating a road...')
    const roadPrefix = roads.name.create(town)
    console.log('Finding a type...')
    const type = weightedRandomFetcher(town, roadTypes, null, undefined, 'object') as RoadData
    const feature = roads.get.features(type)

    const widthRoll = type.width()
    const [, width] = roads.width.rolls.find(([threshold]) => {
      return threshold <= widthRoll
    }) || last(roads.width.rolls)

    const road = {
      prefix: capitalizeFirstLetter(roadPrefix.prefix),
      key: getUUID(),
      passageName: 'RoadProfile',
      width,
      objectType: 'road' as const,
      feature,
      namesake: roadPrefix.namesake || undefined,
      type: capitalizeFirstLetter(type.name),
      wordNoun: type.wordNoun || type.name,
      hasTraffic: type.hasTraffic || true,
      isDeadEnd: type.hasTraffic || false,
      rolls: {
        width: widthRoll,
        wealth: lib.random(1, 100)
      },
      currentOccupancy: 0,
      inhabitants: {
        npcs: {
        },
        buildings: {
        },
        factions: {
        }
      },
      ...opts
    }

    assign(road, {
      name: toTitleCase(`${road.prefix} ${road.type}`),
      tier: getBuildingTier(town.roll.wealth, road.rolls.wealth),
      capacity: roads.width.getCapacity(road as Road)
    })

    const material = roads.material.get(town, road as Road)
    if (typeof material.roadMaterialTypes === 'undefined') {
      throw new Error('Could not get array of road material types.')
    }
    const constructionMethod = lib.random(material.roadMaterialTypes)

    assign(road, {
      constructionMethod: roads.material.types[constructionMethod].type,
      materialUsed: material.noun
    })

    const materialUsedDescriptor = getUsedMaterialDescriptor(road)

    assign(road, {
      materialDescription: lib.random(roads.material.types[constructionMethod].description)
    })

    assign(road, {
      description: `${road.name} is ${articles.output(`${road.width} ${materialUsedDescriptor}`)} ${road.wordNoun}. It is ${road.materialDescription} ${road.feature} `
    })

    if (road.namesake?.reason) {
      road.description += road.namesake.reason
    }

    if (type.precedingText) {
      road.precedingText = type.precedingText(town, road as Road)
    } else {
      road.precedingText = roads.precedingText.default(town, road as Road)
    }

    return road as Road
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
      const namesake = createNamesake(town)
      console.log('selected ', selected)
      let road: ProperNoun
      switch (selected) {
        case 'firstName':
          road = {
            prefix: lib.random(1, 100) > 60 ? `${namesake.firstName}'s` : namesake.firstName,
            canBePossessive: true,
            isUnique: false,
            namesake
          }
          break
        case 'lastName':
          road = {
            prefix: lib.random(1, 100) > 90 ? `${namesake.lastName}'s` : namesake.lastName,
            canBePossessive: true,
            isUnique: false,
            namesake
          }
          break
        default:
          road = weightedRandomFetcher(town, roadNameProperNouns, undefined, undefined, 'object') as ProperNoun
      }
      assign(road, {
        roadNameType: selected
      })
      if (road.namesake && !road.namesake.reason) {
        road.namesake.reason = roads.namesakes.reason(town, road.namesake)
      }
      return road as RoadOwnership
    }

  },
  get: {
    features (type: RoadData): string {
      const roadType = roadTypes[type.name]
      if (roadType.features && lib.random(100) > 50) {
        return lib.random(roadType.features)
      }
      return lib.random(roads.features)
    }
  },
  features: [
    'Helpful sign posts are dotted along the road pointing out the names of other streets.',
    'Grated storm drains at regular intervals grant access to the sewer system.',
    'There are rows of potted plants and herbs, the produce of which people are free to pick at their leisure.',
    "There's a letterbox at the end of the drive for an impressive looking house.",
    "There's a wagon with a cracked wheel by the side of the road.",
    'The street is covered with painted footsteps, a coloured trail seemingly leading off to notable buildings.',
    'Deep ditches border the road, carrying waste and refuse down the hill.',
    'There\'s a bench on the side of the road, with the wood being smoothed out from many sittings.',
    'There\'s a laundry line connecting two houses that are slightly closer together than usual.',
    'A crude drawing of an animal carved into a brick wall, affectionately labeled “R.G. Was here.”',
    'A tree has a little heart carved into it, with the name Claire inside.',
    'One of the houses on the side leans concerningly far over the road.'
  ],
  namesakes: {
    reason (town: Town, namesake: Namesake): string {
      const fullName = `${namesake.firstName} ${namesake.lastName}`
      const race = namesake.race
      const namedAfter = lib.random([
        'It was named after',
        'It has been named after',
        'Its name comes from',
        'The name comes from',
        "The road's name comes from",
        'The road was named after'
      ])
      const raceOutput = articles.output(race)
      const raceAdjectiveOutput = articles.output(raceTraits[race].raceWords.raceAdjective)
      return lib.random([
        `${namedAfter} ${fullName}, who was ${raceOutput} who ruled wisely for many years.`,
        `${namedAfter} ${fullName}, who was ${raceOutput} who bought the naming rights to the road.`,
        `${namedAfter} ${fullName}, who was ${raceOutput} who brought riches to the people of ${town.name}.`,
        `${namedAfter} ${fullName}, who was the person who built the road.`,
        `${namedAfter} ${fullName}, ${raceOutput} who sat on the council for many years.`,
        `${namedAfter} ${fullName}, ${raceOutput} who cared for orphans.`,
        `${namedAfter} ${fullName}, ${raceOutput} who lived there before setting off into the world, becoming relatively famous.`,
        `${namedAfter} ${fullName}, ${raceOutput} who produced a staggering ${random(12, 21)} children.`,
        `${namedAfter} ${fullName}, ${raceOutput} who once killed an ogre that was threatening the ${town.type} of ${town.name} with a sling.`,
        `${namedAfter} ${fullName}, ${raceOutput} who helped establish the ${town.type} of ${town.name}.`,
        `${namedAfter} ${fullName}, ${raceOutput} who was one of the first settlers of ${town.name}.`,
        `${namedAfter} ${fullName}, ${raceOutput} who lived in ${town.name} for many, many years, maintaining the oral history.`,
        `${namedAfter} ${fullName}, ${raceAdjectiveOutput} judge who was renowned in ${town.name} for being totally impartial and fair.`,
        `${namedAfter} ${fullName}, ${raceAdjectiveOutput} guard who was renowned in ${town.name} for capturing dangerous criminals.`,
        `${namedAfter} ${fullName}, ${raceAdjectiveOutput} politician who was beloved in ${town.name} for various social reforms.`,
        `${namedAfter} ${fullName}, ${raceAdjectiveOutput} soldier who prevented a war.`,
        `${namedAfter} ${fullName}, ${raceAdjectiveOutput} messenger who delivered a critical message to the guards of ${town.name} after three days of non-stop running.`,
        `${namedAfter} ${fullName}, who fought with the council for many years to have the road renamed after them.`,
        `${namedAfter} ${fullName}, who was a well respected local who was killed in war.`,
        `${namedAfter} ${fullName}, who was a very respected local who was captured in war, but did not reveal any secrets while being tortured.`,
        `${namedAfter} ${fullName}, who was a much beloved prostitute, one of whose clients bought the road as a thankyou.`,
        `${namedAfter} ${fullName}, who was an adventurer who killed the hags that had stolen some of the children of ${town.name}.`,
        `${namedAfter} somebody who changed the street name as a prank- it stuck, and never got changed back.`,
        `${namedAfter} a much loved dog.`,
        `${namedAfter} a much loved cat.`,
        `${namedAfter} the ${namesake.lastName} family who have lived there for generations.`,
        `${namedAfter} the ${namesake.lastName} family who wield an amount of political power.`
      ])
    }
  },
  precedingText: {
    default (town: Town, road: Road): string {
      const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
      const text = [
        {
          function () { return `The ${road.wordNoun} <<profile '${road.key}'>> comes to an abrupt end, terminating in` }
        },
        {
          function () { return `At the bottom of a hill ${isTheRoad}` }
        },
        {
          function () { return `Further towards the centre of ${town.name} ${isTheRoad}` }
        },
        {
          function () { return `Nearby ${isTheRoad}` }
        },
        {
          function () { return `On <<profile '${road.key}'>> is` }
        },
        {
          function () { return `Along <<profile '${road.key}'>> is` }
        },
        {
          function () { return `Over on <<profile '${road.key}'>> is` }
        },
        {
          function () { return `At the top of a small hill ${isTheRoad}` }
        }
      ]
      const result = weightedRandomFetcher(town, text, road, undefined, 'function')
      return result as string
    },
    isTheRoad (town: Town, road: Road, overrides?: {
      pre: string[],
      after: string[]
    }): string {
      let pre = [
        `is the ${road.wordNoun}`,
        'is'
      ]
      let after = [
        '. Along it is',
        '. Nearby is',
        '. Near it is',
        ', and nearby is'
      ]
      if (overrides) {
        if (overrides.pre) pre = overrides.pre
        if (overrides.after) after = overrides.after
      }
      return `${random(pre)} <<profile '${road.key}'>>${random(after)} `
    }
  },
  width: {
    /**
     * @example [size, number of buildings allowed]
     * @description So not everything is all on the same bloody street.
    */
    capacity: [
      [90, 20],
      [50, 10],
      [40, 7],
      [20, 4],
      [0, 2]
    ],
    getCapacity (road: Road): number {
      let allowableNumber = roads.width.capacity.find(number => {
        return road.rolls.width >= number[0]
      })
      console.log(allowableNumber)
      if (!allowableNumber) allowableNumber = [0, 1]
      return allowableNumber[1]
    },
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
    ] as ThresholdTable,
    largeRoads: ['plaza', 'road', 'row', 'crescent', 'way', 'square']
  },
  material: {
    get (town: Town, road: Road): MaterialType {
      console.log('Getting road material...')
      const tempMaterials: Record<string, MaterialType> = {}
      // cloning town.materialProbability so we can mutate it
      keys(town.materialProbability).forEach(key => {
        tempMaterials[key] = town.materialProbability[key]
      })
      for (const material of keys(tempMaterials)) {
        console.log(material)
        if (!tempMaterials[material].roadMaterialTypes) {
          delete tempMaterials[material]
          continue
        }
        if (tempMaterials[material].tier.indexOf(road.tier) !== -1) {
          tempMaterials[material].probability = 5
        }
      }
      if (tempMaterials[town.townMaterial]) {
        tempMaterials[town.townMaterial].probability = 80
      }
      return weightedRandomFetcher(town, tempMaterials, undefined, roads.material.exclusions, 'object') as MaterialType
    },
    exclusions (town: Town, arg: MaterialType) {
      return !!arg.roadMaterialTypes
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
    } as Record<RoadMaterialType, RoadMaterial>
  },
  deleteInhabitant: (town: Town, road: Road, key: string) => {
    if (Object.keys(road.inhabitants.buildings).contains(key)) roads.deleteBuilding(town, road, findInArray(town.buildings, 'key', key) as Building)
    // if (Object.keys(road.inhabitants.factions).contains(key)) roads.deleteFaction(town, road, town.factions[key])
  },
  addBuilding: (town: Town, road: Road, building: Building) => {
    road.currentOccupancy += building.roadSizeRequirement || Math.max(2, building.roll.size / 5)
    road.inhabitants.buildings[building.key] = building.type
    building.road = road.key
  },
  deleteBuilding: (town: Town, road: Road, building: Building) => {
    road.currentOccupancy -= building.roadSizeRequirement || Math.max(2, building.roll.size / 5)
    building.road = getBuildingRoad(building, town).key
  }
  // deleteFaction: (town: Town, road: Road, faction: Faction) => {
  // road.currentOccupancy -= faction.roadSizeRequirement || Math.max(2, faction.roll.size / 5)
  // faction.road = getFactionRoad(faction, town).key
  // }
}

interface ConstructedRoad {
  constructionMethod: string
  materialUsed: string
}

function getUsedMaterialDescriptor (road: ConstructedRoad) {
  if (['gravel', 'dirt'].includes(road.constructionMethod)) {
    return `${road.constructionMethod} and ${road.materialUsed}`
  }
  if (['brick'].includes(road.constructionMethod)) {
    return `${road.materialUsed} ${road.constructionMethod}`
  }
  return `${road.constructionMethod} ${road.materialUsed}`
}
