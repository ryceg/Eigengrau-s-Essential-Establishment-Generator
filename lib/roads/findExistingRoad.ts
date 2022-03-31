import { Town } from '../town/_common'
import { Road } from './roads'

export function findExistingRoad (town: Town): Road | undefined {
  console.log('Searching for an existing road...')
  for (const key in town.roads) {
    if (town.roads[key].currentOccupancy >= town.roads[key].capacity) {
      console.log(`${town.roads[key].name} is at its capacity of ${town.roads[key].capacity}!`)
      continue
    } else if (town.roads[key].currentOccupancy < town.roads[key].capacity) {
      return town.roads[key]
    }
  }
  return undefined
}
