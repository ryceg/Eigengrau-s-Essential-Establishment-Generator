import { logger } from '../logger'
import { getBuildingTier } from '../buildings/createBuilding'
import { articles } from '../src/articles'
import { toTitleCase } from '../src/toTitleCase'
import { last, capitalizeFirstLetter, getUUID, assign } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { Town } from '../town/_common'
import { createRoadName } from './createRoadName'
import { getRoadFeatures } from './getRoadFeatures'
import { roadMaterialTypes } from './roadMaterialTypes'
import { Road, roads } from './roads'
import { roadTypes, RoadData } from './roadTypes'

export function createRoad (town: Town, opts?: Partial<Road>): Road {
  // ______ is a ${width} ${type}. It is ${material} which ${is named after | road description }.
  logger.info('Creating a road...')
  const roadPrefix = createRoadName(town)
  const type = weightedRandomFetcher(town, roadTypes, null, undefined, 'object') as RoadData
  const feature = getRoadFeatures(type)

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
    constructionMethod: roadMaterialTypes[constructionMethod].type,
    materialUsed: material.noun
  })

  const materialUsedDescriptor = getUsedMaterialDescriptor(road)

  assign(road, {
    materialDescription: lib.random(roadMaterialTypes[constructionMethod].description)
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
