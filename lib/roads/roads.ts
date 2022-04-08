import { logger } from '../logger'
import { getBuildingRoad } from '../buildings/createBuilding'
import { MaterialType, MaterialTypes } from '../buildings/structureMaterialData'
import { Building } from '../buildings/_common'
import { raceTraits } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { keys } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { random } from '../src/random'
import { Town } from '../town/_common'
import { Namesake } from '../npc-generation/_common'
import { RoadType } from './RoadType'

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

export interface ProperNoun {
  prefix: string
  canBePossessive?: boolean
  isUnique?: boolean
  isBuilding?: string | false
  namesake?: Namesake
}

export const roads = {
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
      logger.info('Getting road material...')
      // Creates a shallow copy of town.materialProbability so we don't mutate the original one.
      const tempMaterials = {
        ...town.materialProbability
      }

      for (const material of keys(tempMaterials)) {
        if (tempMaterials[material].roadMaterialTypes == null) {
          delete tempMaterials[material]
          continue
        }
        if (tempMaterials[material].tier.includes(road.tier)) {
          tempMaterials[material] = {
            ...tempMaterials[material],
            probability: 5
          }
        }
      }
      if (tempMaterials[town.townMaterial]) {
        tempMaterials[town.townMaterial] = {
          ...tempMaterials[town.townMaterial],
          probability: 80
        }
      }
      return weightedRandomFetcher(town, tempMaterials, undefined, roads.material.exclusions, 'object') as MaterialType
    },
    exclusions (town: Town, arg: MaterialType) {
      return !!arg.roadMaterialTypes
    }
  },
  deleteInhabitant: (town: Town, road: Road, key: string) => {
    if (Object.keys(road.inhabitants.buildings).contains(key)) roads.deleteBuilding(town, road, lib.findInArray(town.buildings, 'key', key) as Building)
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
