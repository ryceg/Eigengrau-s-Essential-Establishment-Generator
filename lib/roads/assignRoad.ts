
import { Building } from '../buildings/_common'
import { townData } from '../town/townData'
import { Town } from '../town/_common'
import { findExistingRoad } from './findExistingRoad'
import { Road, roads } from './roads'

/**
   * Adds checks for road duplication; use this one for assigning to randomly generated buildings.
   */
export function assignRoad (town: Town, building?: Building): Road {
  console.groupCollapsed('Assigning a road...')
  let road: Road
  if (lib.random(100) < townData.type[town.type].roadDuplication) {
    const tempRoad = findExistingRoad(town)
    if (tempRoad) road = tempRoad
    // if it doesn't find a suitable road, make a new one.
    // @ts-expect-error Road might be defined if it's selected above.
    if (!road) {
      road = roads.create(town, {
        type: lib.random(roads.width.largeRoads),
        rolls: {
          width: lib.random(80, 100),
          wealth: lib.random(1, 100)
        }
      })
      town.roads[road.key] = road
    }
  } else {
    road = roads.create(town)
    town.roads[road.key] = road
  }

  if (road && building) {
    roads.addBuilding(town, road, building)
  }
  console.log(road)
  console.groupEnd()
  return road
}
