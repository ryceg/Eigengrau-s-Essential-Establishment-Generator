import { Town } from '../town/_common'
import { Road } from './roads'

export function findExistingRoad (town: Town): Road | undefined {
  console.log('Searching for an existing road...')
  for (const road of Object.values(town.roads)) {
    if (road.currentOccupancy < road.capacity) {
      return road
    }
    console.log(`${road.name} is at its capacity of ${road.capacity}!`)
  }
}
