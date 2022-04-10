
import { logger } from '../logger'
import { Building } from '../buildings/_common'
import { townData } from '../town/townData'
import { Town } from '../town/_common'
import { createRoad } from './createRoad'
import { findExistingRoad } from './findExistingRoad'
import { Road, roads } from './roads'

/**
 * Adds checks for road duplication; use this one for assigning to randomly generated buildings.
 */
export function assignRoad (town: Town, building?: Building): Road {
  logger.openGroup('Assigning a road...')
  const road = getRoad(town)

  if (building) {
    roads.addBuilding(town, road, building)
  }

  town.roads[road.key] = road

  logger.info(road)
  logger.closeGroup()
  return road
}

function getRoad (town: Town): Road {
  if (lib.random(100) < townData.type[town.type].roadDuplication) {
    const tempRoad = findExistingRoad(town)

    // if it doesn't find a suitable road, make a new one.
    if (tempRoad) {
      return createRoad(town, {
        type: lib.random(roads.width.largeRoads),
        rolls: {
          width: lib.random(80, 100),
          wealth: lib.random(1, 100)
        }
      })
    }
  }

  return createRoad(town)
}
