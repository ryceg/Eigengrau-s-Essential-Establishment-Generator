import { createTippyFull, toTitleCase, townData } from '../'
import { getBuildingTier } from '../buildings/createBuilding'
import { MaterialType, MaterialTypes, RoadMaterialType } from '../buildings/structureData'
import { Building } from '../buildings/_common'
import { createName } from '../npc-generation/createName'
import { fetchRace } from '../npc-generation/fetchRace'
import { raceTraits } from '../npc-generation/raceTraits'
import { articles } from '../src/articles'
import { ThresholdTable } from '../src/rollFromTable'
import { assign, capitalizeFirstLetter, getUUID, keys, last } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { random } from '../src/random'
import { fetchGender } from '../src/genderData'
import { Town } from './_common'
import { Namesake } from '../npc-generation/_common'

export interface RoadData {
  name: RoadType
  /** This is distinct from the name- "you walk down the crescent" doesn't sound natural. A crescent is a type of road. */
  wordNoun: RoadType | 'cul-de-sac'
  probability: number
  width(): number
  hasTraffic?: boolean
  isDeadEnd?: boolean
  material?: string
  exclusions?(town: Town): boolean
  features?: string[]
  precedingText?(town: Town, road: Road): string
}

export interface Road {
  /** The full title of the road- "King Street" */
  name: string
  /** The prefix- "King" of "King Street" */
  prefix: string
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

interface ProperNoun {
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

export type RoadType =
  | 'street'
  | 'lane'
  | 'road'
  | 'square'
  | 'way'
  | 'crescent'
  | 'close'
  | 'wynd'
  | 'row'
  | 'dyke'
  | 'avenue'
  | 'alley'
  | 'drive'
  | 'boulevard'
  | 'plaza'
  | 'track'
  | 'trail'

export const roads = {
  /**
   * Adds checks for road duplication; use this one for assigning to randomly generated buildings.
   */
  assign: (town: Town, building?: Building): Road => {
    console.groupCollapsed('Assigning a road...')
    let road: Road
    if (random(100) < townData.type[town.type].roadDuplication) {
      console.log('Searching for an existing road...')
      for (const key in town.roads) {
        console.log(Object.values(town.roads[key].inhabitants.buildings).length)
        if (town.roads[key].currentOccupancy >= town.roads[key].capacity) {
          console.log(`${town.roads[key].name} is at its capacity of ${town.roads[key].capacity}!`)
          continue
        } else if (town.roads[key].currentOccupancy < town.roads[key].capacity) {
          road = town.roads[key]
          break
        }
      }
      // if it doesn't find a suitable road, make a new one.
      // @ts-expect-error Road might be defined if it's selected above.
      if (!road) {
        road = roads.create(town, {
          type: random(roads.width.largeRoads),
          rolls: {
            width: random(80, 100),
            wealth: random(1, 100)
          }
        })
        town.roads[road.key] = road
      }
    } else {
      road = roads.create(town)
      town.roads[road.key] = road
    }

    if (road && building) {
      road.inhabitants.buildings[building.key] = building.type
      road.currentOccupancy += building.roadSizeRequirement || Math.max(2, building.roll.size / 5)
      building.road = road.key
    }
    console.log(road)
    console.groupEnd()
    return road
  },
  /** Creates the road */
  create: (town: Town, opts?: Partial<Road>): Road => {
    // ______ is a ${width} ${type}. It is ${material} which ${is named after | road description }.
    console.log('Creating a road...')
    const roadPrefix = roads.name.create(town)
    console.log('Finding a type...')
    const type = weightedRandomFetcher(town, roads.name.type, null, undefined, 'object') as RoadData
    const feature = roads.get.features(type)

    const widthRoll = type.width()
    const [, width] = roads.width.rolls.find(([threshold]) => {
      return threshold <= widthRoll
    }) || last(roads.width.rolls)

    const road = {
      prefix: capitalizeFirstLetter(roadPrefix.prefix),
      key: getUUID(),
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
        wealth: random(1, 100)
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
    const constructionMethod = random(material.roadMaterialTypes)

    assign(road, {
      constructionMethod: roads.material.types[constructionMethod].type,
      materialUsed: material.noun
    })

    const materialUsedDescriptor = getUsedMaterialDescriptor(road)

    assign(road, {
      materialDescription: random(roads.material.types[constructionMethod].description)
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
      const race = fetchRace(town)
      const gender = fetchGender(town)
      const namesake = {
        race,
        gender,
        firstName: createName({ race, firstOrLast: 'firstName' }),
        lastName: createName({ race, firstOrLast: 'lastName' })
      }
      console.log('selected ', selected)
      let road: ProperNoun
      switch (selected) {
        case 'firstName':
          road = {
            prefix: random(1, 100) > 60 ? `${namesake.firstName}'s` : namesake.firstName,
            canBePossessive: true,
            isUnique: false,
            namesake
          }
          break
        case 'lastName':
          road = {
            prefix: random(1, 100) > 90 ? `${namesake.lastName}'s` : namesake.lastName,
            canBePossessive: true,
            isUnique: false,
            namesake
          }
          break
        default:
          road = weightedRandomFetcher(town, properNouns, undefined, undefined, 'object') as ProperNoun
      }
      assign(road, {
        roadNameType: selected
      })
      if (road.namesake && !road.namesake.reason) {
        road.namesake.reason = roads.namesakes.reason(town, road.namesake)
      }
      return road as RoadOwnership
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
          'Houses lean over into the street on both sides, limiting the amount of sun that is visible.',
          'Laundry lines are strung between windows across the road.',
          'There is a table with a pitcher of water out the front of one of the houses.',
          'A swing hangs from a lone tree.'
        ],
        probability: 5,
        wordNoun: 'lane'
      },
      road: {
        name: 'road',
        probability: 10,
        width () { return random(10, 90) },
        wordNoun: 'road',
        features: [
          'There is a large rock to the side of the road.',
          'The road has a groove along the middle designating which side people should travel on.',
          'The road has the occasional pothole.',
          'There are some potholes which litter the road.'
        ]
      },
      square: {
        name: 'square',
        width () { return random(92, 99) },
        hasTraffic: false,
        wordNoun: 'square',
        probability: 2,
        features: [
          'It looks like the square is an excellent place to meet friends, with several tables set up in the middle for the public to use.',
          'The square has a handy map board in the middle, detailing where everything is.',
          'There is a statue of someone dead and important in the middle of the square.',
          'There are the occasional street sellers hawking their goods in the square.'
        ],
        precedingText (town: Town, road: Road) {
          const text = [
            {
              function () { return `${createTippyFull(road.description, road.name)} houses` }
            },
            {
              function () { return `The former site of a building, the now clear ${createTippyFull(road.description, road.name)} is home to` }
            },
            {
              function () { return `There's a nice little square, ${createTippyFull(road.description, road.name)}, where there is` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
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
        wordNoun: 'road',
        features: [
          'A row of houses and buildings is splayed out, with enough room for a horse and cart to turn around.',
          'An arch of houses is punctuated by a single large tree in between them, with a picnic table beneath it.'
        ],
        precedingText (town: Town, road: Road) {
          const isTheRoad = random([
            `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. On it is`,
            `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}, on which is`,
            `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}, where there is`
          ])
          const text = [
            {
              function () { return `Further into the residential area ${isTheRoad}` }
            },
            {
              function () { return `At the bottom of a hill ${isTheRoad}` }
            },
            {
              function () { return `At the top of a small hill ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      close: {
        name: 'close',
        isDeadEnd: true,
        width () { return random(40, 80) },
        probability: 2,
        wordNoun: 'cul-de-sac',
        precedingText (town: Town, road: Road) {
          const isTheRoad = random([
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Just near the end of the road is`,
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Perhaps twenty paces from the end of it is`,
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Near the end is`
          ])
          const text = [
            {
              function () { return `The street ${createTippyFull(road.description, road.name)} comes to an abrupt end, terminating in` }
            },
            {
              function () { return `At the bottom of a hill ${isTheRoad}` }
            },
            {
              function () { return `At the top of a small hill ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      wynd: {
        name: 'wynd',
        width () { return random(30) },
        hasTraffic: false,
        probability: 1,
        wordNoun: 'road',
        precedingText (town: Town, road: Road) {
          const isTheRoad = random([
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Just near the end of the road is`,
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Perhaps twenty paces from the end of it is`,
              `is the ${road.wordNoun} ${createTippyFull(road.description, road.name)}. Near the end is`
          ])
          const text = [
            {
              function () { return `The road ${createTippyFull(road.description, road.name)} twists around, with many turns. On the side is` }
            },
            {
              function () { return `The road ${createTippyFull(road.description, road.name)} is quite windy indeed. Nestled in between a bend is` }
            },
            {
              function () { return `Snaking along ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      row: {
        name: 'row',
        probability: 1,
        width () { return random(0, 80) },
        wordNoun: 'road',
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `${createTippyFull(road.description, road.name)} is home to` }
            },
            {
              function () { return `Slightly further afield is ${createTippyFull(road.description, road.name)}, where there is` }
            },
            {
              function () { return `Running parallel to other roads ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      dyke: {
        name: 'dyke',
        width () { return random(0, 60) },
        features: [
          'The land on either side is rather soggy and prone to being water-logged.',
          'Weeds grow rampant along the sides of the road, fed by the water running off to the sides.'
        ],
        probability: 1,
        wordNoun: 'road'
      },
      avenue: {
        name: 'avenue',
        width () { return random(40, 80) },
        features: [
          'A line of trees dots the sides.',
          'A couple of sad looking trees dot the sides of the road.',
          'Wrought iron oil-burning street lamps illuminate the broad avenue well into the late evening hours.'],
        probability: 1,
        wordNoun: 'road',
        precedingText (town: Town, road: Road) {
          const text = [
            {
              function () { return `${createTippyFull(road.description, road.name)} is a nice looking street, which houses` }
            },
            {
              function () { return `There's a couple houses along ${createTippyFull(road.description, road.name)}, and nestled in between them is` }
            },
            {
              function () { return `There's an island in the middle of ${createTippyFull(road.description, road.name)}, where there is` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      alley: {
        name: 'alley',
        width () { return random(0, 40) },
        features: [
          'There is a pile of rotten logs to the side.',
          'Several barrels are stacked haphazardly.',
          'There are some vegetable scraps that have clearly been dumped out of a window',
          'There are some empty alcohol bottles on the ground.'
        ],
        hasTraffic: false,
        probability: 1,
        wordNoun: 'alley',
        exclusions (town: Town) { return town.population > 4000 },
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `${createTippyFull(road.description, road.name)} is a relatively shady looking alleyway, which houses` }
            },
            {
              function () { return `Running alongside two rows of buildings is ${createTippyFull(road.description, road.name)}. One of the spaces is filled by` }
            },
            {
              function () { return `There's a little alley, which ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      drive: {
        name: 'drive',
        features: [
          'There is a nice looking house at the end of the road.',
          'There is a collection of three slightly larger than average houses bundled at the end of the drive.'
        ],
        width () { return random(40, 80) },
        probability: 1,
        wordNoun: 'road',
        isDeadEnd: true,
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `${createTippyFull(road.description, road.name)} looks to be residential. There is, however, ` }
            },
            {
              function () { return `There's a couple houses along ${createTippyFull(road.description, road.name)}, and nestled in between them is` }
            },
            {
              function () { return `There's a little dead end for houses, which ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      boulevard: {
        name: 'boulevard',
        width () { return random(50, 90) },
        features: [
          'There is a median through the middle of the road.',
          'Trees are planted along the sides.'
        ],
        probability: 1,
        wordNoun: 'road',
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `Off a junction is ${createTippyFull(road.description, road.name)}, where there is` }
            },
            {
              function () { return `A side street in the ${town.type} leads to another, which in turn ${isTheRoad}` }
            },
            {
              function () { return `There's a clear space in ${town.name}, which ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      plaza: {
        name: 'plaza',
        width () { return random(50, 90) },
        probability: 1,
        wordNoun: 'road',
        features: [
          'There are some street sellers hawking their wares in the plaza.',
          'There\'s a well in the centre of the plaza.'
        ],
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `In the heart of the ${town.type} is ${createTippyFull(road.description, road.name)}, where there is` }
            },
            {
              function () { return `In the centre of the ${town.type} ${isTheRoad}` }
            },
            {
              function () { return `There's a clear space in ${town.name}, which ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      track: {
        name: 'track',
        width () { return random(0, 50) },
        probability: 1,
        material: 'dirt',
        wordNoun: 'track',
        features: [
          'It\'s obvious that this track is shared by some of the local wildlife as well.',
          'There\'s some native plants growing along the side of the track.',
          'There are some edible native fruits growing on the side of the track.',
          'It\'s a desire path, which has been trodden into submission.'
        ],
        exclusions (town: Town) { return town.population < 500 },
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `Further out of the ${town.type} is ${createTippyFull(road.description, road.name)}, where there is` }
            },
            {
              function () { return `Out of the ${town.type} proper ${isTheRoad}` }
            },
            {
              function () { return `At the top of a small hill outside of ${town.name} ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      },
      trail: {
        name: 'trail',
        width () { return random(0, 40) },
        probability: 1,
        material: 'dirt',
        wordNoun: 'trail',
        features: [
          'There are some animal droppings on the trail.',
          'There\'s a half-rotted rabbit which clearly met an untimely demise that has been kicked to the side of the trail.',
          'There is a tiny little skeleton of some small mammal buried in the grass.',
          'The weeds are thick, and in parts it is difficult to actually discern where the trail is.',
          'The weeds threaten to overthrow the trail\'s relative order.'
        ],
        exclusions (town: Town) { return town.population < 500 },
        precedingText (town: Town, road: Road) {
          const isTheRoad: string = roads.precedingText.isTheRoad(town, road)
          const text = [
            {
              function () { return `Further out of the ${town.type} is ${createTippyFull(road.description, road.name)}, where there is` }
            },
            {
              function () { return `Out of the ${town.type} proper ${isTheRoad}` }
            },
            {
              function () { return `At the top of a small hill outside of ${town.name} ${isTheRoad}` }
            }
          ]
          const result = weightedRandomFetcher(town, text, road, undefined, 'function')
          return result
        }
      }
    } as Record<RoadType, RoadData>
  },
  get: {
    features (type: RoadData): string {
      const roadType = roads.name.type[type.name]
      if (roadType.features && random(100) > 50) {
        return random(roadType.features)
      }
      return random(roads.features)
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
    'A crude drawing of an animal carved into a brick wall, affectionately labeled “R.E. Was here.”',
    'A tree has a little heart carved into it, with the name Claire inside.',
    'One of the houses on the side leans concerningly far over the road.'
  ],
  namesakes: {
    reason (town: Town, namesake: Namesake): string {
      const fullName = `${namesake.firstName} ${namesake.lastName}`
      const race = namesake.race
      const namedAfter = random([
        'It was named after',
        'It has been named after',
        'Its name comes from',
        'The name comes from',
        "The road's name comes from",
        'The road was named after'
      ])
      const raceOutput = articles.output(race)
      const raceAdjectiveOutput = articles.output(raceTraits[race].raceWords.raceAdjective)
      return random([
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
          function () { return `The ${road.wordNoun} ${createTippyFull(road.description, road.name)} comes to an abrupt end, terminating in` }
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
          function () { return `On ${createTippyFull(road.description, road.name)} is` }
        },
        {
          function () { return `Along ${createTippyFull(road.description, road.name)} is` }
        },
        {
          function () { return `Over on ${createTippyFull(road.description, road.name)} is` }
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
      return `${random(pre)} ${createTippyFull(road.description, road.name)}${random(after)} `
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
  }
}

const properNouns: Record<string, ProperNoun & { probability?: number }> = {
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
    isUnique: false
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
